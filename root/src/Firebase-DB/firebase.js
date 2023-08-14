// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVlqw2C4PEGpUiIFjWm324Y-NCGbUa4mA",
  authDomain: "my-awaesomw.firebaseapp.com",
  projectId: "my-awaesomw",
  storageBucket: "my-awaesomw.appspot.com",
  messagingSenderId: "926996856267",
  appId: "1:926996856267:web:3444e12e56196e133f0a4e",
  measurementId: "G-Y95BHRB0YT",
  databaseURL: "https://my-awaesomw-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);  