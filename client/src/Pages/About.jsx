import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-100 text-gray-800 py-16">
      <div className="container mx-auto px-4 lg:px-20">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">About Us</h1>

        <div className="mb-12 text-center">
          <p className="text-xl text-gray-700 leading-8">
            Welcome to Remote Job Network, your number one source for remote job opportunities worldwide. 
            We're dedicated to providing you with the very best job postings, 
            focusing on flexibility, global reach, and empowering talented professionals like you to work from anywhere.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Our Mission */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700">
              Our mission is to connect talented individuals with remote job opportunities 
              from leading companies across the globe. We believe that location shouldn’t limit 
              access to great opportunities, and we are committed to building a bridge between 
              skilled professionals and businesses seeking to grow their remote teams.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
            <ul className="list-disc ml-6 text-gray-700">
              <li className="mb-2">Curated job listings from top companies worldwide</li>
              <li className="mb-2">User-friendly platform for both job seekers and employers</li>
              <li className="mb-2">Free access to job alerts and resources</li>
              <li className="mb-2">Focus on promoting diversity, inclusivity, and equal opportunities</li>
            </ul>
          </div>

          {/* Our Story */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-700">
              Founded in 2024, Remote Job Network began as a small initiative to help professionals in 
              developing countries find remote work. What started as a niche platform has now grown into 
              a global community of job seekers and employers, all working together to create a more 
              connected, accessible job market.
            </p>
          </div>

          {/* Our Values */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc ml-6 text-gray-700">
              <li className="mb-2">Integrity – We value honesty and transparency in all that we do.</li>
              <li className="mb-2">Innovation – We continuously strive to improve and create a better platform.</li>
              <li className="mb-2">Community – We believe in building a supportive global network of professionals.</li>
              <li className="mb-2">Diversity – We embrace diversity and work to ensure inclusivity for everyone.</li>
            </ul>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Meet Our Team</h2>
          <div className="flex justify-center">
            <p className="text-xl text-gray-700">
              Our dedicated team works hard to bring you the best job opportunities and support your career journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
