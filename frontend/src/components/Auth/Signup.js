// src/components/Auth/Signup.js
import React, { useState } from 'react';
import axios from 'axios';
import "./Signup.css"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await axios.post('https://kryzen-backend-m49c.onrender.com/auth/signup', { username, password });
      console.log('User registered successfully');
      console.log('Token:', response.data.token);
      console.log('UserID:', response.data.userId);
      navigate('/login');
    } catch (error) {
      console.error('Error during signup:', error.response.data.message);
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-heading">Create Your Account</h2>
      <input className="signup-input" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input className="signup-input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="signup-button" onClick={handleSignup} style={{backgroundColor:"#e20f72"}}>Signup</button>
      <p className='account'>Already have an account?  <Link to="/login" style={{color:"royalblue"}}>Log In</Link></p>
    </div>
  );
};

export default Signup;
