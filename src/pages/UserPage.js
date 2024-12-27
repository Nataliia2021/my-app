import React, { useState, useEffect } from 'react';
import { auth, signOut } from '../firebase';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import VideoPlayer2 from '../asserts/VideoPlayer2.mp4'; // Adjust the path as needed
import './UserPage.css';

const UserPage = ({ user, setUser }) => {
  const [likedImages, setLikedImages] = useState({});
  const [totalDonation, setTotalDonation] = useState(0);
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    if (!user) {
      // If there's no user, redirect to login page
      navigate('/login'); // Redirect to the login page
    } else {
      // If there's a user, load data
      const storedLikes = JSON.parse(
        localStorage.getItem('likedImages') || '{}',
      );
      const storedDonation = localStorage.getItem('totalDonation');
      setLikedImages(storedLikes);
      setTotalDonation(storedDonation ? Number(storedDonation) : 0);
    }
  }, [user, navigate]); // Add navigate and user as dependencies

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        navigate('/login'); // Redirect to login page after logout
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };

  return (
    <div className="profile-page">
      {/* Video Header */}
      <div className="video-header">
        <video autoPlay muted loop className="video-header-bg">
          <source src={VideoPlayer2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <h2>Welcome, {user?.email}</h2>
      <div>
        <h3>Your Likes:</h3>
        {Object.keys(likedImages).length > 0 ? (
          <ul>{/* Render your liked pet images here */}</ul>
        ) : (
          <p>No likes yet</p>
        )}
      </div>
      <div>
        <h3>Total Donation: ${totalDonation}</h3>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserPage;
