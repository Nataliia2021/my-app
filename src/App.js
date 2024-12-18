import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Router components
import './App.css';
// Import pages
import Home from './pages/Home';
import Adopt from './pages/Adopt';
import Form from './pages/Form';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* Removed Logo */}
          
          {/* Navigation Links */}
          <nav>
            <ul>
              <li>
              <Link to="/" className="link">Home</Link> {/* Apply the 'link' class */}
              </li>
              <li>
              <Link to="/adopt" className="link">Adopt a Pet</Link> {/* Apply the 'link' class */}
              </li>
              <li>
              <Link to="/form" className="link">Adopt Form</Link> {/* Apply the 'link' class */}
              </li>
              <li>
                <Link to="/profile">Profile</Link>  {/* Link to the Profile page */}
              </li>
            </ul>
          </nav>

          {/* Routes for Pages */}
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<Home />} />
            {/* Adopt Page */}
            <Route path="/adopt" element={<Adopt />} />
            {/* Adopt Form */}
            <Route path="/form" element={<Form />} />
            {/* Adopt Profile */}
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;