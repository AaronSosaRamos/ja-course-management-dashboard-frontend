import React from 'react';
import { ThemeContextProvider } from './ThemeContext';
import DashboardLayout from './layouts/DashboardLayout';

const App: React.FC = () => {
  return (
    <ThemeContextProvider>
      <DashboardLayout />
    </ThemeContextProvider>
  );
};

export default App;
