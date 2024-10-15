import React from 'react'
import Location from './Location'
import Salary from './Salary'
import { JobPostingData } from './JobPostingData'
import Experience from './Experience'
import { EmploymentType } from './EmploymentType'

const Sidebar = ({ handleChange, handleClick }) => {
  return (
    <div>
      <div className='space-y-5'>
        <h3 className='text-lg font-bold mb-2'>Filters</h3>
        <Location handleChange={handleChange} />
        <Salary handleChange={handleChange} handleClick={handleClick} />
        <JobPostingData handleChange={handleChange} />
        <Experience handleChange={handleChange} />
        <EmploymentType handleChange={handleChange} />
      </div>
    </div>
  );
};

export default Sidebar;
