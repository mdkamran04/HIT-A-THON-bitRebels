import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4 md:p-0">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-4xl shadow-lg rounded-lg overflow-hidden">
        
        {/* Left Section - Login Form */}
        <div className="flex flex-col justify-center items-center p-8 bg-white w-full h-full">
          <h1 className="text-3xl font-bold mb-6">LOGIN</h1>
          <form className="w-full max-w-md">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <button className="bg-blue-600 text-white w-full py-2 rounded-md mb-4 hover:bg-blue-700 transition">
              Login Now
            </button>
            <p className="text-center text-gray-500 mb-4">Login with Others</p>
            <div className="flex flex-col space-y-3">
              <button className="bg-white border border-gray-300 py-2 px-4 rounded-md flex items-center justify-center hover:bg-gray-100 transition">
                <img
                  src="icons/google.png"
                  alt="Google"
                  className="mr-2"
                  style={{ width: "20px", height: "20px" }} // Adjusted icon size
                />
                Login with Google
              </button>
              <button className="bg-white border border-gray-300 py-2 px-4 rounded-md flex items-center justify-center hover:bg-gray-100 transition">
                <img
                  src="icons/facebook.png"
                  alt="Facebook"
                  className="mr-2"
                  style={{ width: "20px", height: "20px" }} // Adjusted icon size
                />
                Login with Facebook
              </button>
            </div>
          </form>
        </div>

        {/* Right Section - Glassmorphism Doctor Image */}
        <div className="bg-hero-pattern relative flex flex-col justify-center items-center w-full h-full p-8">
          {/* Glassmorphism effect on the image container */}
          <div className="bg-hero-pattern absolute inset-0 bg-blue-500 bg-opacity-30 backdrop-blur-lg rounded-lg border border-white/20 z-10"></div>
          
          {/* Tagline */}
          <div className="relative z-20 mb-4 text-white text-xl font-bold text-center">
            Access to Care, <br /> Anywhere You Are
          </div>

          {/* Doctor Image */}
          <img
            src="img/avatar.png"
            alt="Doctor"
            className="relative z-20 w-1/2 max-w-xs md:max-w-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
