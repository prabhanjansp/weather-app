// // // // import React from "react";
// // // // import { Box, Container, Typography } from "@mui/material";
// // // // import ForecastChart from "../components/ForecastChart";
// // // // import LoadingIndicator from "../components/LoadingIndicator";
// // // // import ErrorDisplay from "../components/ErrorDisplay";
// // // // import { useWeather } from "../contexts/WeatherContext";

// // // // const Forecast = () => {
// // // //   const { forecastData, loading, error } = useWeather();

// // // //   return (
// // // //     <Container maxWidth="md">
// // // //       <Box sx={{ my: 4 }}>
// // // //         <Typography variant="h4" gutterBottom>
// // // //           5-Day Forecast
// // // //         </Typography>
// // // //         {error && <ErrorDisplay />}
// // // //         {loading ? <LoadingIndicator /> : <ForecastChart />}
// // // //       </Box>
// // // //     </Container>
// // // //   );
// // // // };

// // // // export default Forecast;
// // // import React from 'react';
// // // import { 
// // //   Box, 
// // //   Container, 
// // //   Typography,
// // //   CircularProgress,
// // //   Alert
// // // } from '@mui/material';
// // // import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from '@mui/x-charts';
// // // import { useWeather } from '../contexts/WeatherContext';

// // // const Forecast = () => {
// // //   const { forecastData, loading, error, unit } = useWeather();

// // //   // Process forecast data for the chart
// // //   const processForecastData = () => {
// // //     if (!forecastData?.list) return [];

// // //     // Group by day
// // //     const dailyData = {};
// // //     forecastData.list.forEach(item => {
// // //       const date = new Date(item.dt * 1000);
// // //       const dayKey = date.toLocaleDateString(undefined, { weekday: 'short' });
      
// // //       if (!dailyData[dayKey]) {
// // //         dailyData[dayKey] = {
// // //           date: dayKey,
// // //           temps: [],
// // //           min: Infinity,
// // //           max: -Infinity
// // //         };
// // //       }

// // //       const temp = item.main.temp;
// // //       dailyData[dayKey].temps.push(temp);
// // //       dailyData[dayKey].min = Math.min(dailyData[dayKey].min, temp);
// // //       dailyData[dayKey].max = Math.max(dailyData[dayKey].max, temp);
// // //     });

// // //     // Calculate averages and format for chart
// // //     return Object.values(dailyData).map(day => ({
// // //       date: day.date,
// // //       temp: Math.round(day.temps.reduce((a, b) => a + b, 0) / day.temps.length),
// // //       min: Math.round(day.min),
// // //       max: Math.round(day.max)
// // //     }));
// // //   };

// // //   const chartData = processForecastData();

// // //   return (
// // //     <Container maxWidth="md">
// // //       <Box sx={{ my: 4 }}>
// // //         <Typography variant="h4" gutterBottom>
// // //           5-Day Forecast
// // //         </Typography>

// // //         {error && (
// // //           <Alert severity="error" sx={{ mb: 2 }}>
// // //             {error}
// // //           </Alert>
// // //         )}

