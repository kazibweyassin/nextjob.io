import React from 'react';
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import app from '../firebase/firebase.config'; // Import your Firebase app configuration

const SignUp = () => {
  const auth = getAuth(app);  // Initialize Firebase Auth
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate(); // Initialize navigate

  const handleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user; // Successfully signed-in user
        console.log("User details:", user);

        // Redirect the user to the jobs page after successful login
        navigate('/jobs'); // Assuming "/jobs" is the route for your jobs page
      })
      .catch((error) => {
        const errorMessage = error.message;
        const email = error.customData?.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        
        console.error("Error during sign-in:", errorMessage, email, credential); // Handle the error
      });
  }

return (
    <div className='h-screen w-full flex items-center justify-center flex-col'>
        <h1 className='text-3xl mb-6'>Sign Up</h1>
        <button className='bg-custom-blue px-8 py-2' onClick={handleLogin}>SIGN UP WITH GOOGLE</button>
    </div>
);
}

export default SignUp;
