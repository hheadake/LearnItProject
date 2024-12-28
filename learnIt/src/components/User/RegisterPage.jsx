import React, { useState } from 'react';
import { Box, Button, TextField, Checkbox, FormControlLabel,Typography, styled} from '@mui/material';
import { useRegister } from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/formHooks';




const StyledBtn = styled(Button)({
  background: "#662249"
})

const initialValues = {
  email: '',
  password: '',
  name: '',
  familyName: '',
  role: '',
 
 };




export default function RegisterPage() {
  const register = useRegister();
  const navigate = useNavigate();
  
  const registerHandler = async ({email, password}) => {
    
    try {
      await register(email, password)
      
      navigate('/')
  
    } catch (err) {
      console.log(err.message)
    }
  
  
  };
  
  const {values, changeStateHandler, submitHandler} = useForm(initialValues, registerHandler)

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
        Регистрация
      </Typography>
      <TextField
        label="email"
        name="email"
        value={values.email}
        onChange={changeStateHandler}
        required
      />
      <TextField
        label="password"
        name="password"
        type="password"
        value={values.password}
        onChange={changeStateHandler}
        required
      />
      
      <StyledBtn type="submit" variant="contained">
        Регистрация
      </StyledBtn >
    </Box>
  );
}
