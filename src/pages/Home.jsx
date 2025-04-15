import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import WeatherCard from '../components/WeatherCard';
import SearchBar from '../components/SearchBar';
import ErrorDisplay from '../components/ErrorDisplay';
import LoadingIndicator from '../components/LoadingIndicator';
import UnitToggle from '../components/UnitToggle';
import ThemeToggle from '../components/ThemeToggle';
import { useWeather } from '../contexts/WeatherContext';

const Home = () => {
  const { loading, error } = useWeather();

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Grid container justifyContent="space-between" alignItems="center" mb={2}>
          <Grid item>
            <UnitToggle />
          </Grid>
          <Grid item>
            <ThemeToggle />
          </Grid>
        </Grid>
        
        <SearchBar />
        {error && <ErrorDisplay />}
        {loading ? <LoadingIndicator /> : <WeatherCard />}
      </Box>
    </Container>
  );
};

export default Home;