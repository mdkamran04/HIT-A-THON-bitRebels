import React from "react";
import MaxWidthContainer from "../components/mmw";

const Info = () => {
  return (
    <MaxWidthContainer>
      <div className="hidden lg:block bg-white py-4 border-b border-gray-200">
        <div className="flex flex-col lg:flex-row items-center justify-between mx-auto">
          {/* Logo */}
          <div className="flex items-center space-x-2 mb-4 lg:mb-0">
            <img
              src="/icons/logo.png"
              alt="MediBridge Logo"
              className="h-12 lg:h-16 w-auto"
            />
            <h1 className="text-lg lg:text-2xl font-bold text-blue-600 font-serif">
              MediBridge
            </h1>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
            <div className="flex items-center space-x-2">
              <img
                src="/icons/call.svg"
                alt="Emergency"
                className="h-5 lg:h-6 w-auto"
              />
              <div>
                <p className="text-xs lg:text-sm text-gray-500">EMERGENCY</p>
                <p className="font-semibold text-blue-600">
                  (+254) 717 783 146
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <img
                src="/icons/time.svg"
                alt="Work Hour"
                className="h-5 lg:h-6 w-auto"
              />
              <div>
                <p className="text-xs lg:text-sm text-gray-500">WORK HOUR</p>
                <p className="font-semibold text-blue-600">
                  09:00 - 20:00 Everyday
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <img
                src="/icons/gps.svg"
                alt="Location"
                className="h-5 lg:h-6 w-auto"
              />
              <div>
                <p className="text-xs lg:text-sm text-gray-500">LOCATION</p>
                <p className="font-semibold text-blue-600">0123 Some Place</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthContainer>
  );
};

export default Info;
