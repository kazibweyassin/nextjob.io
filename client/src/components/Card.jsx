import React from 'react';
import { Link } from 'react-router-dom';
import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from 'react-icons/fi';


const Card = ({data}) => {

  const { companyName, companyLogo, minPrice, maxPrice, salaryType, jobTitle, employmentType, jobLocation, postingDate, description } = data;

  return (
    <section className='bg-white shadow-lg rounded-lg p-6 border border-gray-200 mb-6'>
      <Link to={"/"} className='flex gap-4 flex-col sm:flex-row items-start'>
        {/* Company Logo */}
        <img src={companyLogo} alt={`${companyName} Logo`} className='w-16 h-16 object-contain' />

        {/* Job Details */}
        <div>
          {/* Company Name and Job Title */}
          <h4 className='text-primary font-bold text-xl mb-1'>{companyName}</h4>
          <h3 className='text-lg font-semibold mb-2'>{jobTitle}</h3>

          {/* Job Metadata (Location, Employment Type, Salary, etc.) */}
          <div className='text-primary/70 text-base flex flex-wrap gap-4 mb-2'>
            <span className='flex items-center gap-2'>
              <FiMapPin className='text-lg' /> {jobLocation}
            </span>
            <span className='flex items-center gap-2'>
              <FiClock className='text-lg' /> {employmentType}
            </span>
            <span className='flex items-center gap-2'>
              <FiDollarSign className='text-lg' /> {minPrice}-{maxPrice}K {salaryType}
            </span>
            <span className='flex items-center gap-2'>
              <FiCalendar className='text-lg' /> {postingDate}
            </span>
          </div>

          {/* Job Description */}
          <p className='text-base text-gray-600'>{description}</p>
        </div>
      </Link>
    </section>
  );
}

export default Card;
