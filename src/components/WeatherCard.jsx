
// import React from 'react';
// import { 
//   Card, 
//   CardContent, 
//   Typography, 
//   Box, 
//   Avatar, 
//   IconButton,
//   Tooltip,
//   Paper,
//   Grid,
//   useTheme // Added this hook
// } from '@mui/material';
// import { 
//   Favorite as FavoriteIcon, 
//   FavoriteBorder as FavoriteBorderIcon,
//   Error as ErrorIcon
// } from '@mui/icons-material';
// import { useWeather } from '../contexts/WeatherContext';

// const WeatherCard = () => {
//   const { weatherData, unit, favorites, addFavorite, removeFavorite } = useWeather();
//   const theme = useTheme(); // Get current theme

//   if (!weatherData) {
//     return (
//       <Card sx={{
//         minWidth: 275,
//         mb: 3,
//         borderRadius: '16px',
//         boxShadow: 6,
//         backgroundColor: theme.palette.background.paper, // Theme-aware background
//         padding: 3
//       }}>
//         <CardContent>
//           <Box display="flex" alignItems="center">
//             <ErrorIcon color="error" sx={{ mr: 1 }} />
//             <Typography variant="body1" color="text.primary" fontWeight={600}> {/* Changed to text.primary */}
//               No weather data available
//             </Typography>
//           </Box>
//         </CardContent>
//       </Card>
//     );
//   }

//   const tempUnit = unit === 'metric' ? '°C' : '°F';
//   const windUnit = unit === 'metric' ? 'm/s' : 'mph';
//   const isFavorite = favorites.some(fav => fav.id === weatherData.id);

//   const handleFavoriteClick = () => {
//     if (isFavorite) {
//       removeFavorite(weatherData.id);
//     } else {
//       addFavorite(weatherData);
//     }
//   };

//   return (
//     <Card sx={{
//       minWidth: 275,
//       mb: 3,
//       borderRadius: '16px',
//       boxShadow: 6,
//       backgroundColor: theme.palette.background.paper, // Theme-aware background
//       padding: 3,
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'space-between',
//       height: '100%',
//     }}>
//       <CardContent>
//         <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
//           <Typography variant="h5" component="div" fontWeight="bold" color="text.primary"> {/* Added color */}
//             {weatherData.name || 'Unknown Location'}, {weatherData.sys?.country || ''}
//           </Typography>
//           <Box>
//             <Typography color="text.secondary" fontSize={12}>
//               {weatherData.dt ? new Date(weatherData.dt * 1000).toLocaleDateString() : 'N/A'}
//             </Typography>
//             <Tooltip title={isFavorite ? "Remove from favorites" : "Add to favorites"}>
//               <IconButton 
//                 onClick={handleFavoriteClick} 
//                 color={isFavorite ? 'error' : 'default'}
//                 sx={{ ml: 2 }}
//               >
//                 {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
//               </IconButton>
//             </Tooltip>
//           </Box>
//         </Box>

//         <Grid container spacing={3} alignItems="center" justifyContent="center">
//           <Grid item xs={12} sm={6} display="flex" justifyContent="center">
//             <Avatar
//               src={weatherData.weather?.[0]?.icon ? 
//                 `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png` : 
//                 undefined
//               }
//               alt={weatherData.weather?.[0]?.description || 'Weather icon'}
//               sx={{ width: 120, height: 120 }}
//             >
//               {!weatherData.weather?.[0]?.icon && <ErrorIcon />}
//             </Avatar>
//           </Grid>
//           <Grid item xs={12} sm={6} display="flex" flexDirection="column" alignItems="center">
//             <Typography variant="h3" fontWeight="bold" textAlign="center" color="text.primary"> {/* Added color */}
//               {Math.round(weatherData.main?.temp || 0)}{tempUnit}
//             </Typography>
//             <Typography variant="body1" color="text.secondary" textAlign="center">
//               {weatherData.weather?.[0]?.description || 'Weather condition not available'}
//             </Typography>
//           </Grid>
//         </Grid>

