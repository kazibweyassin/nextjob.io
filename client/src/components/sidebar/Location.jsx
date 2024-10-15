import React from 'react';


const Location = ({handleChange}) => {
  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Location</h4>

      {/* Location Radio Options */}
      <div className='flex flex-col'>
        
        {/* 'All' Option */}
        <label className='sidebar-label-container'>
          <input
            onChange={handleChange} 
            type="radio"
            name='location'
            id='all'
            value="all"
             // Pass handleChange directly
          />
          <span className='checkmark'></span> All
        </label>

        {/* Location-specific Options */}
        <label className='sidebar-label-container'>
          <input
            onChange={handleChange}
            type="radio"
            name='location'
            value="london"
              // London
          />
          <span className='checkmark'></span> London
        </label>

        <label className='sidebar-label-container'>
          <input
            onChange={handleChange} 
            type="radio"
            name='location'
            value="seattle"
             // Seattle
          />
          <span className='checkmark'></span> Seattle
        </label>

        <label className='sidebar-label-container'>
          <input
          onChange={handleChange}
          type="radio"
          name='location'
          value="madrid"
          />
          <span className='checkmark'></span> Madrid
        </label>

        <label className='sidebar-label-container'>
          <input
           onChange={handleChange} 
           type="radio"
           name='location'
           value="boston"
              // Boston
          />
          <span className='checkmark'></span> Boston
        </label>
      </div>
    </div>
  );
}

export default Location;
