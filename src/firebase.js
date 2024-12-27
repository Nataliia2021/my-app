// src/firebase.js
import { initializeApp } from 'firebase/app'; // Initialize Firebase
import { getAuth, signOut } from 'firebase/auth'; // Import getAuth and signOut
import firebaseConfig from './firebaseConfig'; // Import your Firebase config

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get the auth instance
const auth = getAuth(app);

// Export the auth instance and signOut function
export { auth, signOut };
