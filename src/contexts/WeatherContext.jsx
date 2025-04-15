import { createContext, useContext, useState, useEffect } from 'react';
import { getCurrentWeather, getForecast } from '../api/weatherAPI';
import useLocalStorage from '../hook/useLocalStorage';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState(null);
  const [unit, setUnit] = useState('metric');
  const [favorites, setFavorites] = useLocalStorage('weatherFavorites', []);

  const fetchWeather = async (loc, units = unit) => {
    setLoading(true);
    setError(null);
    try {
      const [current, forecast] = await Promise.all([
        getCurrentWeather(loc, units),
        getForecast(loc, units)
      ]);
        // Validate forecast data structure
    if (!forecast?.list || !Array.isArray(forecast.list)) {
      throw new Error('Invalid forecast data received');
    }
      setWeatherData(current);
      setForecastData(forecast);
      setLocation(loc);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const addFavorite = (location) => {
    if (!location || !location.id) return;
    
    const favoriteData = {
      id: location.id,
      name: location.name || 'Unknown Location',
      country: location.sys?.country || '',
      coord: location.coord || { lat: 0, lon: 0 },
      temp: location.main?.temp || 0,
      weather: location.weather?.[0]?.main || 'Unknown'
    };
  
    if (!favorites.some(fav => fav.id === favoriteData.id)) {
      setFavorites(prev => [...prev, favoriteData]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites(prev => prev.filter(fav => fav.id !== id));
  };

  const changeUnit = (newUnit) => {
    setUnit(newUnit);
    if (location) {
      fetchWeather(location, newUnit);
    }
  };

  useEffect(() => {
    // Try geolocation first
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const loc = {
            lat: position.coords.latitude,
            lon: position.coords.longitude
          };
          await fetchWeather(loc);
        },
        () => {
          // Default to London if geolocation fails
          fetchWeather({ q: 'London' });
        }
      );
    } else {
      // Default to London if geolocation not supported
      fetchWeather({ q: 'London' });
    }
  }, []);

  return (
    <WeatherContext.Provider value={{
      weatherData,
      forecastData,
      loading,
      error,
      location,
      unit,
      favorites,
      fetchWeather,
      addFavorite,
      removeFavorite,
      changeUnit
    }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);