//         <Box mt={3}>
//           <Paper sx={{
//             padding: 3,
//             borderRadius: 2,
//             backgroundColor: theme.palette.mode === 'dark' ? 
//               theme.palette.grey[800] : '#fafafa', // Adaptive background
//             boxShadow: 2
//           }}>
//             <Grid container spacing={3}>
//               <Grid item xs={12} sm={4}>
//                 <Typography variant="body2" color="text.primary" fontWeight="bold">
//                   Humidity: {weatherData.main?.humidity || 'N/A'}%
//                 </Typography>
//               </Grid>
//               <Grid item xs={12} sm={4}>
//                 <Typography variant="body2" color="text.primary" fontWeight="bold">
//                   Wind: {weatherData.wind?.speed || 'N/A'} {windUnit}
//                 </Typography>
//               </Grid>
//               <Grid item xs={12} sm={4}>
//                 <Typography variant="body2" color="text.primary" fontWeight="bold">
//                   Pressure: {weatherData.main?.pressure || 'N/A'} hPa
//                 </Typography>
//               </Grid>
//             </Grid>
//           </Paper>
//         </Box>
//       </CardContent>
//     </Card>
//   );
// };

// export default WeatherCard;
import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  Avatar, 
  IconButton,
  Tooltip,
  Paper,
  Grid,
  useTheme,
  keyframes, // Added for custom animations
  styled // Added for styled components
} from '@mui/material';
import { 
  Favorite as FavoriteIcon, 
  FavoriteBorder as FavoriteBorderIcon,
  Error as ErrorIcon
} from '@mui/icons-material';
import { useWeather } from '../contexts/WeatherContext';

// Pulse animation for loading state
const pulse = keyframes`
  0% { opacity: 0.6; }
  50% { opacity: 1; }
  100% { opacity: 0.6; }
`;

