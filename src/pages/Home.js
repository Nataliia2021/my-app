import React from 'react';
import logo from '../asserts/logo.png';

const Home = () => {
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Welcome to the Home Page!</h1>
      <p>Here you can help to find a new family for a pet</p>
      </header> 
    </div>
    
  );
};

export default Home;