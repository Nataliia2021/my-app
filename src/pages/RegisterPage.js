import React, { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebase'; // Import your Firebase setup file
import './RegisterPage.css'; // Optional for styling
import VideoPlayer1 from '../asserts/VideoPlayer1.mp4'; // Adjust the path as needed

const RegisterPage = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isRegistered, setIsRegistered] = useState(false); // Track if registration is successful

  // Registration handler
  const handleRegister = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setErrorMessage("Passwords don't match.");
      return;
    }

    try {
      // Create user with email and password
      await createUserWithEmailAndPassword(auth, email, password);

      // If registration is successful, check the user
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user); // Set the authenticated user
          setIsRegistered(true); // Mark as successfully registered
        }
      });

      // Clear form on success
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.message); // Display the error message
      setIsRegistered(false); // Reset if registration fails
    }
  };

  return (
    <div className="register-page">
      {/* Video Header */}
      <div className="video-header">
        <video autoPlay muted loop className="video-header-bg">
          <source src={VideoPlayer1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <h2>Register</h2>
      <form onSubmit={handleRegister} className="register-form">
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
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder="Confirm your password"
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {isRegistered && (
          <a className="success">You are successfully registered!</a>
        )}
        <button type="submit" className="register-btn">
          Register
        </button>
      </form>
      <p className="redirect-link">
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
};

export default RegisterPage;
