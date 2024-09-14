import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center mb-10">Book an Appointment</h1>
        
        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Form Section */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-6">Book an Appointment</h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque turpis, nec fermentum.
            </p>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input type="text" placeholder="Name" className="border p-2 rounded w-full" />
                <input type="text" placeholder="Gender" className="border p-2 rounded w-full" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input type="email" placeholder="Email" className="border p-2 rounded w-full" />
                <input type="text" placeholder="Phone" className="border p-2 rounded w-full" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input type="date" placeholder="Date" className="border p-2 rounded w-full" />
                <input type="time" placeholder="Time" className="border p-2 rounded w-full" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input type="text" placeholder="Doctor" className="border p-2 rounded w-full" />
                <input type="text" placeholder="Department" className="border p-2 rounded w-full" />
              </div>
              <textarea
                placeholder="Message"
                className="border p-2 rounded w-full mb-4"
                rows="4"
              ></textarea>
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full">
                Submit
              </button>
            </form>
          </div>
          
          {/* Schedule Section */}
          <div className="bg-blue-700 text-white p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-6">Schedule Hours</h2>
            <ul className="space-y-4">
              <li className="flex justify-between">
                <span>Monday</span>
                <span>08:00 AM - 07:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Tuesday</span>
                <span>08:00 AM - 07:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Wednesday</span>
                <span>08:00 AM - 07:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Thursday</span>
                <span>08:00 AM - 07:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Friday</span>
                <span>08:00 AM - 07:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>08:00 AM - 07:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
            <div className="mt-6">
              <h3 className="text-lg font-bold">Emergency</h3>
              <p className="text-sm">Call: (237) 681-812-255</p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-6">Our Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24176.928376365987!2d-74.01305562499999!3d40.7127284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDAlMjA0MicyNS4wIlMgNzTCsDAwJzA1LjAiVw!5e0!3m2!1sen!2sus!4v1637425734269!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <h3 className="text-lg font-bold mb-2">Emergency</h3>
            <p className="text-gray-600">+1 (255) 763 184</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <h3 className="text-lg font-bold mb-2">Location</h3>
            <p className="text-gray-600">1234 Some place, Some city</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <h3 className="text-lg font-bold mb-2">Working Hours</h3>
            <p className="text-gray-600">Mon-Fri: 08:00 AM - 07:00 PM</p>
            <p className="text-gray-600">Sun: Emergency only</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ContactUs;
