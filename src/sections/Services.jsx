import React from 'react';

const Services = () => {
  return (
    <div className="bg-white py-16 px-8">
      {/* Service Banner */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-blue-900">Free Checkup</h1>
        
      </div>

      {/* Service Details Section */}
      <div className="flex flex-col lg:flex-row justify-between space-y-12 lg:space-y-0 lg:space-x-8">
        {/* Left Column - Service Categories */}
        <div className="w-full lg:w-1/3 space-y-4">
          <h2 className="text-xl font-semibold text-blue-700">Services</h2>
          <ul className="space-y-3">
            <li className="flex items-center space-x-3 text-lg text-blue-800">
              <span className="bg-blue-100 p-2 rounded-full">🔹</span>
              <span>Free Checkup</span>
            </li>
            <li className="flex items-center space-x-3 text-lg text-gray-700">
              <span className="bg-gray-100 p-2 rounded-full">🔹</span>
              <span>Cardiogram</span>
            </li>
            <li className="flex items-center space-x-3 text-lg text-gray-700">
              <span className="bg-gray-100 p-2 rounded-full">🔹</span>
              <span>Diabetes Testing</span>
            </li>
            <li className="flex items-center space-x-3 text-lg text-gray-700">
              <span className="bg-gray-100 p-2 rounded-full">🔹</span>
              <span>Blood Bank</span>
            </li>
            <li className="flex items-center space-x-3 text-lg text-gray-700">
              <span className="bg-gray-100 p-2 rounded-full">🔹</span>
              <span>Dermatology</span>
            </li>
            <li className="flex items-center space-x-3 text-lg text-gray-700">
              <span className="bg-gray-100 p-2 rounded-full">🔹</span>
              <span>Orthopedics</span>
            </li>
          </ul>
        </div>

        {/* Right Column - Service Description and Image */}
        <div className="w-full lg:w-2/3">
          {/* Service Image */}
          <img
            src="img/servicesimg.png"
            alt="Free Checkup"
            className="w-full h-72 object-cover rounded-lg mb-6"
          />

          {/* Service Description */}
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            A passion for putting patients first
          </h2>
          <ul className="flex items-center space-x-4 mb-6">
            <li className="flex items-center text-blue-600 space-x-2">
              <span>✔️</span>
              <span>A Passion for Healing</span>
            </li>
            <li className="flex items-center text-blue-600 space-x-2">
              <span>✔️</span>
              <span>5-Star Care</span>
            </li>
            <li className="flex items-center text-blue-600 space-x-2">
              <span>✔️</span>
              <span>A League of Excellence</span>
            </li>
            <li className="flex items-center text-blue-600 space-x-2">
              <span>✔️</span>
              <span>Always Caring</span>
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque
            tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat
            scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque
            tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat
            scelerisque tortor ornare ornare.
          </p>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">Meet the Team Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team Member Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="img/doctor1.png"
              alt="Doctor"
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-800">Dr. Emma Healy</h3>
            <p className="text-gray-500">Cardiology</p>
            <button className="mt-4 py-2 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              View Profile
            </button>
          </div>

          {/* Team Member Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="img/doctor2.png"
              alt="Doctor"
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-800">Dr. Jane Smith</h3>
            <p className="text-gray-500">Orthopedics</p>
            <button className="mt-4 py-2 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              View Profile
            </button>
          </div>

          {/* Team Member Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="img/doctor3.png"
              alt="Doctor"
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-800">Dr. Emily Clark</h3>
            <p className="text-gray-500">Gynecology</p>
            <button className="mt-4 py-2 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              View Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