// // //         {loading ? (
// // //           <Box display="flex" justifyContent="center" alignItems="center" height={300}>
// // //             <CircularProgress size={60} />
// // //           </Box>
// // //         ) : chartData.length > 0 ? (
// // //           <>
// // //             <Typography variant="subtitle1" gutterBottom>
// // //               {forecastData?.city?.name}, {forecastData?.city?.country}
// // //             </Typography>
// // //             <ResponsiveContainer width="100%" height={400}>
// // //               <LineChart
// // //                 data={chartData}
// // //                 margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
// // //               >
// // //                 <CartesianGrid strokeDasharray="3 3" />
// // //                 <XAxis dataKey="date" />
// // //                 <YAxis 
// // //                   label={{ 
// // //                     value: `Temperature (${unit === 'metric' ? '°C' : '°F'})`, 
// // //                     angle: -90, 
// // //                     position: 'insideLeft' 
// // //                   }} 
// // //                 />
// // //                 <Tooltip 
// // //                   formatter={(value, name) => {
// // //                     if (name === 'Temperature') return [`${value}${unit === 'metric' ? '°C' : '°F'}`, 'Avg Temp'];
// // //                     if (name === 'Max') return [`${value}${unit === 'metric' ? '°C' : '°F'}`, 'Max Temp'];
// // //                     if (name === 'Min') return [`${value}${unit === 'metric' ? '°C' : '°F'}`, 'Min Temp'];
// // //                     return value;
// // //                   }}
// // //                 />
// // //                 <Line 
// // //                   type="monotone" 
// // //                   dataKey="temp" 
// // //                   stroke="#8884d8" 
// // //                   activeDot={{ r: 8 }} 
// // //                   name="Temperature" 
// // //                 />
// // //                 <Line 
// // //                   type="monotone" 
// // //                   dataKey="max" 
// // //                   stroke="#82ca9d" 
// // //                   name="Max" 
// // //                 />
// // //                 <Line 
// // //                   type="monotone" 
// // //                   dataKey="min" 
// // //                   stroke="#ffc658" 
// // //                   name="Min" 
// // //                 />
// // //               </LineChart>
// // //             </ResponsiveContainer>
// // //           </>
// // //         ) : (
// // //           <Typography variant="body1" textAlign="center" mt={4}>
// // //             No forecast data available
// // //           </Typography>
// // //         )}
// // //       </Box>
// // //     </Container>
// // //   );
// // // };

// // // export default Forecast;
// // import React from 'react';
// // import { 
// //   Box, 
// //   Container, 
// //   Typography,
// //   CircularProgress,
// //   Alert,
// //   Button
// // } from '@mui/material';
// // import { 
// //   LineChart, 
// //   Line, 
// //   XAxis, 
// //   YAxis, 
// //   CartesianGrid, 
// //   Tooltip, 
// //   ResponsiveContainer 
// // } from '@mui/x-charts/LineChart'; // Updated import path
// // import { useWeather } from '../contexts/WeatherContext';

// // const Forecast = () => {
// //   const { forecastData, loading, error, unit } = useWeather();

// //   // Process forecast data for the chart
// //   const processForecastData = () => {
// //     if (!forecastData?.list) return [];

// //     // Group by day
// //     const dailyData = {};
// //     forecastData.list.forEach(item => {
// //       const date = new Date(item.dt * 1000);
// //       const dayKey = date.toLocaleDateString(undefined, { weekday: 'short' });
      
// //       if (!dailyData[dayKey]) {
// //         dailyData[dayKey] = {
// //           date: dayKey,
// //           temps: [],
// //           min: Infinity,
// //           max: -Infinity
// //         };
// //       }

// //       const temp = item.main.temp;
// //       dailyData[dayKey].temps.push(temp);
// //       dailyData[dayKey].min = Math.min(dailyData[dayKey].min, temp);
// //       dailyData[dayKey].max = Math.max(dailyData[dayKey].max, temp);
// //     });

// //     // Calculate averages and format for chart
// //     return Object.values(dailyData).map(day => ({
// //       date: day.date,
// //       temp: Math.round(day.temps.reduce((a, b) => a + b, 0) / day.temps.length),
// //       min: Math.round(day.min),
// //       max: Math.round(day.max)
// //     }));
// //   };

// //   const chartData = processForecastData();

// //   return (
// //     <Container maxWidth="md">
// //       <Box sx={{ my: 4 }}>
// //         <Typography variant="h4" gutterBottom>
// //           5-Day Forecast
// //         </Typography>

// //         {error && (
// //           <Alert 
// //             severity="error" 
// //             sx={{ mb: 2 }}
// //             action={
// //               <Button 
// //                 color="inherit" 
// //                 size="small"
// //                 onClick={() => window.location.reload()}
// //               >
// //                 Retry
// //               </Button>
// //             }
// //           >
// //             {error}
// //           </Alert>
// //         )}

