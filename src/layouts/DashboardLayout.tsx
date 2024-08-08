import React, { useState } from 'react';
import { Box, useMediaQuery, CssBaseline } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import MainContent from '../components/MainContent';

const DashboardLayout: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const handleMenuClick = () => {
    if (!isDesktop) {
      setSidebarOpen(!isSidebarOpen);
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Navbar isOpen={isSidebarOpen} onMenuClick={handleMenuClick} />
      <Sidebar isOpen={isDesktop || isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: 3,
          marginLeft: isDesktop ? '39px' : '0px', 
          transition: theme.transitions.create(['margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        <MainContent />
      </Box>
    </Box>
  );
};

export default DashboardLayout;
