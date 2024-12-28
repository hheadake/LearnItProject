import React, { useState } from 'react';
import { Box, Button, TextField, Checkbox, FormControlLabel, Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/formHooks'
import { useLogin } from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom';

const StyledBtn = styled(Button)({
  background: "#662249",
});

export default function LoginPage() {
  const login = useLogin();
  const navigate = useNavigate();
  const { values, changeStateHandler, submitHandler } = useForm(
    { email: '', password: '' },
    async ({ email, password }) => {
      try {
        await login(email, password)
        navigate('/dashboard')
 
      } catch (err) {
        console.log(err.message);
      }

    }


  )

  return (
    <Box
    
      component="form"
      onSubmit={submitHandler}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: 400,
        mx: 'auto',
        mt: 4,
        p: 2,
        border: '1px solid #662249',
        borderRadius: 2,
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Вход
      </Typography>
      <TextField
        label="Email"
        name="email"
        type="email"
        value={values.email}
        onChange={changeStateHandler}
        required
      />
      <TextField
        label="password"
        name="password"
        value={values.password}
        onChange={changeStateHandler}
        required
      />
     
      {/* <FormControlLabel
        control={
          <Checkbox
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />
        }
        label="Запомни ме"
      /> */}

      <StyledBtn type="submit" variant="contained">
        Вход
      </StyledBtn>

      <Typography variant="body2" align="center" sx={{ mt: 2 }}>
        Нямате акаунт?{' '}
        <Link to="/register" style={{ color: '#662249', textDecoration: 'none', fontWeight: 'bold' }}>
          Регистрирайте се
        </Link>
      </Typography>
    </Box>
  );
}
