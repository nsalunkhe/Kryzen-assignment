// src/Routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import AddInfo from './components/Auth/AddInfo';
import UserInfo from './components/UserInfo';
//import ProtectedRoute from './components/ProtectedRoute';

const MainRoutes = () => {
  return (
    <Routes>
      {/* <Route element={<ProtectedRoute />}> */}
                <Route element={<AddInfo/>} path="/add-info" />
                <Route element={<UserInfo/>} path="/user-info"/>
      {/* </Route> */}

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default MainRoutes;
