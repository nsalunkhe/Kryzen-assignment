// src/App.js
import React, { useState } from 'react';
import {Route, Routes } from 'react-router-dom';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import UserInfoForm from './User/UserInfoForm';
import "./App.css"

const App = () => {
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');

  return (
      <div>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route
            path="/login"
            element={<Login setToken={setToken} setUserId={setUserId} />}
          />
          <Route
            path="/user/update"
            element={<UserInfoForm userId={userId} token={token} />}
          />
        </Routes>
      </div>
  );
};

export default App;
