import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-main-colour">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
           
            {/* Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#"
                  className="text-white hover:underline px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-white hover:underline px-3 py-2 rounded-md text-sm font-medium"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="text-white hover:underline px-3 py-2 rounded-md text-sm font-medium"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="text-white hover:underline px-3 py-2 rounded-md text-sm font-medium"
                >
                  Doctors
                </a>
                <a
                  href="#"
                  className="text-white hover:underline px-3 py-2 rounded-md text-sm font-medium"
                >
                  News
                </a>
                <a
                  href="#"
                  className="text-white hover:underline px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            {/* Search Icon */}
            <div className="hidden md:block">
              <a
                href="#"
                className="text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </a>
            </div>
            {/* Appointment Button */}
            <a
              href="#"
              className="ml-4 bg-blue-300 hover:bg-blue-400 text-blue-900 font-bold py-2 px-4 rounded-full"
            >
              Appointment
            </a>
          </div>
          {/* Hamburger Menu for Mobile */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="text-white hover:underline block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:underline block px-3 py-2 rounded-md text-base font-medium"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-white hover:underline block px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </a>
            <a
              href="#"
              className="text-white hover:underline block px-3 py-2 rounded-md text-base font-medium"
            >
              Doctors
            </a>
            <a
              href="#"
              className="text-white hover:underline block px-3 py-2 rounded-md text-base font-medium"
            >
              News
            </a>
            <a
              href="#"
              className="text-white hover:underline block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
