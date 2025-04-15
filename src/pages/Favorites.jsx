// import React, { useState } from 'react';
// import { Box, Container, Typography, List, ListItem, ListItemText, IconButton, Divider } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { useWeather } from '../contexts/WeatherContext';

// const Favorites = () => {
//   const { favorites, removeFavorite, fetchWeather } = useWeather();
//   const [selected, setSelected] = useState(null);

//   const handleSelect = (fav) => {
//     setSelected(fav.id);
//     fetchWeather({ id: fav.id });
//   };

//   return (
//     <Container maxWidth="md">
//       <Box sx={{ my: 4 }}>
//         <Typography variant="h4" gutterBottom>
//           Favorite Locations
//         </Typography>
        
//         {favorites.length === 0 ? (
//           <Typography variant="body1">No favorite locations saved yet.</Typography>
//         ) : (
//           <List>
//             {favorites.map((fav) => (
//               <React.Fragment key={fav.id}>
//                 <ListItem
//                   secondaryAction={
//                     <IconButton edge="end" onClick={() => removeFavorite(fav.id)}>
//                       <DeleteIcon />
//                     </IconButton>
//                   }
//                   selected={selected === fav.id}
//                   onClick={() => handleSelect(fav)}
//                   sx={{ cursor: 'pointer' }}
//                 >
//                   <ListItemText
//                     primary={`${fav.name}, ${fav.sys?.country}`}
//                     secondary={`Lat: ${fav.coord?.lat}, Lon: ${fav.coord?.lon}`}
//                   />
//                 </ListItem>
//                 <Divider />
//               </React.Fragment>
//             ))}
//           </List>
//         )}
//       </Box>
//     </Container>
//   );
// };

// export default Favorites;
// import React from 'react';
// import { 
//   Box, 
//   Container, 
//   Typography, 
//   List, 
//   ListItem, 
//   ListItemText, 
//   IconButton, 
//   Divider,
//   Avatar,
//   Chip
// } from '@mui/material';
// import {
//   Delete as DeleteIcon,
//   LocationOn as LocationIcon,
//   WbSunny as SunnyIcon,
//   Cloud as CloudIcon,
//   AcUnit as SnowIcon,
//   Thunderstorm as ThunderIcon,
//   Water as RainIcon
// } from '@mui/icons-material';
// import { useWeather } from '../contexts/WeatherContext';
// import { useTheme } from '@mui/material/styles';

// const getWeatherIcon = (weather) => {
//   switch (weather.toLowerCase()) {
//     case 'clear':
//       return <SunnyIcon />;
//     case 'clouds':
//       return <CloudIcon />;
//     case 'rain':
//       return <RainIcon />;
//     case 'snow':
//       return <SnowIcon />;
//     case 'thunderstorm':
//       return <ThunderIcon />;
//     default:
//       return <SunnyIcon />;
//   }
// };

// const Favorites = () => {
//   const { favorites, removeFavorite, fetchWeather, unit } = useWeather();
//   const theme = useTheme();

//   const handleFavoriteClick = (fav) => {
//     fetchWeather({ id: fav.id });
//   };

//   return (
//     <Container maxWidth="md">
//       <Box sx={{ my: 4 }}>
//         <Typography variant="h4" gutterBottom>
//           Favorite Locations
//         </Typography>
        
