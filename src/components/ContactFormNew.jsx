import React from "react";
import ContactForm from "./Form";

const ContactFormNew = () => {
  return (
    <section className="bg-gray-50 py-16 px-8">
      {/* <div className="text-center">
        <p className="text-text-colour font-semibold mt-2">GET IN TOUCH</p>
        <h2 className="text-2xl md:text-4xl font-bold text-text-colour font-serif">
          Contact
        </h2>
      </div> */}

      {/* Contact Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Emergency */}
        <div className="bg-other-colour p-6 rounded-lg text-center">
          <img
            src="/icons/call.svg"
            alt="Emergency Icon"
            className="h-8 w-8 mx-auto mb-4"
          />
          <h4 className="font-semibold text-blue-700">EMERGENCY</h4>
          <p className="text-sm text-gray-600 mt-2">(+254) 717 783 146</p>
          <p className="text-sm text-gray-600">(+254) 7</p>
        </div>

        {/* Location */}
        <div className="bg-main-w text-white p-6 rounded-lg text-center">
          <img
            src="/icons/gps.svg"
            alt="Location Icon"
            className="h-8 w-8 mx-auto mb-4"
          />
          <h4 className="font-semibold">LOCATION</h4>
          <p className="text-sm mt-2">0123 Some place</p>
          <p className="text-sm">9876 Some country</p>
        </div>

        {/* Email */}
        <div className="bg-other-colour p-6 rounded-lg text-center">
          <img
            src="/icons/email.svg"
            alt="Email Icon"
            className="h-8 w-8 mx-auto mb-4"
          />
          <h4 className="font-semibold text-blue-700">EMAIL</h4>
         
          <p className="text-sm text-gray-600">medibridge@gmail.com</p>
        </div>

        {/* Working Hours */}
        <div className="bg-other-colour p-6 rounded-lg text-center">
          <img
            src="/icons/time.svg"
            alt="Working Hours Icon"
            className="h-8 w-8 mx-auto mb-4"
          />
          <h4 className="font-semibold text-blue-700">WORKING HOURS</h4>
          <p className="text-sm text-gray-600 mt-2">Mon-Sat 09:00-20:00</p>
          <p className="text-sm text-gray-600">Sunday Emergency only</p>
        </div>
      </div>
    </section>
  );
};

export default ContactFormNew;
