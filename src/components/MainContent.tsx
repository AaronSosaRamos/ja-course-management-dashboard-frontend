import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const MainContent: React.FC = () => {
  const rows = [
    { id: 1, curso: 'Matemáticas', progreso: 75 },
    { id: 2, curso: 'Historia', progreso: 50 },
    { id: 3, curso: 'Ciencias', progreso: 90 },
  ];

  const columns = [
    { field: 'curso', headerName: 'Curso', width: 150 },
    { field: 'progreso', headerName: 'Progreso (%)', width: 150 },
  ];

  return (
    <Box sx={{ paddingTop: 8, paddingLeft: 3, paddingRight: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Estadísticas de Cursos</Typography>
            <DataGrid rows={rows} columns={columns} autoHeight />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Cursos Completados</Typography>
            <Typography variant="h3" align="center">3</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Cursos Pendientes</Typography>
            <Typography variant="h3" align="center">2</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainContent;
