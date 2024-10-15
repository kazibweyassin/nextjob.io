import { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Jobs from './Jobs';
import Sidebar from '../components/sidebar/Sidebar';
import { NewsLetter } from '../components/NewsLetter';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(""); 
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Fetch jobs data
  useEffect(() => {
    setIsLoading(true);
    fetch("jobs.json")
      .then(res => res.json())
      .then(data => {
        setJobs(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Error fetching jobs:", err);
        setIsLoading(false);
      });
  }, []);

  // Handle input change from search query
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // Filter jobs based on search query and selected category
  const filterData = (jobs, selected, query) => {
    let filteredJobs = jobs;

    // Filter by search query
    if (query) {
      filteredJobs = filteredJobs.filter((job) =>
        job.jobTitle.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Filter by selected category
    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({
          jobLocation,
          maxPrice,
          experienceLevel,
          salaryType,
          employmentType,
        }) =>
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          experienceLevel.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected)
      );
    }

    return filteredJobs;
  };

  // Paginate the filtered data
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  };

  // Handle pagination
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Sidebar category change handler
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);  // Update selected category
    setCurrentPage(1);  // Reset to the first page on filter change
  };

  // Sidebar button click handler
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);  // Update selected category
    setCurrentPage(1);  // Reset to the first page on filter change
  };

  // Get the filtered data
  const filteredItems = filterData(jobs, selectedCategory, query);
  const { startIndex, endIndex } = calculatePageRange();
  const paginatedJobs = filteredItems.slice(startIndex, endIndex).map((data, i) => (
    <Card key={i} data={data} />
  ));

  return (
    <div>
      {/* Pass query and handleInputChange to Banner */}
      <Banner query={query} handleInputChange={handleInputChange} />

      <div className="bg-[#fafafa] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        {/* Sidebar for filtering (left side) */}
        <div className="bg-white p-4 rounded">
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>

        {/* Job cards */}
        <div className="col-span-2 bg-white p-4 rounded-sm">
          {isLoading ? (
            <p>Loading jobs...</p>
          ) : paginatedJobs.length > 0 ? (
            <Jobs result={paginatedJobs} />
          ) : (
            <>
              <h3>No Jobs Found</h3>
              <p>Try adjusting your filters or search query</p>
            </>
          )}

          {/* Pagination */}
          {paginatedJobs.length > 0 && (
            <div className="flex justify-center mt-4 space-x-8">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="hover:underline"
              >
                Previous
              </button>
              <span className="mx-2">
                Page {currentPage} of {Math.ceil(filteredItems.length / itemsPerPage)}
              </span>
              <button
                onClick={nextPage}
                disabled={currentPage === Math.ceil(filteredItems.length / itemsPerPage)}
                className="hover:underline"
              >
                Next
              </button>
            </div>
          )}
        </div>

        {/* right side content */}
        <div className="bg-white p-4 rounded">
          <NewsLetter />
        </div>
      </div>
    </div>
  );
};

export default Home;
