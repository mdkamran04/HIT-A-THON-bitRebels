import React from "react";
import Contact from "../components/Contact";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* About Us Section */}
      <section className="py-8 md:py-16 px-4 md:px-8 bg-white text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-blue-700">
          About Us
        </h2>
        <p className="mt-6 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
          MediBridge is a centralized platform that connects clinics with
          patients, streamlining the process of patient management and doctor
          appointments. By bridging the gap between healthcare providers and
          patients, it offers a seamless solution for booking appointments,
          enhancing communication, and improving healthcare access.
        </p>
        <p className="mt-4 text-lg md:text-xl text-blue-800 font-semibold">
          Bridging Care, Building Trust.
        </p>
      </section>

      {/* Doctor Image */}
      <section className="flex justify-center mt-6 md:mt-10">
        <img
          src="img/avatar.png"
          alt="Doctor Illustration"
          className="h-40 md:h-80"
        />
      </section>

      {/* Clinics Section */}
      <section className="py-8 md:py-16 px-4 md:px-8 bg-gray-100 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-blue-700">
          Find Clinics Near You
        </h3>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Clinic Card 1 */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
            <img
              src="img/doctor1.png"
              alt="Dr. Anika Singh"
              className="h-24 w-24 md:h-32 md:w-32 mx-auto rounded-full"
            />
            <h4 className="mt-4 text-lg md:text-xl font-semibold">
              Dr. Anika Singh
            </h4>
            <p className="text-gray-600">Cardiology</p>
          </div>

          {/* Clinic Card 2 */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
            <img
              src="img/doctor2.png"
              alt="Dr. Rahul Sharma"
              className="h-24 w-24 md:h-32 md:w-32 mx-auto rounded-full"
            />
            <h4 className="mt-4 text-lg md:text-xl font-semibold">
              Dr. Rahul Sharma
            </h4>
            <p className="text-gray-600">Orthopedic</p>
          </div>

          {/* Clinic Card 3 */}
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
            <img
              src="img/doctor3.png"
              alt="Dr. Simran Verma"
              className="h-24 w-24 md:h-32 md:w-32 mx-auto rounded-full"
            />
            <h4 className="mt-4 text-lg md:text-xl font-semibold">
              Dr. Simran Verma
            </h4>
            <p className="text-gray-600">Gynecology</p>
          </div>
        </div>
      </section>

      {/* Search and Contact Section */}
      <section className="py-8 md:py-16 px-4 md:px-8 bg-hero-pattern-dark text-center text-white">
        <h3 className="text-xl md:text-2xl font-bold">
          Better Information, Better Health
        </h3>
        <div className="mt-8 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="text"
            placeholder="Location"
            className="px-4 py-2 rounded-lg focus:outline-none text-gray-800"
          />
          <input
            type="text"
            placeholder="Specialty"
            className="px-4 py-2 rounded-lg focus:outline-none text-gray-800"
          />
          <button className="bg-white text-blue-800 px-6 py-2 rounded-lg">
            Search
          </button>
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default AboutUs;
