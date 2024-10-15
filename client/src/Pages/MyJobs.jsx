import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MyJobs = () => {
  const [jobs, setJobs] = useState([]); // Initialized as an empty array
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:3000/myjobs/kaib@gmail.com`)  // Make sure to replace with the correct email
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setJobs(data);
        } else {
          console.error("Expected an array but got:", data);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
        setIsLoading(false);
      });
  }, []);

  const handleSearch = () => {
    const filter = jobs.filter((job) =>
      job.jobTitle.toLowerCase().includes(searchText.toLowerCase())
    );
    setJobs(filter);
    setIsLoading(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      fetch(`http://localhost:3000/job/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Job deleted successfully!");
            // Remove the deleted job from the state
            setJobs(jobs.filter((job) => job._id !== id));
          }
        })
        .catch((error) => console.error("Error deleting job:", error));
    }
  };

  return (
    <div className="max-w-screen-2x1 container mx-auto xl:px-24 px-4">
      <div className="my-jobs-container">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-lg font-semibold">All my Jobs</h1>
          {/* "Post a Job" button */}
          <Link
            to="/post-job"
            className="bg-green-500 text-white font-semibold px-4 py-2 rounded hover:bg-green-600"
          >
            Post a Job
          </Link>
        </div>

        {/* Search Bar */}
        <div className="search-box p-2 text-center mb-2">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            name="search"
            id="search"
            className="py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full"
            placeholder="Search jobs by title"
          />
          <button
            className="bg-custom-blue text-white font-semibold px-8 rounded-sm mb-4"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      {/* Display loading spinner */}
      {isLoading ? (
        <div className="text-center">
          <p>Loading jobs...</p>
        </div>
      ) : (
        <section className="py-1 bg-custom-blue/50">
          <div>
            <h3 className="text-lg font-medium mb-2">ALL JOBS</h3>
            <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-500 bg-white shadow-md rounded-lg bg-clip-border">
              <table className="w-full text-left table-auto min-w-max text-slate-500">
                <thead>
                  <tr className="text-slate-500 border-b border-slate-300 bg-slate-50">
                    <th className="p-4">NO.</th>
                    <th className="p-4">TITLE</th>
                    <th className="p-4">COMPANY</th>
                    <th className="p-4">SALARY</th>
                    <th className="p-4">LOCATION</th>
                    <th className="p-4">EDIT</th>
                    <th className="p-4">DELETE</th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.length === 0 ? (
                    <tr>
                      <td colSpan="7" className="text-center p-4">
                        No jobs found
                      </td>
                    </tr>
                  ) : (
                    jobs.map((job, index) => (
                      <tr key={job._id} className="hover:bg-slate-50">
                        <td className="p-4">{index + 1}</td>
                        <td className="p-4">{job.jobTitle}</td>
                        <td className="p-4">{job.companyName}</td>
                        <td className="p-4">
                          ${job.minPrice} - ${job.maxPrice}
                        </td>
                        <td className="p-4">{job.jobLocation}</td>
                        <td className="p-4">
                          <Link
                            to={`/edit-job/${job._id}`}
                            className="text-blue-500 hover:underline"
                          >
                            Edit
                          </Link>
                        </td>
                        <td className="p-4">
                          <button
                            onClick={() => handleDelete(job._id)}
                            className="bg-red-500 text-white py-2 px-4 rounded-sm"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default MyJobs;
