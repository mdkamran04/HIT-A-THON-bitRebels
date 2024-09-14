import React from "react";
import MaxWidthContainer from "../components/mmw"; // Adjust the path based on your structure

const LoginOptions = () => {
  return (
    <section className=" py-16 px-4 md:px-16 h-full relative">
      <MaxWidthContainer>
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Login Options */}
          <div className="flex flex-col space-y-4">
            {/* Button 1 */}
            <button className="bg-main-colour text-white px-6 py-4 text-lg md:text-2xl rounded-full w-full md:w-64 text-center font-semibold hover:bg-blue-900 transition-all">
              Patient Login
            </button>

            {/* Button 2 */}
            <button className="bg-main-colour text-white px-6 py-4 text-lg md:text-2xl rounded-full w-full md:w-64 text-center font-semibold hover:bg-blue-900 transition-all">
              Doctor's Login
            </button>

            {/* Button 3 */}
            <button className="bg-main-colour text-white px-6 py-4 text-lg md:text-2xl rounded-full w-full md:w-64 text-center font-semibold hover:bg-blue-900 transition-all">
              Staff Login
            </button>

            {/* Button 4 */}
            <button className="bg-main-colour text-white px-6 py-4 text-lg md:text-2xl rounded-full w-full md:w-64 text-center font-semibold hover:bg-blue-900 transition-all">
              Pharmacist Login
            </button>
          </div>

          {/* Avatar Image */}
          <div className="flex justify-center items-center mt-8 md:mt-0">
            <img
              className="w-full h-auto max-w-xs md:max-w-md"
              src="/img/both.png"
              alt="Doctor and Patient Avatar"
            />
          </div>
        </div>
      </MaxWidthContainer>
    </section>
  );
};

export default LoginOptions;
