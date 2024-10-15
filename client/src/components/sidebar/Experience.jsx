import React from 'react';

const Experience = ({ handleChange }) => {
  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Work Experience</h4>

      <div className='flex flex-col'>
        {/* 'Any Experience' Option */}
        <label className='sidebar-label-container'>
          <input
            onChange={handleChange} 
            type="radio"
            name="experience"
            value=""
             // Pass handleChange directly
          />
          <span className='checkmark'></span> Any Experience
        </label>

        {/* Internship Option */}
        <label className='sidebar-label-container'>
          <input
            onChange={handleChange}
            type="radio"
            name="experience"
            value="internship"
          />
          <span className='checkmark'></span> Internship
        </label>

        {/* Work Remotely Option */}
        <label className='sidebar-label-container'>
          <input
          onChange={handleChange}
           type="radio"
            name="experience"
            value="work remotely"
          />
          <span className='checkmark'></span> Work Remotely
        </label>
      </div>
    </div>
  );
}

export default Experience;
