import React from "react";
import MaxWidthContainer from "../components/mmw";
import { Form } from "react-router-dom";
import ContactFormNew from "../components/ContactFormNew";

const ContactUs = () => {
  return (
    <div className="bg-gray-50 py-12">
      <MaxWidthContainer>
        <div className="container mx-auto px-4">
          {/* Heading */}
          <h1 className="text-3xl font-bold text-center mb-10">Book an Appointment</h1>

          {/* Main Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form Section */}
            <div className="flex justify-center">
              <form className="bg-white p-6 shadow-lg rounded-lg max-w-lg w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
                    <input type="text" className="w-full border border-gray-300 rounded-md p-2" />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">Gender</label>
                    <select className="w-full border border-gray-300 rounded-md p-2">
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
                    <input type="email" className="w-full border border-gray-300 rounded-md p-2" />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">Phone</label>
                    <input type="tel" className="w-full border border-gray-300 rounded-md p-2" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">Date</label>
                    <input type="date" className="w-full border border-gray-300 rounded-md p-2" />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">Time</label>
                    <input type="time" className="w-full border border-gray-300 rounded-md p-2" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">Doctor</label>
                    <select className="w-full border border-gray-300 rounded-md p-2">
                      <option>Dr. Smith</option>
                      <option>Dr. Jane</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">Department</label>
                    <select className="w-full border border-gray-300 rounded-md p-2">
                      <option>Cardiology</option>
                      <option>Neurology</option>
                    </select>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-medium text-gray-700">Message</label>
                  <textarea className="w-full border border-gray-300 rounded-md p-2 resize-none "></textarea>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md w-full">Submit</button>
              </form>
            </div>

            {/* Schedule Section */}
            <div className="flex justify-center">
              {/* Larger Outer Div */}
              <div className="bg-blue-300 bg-hero-pattern p-12 rounded-lg shadow-lg w-full max-w-lg">
                {/* Smaller Inner Content with Glassmorphism */}
                <div className="bg-blue-400 bg-hero-pattern bg-opacity-30 backdrop-blur-lg p-6 rounded-lg border border-white/20">
                  <h2 className="text-xl font-bold mb-4 text-white text-center">Schedule hours</h2>
                  <ul className="mb-6">
                    <li className="flex justify-between py-2 text-white">
                      <span>Monday</span>
                      <span>09:00 AM - 07:00 PM</span>
                    </li>
                    <li className="flex justify-between py-2 text-white">
                      <span>Tuesday</span>
                      <span>09:00 AM - 07:00 PM</span>
                    </li>
                    <li className="flex justify-between py-2 text-white">
                      <span>Wednesday</span>
                      <span>09:00 AM - 07:00 PM</span>
                    </li>
                    <li className="flex justify-between py-2 text-white">
                      <span>Thursday</span>
                      <span>09:00 AM - 07:00 PM</span>
                    </li>
                    <li className="flex justify-between py-2 text-white">
                      <span>Friday</span>
                      <span>09:00 AM - 07:00 PM</span>
                    </li>
                    <li className="flex justify-between py-2 text-white">
                      <span>Saturday</span>
                      <span>09:00 AM - 07:00 PM</span>
                    </li>
                    <li className="flex justify-between py-2 text-white">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                  <div className="mt-6 text-center">
                    <p className="text-lg font-bold text-white">Emergency</p>
                    <p className="text-white">(237) 681-812-255</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-12">
            <h2 className="text-xl font-bold mb-6 text-center">Our Location</h2>
            <div className="relative w-full h-0 pb-[56.25%]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24176.928376365987!2d-74.01305562499999!3d40.7127284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDAlMjA0MicyNS4wIlMgNzTCsDAwJzA1LjAiVw!5e0!3m2!1sen!2sus!4v1637425734269!5m2!1sen!2sus"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-lg text-center">
              <h3 className="text-lg font-bold mb-2">Emergency</h3>
              <p className="text-gray-600">+1 (254) 717 783 146</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg text-center">
              <h3 className="text-lg font-bold mb-2">Location</h3>
              <p className="text-gray-600">0123 Some place, Some country</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg text-center">
              <h3 className="text-lg font-bold mb-2">Working Hours</h3>
              <p className="text-gray-600">Mon-Sat: 09:00 AM - 08:00 PM</p>
              <p className="text-gray-600">Sunday Emergency only</p>
            </div>
          </div>
        </div>
      </MaxWidthContainer>
    </div>
  );
};

export default ContactUs;