// //         {loading ? (
// //           <Box display="flex" justifyContent="center" alignItems="center" height={300}>
// //             <CircularProgress size={60} />
// //           </Box>
// //         ) : chartData.length > 0 ? (
// //           <>
// //             <Typography variant="subtitle1" gutterBottom>
// //               {forecastData?.city?.name}, {forecastData?.city?.country}
// //             </Typography>
// //             <ResponsiveContainer width="100%" height={400}>
// //               <LineChart
// //                 data={chartData}
// //                 margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
// //               >
// //                 <CartesianGrid strokeDasharray="3 3" />
// //                 <XAxis dataKey="date" />
// //                 <YAxis 
// //                   label={{ 
// //                     value: `Temperature (${unit === 'metric' ? '°C' : '°F'})`, 
// //                     angle: -90, 
// //                     position: 'insideLeft' 
// //                   }} 
// //                 />
// //                 <Tooltip 
// //                   formatter={(value, name) => {
// //                     if (name === 'Temperature') return [`${value}${unit === 'metric' ? '°C' : '°F'}`, 'Avg Temp'];
// //                     if (name === 'Max') return [`${value}${unit === 'metric' ? '°C' : '°F'}`, 'Max Temp'];
// //                     if (name === 'Min') return [`${value}${unit === 'metric' ? '°C' : '°F'}`, 'Min Temp'];
// //                     return value;
// //                   }}
// //                 />
// //                 <Line 
// //                   type="monotone" 
// //                   dataKey="temp" 
// //                   stroke="#8884d8" 
// //                   activeDot={{ r: 8 }} 
// //                   name="Temperature" 
// //                 />
// //                 <Line 
// //                   type="monotone" 
// //                   dataKey="max" 
// //                   stroke="#82ca9d" 
// //                   name="Max" 
// //                 />
// //                 <Line 
// //                   type="monotone" 
// //                   dataKey="min" 
// //                   stroke="#ffc658" 
// //                   name="Min" 
// //                 />
// //               </LineChart>
// //             </ResponsiveContainer>
// //           </>
// //         ) : (
// //           <Typography variant="body1" textAlign="center" mt={4}>
// //             No forecast data available
// //           </Typography>
// //         )}
// //       </Box>
// //     </Container>
// //   );
// // };

// // export default Forecast;
// import React, { useEffect, useRef } from 'react';
// import { 
//   Box, 
//   Container, 
//   Typography,
//   CircularProgress,
//   Alert,
//   Button
// } from '@mui/material';
// import ReactECharts from 'echarts-for-react';
// import * as echarts from 'echarts';
// import { useWeather } from '../contexts/WeatherContext';

// const Forecast = () => {
//   const { forecastData, loading, error, unit } = useWeather();
//   const chartRef = useRef(null);

//   // Process forecast data for the chart
//   const processForecastData = () => {
//     if (!forecastData?.list) return { seriesData: [], days: [] };

//     // Group by day
//     const dailyData = {};
//     forecastData.list.forEach(item => {
//       const date = new Date(item.dt * 1000);
//       const dayKey = date.toLocaleDateString(undefined, { weekday: 'short' });
      
//       if (!dailyData[dayKey]) {
//         dailyData[dayKey] = {
//           date: dayKey,
//           temps: [],
//           min: Infinity,
//           max: -Infinity
//         };
//       }

//       const temp = item.main.temp;
//       dailyData[dayKey].temps.push(temp);
//       dailyData[dayKey].min = Math.min(dailyData[dayKey].min, temp);
//       dailyData[dayKey].max = Math.max(dailyData[dayKey].max, temp);
//     });

//     // Prepare data for ECharts
//     const days = Object.keys(dailyData);
//     const seriesData = Object.values(dailyData).map(day => ({
//       avg: Math.round(day.temps.reduce((a, b) => a + b, 0) / day.temps.length),
//       min: Math.round(day.min),
//       max: Math.round(day.max)
//     }));

//     return { seriesData, days };
//   };

//   const { seriesData, days } = processForecastData();
//   const tempUnit = unit === 'metric' ? '°C' : '°F';

