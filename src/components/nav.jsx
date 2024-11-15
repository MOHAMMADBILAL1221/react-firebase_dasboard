import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-white text-xl font-bold">MyLogo</div>
        
        <button
          onClick={toggleMenu}
          className="text-white md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        <div className={`md:flex ${isOpen ? "block" : "hidden"} space-x-6`}>
          <a href="#" className="text-white hover:text-gray-300">
            Home
          </a>
          <Link to={"/dashboard"} className="text-white hover:text-gray-300">
            Dashboard
          </Link>
          <a href="#" className="text-white hover:text-gray-300">
            Services
          </a>
          <Link to={"/signup"} className="text-white hover:text-gray-300">
            Sign Up
          </Link>
          <a href="#" className="text-white hover:text-gray-300">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
