
import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  Avatar, 
  IconButton,
  Tooltip
} from '@mui/material';
import { 
  Favorite as FavoriteIcon, 
  FavoriteBorder as FavoriteBorderIcon,
  Error as ErrorIcon
} from '@mui/icons-material';
import { useWeather } from '../contexts/WeatherContext';

const WeatherCard = () => {
  const { weatherData, unit, favorites, addFavorite, removeFavorite } = useWeather();

  if (!weatherData) {
    return (
      <Card sx={{ minWidth: 275, mb: 2 }}>
        <CardContent>
          <Box display="flex" alignItems="center">
            <ErrorIcon color="error" sx={{ mr: 1 }} />
            <Typography>No weather data available</Typography>
          </Box>
        </CardContent>
      </Card>
    );
  }

  const tempUnit = unit === 'metric' ? '°C' : '°F';
  const windUnit = unit === 'metric' ? 'm/s' : 'mph';
  const isFavorite = favorites.some(fav => fav.id === weatherData.id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFavorite(weatherData.id);
    } else {
      addFavorite(weatherData);
    }
  };

  return (
    <Card sx={{ minWidth: 275, mb: 2 }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h4" component="div">
            {weatherData.name || 'Unknown Location'}, {weatherData.sys?.country || ''}
          </Typography>
          <Box>
            <Typography color="text.secondary">
              {weatherData.dt ? new Date(weatherData.dt * 1000).toLocaleDateString() : 'N/A'}
            </Typography>
            <Tooltip title={isFavorite ? "Remove from favorites" : "Add to favorites"}>
              <IconButton 
                onClick={handleFavoriteClick} 
                color={isFavorite ? 'error' : 'default'}
              >
                {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
        
        <Box display="flex" alignItems="center" mt={2}>
          <Avatar
            src={weatherData.weather?.[0]?.icon ? 
              `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png` : 
              undefined
            }
            alt={weatherData.weather?.[0]?.description || 'Weather icon'}
            sx={{ width: 80, height: 80 }}
          >
            {!weatherData.weather?.[0]?.icon && <ErrorIcon />}
          </Avatar>
          <Box ml={2}>
            <Typography variant="h2">
              {Math.round(weatherData.main?.temp || 0)}{tempUnit}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {weatherData.weather?.[0]?.description || 'Weather condition not available'}
            </Typography>
          </Box>
        </Box>
        
        <Box display="flex" justifyContent="space-between" mt={3}>
          <Typography>Humidity: {weatherData.main?.humidity || 'N/A'}%</Typography>
          <Typography>Wind: {weatherData.wind?.speed || 'N/A'} {windUnit}</Typography>
          <Typography>Pressure: {weatherData.main?.pressure || 'N/A'} hPa</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;