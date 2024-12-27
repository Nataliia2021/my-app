import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from 'react-router-dom'; // Import Router components
import './App.css';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
// Import pages
import Home from './pages/Home';
import Adopt from './pages/Adopt';
import Form from './pages/Form';
import Profile from './pages/Profile';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserPage from './pages/UserPage';

function App() {
  const [user, setUser] = useState(null); // State to store logged-in user

  // Set up an auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // If user is signed in, set the user state
      } else {
        setUser(null); // If user is signed out, set user to null
      }
    });

    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* Navigation Links */}
          <div className="nav-frame">
            <nav>
              <ul>
                <li>
                  <NavLink to="/" className="link" activeClassName="active">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/login"
                    className="link"
                    activeClassName="active"
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/register"
                    className="link"
                    activeClassName="active"
                  >
                    Register
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/user" className="link" activeClassName="active">
                    Guest
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/adopt"
                    className="link"
                    activeClassName="active"
                  >
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
          </div>
          {/* Pass user and setUser to child components */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={<LoginPage setUser={setUser} />}
            />{' '}
            {/* Pass setUser to LoginPage */}
            <Route
              path="/register"
              element={<RegisterPage setUser={setUser} />}
            />{' '}
            {/* Pass setUser to RegisterPage */}
            <Route path="/user" element={<UserPage user={user} />} />
            <Route path="/adopt" element={<Adopt />} />
            <Route path="/form" element={<Form />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
