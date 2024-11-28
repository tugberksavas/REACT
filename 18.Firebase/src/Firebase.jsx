// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEZi6-vkcvv3KY1rSKrhX-3UzJTbkMJpo",
  authDomain: "fir-education-dd98d.firebaseapp.com",
  projectId: "fir-education-dd98d",
  storageBucket: "fir-education-dd98d.firebasestorage.app",
  messagingSenderId: "695561225433",
  appId: "1:695561225433:web:711fb3f75212fb87a36ac8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