// Floating animation for the card
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0px); }
`;

// Styled components with animations
const AnimatedCard = styled(Card)(({ theme }) => ({
  minWidth: 275,
  borderRadius: '16px',
  boxShadow: theme.shadows[6],
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: theme.shadows[12]
  },
  animation: `${float} 4s ease-in-out infinite`
}));

const WeatherCard = () => {
  const { weatherData, unit, favorites, addFavorite, removeFavorite } = useWeather();
  const theme = useTheme();

  if (!weatherData) {
    return (
      <AnimatedCard>
        <CardContent>
          <Box 
            display="flex" 
            alignItems="center"
            sx={{
              animation: `${pulse} 1.5s ease-in-out infinite`
            }}
          >
            <ErrorIcon color="error" sx={{ mr: 1 }} />
            <Typography variant="body1" color="text.primary" fontWeight={600}>
              No weather data available
            </Typography>
          </Box>
        </CardContent>
      </AnimatedCard>
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

  // Temperature change animation
  const TempChange = styled('span')({
    display: 'inline-block',
    transition: 'transform 0.5s ease, color 0.3s ease',
    '&:hover': {
      transform: 'scale(1.2)',
      color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark
    }
  });

  return (
    <AnimatedCard>
      <CardContent>
        {/* Header with fade-in animation */}
        <Box 
          display="flex" 
          justifyContent="space-between" 
          alignItems="center" 
          mb={2}
          sx={{
            animation: 'fadeIn 0.5s ease-in',
            '@keyframes fadeIn': {
              '0%': { opacity: 0, transform: 'translateY(-20px)' },
              '100%': { opacity: 1, transform: 'translateY(0)' }
            }
          }}
        >
          <Typography variant="h5" component="div" fontWeight="bold" color="text.primary">
            {weatherData.name || 'Unknown Location'}, {weatherData.sys?.country || ''}
          </Typography>
          <Box>
            <Typography color="text.secondary" fontSize={12}>
              {weatherData.dt ? new Date(weatherData.dt * 1000).toLocaleDateString() : 'N/A'}
            </Typography>
            <Tooltip 
              title={isFavorite ? "Remove from favorites" : "Add to favorites"}
              TransitionProps={{ timeout: 600 }}
            >
              <IconButton 
                onClick={handleFavoriteClick} 
                color={isFavorite ? 'error' : 'default'}
                sx={{ 
                  ml: 2,
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'rotate(15deg) scale(1.2)'
                  }
                }}
              >
                {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </IconButton>
            </Tooltip>
          </Box>
        </Box>

        {/* Main content with staggered animations */}
        <Grid 
          container 
          spacing={3} 
          alignItems="center" 
          justifyContent="center"
          sx={{
            '& > *': {
              animation: 'slideUp 0.5s ease-out forwards',
              opacity: 0,
              '@keyframes slideUp': {
                '0%': { transform: 'translateY(20px)', opacity: 0 },
                '100%': { transform: 'translateY(0)', opacity: 1 }
              }
            },
            '& > :nth-of-type(1)': { animationDelay: '0.1s' },
            '& > :nth-of-type(2)': { animationDelay: '0.3s' }
          }}
        >
          <Grid item xs={12} sm={6} display="flex" justifyContent="center">
            <Avatar
              src={weatherData.weather?.[0]?.icon ? 
                `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png` : 
                undefined
              }
              alt={weatherData.weather?.[0]?.description || 'Weather icon'}
              sx={{ 
                width: 120, 
                height: 120,
                transition: 'transform 0.5s',
                '&:hover': {
                  transform: 'scale(1.1) rotate(10deg)'
                }
              }}
            >
              {!weatherData.weather?.[0]?.icon && <ErrorIcon />}
            </Avatar>
          </Grid>
          <Grid item xs={12} sm={6} display="flex" flexDirection="column" alignItems="center">
            <TempChange>
              <Typography variant="h3" fontWeight="bold" textAlign="center" color="text.primary">
                {Math.round(weatherData.main?.temp || 0)}{tempUnit}
              </Typography>
            </TempChange>
            <Typography 
              variant="body1" 
              color="text.secondary" 
              textAlign="center"
              sx={{
                transition: 'all 0.3s',
                '&:hover': {
                  color: theme.palette.text.primary,
                  transform: 'scale(1.05)'
                }
              }}
            >
              {weatherData.weather?.[0]?.description || 'Weather condition not available'}
            </Typography>
          </Grid>
        </Grid>

        {/* Stats with ripple animation */}
        <Box mt={3}>
          <Paper 
            sx={{
              padding: 3,
              borderRadius: 2,
              backgroundColor: theme.palette.mode === 'dark' ? 
                theme.palette.grey[800] : '#fafafa',
              boxShadow: theme.shadows[2],
              position: 'relative',
              overflow: 'hidden',
              '&:before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `linear-gradient(45deg, ${theme.palette.primary.main} 0%, transparent 100%)`,
                opacity: 0,
                transition: 'opacity 0.5s'
              },
              '&:hover:before': {
                opacity: 0.1
              }
            }}
          >
            <Grid container spacing={3}>
              {[
                { label: 'Humidity', value: `${weatherData.main?.humidity || 'N/A'}%` },
                { label: 'Wind', value: `${weatherData.wind?.speed || 'N/A'} ${windUnit}` },
                { label: 'Pressure', value: `${weatherData.main?.pressure || 'N/A'} hPa` }
              ].map((stat, index) => (
                <Grid 
                  item 
                  xs={12} 
                  sm={4} 
                  key={stat.label}
                  sx={{
                    animation: `fadeIn 0.5s ease-in forwards ${index * 0.2 + 0.5}s`,
                    opacity: 0
                  }}
                >
                  <Typography 
                    variant="body2" 
                    color="text.primary" 
                    fontWeight="bold"
                    sx={{
                      position: 'relative',
                      '&:after': {
                        content: '""',
                        position: 'absolute',
                        bottom: -4,
                        left: 0,
                        width: '0%',
                        height: 2,
                        background: theme.palette.primary.main,
                        transition: 'width 0.3s'
                      },
                      '&:hover:after': {
                        width: '100%'
                      }
                    }}
                  >
                    {stat.label}: {stat.value}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Box>
      </CardContent>
    </AnimatedCard>
  );
};

export default WeatherCard;
