import React from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';

const LoadingIndicator = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" p={4}>
      <CircularProgress size={60} />
      <Typography variant="h6" mt={2}>Loading weather data...</Typography>
    </Box>
  );
};

export default LoadingIndicator;