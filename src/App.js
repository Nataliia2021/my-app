import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from 'react-router-dom'; // Import Router components
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
                <NavLink to="/" className="link" activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/adopt" className="link" activeClassName="active">
                  Adopt a Pet
                </NavLink>
              </li>
              <li>
                <NavLink to="/form" className="link" activeClassName="active">
                  Adopt Form
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/profile"
                  className="link"
                  activeClassName="active"
                >
                  Profile
                </NavLink>
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
