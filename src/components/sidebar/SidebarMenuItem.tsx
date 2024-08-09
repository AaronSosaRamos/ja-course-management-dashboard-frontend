import React from 'react';
import { ListItem, ListItemIcon, ListItemText, Collapse, List } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface SidebarMenuItemProps {
  icon: React.ReactNode;
  text: string;
  isOpen: boolean;
  onToggle: () => void;
  subItems: { text: string; icon: React.ReactNode }[];
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({ icon, text, isOpen, onToggle, subItems }) => {
  return (
    <>
      <ListItem
        button
        onClick={onToggle}
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
        <ListItemIcon sx={{ color: 'inherit' }}>{icon}</ListItemIcon>
        <ListItemText primary={text} />
        {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItem>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {subItems.map((item, index) => (
            <ListItem
              button
              key={index}
              sx={{
                pl: 4,
                color: '#fff',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: '#000',
                  transform: 'scale(1.05)',
                },
                transition: 'all 0.3s ease-in-out',
              }}
            >
              <ListItemIcon sx={{ color: 'inherit' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default SidebarMenuItem;
