import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom'; // Import your Firebase setup file
import './LoginPage.css';
import VideoPlayer from '../asserts/VideoPlayer.mp4'; // Adjust the path as needed

const LoginPage = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;
      setUser(user); // Set the authenticated user in the app state
      navigate('/user'); // Redirect to the UserPage (after login success)
    } catch (error) {
      // Error handling
      if (error.code === 'auth/invalid-credential') {
        setErrorMessage(
          'The credentials provided are invalid. Please check and try again.',
        );
      } else if (error.code === 'auth/user-not-found') {
        setErrorMessage('No user found with this email address.');
      } else if (error.code === 'auth/wrong-password') {
        setErrorMessage('Incorrect password. Please try again.');
      } else if (error.code === 'auth/too-many-requests') {
        setErrorMessage(
          'Too many failed login attempts. Please try again later.',
        );
      } else {
        setErrorMessage(
          'An unexpected error occurred. Please try again later.',
        );
      }
    }
  };

  return (
    <div className="login-page">
      {/* Video Header */}
      <div className="video-header">
        <video autoPlay muted loop className="video-header-bg">
          <source src={VideoPlayer} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="login-content"></div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </div>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <button type="submit" className="login-btn">
          Log In
        </button>
      </form>
      <p>
        Don't have an account? <a href="/register">Register here</a>
      </p>
    </div>
  );
};

export default LoginPage;
