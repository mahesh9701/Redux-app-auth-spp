// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAWC_1PLMJDge9k0hMRGY5EF7qsw051xTo",
  authDomain: "authentication-project-1ae3c.firebaseapp.com",
  projectId: "authentication-project-1ae3c",
  storageBucket: "authentication-project-1ae3c.firebasestorage.app",
  messagingSenderId: "469757821860",
  appId: "1:469757821860:web:39538dc75c437044263731",
  measurementId: "G-F80S2NK8W1"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Authentication
export const auth = getAuth(app)

// Google Authentication
export const provider = new GoogleAuthProvider()