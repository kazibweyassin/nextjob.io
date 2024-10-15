import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import CreatableSelect from 'react-select/creatable';

const CreateJob = () => {
  // State to track selected skills
  const [selectedOption, setSelectedOption] = useState([]);

  // Initialize react-hook-form
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

  // Form submission handler
  const onSubmit = async (data) => {
    // Store selected skills in the data
    data.skills = selectedOption.map(option => option.value); 

    try {
      const response = await fetch("http://localhost:3000/post-job", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.acknowledged) {
        alert("Job posted successfully");
        reset(); // Reset the form after successful submission
      } else {
        console.error("Failed to post the job:", result.message);
      }
    } catch (error) {
      console.error("Error posting job:", error);
    }
  };

  // Options for the skills dropdown
  const options = [
    { value: "Python", label: "Python" },
    { value: "C++", label: "C++" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "Docker", label: "Docker" },
    { value: "React", label: "React" },
    { value: "MySQL", label: "MySQL" },
    { value: "NodeJS", label: "NodeJS" }
  ];

  // Handle skill selection changes
  const handleSkillChange = (selected) => {
    setSelectedOption(selected || []);  // Update selectedOption state
  };

  return (
    <div className='max-w-screen-xl container mx-auto px-4 lg:px-24'>
      {/* Form container */}
      <div className='bg-[#FAFAFA] py-10 px-4 lg:px-16'>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>

          {/* First Row - Job Title & Company Name */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            {/* Job Title */}
            <div>
              <label className='block mb-2 text-lg'>Job Title</label>
              <input
                type="text"
                placeholder="Web Developer"
                {...register("jobTitle", { required: "Job title is required" })}
                className='create-job-input'
              />
              {errors.jobTitle && <p className="text-red-500">{errors.jobTitle.message}</p>}
            </div>

            {/* Company Name */}
            <div>
              <label className='block mb-2 text-lg'>Company Name</label>
              <input
                type="text"
                placeholder="Ex: ALX"
                {...register("companyName", { required: "Company name is required" })}
                className='create-job-input'
              />
              {errors.companyName && <p className="text-red-500">{errors.companyName.message}</p>}
            </div>
          </div>

          {/* Second Row - Minimum Salary & Maximum Salary */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
            {/* Minimum Salary */}
            <div>
              <label className='block mb-2 text-lg'>Minimum Salary</label>
              <input
                type="text"
                placeholder="$20k"
                {...register("minPrice", { required: "Minimum salary is required" })}
                className='create-job-input'
              />
              {errors.minPrice && <p className="text-red-500">{errors.minPrice.message}</p>}
            </div>

            {/* Maximum Salary */}
            <div>
              <label className='block mb-2 text-lg'>Maximum Salary</label>
              <input
                type="text"
                placeholder="$120k"
                {...register("maxPrice", { required: "Maximum salary is required" })}
                className='create-job-input'
              />
              {errors.maxPrice && <p className="text-red-500">{errors.maxPrice.message}</p>}
            </div>
          </div>

          {/* Third Row - Posting Date & Salary Type */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            {/* Posting Date */}
            <div>
              <label className='block mb-2 text-lg'>Posting Date</label>
              <input
                type="date"
                {...register("postingDate", { required: "Posting date is required" })}
                className='create-job-input'
              />
              {errors.postingDate && <p className="text-red-500">{errors.postingDate.message}</p>}
            </div>

            {/* Salary Type */}
            <div>
              <label className='block mb-2 text-lg'>Salary Type</label>
              <select {...register("salaryType")} className='create-job-input'>
                <option value="">Choose Salary Type</option>
                <option value="perHour">Hourly</option>
                <option value="perMonth">Monthly</option>
                <option value="perYear">Yearly</option>
              </select>
            </div>

            {/* Experience Level */}
            <div>
              <label className='block mb-2 text-lg'>Experience Level</label>
              <select {...register("experienceLevel")} className='create-job-input'>
                <option value="">Choose Experience Level</option>
                <option value="Any Experience">Any Experience</option>
                <option value="Internship">Internship</option>
                <option value="Remote">Work Remotely</option>
              </select>
            </div>
          </div>

          {/* Fourth Row - Job Location */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            {/* Job Location */}
            <div>
              <label className='block mb-2 text-lg'>Job Location</label>
              <input
                type="text"
                placeholder="London"
                {...register("jobLocation", { required: "Job location is required" })}
                className='create-job-input'
              />
              {errors.jobLocation && <p className="text-red-500">{errors.jobLocation.message}</p>}
            </div>
          </div>

          {/* Fifth Row - Required Skills */}
          <div>
            <label className='block mb-2 text-lg'>Required Skills</label>
            <CreatableSelect
              value={selectedOption}
              onChange={handleSkillChange}  // Set selected skills
              options={options}
              isMulti
              className='create-job-input py-4'
            />
          </div>

          {/* Sixth Row - Company Logo & Employment Type */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            {/* Company Logo */}
            <div>
              <label className='block mb-2 text-lg'>Company Logo URL</label>
              <input
                type="url"
                placeholder="Paste your company logo URL: https://example.com/logo.png"
                {...register("companyLogo")}
                className='create-job-input'
              />
            </div>

            {/* Employment Type */}
            <div>
              <label className='block mb-2 text-lg'>Employment Type</label>
              <select {...register("employmentType")} className='create-job-input'>
                <option value="">Choose Employment Type</option>
                <option value="Temporary">Temporary</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
              </select>
            </div>
          </div>

          {/* 7th row - Job Description */}
          <div className='create-jobs-flex'>
            <label className='block mb-2 text-lg'>Job Description </label>
            <textarea className='w-full pl-3 py-1.5 focus:outline-none'
              rows={6}
              defaultValue="Olorum reprehenderit sunt ullam porro vitae perferendis nostrum inventore facere nemo culpa"
              placeholder='Job Description'
              {...register("description")}
            />
          </div>

          {/* 8th row - Job Posted By */}
          <div className='w-full'>
            <label className='block mb-2 text-lg'>Job Posted By</label>
            <input
              type="email"
              placeholder='Your email'
              {...register("postedBy", { required: "Email is required" })}
              className='create-job-input'
            />
          </div>

          {/* Submit Button */}
          <input
            type="submit"
            value="Create Job"
            className='bg-blue-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-700'
          />
        </form>
      </div>
    </div>
  );
};

export default CreateJob;
