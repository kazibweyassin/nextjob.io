import React, { useState } from 'react';
import logo from '../assets/logo.png'; // Adjust the path to your logo file
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        { path: "/", title: "Search" },
        { path: "/myjobs", title: "My Jobs" },
        { path: "/salaries", title: "Compare Salaries" },
        { path: "/post-job", title: "Post a Remote Job" },
    ];

    return (
        <header className='max-w-screen-2x1 container mx-auto px-4'>
            <nav className="flex items-center justify-between p-4">
                <a href="/" className='flex items-center gap-2 text-2xl text-black'>
                    <img src={logo} alt="Logo" width={100} />
                    <span className='text-blue-500 font-bold text-3xl'>Normad</span>
                </a>
                {/* Hamburger menu for mobile */}
                <button 
                    onClick={handleMenuToggle} 
                    className="md:hidden focus:outline-none" 
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <FaXmark className='w-6 h-6 text-primary' /> : <FaBars className='w-6 h-6 text-primary' />}
                </button>
                {/* Navigation Links */}
                <ul className="hidden md:flex gap-12">
                    {navItems.map(({ path, title }) => (
                        <li key={path} className='text-base text-primary'>
                            <NavLink
                                to={path}
                                className={({ isActive }) =>
                                    isActive ? "active" : "text-black hover:text-blue-500"
                                }
                            >
                                {title}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Sign up and login */}
                <div className='hidden lg:block space-x-5'>
                    <Link to="/login" className='py-2 px-5 border rounded'>Log in</Link>
                    <Link to="/signup" className='py-2 px-5 border rounded bg-custom-blue text-white'>Sign Up</Link>
                </div>
            </nav>

            {/* Mobile navitems */}
            <div className={`md:hidden px-4 bg-black py-5 rounded-sm ${isMenuOpen ? "" : "hidden"}`}>
                <ul>
                    {navItems.map(({ path, title }) => (
                        <li key={path} className='text-base text-white first:text-white py-1'>
                            <NavLink
                                to={path}
                                className={({ isActive }) =>
                                    isActive ? "active" : "text-white hover:text-blue-500"
                                }
                                onClick={() => setIsMenuOpen(false)} // Close menu on link click
                            >
                                {title}
                            </NavLink>
                        </li>
                    ))}
                    
                </ul>

                <div className='flex justify-between space-x-5'>
                    <Link to="/login" className='py-2 px-5 border rounded text-white'>Log in</Link>
                    <Link to="/signup" className='py-2 px-5 border rounded bg-blue-500 text-white'>Sign Up</Link>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
