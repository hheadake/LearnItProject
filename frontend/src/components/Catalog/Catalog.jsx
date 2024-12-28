
import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, Grid, Card, CardContent, CardMedia, AppBar, Toolbar, Slide } from '@mui/material';
import { Link } from 'react-router-dom';

const Catalog = () => {
  return (
    <Box sx={{ py: 6, px: 4, backgroundColor: '#f9f9f9' }}>
        <Typography variant="h4" textAlign="center" fontWeight="bold" gutterBottom>
          Нашите ученици
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
  )
}

export default Catalog
