import React from 'react';
import { ToggleButtonGroup, ToggleButton, Typography,Box } from '@mui/material';
import { useWeather } from '../contexts/WeatherContext';

const UnitToggle = () => {
  const { unit, changeUnit } = useWeather();

  return (
    <Box display="flex" alignItems="center">
      <Typography variant="body1" sx={{ mr: 1 }}>Units:</Typography>
      <ToggleButtonGroup
        value={unit}
        exclusive
        onChange={(_, newUnit) => newUnit && changeUnit(newUnit)}
        aria-label="temperature units"
      >
        <ToggleButton value="metric" aria-label="celsius">
          °C
        </ToggleButton>
        <ToggleButton value="imperial" aria-label="fahrenheit">
          °F
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default UnitToggle;