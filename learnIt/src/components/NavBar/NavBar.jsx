import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, Grid, Card, CardContent, CardMedia, AppBar, Toolbar, Slide } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  // Handle navbar visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <Box>
        {/* Navbar */}
        <Slide in={showNavbar} direction="down">
          <AppBar position="fixed" sx={{ backgroundColor: '#662249' }}>
            <Toolbar>
              <Typography variant="h6" sx={{ flexGrow: 1, color: 'white' }}>
                УЧИТЕЛИ И УЧЕНИЦИ
              </Typography>
            </Toolbar>
          </AppBar>
        </Slide> 
        </Box>
        )
    }

    export default Navbar;