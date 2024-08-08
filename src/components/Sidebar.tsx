import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Avatar, Typography, Box, useMediaQuery } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import SettingsIcon from '@mui/icons-material/Settings';
import { useTheme } from '@mui/material/styles';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Drawer
      variant={isDesktop ? 'permanent' : 'temporary'}
      open={isOpen}
      onClose={onClose}
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 240,
          boxSizing: 'border-box',
          backgroundColor: '#000',
          zIndex: isDesktop ? theme.zIndex.drawer : theme.zIndex.modal + 1, 
        },
      }}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
        <Avatar src="/ruta/a/foto.jpg" alt="Wilfredo Sosa" sx={{ width: 80, height: 80 }} />
        <Typography variant="h6" sx={{ color: '#fff' }}>Wilfredo Sosa</Typography>
        <Typography variant="body2" sx={{ color: '#aaa' }}>U20204320@gmail.com</Typography>
      </Box>
      <List sx={{ mt: 5 }}>
        <ListItem
          button
          sx={{
            color: '#fff',
            '&:hover': {
              backgroundColor: theme.palette.primary.main,
              color: '#000',
              transform: 'scale(1.05)',
            },
            transition: 'all 0.3s ease-in-out',
          }}
        >
          <ListItemIcon sx={{ color: 'inherit' }}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Inicio" />
        </ListItem>
        <ListItem
          button
          sx={{
            color: '#fff',
            '&:hover': {
              backgroundColor: theme.palette.primary.main,
              color: '#000',
              transform: 'scale(1.05)',
            },
            transition: 'all 0.3s ease-in-out',
          }}
        >
          <ListItemIcon sx={{ color: 'inherit' }}>
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText primary="Cursos" />
        </ListItem>
        <ListItem
          button
          sx={{
            color: '#fff',
            '&:hover': {
              backgroundColor: theme.palette.primary.main,
              color: '#000',
              transform: 'scale(1.05)',
            },
            transition: 'all 0.3s ease-in-out',
          }}
        >
          <ListItemIcon sx={{ color: 'inherit' }}>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Configuración" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