//         {favorites.length === 0 ? (
//           <Typography variant="body1" sx={{ textAlign: 'center', mt: 4 }}>
//             No favorite locations saved yet. Click the ♡ icon on weather cards to add locations.
//           </Typography>
//         ) : (
//           <List sx={{ width: '100%' }}>
//             {favorites.map((fav) => (
//               <React.Fragment key={fav.id}>
//                 <ListItem
//                   secondaryAction={
//                     <IconButton 
//                       edge="end" 
//                       onClick={() => removeFavorite(fav.id)}
//                       color="error"
//                     >
//                       <DeleteIcon />
//                     </IconButton>
//                   }
//                   onClick={() => handleFavoriteClick(fav)}
//                   sx={{ 
//                     cursor: 'pointer',
//                     '&:hover': {
//                       backgroundColor: theme.palette.action.hover
//                     }
//                   }}
//                 >
//                   <Avatar sx={{ bgcolor: theme.palette.primary.main, mr: 2 }}>
//                     {getWeatherIcon(fav.weather)}
//                   </Avatar>
//                   <ListItemText
//                     primary={`${fav.name}, ${fav.country}`}
//                     secondary={
//                       <>
//                         <Box component="span" sx={{ display: 'block' }}>
//                           <Chip 
//                             icon={<LocationIcon />}
//                             label={`Lat: ${fav.coord?.lat.toFixed(2)}, Lon: ${fav.coord?.lon.toFixed(2)}`}
//                             size="small"
//                             sx={{ mr: 1 }}
//                           />
//                         </Box>
//                         <Box component="span" sx={{ display: 'block', mt: 1 }}>
//                           <Chip 
//                             label={`${Math.round(fav.temp)}${unit === 'metric' ? '°C' : '°F'}`}
//                             color="primary"
//                             size="small"
//                           />
//                         </Box>
//                       </>
//                     }
//                   />
//                 </ListItem>
//                 <Divider />
//               </React.Fragment>
//             ))}
//           </List>
//         )}
//       </Box>
//     </Container>
//   );
// };

// export default Favorites;
import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  List, 
  ListItem, 
  ListItemText, 
  IconButton, 
  Divider,
  Avatar,
  Chip
} from '@mui/material';
import {
  Delete as DeleteIcon,
  LocationOn as LocationIcon,
  WbSunny as SunnyIcon,
  Cloud as CloudIcon,
  AcUnit as SnowIcon,
  Thunderstorm as ThunderIcon,
  Water as RainIcon,
  Help as HelpIcon
} from '@mui/icons-material';
import { useWeather } from '../contexts/WeatherContext';
import { useTheme } from '@mui/material/styles';

const getWeatherIcon = (weather) => {
  if (!weather) return <HelpIcon />;
  
  switch (weather.toLowerCase()) {
    case 'clear': return <SunnyIcon />;
    case 'clouds': return <CloudIcon />;
    case 'rain': return <RainIcon />;
    case 'snow': return <SnowIcon />;
    case 'thunderstorm': return <ThunderIcon />;
    default: return <HelpIcon />;
  }
};

const Favorites = () => {
  const { favorites, removeFavorite, fetchWeather, unit } = useWeather();
  const theme = useTheme();

  const handleFavoriteClick = (fav) => {
    if (fav?.id) {
      fetchWeather({ id: fav.id });
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Favorite Locations
        </Typography>
        
        {favorites.length === 0 ? (
          <Typography variant="body1" sx={{ textAlign: 'center', mt: 4 }}>
            No favorite locations saved yet. Click the ♡ icon on weather cards to add locations.
          </Typography>
        ) : (
          <List sx={{ width: '100%' }}>
            {favorites.map((fav) => (
              <React.Fragment key={fav.id || Math.random()}>
                <ListItem
                  secondaryAction={
                    <IconButton 
                      edge="end" 
                      onClick={() => removeFavorite(fav.id)}
                      color="error"
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                  onClick={() => handleFavoriteClick(fav)}
                  sx={{ 
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: theme.palette.action.hover
                    }
                  }}
                >
                  <Avatar sx={{ 
                    bgcolor: theme.palette.primary.main, 
                    mr: 2,
                    color: theme.palette.getContrastText(theme.palette.primary.main)
                  }}>
                    {getWeatherIcon(fav.weather)}
                  </Avatar>
                  <ListItemText
                    primary={`${fav.name || 'Unknown'}, ${fav.country || ''}`}
                    secondary={
                      <>
                        <Box component="span" sx={{ display: 'block' }}>
                          <Chip 
                            icon={<LocationIcon />}
                            label={`Lat: ${fav.coord?.lat?.toFixed(2) || '0.00'}, Lon: ${fav.coord?.lon?.toFixed(2) || '0.00'}`}
                            size="small"
                            sx={{ mr: 1 }}
                          />
                        </Box>
                        <Box component="span" sx={{ display: 'block', mt: 1 }}>
                          <Chip 
                            label={`${Math.round(fav.temp || 0)}${unit === 'metric' ? '°C' : '°F'}`}
                            color="primary"
                            size="small"
                          />
                        </Box>
                      </>
                    }
                  />
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        )}
      </Box>
    </Container>
  );
};

export default Favorites;