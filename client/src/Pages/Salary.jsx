import React, { useEffect, useState } from 'react';
import PageHeader from './PageHeader';

const Salary = () => {
  const [searchText, setSearchText] = useState("");
  const [salary, setSalary] = useState([]);

  useEffect(() => {
    // Fetch salary data once when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch("salary.json");
        const data = await response.json();
        setSalary(data);
      } catch (error) {
        console.error("Error fetching salary data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run only once

  const handleSearch = () => {
    const filteredSalaries = salary.filter(
      (job) =>
        job.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
    setSalary(filteredSalaries);
  };

  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
      <PageHeader title={"Estimate Salary"} path={"Salary"} />
      <div className='mt-5'>
        <div className='search-box p-2 text-center mb-2'>
          <label htmlFor='search' className='sr-only'>Search</label>
          <input
            type="text"
            name='search'
            id='search'
            className='py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full'
            placeholder='Search for a salary estimate...'
            value={searchText} // Controlled component
            onChange={e => setSearchText(e.target.value)} // Update search text
          />
          <button onClick={handleSearch} className='bg-custom-blue text-white font-semibold px-10 py-2 mb-4'>
            Estimate
          </button>
        </div>
      </div>

      {/* Salary display */}
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 my-12 items-center'>
        {salary.length === 0 ? (
          <p>No salaries found. Please try a different search term.</p>
        ) : (
          salary.map((data) => (
            <div key={data.id} className='shadow px-4 py-8'>
              <h4 className='font-semibold text-xl'>{data.title}</h4>
              <p className='my-2 font-medium text-custom-blue'>{data.salary}</p>
              <div className='flex-wrap gap-4'>
                <a href="/" className='underline'>{data.status}</a>
                <a href="/" className='underline'>{data.skills}</a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Salary;
