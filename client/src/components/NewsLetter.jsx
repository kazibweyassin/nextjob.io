import React from 'react';
import { FaEnvelopeOpenText, FaRocket } from 'react-icons/fa';  

export const NewsLetter = () => {
  return (
    <div>
      <div>
        <h3 className='text-lg font-bold mb-2 flex items-center gap-3'>
          <FaEnvelopeOpenText className='text-blue-500' /> 
          Email me for new remote jobs
        </h3>
        <p className='text-primary/75 text-base mb-4'>30,000+ remote jobs Get access to our Premium database.</p> 
        <div className='w-full space-y-4'>
            <input type="email" name='email'id='email' placeholder='name@provider.com' className='w-full block py-2 pl-3 border focus:outline-none'  />
            <input type="submit" value={"Join Premium"} className='w-full block py-2 pl-3 border focus:outline-none bg-custom-blue rounded-sm text-white cursor-pointer font-semibold'/>
        </div>

        {/* second part */}
        <div className='mt-20'>
        <h3 className='text-lg font-bold mb-2 flex items-center gap-3'>
          <FaRocket className='text-blue-500' /> 
          Get Hired Faster
        </h3>
        <p className='text-primary/75 text-base mb-4'>Live anywhere, work everywhere.</p> 
        <div className='w-full space-y-4'>
            <input type="submit" value={"Upload Resume"} className='w-full block py-2 pl-3 border focus:outline-none bg-custom-blue rounded-sm text-white cursor-pointer font-semibold'/>
        </div>

        {/* second part */}
   
      </div>
   
      </div>
    </div>
  ); 
};

