// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfqaNHdshBlE8lEEYR-QUsQKF5nw9wAKc",
  authDomain: "scissors-e12ba.firebaseapp.com",
  projectId: "scissors-e12ba",
  storageBucket: "scissors-e12ba.appspot.com",
  messagingSenderId: "532884362549",
  appId: "1:532884362549:web:ece3e0bd140e35aadd287c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);