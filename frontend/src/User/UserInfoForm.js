import React, { useState } from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import './UserInfoForm.css';

const UserInfoForm = ({ userId, token }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [photo, setPhoto] = useState('');
  const [address, setAddress] = useState('');
  const [updatedUserData, setUpdatedUserData] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [pdf, setPdf] = useState(null);

  const handleUpdate = async () => {
    try {
      console.log('Updating user information:', { userId, name, age, photo, address, token });

      const response = await axios.put(
        `https://kryzen-backend-m49c.onrender.com/user/update`,
        { userId, name, age, photo, address },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
          },
        }
      );

      console.log('User information updated successfully:', response.data);
      setUpdatedUserData(response.data);
    } catch (error) {
      console.error('Error during user update:', error.response ? error.response.data.message : error.message);
    }
  };

  const exportToPDF = () => {
    const { user } = updatedUserData;
    const newPdf = new jsPDF();

    // Add content to PDF
    if (user.photo) {
      const imgData = user.photo; 
      newPdf.addImage(imgData, 'JPEG', 15, 50, 80, 80);
    }
    newPdf.text(`User Information - ${user.name}`, 20, 10);
    newPdf.text(`Name: ${user.name}`, 20, 20);
    newPdf.text(`Age: ${user.age}`, 20, 30);
    newPdf.text(`Address: ${user.address}`, 20, 40);

    // Save PDF to state
    setPdf(newPdf);

    // Show the preview modal
    setShowPreview(true);
  };

  const closeModal = () => {
    // Close the preview modal
    setShowPreview(false);
  };

  return (
    <div className="user-info-container">
      <h2 className="user-info-heading">User Information Update</h2>
      <div className="form-and-preview-container">
        {!showPreview && ( // Render the user info form only if the preview is not open
          <div className="user-info-form">
            <input className="user-info-input" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input className="user-info-input" type="text" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
            <input className="user-info-input" type="text" placeholder="Photo URL" value={photo} onChange={(e) => setPhoto(e.target.value)} />
            <input className="user-info-input" type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
            <button className="user-info-button" onClick={handleUpdate}>
              Update Information
            </button>
          </div>
        )}

        {/* Display updated user information */}
        {updatedUserData && (
          <div className="updated-user-info">
            <p className='updated-heading'>Updated User Information:</p>
            <img src={updatedUserData.user.photo} alt='user'></img>
            <p className='data'>Name: {updatedUserData.user.name}</p>
            <p className='data'>Age: {updatedUserData.user.age}</p>
            <p className='data'>Address: {updatedUserData.user.address}</p>
            <button className='pdf-button' onClick={exportToPDF}>Export To PDF</button>
          </div>
        )}

        {/* Preview Modal */}
        {showPreview && pdf && (
          <div className="preview-modal">
            <div className='pr'>
            <h3>Preview</h3>
            <button onClick={closeModal}className='close'>X</button>
            </div>
            <iframe title="PDF Preview" src={`data:application/pdf;base64,${btoa(pdf.output())}`} width="100%" height="500px" />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserInfoForm;
