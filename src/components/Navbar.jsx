import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import {
  Home as HomeIcon,
  Timeline as ForecastIcon,
  Star as FavoritesIcon,
  Settings as SettingsIcon,
  Menu as MenuIcon,
  Brightness4 as DarkModeIcon,
  Brightness7 as LightModeIcon,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { useTheme as useAppTheme } from "../contexts/ThemeContext";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  {
    path: "/",
    name: "Home",
    icon: <HomeIcon />,
  },
  {
    path: "/forecast",
    name: "Forecast",
    icon: <ForecastIcon />,
  },
  {
    path: "/favorites",
    name: "Favorites",
    icon: <FavoritesIcon />,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: <SettingsIcon />,
  },
];

const Navbar = () => {
  const theme = useTheme();
  const { mode, toggleTheme } = useAppTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{
        width: 250,
        background:
          mode === "light"
            ? "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)"
            : "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
        height: "100%",
      }}
    >
      <Toolbar />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem
            button
            key={item.path}
            component={Link}
            to={item.path}
            onClick={()=>{
                setMobileOpen(!mobileOpen);

            }}
            selected={location.pathname === item.path}
            sx={{
              "&.Mui-selected": {
                background:
                  mode === "light"
                    ? "linear-gradient(90deg, rgba(100,149,237,0.2) 0%, rgba(100,149,237,0.1) 100%)"
                    : "linear-gradient(90deg, rgba(66,165,245,0.2) 0%, rgba(66,165,245,0.1) 100%)",
                borderRight: `3px solid ${theme.palette.primary.main}`,
              },
            }}
          >
            <ListItemIcon sx={{ color: "inherit" }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box sx={{ p: 2 }}>
        <ThemeToggle />
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background:
            mode === "light"
              ? "linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)"
              : "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
          boxShadow: "none",
          color: theme.palette.text.primary,
        }}
      >
        <Toolbar>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}

          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              background:
                mode === "light"
                  ? "linear-gradient(to right, #3a7bd5, #00d2ff)"
                  : "linear-gradient(to right, #12c2e9, #c471ed, #f64f59)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Weather App
          </Typography>

          {!isMobile && (
            <Box sx={{ display: "flex" }}>
              {navItems.map((item) => (
                <IconButton
                  key={item.path}
                  component={Link}
                  to={item.path}
                  
                  color={
                    location.pathname === item.path ? "primary" : "inherit"
                  }
                  sx={{
                    mx: 1,
                    borderRadius: 2,
                    background:
                      location.pathname === item.path
                        ? mode === "light"
                          ? "linear-gradient(135deg, rgba(100,149,237,0.2) 0%, rgba(100,149,237,0.1) 100%)"
                          : "linear-gradient(135deg, rgba(66,165,245,0.2) 0%, rgba(66,165,245,0.1) 100%)"
                        : "transparent",
                    "&:hover": {
                      background:
                        mode === "light"
                          ? "linear-gradient(135deg, rgba(100,149,237,0.1) 0%, rgba(100,149,237,0.05) 100%)"
                          : "linear-gradient(135deg, rgba(66,165,245,0.1) 0%, rgba(66,165,245,0.05) 100%)",
                    },
                  }}
                >
                  {item.icon}
                  <Typography variant="body2" sx={{ ml: 1 }}>
                    {item.name}
                  </Typography>
                </IconButton>
              ))}
              <ThemeToggle />
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 250,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;
