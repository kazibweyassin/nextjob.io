import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Footer from './Pages/Footer';

function App() {
  return (
    <>
      <Navbar />  {/* Always visible */}
      {/* <Home />    */}
      <Outlet />   {/* This renders Home or CreateJob depending on the current route */}
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
