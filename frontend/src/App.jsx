
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardLayoutBasic from './components/Dashboard';
import MainPage from './components/MainPage/MainPage';

import QuizForm from './components/Test/QuizForm';
import TestTable from './components/Test/TestTable';
import LoginPage from './components/User/LoginPage';
import RegisterPage from './components/User/RegisterPage';
import { AuthContextProvider } from './context/authContext';
import Catalog from './components/Catalog/Catalog';
import ExitLink from './components/Logout/ExitLink';
import './index.css';
import CreateTest from './components/CreateTest/CreateTest';

import ProfileCard from './components/Profile/Profile';
import FormProfile from './components/Profile/EditProfile';






function App() {
  return (
    <AuthContextProvider>
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/dashboard/*" element={<DashboardLayoutBasic />} />
      <Route path="/profile" element={<ProfileCard/>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/logout" element={<ExitLink />} />
    </Routes>
    </BrowserRouter>


    </AuthContextProvider>


  );
}

export default App;