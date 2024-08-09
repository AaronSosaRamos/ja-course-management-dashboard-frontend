import React from 'react';
import { Grid, Card, CardContent, Typography, Box, Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const MainContent: React.FC = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery('(min-width:768px) and (max-width:1024px)');
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  // Mock de datos para la tabla de cursos
  const courseRows = [
    { id: 1, curso: 'Matemáticas', progreso: 75 },
    { id: 2, curso: 'Historia', progreso: 50 },
    { id: 3, curso: 'Ciencias', progreso: 90 },
  ];

  const courseColumns = [
    { field: 'curso', headerName: 'Curso', width: 150 },
    { field: 'progreso', headerName: 'Progreso (%)', width: 150 },
  ];

  // Mock de datos para gráficos de torta (PieChart)
  const courseAreasData = [
    { name: 'Ciencias', value: 400 },
    { name: 'Artes', value: 300 },
    { name: 'Humanidades', value: 300 },
    { name: 'Tecnología', value: 200 },
  ];

  const courseLevelsData = [
    { name: 'Básico', value: 2400 },
    { name: 'Intermedio', value: 4567 },
    { name: 'Avanzado', value: 1398 },
  ];

  // Mock de datos para gráficos de barras (BarChart)
  const institutionData = [
    { name: 'Institución A', cursos: 400 },
    { name: 'Institución B', cursos: 300 },
    { name: 'Institución C', cursos: 200 },
  ];

  // Colores para los gráficos de torta
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <Box sx={{ paddingTop: 8, paddingLeft: 3, paddingRight: 3 }}>
      <Grid container spacing={3}>
        {/* Estadísticas de Cursos */}
        <Grid item xs={12} md={12} lg={12}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Estadísticas de Cursos</Typography>
            <DataGrid rows={courseRows} columns={courseColumns} autoHeight />
          </Paper>
        </Grid>

        {/* Cursos Completados */}
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ display: 'flex', alignItems: 'center', padding: 2, backgroundColor: 'success.light', color: 'white' }}>
            <Box sx={{ marginRight: 2 }}>
              <CheckCircleIcon sx={{ fontSize: 50 }} />
            </Box>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography variant="h6">Cursos Completados</Typography>
              <Typography variant="h3">3</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Cursos Pendientes */}
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ display: 'flex', alignItems: 'center', padding: 2, backgroundColor: 'warning.light', color: 'white' }}>
            <Box sx={{ marginRight: 2 }}>
              <HourglassEmptyIcon sx={{ fontSize: 50 }} />
            </Box>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography variant="h6">Cursos Pendientes</Typography>
              <Typography variant="h3">2</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Nuevos Cursos */}
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ display: 'flex', alignItems: 'center', padding: 2, backgroundColor: 'info.light', color: 'white' }}>
            <Box sx={{ marginRight: 2 }}>
              <AssignmentIcon sx={{ fontSize: 50 }} />
            </Box>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography variant="h6">Nuevos Cursos</Typography>
              <Typography variant="h3">5</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Gráfico de Áreas de Curso */}
        <Grid item xs={12} md={12} lg={6}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Distribución de Áreas de Curso</Typography>
            <PieChart width={isTablet ? 450 : 400} height={isTablet ? 300 : 300}>
              <Pie
                data={courseAreasData}
                cx={isTablet ? 225 : 200}
                cy={150}
                labelLine={false}
                label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                outerRadius={isTablet ? 100 : 80}
                fill="#8884d8"
                dataKey="value"
              >
                {courseAreasData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </Paper>
        </Grid>

        {/* Gráfico de Niveles de Curso */}
        <Grid item xs={12} md={12} lg={6}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Distribución de Niveles de Curso</Typography>
            <PieChart width={isTablet ? 450 : 400} height={isTablet ? 300 : 300}>
              <Pie
                data={courseLevelsData}
                cx={isTablet ? 225 : 200}
                cy={150}
                labelLine={false}
                label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                outerRadius={isTablet ? 100 : 80}
                fill="#8884d8"
                dataKey="value"
              >
                {courseLevelsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </Paper>
        </Grid>

        {/* Gráfico de Instituciones */}
        <Grid item xs={12} md={12} lg={12}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6">Cursos por Institución</Typography>
            <BarChart
              width={isTablet ? 550 : 500}
              height={isTablet ? 350 : 300}
              data={institutionData}
              margin={{
                top: 5, right: 30, left: 20, bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="cursos" fill="#8884d8" />
            </BarChart>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainContent;
