import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">About Us</h3>
            <p className="text-gray-400">
              We connect talented professionals with remote opportunities. Discover your next role and start working from anywhere in the world!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2 hover:text-white"><a href="/jobs">Find Jobs</a></li>
              <li className="mb-2 hover:text-white"><a href="/myjobs">My Jobs</a></li>
              <li className="mb-2 hover:text-white"><a href="/post-job">Post a Job</a></li>
              <li className="mb-2 hover:text-white"><a href="/contact">Contact Us</a></li>
              <li className="mb-2 hover:text-white"><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with the latest remote job opportunities directly in your inbox!</p>
            <form>
              <input
                type="email"
                className="w-full px-4 py-2 mb-4 text-black rounded"
                placeholder="Your Email Address"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full">
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Follow Us</h3>
            <ul className="flex space-x-4">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6 text-gray-400 hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8H7v4H3v4h4v8h5v-8h3l1-4h-4V9c0-.541.221-1 1-1h3V3h-3c-3.551 0-5 1.71-5 4v3z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6 text-gray-400 hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.556c-.883.39-1.832.654-2.828.775 1.016-.609 1.796-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.723 0-4.93 2.207-4.93 4.93 0 .386.044.763.128 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.422.724-.664 1.565-.664 2.475 0 1.709.869 3.213 2.188 4.096-.807-.026-1.566-.248-2.229-.617v.062c0 2.386 1.698 4.374 3.95 4.826-.413.113-.849.174-1.296.174-.317 0-.626-.031-.927-.088.627 1.956 2.445 3.379 4.6 3.42-1.68 1.318-3.801 2.103-6.102 2.103-.396 0-.788-.023-1.176-.069C2.3 21.484 5.033 22 7.957 22c9.564 0 14.797-7.93 14.797-14.797 0-.225-.005-.45-.015-.673C22.515 5.96 23.355 5.302 24 4.556z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6 text-gray-400 hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.452 20.452h-3.553v-5.568c0-1.328-.025-3.04-1.85-3.04-1.853 0-2.137 1.445-2.137 2.94v5.668h-3.552v-11.452h3.41v1.563h.048c.475-.899 1.635-1.85 3.364-1.85 3.6 0 4.266 2.367 4.266 5.448v6.292zM5.337 8.401c-1.144 0-2.07-.928-2.07-2.072 0-1.144.926-2.072 2.07-2.072s2.072.928 2.072 2.072c-.001 1.144-.928 2.072-2.072 2.072zm-1.774 12.051h3.553v-11.452h-3.553v11.452zm14.891-20.452h-15.492c-1.658 0-3.002 1.343-3.002 3.002v17.993c0 1.658 1.344 3.002 3.002 3.002h15.492c1.659 0 3.003-1.344 3.003-3.002v-17.993c0-1.659-1.344-3.002-3.003-3.002z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6 text-gray-400 hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.32 3.608 1.296.975.975 1.233 2.242 1.296 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.32 2.633-1.296 3.608-.975.975-2.242 1.233-3.608 1.296-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.32-3.608-1.296-.975-.975-1.233-2.242-1.296-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.32-2.633 1.296-3.608.975-.975 2.242-1.233 3.608-1.296 1.265-.058 1.645-.07 4.849-.07m0-2.163c-3.259 0-3.667.012-4.947.071-1.803.085-3.515.433-4.772 1.69-1.257 1.257-1.605 2.969-1.69 4.772-.059 1.28-.071 1.688-.071 4.947s.012 3.667.071 4.947c.085 1.803.433 3.515 1.69 4.772 1.257 1.257 2.969 1.605 4.772 1.69 1.28.059 1.688.071 4.947.071s3.667-.012 4.947-.071c1.803-.085 3.515-.433 4.772-1.69 1.257-1.257 1.605-2.969 1.69-4.772.059-1.28.071-1.688.071-4.947s-.012-3.667-.071-4.947c-.085-1.803-.433-3.515-1.69-4.772-1.257-1.257-2.969-1.605-4.772-1.69-1.28-.059-1.688-.071-4.947-.071zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 1 0 0-2.881z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-4 text-center">
          <p>&copy; 2024 Digital Normad.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
