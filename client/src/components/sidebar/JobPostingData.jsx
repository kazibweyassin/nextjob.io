import React from 'react';

export const JobPostingData = ({ handleChange }) => {
  const now = new Date();
  
  // Proper time calculations
  const twentyFourHoursAgo = new Date(now - 24 * 60 * 60 * 1000);  // 24 hours
  const sevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);  // 7 days
  const thirtyDaysAgo = new Date(now - 30 * 24 * 60 * 60 * 1000);  // 30 days

  // Convert date to string
  const twentyFourHoursAgoDate = twentyFourHoursAgo.toISOString().slice(0, 10);
  const sevenDaysAgoDate = sevenDaysAgo.toISOString().slice(0, 10);
  const thirtyDaysAgoDate = thirtyDaysAgo.toISOString().slice(0, 10);

  return (
    <div>
      <h4 className='text-lg font-medium mb-2'>Date of posting</h4>

      <div className='flex flex-col'>
        {/* 'All Time' Option */}
        <label className='sidebar-label-container'>
          <input
            type="radio"
            name='postingDate'
            value="all"
            onChange={handleChange}
          />
          <span className='checkmark'></span> All Time
        </label>

        {/* Specific Date Options */}
        <label className='sidebar-label-container'>
          <input
            type="radio"
            name='postingDate'
            value={twentyFourHoursAgoDate}
            onChange={handleChange}
          />
          <span className='checkmark'></span> Last 24 Hours
        </label>

        <label className='sidebar-label-container'>
          <input
            type="radio"
            name='postingDate'
            value={sevenDaysAgoDate}
            onChange={handleChange}
          />
          <span className='checkmark'></span> Last 7 Days
        </label>

        <label className='sidebar-label-container'>
          <input
            type="radio"
            name='postingDate'
            value={thirtyDaysAgoDate}
            onChange={handleChange}
          />
          <span className='checkmark'></span> Last 30 Days
        </label>
      </div>
    </div>
  );
};
