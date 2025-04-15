import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import UnitToggle from '../components/UnitToggle';
import ThemeToggle from '../components/ThemeToggle';

const Settings = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Settings
        </Typography>
        
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Units
          </Typography>
          <UnitToggle />
        </Box>
        
        <Box>
          <Typography variant="h6" gutterBottom>
            Appearance
          </Typography>
          <ThemeToggle />
        </Box>
      </Box>
    </Container>
  );
};

export default Settings;