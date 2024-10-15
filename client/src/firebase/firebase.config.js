// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_Bmovg0rihHU_wl0eHoPMGz4JETPHa6k",
  authDomain: "nomadjobs-7a63a.firebaseapp.com",
  projectId: "nomadjobs-7a63a",
  storageBucket: "nomadjobs-7a63a.appspot.com",
  messagingSenderId: "785958709326",
  appId: "1:785958709326:web:587e448f12e1b538c87b1f",
  measurementId: "G-84V9XV7EQK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app