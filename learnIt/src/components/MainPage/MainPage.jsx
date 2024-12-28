
import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, Grid, Card, CardContent, CardMedia, AppBar, Toolbar, Slide } from '@mui/material';
import { Link } from 'react-router-dom';
import Navbar from '../NavBar/NavBar';
import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'

const MainPage = () => {
  const { isAuthenticated } = useContext(AuthContext);


  return (
    <Box>
      <Navbar></Navbar>
      {/* Header Section */}
      <Box
        sx={{
          height: '100vh',
          backgroundImage: 'url(https://images.pexels.com/photos/29450012/pexels-photo-29450012/free-photo-of-futuristic-abstract-3d-structure-design.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          Добре дошли!
        </Typography>
        <Typography variant="h5" gutterBottom>
          Платформа за връзка между учители и ученици
        </Typography>
        {isAuthenticated ? (
            <Button
            variant="contained"
            sx={{ mt: 2, backgroundColor: '#FFCC00', color: '#662249', '&:hover': { backgroundColor: '#e6b800' } }}
            component={Link}
            
            to="/login"
          >
            Към сайта
          </Button>
        ) : <Button
        variant="contained"
        sx={{ mt: 2, backgroundColor: '#FFCC00', color: '#662249', '&:hover': { backgroundColor: '#e6b800' } }}
        component={Link}
        
        to="/dashboard"
      >
        Към сайта
      </Button>}
        
      </Box>

      {/* Teachers Section */}
      <Box sx={{ py: 6, px: 4, backgroundColor: '#f9f9f9' }}>
        <Typography variant="h4" textAlign="center" fontWeight="bold" gutterBottom>
          Нашите учители
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[1, 2, 3].map((teacher) => (
            <Grid item xs={12} sm={6} md={4} key={teacher}>
              <Card
                sx={{
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'scale(1.05)' },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Teacher"
                />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    Учител {teacher}
                  </Typography>
                  <Typography variant="subtitle1">Длъжност</Typography>
                  <Typography variant="body2" color="textSecondary">
                    email@example.com
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* About Section */}
      <Box sx={{ py: 6, px: 4, backgroundColor: '#662249', color: 'white' }}>
        <Typography variant="h4" textAlign="center" fontWeight="bold" gutterBottom>
          Какво правим?
        </Typography>
        <Typography variant="body1" textAlign="center" maxWidth="800px" mx="auto">
          Нашата платформа свързва учители и ученици, предоставяйки им възможност за ефективно сътрудничество, споделяне на ресурси и информация. Създадена е с цел улесняване на образователния процес чрез модерни технологии.
        </Typography>
      </Box>
    </Box>
  );
};

export default MainPage;