//   // Chart options
//   const getChartOptions = () => {
//     return {
//       tooltip: {
//         trigger: 'axis',
//         formatter: params => {
//           const [avg, min, max] = params;
//           return `
//             <div style="font-weight:bold">${avg.name}</div>
//             <div>Avg: ${avg.value}${tempUnit}</div>
//             <div>Max: ${max.value}${tempUnit}</div>
//             <div>Min: ${min.value}${tempUnit}</div>
//           `;
//         }
//       },
//       legend: {
//         data: [`Avg Temperature`, `Min Temperature`, `Max Temperature`]
//       },
//       grid: {
//         left: '3%',
//         right: '4%',
//         bottom: '3%',
//         containLabel: true
//       },
//       xAxis: {
//         type: 'category',
//         boundaryGap: false,
//         data: days,
//         axisLabel: {
//           fontSize: 12
//         }
//       },
//       yAxis: {
//         type: 'value',
//         axisLabel: {
//           formatter: `{value} ${tempUnit}`,
//           fontSize: 12
//         }
//       },
//       series: [
//         {
//           name: 'Avg Temperature',
//           type: 'line',
//           data: seriesData.map(d => d.avg),
//           symbol: 'circle',
//           symbolSize: 8,
//           itemStyle: {
//             color: '#8884d8'
//           },
//           lineStyle: {
//             width: 3
//           }
//         },
//         {
//           name: 'Max Temperature',
//           type: 'line',
//           data: seriesData.map(d => d.max),
//           symbol: 'circle',
//           symbolSize: 8,
//           itemStyle: {
//             color: '#82ca9d'
//           },
//           lineStyle: {
//             width: 3
//           }
//         },
//         {
//           name: 'Min Temperature',
//           type: 'line',
//           data: seriesData.map(d => d.min),
//           symbol: 'circle',
//           symbolSize: 8,
//           itemStyle: {
//             color: '#ffc658'
//           },
//           lineStyle: {
//             width: 3
//           }
//         }
//       ]
//     };
//   };

//   // Handle window resize
//   useEffect(() => {
//     const handleResize = () => {
//       if (chartRef.current) {
//         chartRef.current.getEchartsInstance().resize();
//       }
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <Container maxWidth="md">
//       <Box sx={{ my: 4 }}>
//         <Typography variant="h4" gutterBottom>
//           5-Day Forecast
//         </Typography>

//         {error && (
//           <Alert 
//             severity="error" 
//             sx={{ mb: 2 }}
//             action={
//               <Button 
//                 color="inherit" 
//                 size="small"
//                 onClick={() => window.location.reload()}
//               >
//                 Retry
//               </Button>
//             }
//           >
//             {error}
//           </Alert>
//         )}

//         {loading ? (
//           <Box display="flex" justifyContent="center" alignItems="center" height={300}>
//             <CircularProgress size={60} />
//           </Box>
//         ) : seriesData.length > 0 ? (
//           <>
//             <Typography variant="subtitle1" gutterBottom>
//               {forecastData?.city?.name}, {forecastData?.city?.country}
//             </Typography>
//             <Box sx={{ height: 400, width: '100%' }}>
//               <ReactECharts
//                 ref={chartRef}
//                 option={getChartOptions()}
//                 style={{ height: '100%', width: '100%' }}
//                 theme="light"
//                 notMerge={true}
//                 lazyUpdate={true}
//               />
//             </Box>
//           </>
//         ) : (
//           <Typography variant="body1" textAlign="center" mt={4}>
//             No forecast data available
//           </Typography>
//         )}
//       </Box>
//     </Container>
//   );
// };

// export default Forecast;
import React, { useEffect, useMemo } from 'react';
import { 
  Box, 
  Container, 
  Typography,
  CircularProgress,
  Alert,
  Button,
  useTheme
} from '@mui/material';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { useWeather } from '../contexts/WeatherContext';

