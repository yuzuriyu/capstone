// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOQL1CgJbGYcvufDAUELz4_zQv7m55YlE",
  authDomain: "capstone-a4786.firebaseapp.com",
  projectId: "capstone-a4786",
  storageBucket: "capstone-a4786.appspot.com",
  messagingSenderId: "810301727943",
  appId: "1:810301727943:web:c06792c6b655c0e0ce0ae2",
  measurementId: "G-BYLBD0NFEL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
