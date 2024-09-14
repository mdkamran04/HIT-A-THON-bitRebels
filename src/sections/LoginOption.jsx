import React from "react";
import MaxWidthContainer from "../components/mmw"; // Adjust the path based on your structure

const LoginOptions = () => {
  return (
    <section className="bg-hero-pattern py-16 px-16 h-full relative">
      <MaxWidthContainer>
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Login Options */}
          <div className="flex flex-col space-y-4">
            {/* Button 1 */}
            <button className="bg-main-colour text-white px-6 py-4 h-20 text-2xl rounded-full w-64 text-center font-semibold hover:bg-blue-900 transition-all">
              Patient Login
            </button>

            {/* Button 2 */}
            <button className="bg-main-colour text-white px-6 py-4 h-20 text-2xl rounded-full w-64 text-center font-semibold hover:bg-blue-900 transition-all">
              Doctor's Login
            </button>

            {/* Button 3 */}
            <button className="bg-main-colour text-white px-6 py-4 h-20 text-2xl rounded-full w-64 text-center font-semibold hover:bg-blue-900 transition-all">
              Staff Login
            </button>

            {/* Button 4 */}
            <button className="bg-main-colour text-white px-6 py-4 h-20 text-2xl rounded-full w-64 text-center font-semibold hover:bg-blue-900 transition-all">
              Pharmacist Login
            </button>
          </div>

          {/* Avatar */}
          <div className="">
            <img
              className="h-[100vh] w-auto"
              src="/img/both.png"
              alt="Doctor Avatar"
            />
          </div>
        </div>
      </MaxWidthContainer>
    </section>
  );
};

export default LoginOptions;