const Forecast = () => {
  const { forecastData, loading, error, unit } = useWeather();
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  // Process forecast data for the chart
  const processForecastData = () => {
    if (!forecastData?.list) return { seriesData: [], days: [] };

    // Group by day
    const dailyData = {};
    forecastData.list.forEach(item => {
      const date = new Date(item.dt * 1000);
      const dayKey = date.toLocaleDateString(undefined, { weekday: 'short' });
      
      if (!dailyData[dayKey]) {
        dailyData[dayKey] = {
          date: dayKey,
          temps: [],
          min: Infinity,
          max: -Infinity
        };
      }

      const temp = item.main.temp;
      dailyData[dayKey].temps.push(temp);
      dailyData[dayKey].min = Math.min(dailyData[dayKey].min, temp);
      dailyData[dayKey].max = Math.max(dailyData[dayKey].max, temp);
    });

    // Prepare data for ECharts
    const days = Object.keys(dailyData);
    const seriesData = Object.values(dailyData).map(day => ({
      avg: Math.round(day.temps.reduce((a, b) => a + b, 0) / day.temps.length),
      min: Math.round(day.min),
      max: Math.round(day.max)
    }));

    return { seriesData, days };
  };

  const { seriesData, days } = processForecastData();
  const tempUnit = unit === 'metric' ? '°C' : '°F';

  // Chart options with dark mode support
  const chartOptions = useMemo(() => {
    const textColor = isDarkMode ? theme.palette.text.primary : '#333';
    const axisLineColor = isDarkMode ? 'rgba(255, 255, 255, 0.3)' : '#ccc';
    const splitLineColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#eee';
    const backgroundColor = isDarkMode ? theme.palette.background.default : '#fff';

    return {
      backgroundColor: backgroundColor,
      tooltip: {
        trigger: 'axis',
        backgroundColor: isDarkMode ? theme.palette.background.paper : '#fff',
        borderColor: isDarkMode ? theme.palette.divider : '#ddd',
        textStyle: {
          color: textColor
        },
        formatter: params => {
          const [avg, min, max] = params;
          return `
            <div style="font-weight:bold;margin-bottom:5px">${avg.name}</div>
            <div style="color:#8884d8">Avg: ${avg.value}${tempUnit}</div>
            <div style="color:#82ca9d">Max: ${max.value}${tempUnit}</div>
            <div style="color:#ffc658">Min: ${min.value}${tempUnit}</div>
          `;
        }
      },
      legend: {
        data: [`Avg Temperature`, `Min Temperature`, `Max Temperature`],
        textStyle: {
          color: textColor
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: days,
        axisLine: {
          lineStyle: {
            color: axisLineColor
          }
        },
        axisLabel: {
          color: textColor,
          fontSize: 12
        }
      },
      yAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: axisLineColor
          }
        },
        axisLabel: {
          formatter: `{value} ${tempUnit}`,
          color: textColor,
          fontSize: 12
        },
        splitLine: {
          lineStyle: {
            color: splitLineColor
          }
        }
      },
      series: [
        {
          name: 'Avg Temperature',
          type: 'line',
          data: seriesData.map(d => d.avg),
          symbol: 'circle',
          symbolSize: 8,
          itemStyle: {
            color: '#8884d8'
          },
          lineStyle: {
            width: 3
          }
        },
        {
          name: 'Max Temperature',
          type: 'line',
          data: seriesData.map(d => d.max),
          symbol: 'circle',
          symbolSize: 8,
          itemStyle: {
            color: '#82ca9d'
          },
          lineStyle: {
            width: 3
          }
        },
        {
          name: 'Min Temperature',
          type: 'line',
          data: seriesData.map(d => d.min),
          symbol: 'circle',
          symbolSize: 8,
          itemStyle: {
            color: '#ffc658'
          },
          lineStyle: {
            width: 3
          }
        }
      ]
    };
  }, [seriesData, days, tempUnit, isDarkMode, theme]);

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom color="textPrimary">
          5-Day Forecast
        </Typography>

        {error && (
          <Alert 
            severity="error" 
            sx={{ mb: 2 }}
            action={
              <Button 
                color="inherit" 
                size="small"
                onClick={() => window.location.reload()}
              >
                Retry
              </Button>
            }
          >
            {error}
          </Alert>
        )}

        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" height={300}>
            <CircularProgress size={60} />
          </Box>
        ) : seriesData.length > 0 ? (
          <>
            <Typography variant="subtitle1" gutterBottom color="textPrimary">
              {forecastData?.city?.name}, {forecastData?.city?.country}
            </Typography>
            <Box sx={{ 
              height: 400, 
              width: '100%',
              borderRadius: 2,
              overflow: 'hidden',
              border: `1px solid ${theme.palette.divider}`,
              backgroundColor: theme.palette.background.paper
            }}>
              <ReactECharts
                option={chartOptions}
                style={{ height: '100%', width: '100%' }}
                theme={isDarkMode ? 'dark' : 'light'}
                notMerge={true}
                lazyUpdate={true}
              />
            </Box>
          </>
        ) : (
          <Typography variant="body1" textAlign="center" mt={4} color="textPrimary">
            No forecast data available
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default Forecast;