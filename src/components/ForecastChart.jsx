import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from '@mui/x-charts';
import { useWeather } from '../contexts/WeatherContext';

const ForecastChart = () => {
  const { forecastData, unit } = useWeather();

  if (!forecastData) return null;

  // Process forecast data for the chart
  const chartData = forecastData.list
    .filter((_, index) => index % 8 === 0) // Daily forecast
    .map(item => ({
      date: new Date(item.dt * 1000).toLocaleDateString(undefined, { weekday: 'short' }),
      temp: Math.round(item.main.temp),
      min: Math.round(item.main.temp_min),
      max: Math.round(item.main.temp_max),
    }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis label={{ value: `Temperature (${unit === 'metric' ? '°C' : '°F'})`, angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Line type="monotone" dataKey="temp" stroke="#8884d8" activeDot={{ r: 8 }} name="Temperature" />
        <Line type="monotone" dataKey="max" stroke="#82ca9d" name="Max" />
        <Line type="monotone" dataKey="min" stroke="#ffc658" name="Min" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ForecastChart;