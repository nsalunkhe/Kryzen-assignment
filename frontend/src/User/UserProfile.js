import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import "./UserProfile.css";

const UserProfile = ({ userId, token }) => {
  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`https://kryzen-backend-m49c.onrender.com/user/info`, {
          headers: {
            Authorization: `${token}`,
          },
        });

        setUserDetails(response.data.user);
        setError('');
      } catch (error) {
        console.error('Error fetching user details:', error.response ? error.response.data.message : error.message);
        setError('Error fetching user details');
      }
    };

    fetchUserDetails();
  }, [userId, token]);

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="user-profile-container">
      {!error && userDetails && userDetails.name && userDetails.age && userDetails.address && userDetails.photo ? (
        <div className='pro-container'>
          <div style={{ display: "flex" }}>
            <img src={userDetails.photo} alt='user' className='pic' />
            <div className="user-details">
              <p>Name: {userDetails.name}</p>
              <p>Age: {userDetails.age}</p>
              <p>Address: {userDetails.address}</p>
            </div>
          </div>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="dummy-user-container">
          <img className='dummy-pic' src="https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg?size=626&ext=jpg&ga=GA1.1.1220547278.1681596594&semt=ais" alt="."  />
          <p className='dummy-name'>{userDetails ? userDetails.username : ''}</p>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
