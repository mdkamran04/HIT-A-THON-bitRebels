import React from "react";
import MaxWidthContainer from "../components/mmw"; // Adjust the path according to your file structure

const Hero = () => {
  return (
    <section className="bg-hero-pattern py-16 relative">
      <MaxWidthContainer>
        <div className="flex flex-col items-center justify-center text-center relative">
          {/* Background Image and Text */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0">
            <h1 className="text-4xl md:text-6xl lg:text-8xl text-main-colour font-bold">
              <b>MEDI</b>
            </h1>
            <img
              className="h-32 md:h-48 lg:h-60 w-auto mx-4 transition-all duration-300 ease-in-out"
              src="/img/avatar.png"
              alt="Doctor Avatar"
            />
            <h1 className="text-4xl md:text-6xl lg:text-8xl text-main-colour font-bold">
              <b>BRIDGE</b>
            </h1>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-8">
            {/* Button 1 */}
            <a
              href="#"
              className="bg-blue-800 text-white px-6 py-3 rounded-xl flex items-center space-x-2 hover:bg-blue-700 transition"
            >
              <span>Book an Appointment</span>
              <img
                src="/icons/Calendar.png"
                alt="Calendar Icon"
                className="h-6 w-6"
              />
            </a>

            {/* Button 2 */}
            <a
              href="#"
              className="bg-blue-300 text-blue-800 px-6 py-3 rounded-xl flex items-center space-x-2 hover:bg-blue-200 transition"
            >
              <span>Book an Appointment</span>
              <img
                src="/icons/team2.png"
                alt="People Icon"
                className="h-6 w-6"
              />
            </a>

            {/* Button 3 */}
            <a
              href="#"
              className="bg-blue-800 text-white px-6 py-3 rounded-xl flex items-center space-x-2 hover:bg-blue-700 transition"
            >
              <span>Book an Appointment</span>
              <img
                src="/icons/Cash.png"
                alt="Payment Icon"
                className="h-6 w-6"
              />
            </a>
          </div>
        </div>
      </MaxWidthContainer>
    </section>
  );
};

export default Hero;
