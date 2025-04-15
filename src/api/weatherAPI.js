import axios from 'axios';
import { getCachedData, setCachedData } from './cache';

const API_KEY = import.meta.env.VITE_APP_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const getCurrentWeather = async (location, units = 'metric') => {
  const params = {
    ...location,
    units,
    appid: API_KEY
  };

  const response = await axios.get(`${BASE_URL}/weather`, { params });
  return response.data;
};

const getForecast = async (location, units = 'metric') => {
    const params = {
      ...location,
      units,
      appid: API_KEY,
      cnt: 40 // 5 days forecast with 3-hour intervals
    };
  
    // Check cache first
    const cacheKey = `forecast-${JSON.stringify(params)}`;
    const cachedData = getCachedData(cacheKey);
    if (cachedData) return cachedData;
  
    const response = await axios.get(`${BASE_URL}/forecast`, { params });
    
    // Validate response structure
    if (!response.data?.list || !Array.isArray(response.data.list)) {
      throw new Error('Invalid forecast data structure');
    }
  
    // Cache the response
    setCachedData(cacheKey, response.data);
    return response.data;
  };

export { getCurrentWeather, getForecast };