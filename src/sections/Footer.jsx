import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa"; // Importing the icons
import MaxWidthContainer from "../components/mmw";

const Footer = () => {
  return (
    <footer className="bg-main-colour text-white py-12">
      <MaxWidthContainer>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Column 1: Logo and tagline */}
            <div className="mb-8 md:mb-0">
              <h2 className="text-2xl font-bold">MEDI BRIDGE</h2>
              <p className="mt-2">
                Leading the Way in Medical Excellence, Trusted Care.
              </p>
            </div>

            {/* Column 2: Important Links */}
            <div className="mb-8 md:mb-0">
              <h3 className="text-lg font-semibold">Important Links</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Appointment
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Doctors
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact Us */}
            <div className="mb-8 md:mb-0">
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <ul className="mt-2 space-y-2">
                <li>Call: (+254) 717 783 146</li>
                <li>Email: medin@gmail.com</li>
                <li>Address: 0123 Some place, Some country</li>
              </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div className="mb-8 md:mb-0">
              <h3 className="text-lg font-semibold">Newsletter</h3>
              <div className="mt-2">
                <input
                  type="email"
                  className="p-2 rounded-lg w-full text-gray-800"
                  placeholder="Enter your email address"
                />
                <button className="bg-blue-600 text-white mt-2 px-4 py-2 rounded-lg hover:bg-blue-700 transition w-full sm:w-auto">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom part of the footer */}
          <div className="mt-8 border-t border-blue-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>© 2024 MediBridge All Rights Reserved by BitRebels</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-300">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </MaxWidthContainer>
    </footer>
  );
};

export default Footer;
