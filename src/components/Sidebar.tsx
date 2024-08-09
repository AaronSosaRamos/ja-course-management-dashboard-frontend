import React, { useState } from 'react';
import { Drawer, List, Avatar, Typography, Box, useMediaQuery, ListItemIcon, ListItemText, ListItem } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import LanguageIcon from '@mui/icons-material/Language';
import PublicIcon from '@mui/icons-material/Public';
import BusinessIcon from '@mui/icons-material/Business';
import LayersIcon from '@mui/icons-material/Layers';
import PeopleIcon from '@mui/icons-material/People';
import AddIcon from '@mui/icons-material/Add';
import ListIcon from '@mui/icons-material/List';
import { useTheme } from '@mui/material/styles';
import SidebarMenuItem from './sidebar/SidebarMenuItem';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  
  const [openMenu, setOpenMenu] = useState({
    courses: false,
    courseAreas: false,
    courseLevels: false,
    courseInstitutions: false,
    enabledCountries: false,
    enabledLanguages: false,
    instructors: false,
  });

  type MenuKeys = keyof typeof openMenu;

  const handleToggle = (menu: MenuKeys) => {
    setOpenMenu((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

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
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: isDesktop ? 4 : 10 }}>
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
              backgroundColor: 'primary.main',
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

        <SidebarMenuItem
          icon={<SchoolIcon />}
          text="Cursos"
          isOpen={openMenu.courses}
          onToggle={() => handleToggle('courses')}
          subItems={[
            { text: 'Crear Curso', icon: <AddIcon /> },
            { text: 'Listar Cursos', icon: <ListIcon /> },
          ]}
        />

        <SidebarMenuItem
          icon={<AccountTreeIcon />}
          text="Áreas de Curso"
          isOpen={openMenu.courseAreas}
          onToggle={() => handleToggle('courseAreas')}
          subItems={[
            { text: 'Crear Área de Curso', icon: <AddIcon /> },
            { text: 'Listar Áreas de Curso', icon: <ListIcon /> },
          ]}
        />

        <SidebarMenuItem
          icon={<LayersIcon />}
          text="Niveles de Curso"
          isOpen={openMenu.courseLevels}
          onToggle={() => handleToggle('courseLevels')}
          subItems={[
            { text: 'Crear Nivel de Curso', icon: <AddIcon /> },
            { text: 'Listar Niveles de Curso', icon: <ListIcon /> },
          ]}
        />

        <SidebarMenuItem
          icon={<BusinessIcon />}
          text="Instituciones"
          isOpen={openMenu.courseInstitutions}
          onToggle={() => handleToggle('courseInstitutions')}
          subItems={[
            { text: 'Crear Institución', icon: <AddIcon /> },
            { text: 'Listar Instituciones', icon: <ListIcon /> },
          ]}
        />

        <SidebarMenuItem
          icon={<PublicIcon />}
          text="Países Habilitados"
          isOpen={openMenu.enabledCountries}
          onToggle={() => handleToggle('enabledCountries')}
          subItems={[
            { text: 'Crear País', icon: <AddIcon /> },
            { text: 'Listar Países', icon: <ListIcon /> },
          ]}
        />

        <SidebarMenuItem
          icon={<LanguageIcon />}
          text="Idiomas Habilitados"
          isOpen={openMenu.enabledLanguages}
          onToggle={() => handleToggle('enabledLanguages')}
          subItems={[
            { text: 'Crear Idioma', icon: <AddIcon /> },
            { text: 'Listar Idiomas', icon: <ListIcon /> },
          ]}
        />

        <SidebarMenuItem
          icon={<PeopleIcon />}
          text="Instructores"
          isOpen={openMenu.instructors}
          onToggle={() => handleToggle('instructors')}
          subItems={[
            { text: 'Crear Instructor', icon: <AddIcon /> },
            { text: 'Listar Instructores', icon: <ListIcon /> },
          ]}
        />

        <ListItem
          button
          sx={{
            color: '#fff',
            '&:hover': {
              backgroundColor: 'primary.main',
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
