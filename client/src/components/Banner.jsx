import React, { useState } from 'react';
import { FiMapPin, FiSearch } from "react-icons/fi";

const Banner = ({ query, handleInputChange }) => {
  const [location, setLocation] = useState(''); // State for location input

  const handleLocationChange = (e) => {
    setLocation(e.target.value); // Update the location state on user input
  };

  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14'>
      <h1 className='text-5xl font-bold text-primary mb-3'>
        Jobs for Digital <span className='text-custom-blue'>Normads</span>
      </h1>
      <p className='text-lg text-black/70 mb-8'>
        Normad is the number one destination to find and list incredible remote jobs. We're home to the largest remote work community in Africa.
      </p>

      <form>
        <div className='flex md:flex-row flex-col gap-4'>
          {/* Job Title Search */}
          <div className='relative flex items-center md:rounded-md rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600 md:w-1/2 w-full'>
            <input 
              type="text" 
              name='title' 
              id='title' 
              placeholder='Search for remote jobs by skill or title' 
              className='italic block flex-1 border-0 bg-transparent py-2 pl-10 text-gray-900 placeholder:text-gray-400 focus:ring-0 focus:outline-none sm:text-sm sm:leading-6'
              onChange={handleInputChange}
              value={query}
            />
            <FiSearch className='absolute left-3 text-gray-400 text-lg' />
          </div>

          {/* Location Search */}
          <div className='relative flex items-center md:rounded-md rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600 md:w-1/3 w-full'>
            <input 
              type="text" 
              name='location' 
              id='location' 
              placeholder='Location' 
              className='italic block flex-1 border-0 bg-transparent py-2 pl-10 text-gray-900 placeholder:text-gray-400 focus:ring-0 focus:outline-none sm:text-sm sm:leading-6'
              onChange={handleLocationChange}
              value={location}  // Controlled location input
            />
            <FiMapPin className='absolute left-3 text-gray-400 text-lg' />
          </div>
          <button type='submit' className='bg-custom-blue py-2 px-8 text-white md:rouned-s-none rounded'>Search</button>
        </div>
      </form>
    </div>
  );
};

export default Banner;
