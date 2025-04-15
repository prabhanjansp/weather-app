import React from 'react';
import { Alert, AlertTitle, Button } from '@mui/material';
import { useWeather } from '../contexts/WeatherContext';

const ErrorDisplay = () => {
  const { error, fetchWeather, location } = useWeather();

  if (!error) return null;

  const handleRetry = () => {
    if (location) {
      fetchWeather(location);
    }
  };

  return (
    <Alert severity="error" sx={{ mb: 2 }}>
      <AlertTitle>Error</AlertTitle>
      {error}
      {location && (
        <Button color="inherit" size="small" onClick={handleRetry} sx={{ ml: 2 }}>
          Retry
        </Button>
      )}
    </Alert>
  );
};

export default ErrorDisplay;