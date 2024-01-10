import React, { useState } from 'react';
import {Route, Routes } from 'react-router-dom';
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import UserInfoForm from './User/UserInfoForm';
import UserProfile from './User/UserProfile';
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
           <Route path="/user/profile" element={<UserProfile userId={userId} token={token} />}>
        </Route>
        </Routes>
      </div>
  );
};

export default App;
