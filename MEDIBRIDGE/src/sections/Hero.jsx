import React from "react";
import MaxWidthContainer from "../components/mmw"; // Adjust the path according to your file structure

const Hero = () => {
  return (
    <section className="bg-hero-pattern py-16 relative">
      <MaxWidthContainer>
        <div className="flex flex-col items-center justify-center text-center relative">
          {/* Background Image and Text */}
          <div className="flex flex-col md:flex-row justify-center items-center shrink-0">
            <h1 className="text-6xl md:text-8xl text-main-colour">Medi</h1>
            <img
              className="h-40 md:h-[50vh] w-auto transition-all duration-300 ease-in-out"
              src="/img/avatar.png"
              alt="Doctor Avatar"
            />
            <h1 className="text-6xl md:text-8xl text-main-colour">Bridge</h1>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center space-x-0 md:space-x-10  space-y-4 md:space-y-0 mt-8">
            {/* Button 1 */}
            <div className="bg-blue-800 text-white px-6 py-3 rounded-xl flex items-center space-x-2">
              <span>Book an Appointment</span>
              <img
                src="/icons/Calendar.png"
                alt="Calendar Icon"
                className="h-6 w-6"
              />
            </div>

            {/* Button 2 */}
            <div className="bg-blue-300 text-blue-800 px-6 py-3 rounded-xl flex items-center space-x-2">
              <span>Book an Appointment</span>
              <img
                src="/icons/team2.png"
                alt="People Icon"
                className="h-6 w-6"
              />
            </div>

            {/* Button 3 */}
            <div className="bg-blue-800 text-white px-6 py-3 rounded-xl flex items-center space-x-2">
              <span>Book an Appointment</span>
              <img
                src="/icons/Cash.png"
                alt="Payment Icon"
                className="h-6 w-6"
              />
            </div>
          </div>
        </div>
      </MaxWidthContainer>
    </section>
  );
};

export default Hero;
