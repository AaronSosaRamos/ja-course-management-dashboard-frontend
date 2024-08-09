import React, { useContext } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Avatar, Box, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { ThemeContext } from '../ThemeContext';
import { useTheme } from '@mui/material/styles';

interface NavbarProps {
  isOpen: boolean;
  onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isOpen, onMenuClick }) => {
  const { toggleTheme, mode } = useContext(ThemeContext)!;
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: theme.zIndex.drawer + 1,
        marginLeft: isDesktop ? '240px' : '0px',
        width: isDesktop ? `calc(100% - 240px)` : '100%',
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {!isDesktop && (
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={onMenuClick}>
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" sx={{ marginLeft: isDesktop ? 2 : 0 }}>
            Dashboard
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: isOpen ? '250px' : '0px' }}>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <Typography variant="body1" sx={{ marginRight: 2 }}>
            Wilfredo Sosa
          </Typography>
          <Avatar src="/ruta/a/foto.jpg" alt="Wilfredo Sosa" />
          <IconButton color="inherit" onClick={toggleTheme}>
            {mode === 'dark' ? '🌙' : '☀️'}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
