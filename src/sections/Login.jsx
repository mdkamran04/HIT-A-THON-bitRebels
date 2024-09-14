import React from "react";
import MaxWidthContainer from "../components/mmw";

const Login = () => {
  return (
    <section className="bg-hero-pattern">
      <MaxWidthContainer>
        <div className="min-h-screen flex flex-col md:flex-row">
          {/* Left Side - Login Form */}
          <div className="w-full md:w-1/2 flex items-center justify-center bg-white rounded-l-xl">
            <div className="max-w-md w-full space-y-8 p-6 md:p-10">
              <h2 className="text-center text-3xl font-bold text-gray-900">
                LOGIN
              </h2>
              <form className="mt-8 space-y-6">
                {/* Username Input */}
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label htmlFor="username" className="sr-only">
                      Username
                    </label>
                    <input
                      id="username"
                      name="username"
                      type="text"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                      placeholder="Username"
                    />
                  </div>
                  {/* Password Input */}
                  <div className="mt-4">
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                      placeholder="Password"
                    />
                  </div>
                </div>

                {/* Login Button */}
                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Login Now
                  </button>
                </div>

                {/* Login with Others */}
                <div className="mt-6">
                  <p className="text-center text-gray-500">Login with Others</p>
                  <div className="flex flex-col items-center space-y-4 mt-4">
                    <button className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center rounded-md">
                      <img
                        src="icons/google.png"
                        alt="Google"
                        className="h-5 mr-2"
                      />
                      Login with Google
                    </button>
                    <button className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center rounded-md">
                      <img
                        src="icons/facebook.png"
                        alt="Facebook"
                        className="h-5 mr-2"
                      />
                      Login with Facebook
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Right Side - Image and Text */}
          <div className="w-full md:w-1/2 hidden md:flex items-center justify-center relative bg-hero-pattern rounded-r-xl">
            <div className="text-white text-center p-8">
              <img
                src="img/avatar.png"
                alt="Doctor Illustration"
                className="h-64 mx-auto"
              />
              <h2 className="mt-6 text-2xl md:text-3xl font-semibold">
                Access to Care, Anywhere You Are
              </h2>
            </div>
          </div>
        </div>
      </MaxWidthContainer>
    </section>
  );
};

export default Login;
