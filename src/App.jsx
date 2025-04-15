// import React, { lazy, Suspense } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { CssBaseline } from '@mui/material';
// import { ThemeProvider } from './contexts/ThemeContext';
// import { WeatherProvider } from './contexts/WeatherContext';
// import LoadingIndicator from './components/LoadingIndicator';

// // Lazy load pages for code splitting
// const Home = lazy(() => import('./pages/Home'));
// const Forecast = lazy(() => import('./pages/Forecast'));
// const Favorites = lazy(() => import('./pages/Favorites'));
// const Settings = lazy(() => import('./pages/Settings'));
// const NotFound = lazy(() => import('./pages/NotFound'));

// const App = () => {
//   return (
//     <Router>
//       <ThemeProvider>
//         <WeatherProvider>
//           <CssBaseline />
//           <Suspense fallback={<LoadingIndicator />}>
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/forecast" element={<Forecast />} />
//               <Route path="/favorites" element={<Favorites />} />
//               <Route path="/settings" element={<Settings />} />
//               <Route path="*" element={<NotFound />} />
//             </Routes>
//           </Suspense>
//         </WeatherProvider>
//       </ThemeProvider>
//     </Router>
//   );
// };

// export default App;

import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, Box } from '@mui/material';
import { ThemeProvider } from './contexts/ThemeContext';
import { WeatherProvider } from './contexts/WeatherContext';
import LoadingIndicator from './components/LoadingIndicator';
import Navbar from './components/Navbar';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const Forecast = lazy(() => import('./pages/Forecast'));
const Favorites = lazy(() => import('./pages/Favorites'));
const Settings = lazy(() => import('./pages/Settings'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => {
  return (
    <Router>
      <ThemeProvider>
        <WeatherProvider>
          <CssBaseline />
          <Navbar />
          <Box component="main" sx={{ p: 3, pt: 10 }}>
            <Suspense fallback={<LoadingIndicator />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/forecast" element={<Forecast />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </Box>
        </WeatherProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;