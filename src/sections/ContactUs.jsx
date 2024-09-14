import React from "react";
import MaxWidthContainer from "../components/mmw";
import { Form } from "react-router-dom";
import ContactForm from "../components/Form";
import ContactFormNew from "../components/ContactFormNew";

const ContactUs = () => {
  return (
    <div className="bg-gray-50 py-12">
      <MaxWidthContainer>
        <div className="container mx-auto px-4">
          {/* Heading */}
          <h1 className="text-3xl font-bold text-center mb-10">
            Book an Appointment
          </h1>

          {/* Main Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form Section */}
            <ContactForm />
            <ContactFormNew />
          </div>

          {/* Map Section */}
          <div className="mt-12">
            <h2 className="text-xl font-bold mb-6">Our Location</h2>
            <div className="relative w-full h-0 pb-[56.25%]">
              {" "}
              {/* 16:9 aspect ratio */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24176.928376365987!2d-74.01305562499999!3d40.7127284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDAlMjA0MicyNS4wIlMgNzTCsDAwJzA1LjAiVw!5e0!3m2!1sen!2sus!4v1637425734269!5m2!1sen!2sus"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-lg text-center">
              <h3 className="text-lg font-bold mb-2">Emergency</h3>
              <p className="text-gray-600">+1 (255) 763 184</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg text-center">
              <h3 className="text-lg font-bold mb-2">Location</h3>
              <p className="text-gray-600">1234 Some place, Some city</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg text-center">
              <h3 className="text-lg font-bold mb-2">Working Hours</h3>
              <p className="text-gray-600">Mon-Fri: 08:00 AM - 07:00 PM</p>
              <p className="text-gray-600">Sun: Emergency only</p>
            </div>
          </div>
        </div>
      </MaxWidthContainer>
    </div>
  );
};

export default ContactUs;
