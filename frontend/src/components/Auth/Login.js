import React, { useState } from 'react';
import axios from 'axios';
import UserInfoForm from '../../User/UserInfoForm';
import UserProfile from '../../User/UserProfile';

import "./Signup.css";

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [editProfileClicked, setEditProfileClicked] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://kryzen-backend-m49c.onrender.com/auth/login', { username, password });
      console.log('Login successful');
      console.log('Token:', response.data.token);
      console.log('UserID:', response.data.userId);

      setToken(response.data.token);
      setUserId(response.data.userId);
      setLoggedIn(true);
      setError('');

      onLoginSuccess(response.data.userId, response.data.token);
    } catch (error) {
      console.error('Error during login:', error.response ? error.response.data.message : error.message);
      setError('Invalid username or password');
    }
  };

  const handleEditProfileClick = () => {
    setEditProfileClicked(true);
  };

  return (
    <div className="signup-container">
      {!loggedIn && (
        <>
          <h2 className="signup-heading">Login</h2>
          <input className="signup-input" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input className="signup-input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="signup-button" onClick={handleLogin} style={{ backgroundColor: "#E20F72", marginBottom: "30px" }}>Login</button>
          {error && (
            <div className="error-message" style={{ color: "red", marginBottom: '10px' }}>
              {error}
            </div>
          )}
        </>
      )}

      {loggedIn && (
        <>
          <UserProfile userId={userId} token={token} />
          
          {!editProfileClicked && (
            <button className="edit-profile-button" onClick={handleEditProfileClick}>Edit Profile</button>
          )}

          {editProfileClicked && (
            <>
              <UserInfoForm userId={userId} token={token} />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Login;
