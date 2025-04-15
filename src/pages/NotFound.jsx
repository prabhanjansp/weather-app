import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h1" gutterBottom>
          404
        </Typography>
        <Typography variant="h4" gutterBottom>
          Page Not Found
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          The page you are looking for doesn't exist or has been moved.
        </Typography>
        <Button variant="contained" component={Link} to="/">
          Go to Home
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;