import React from "react";

const ContactForm = () => {
  return (
    <section className="pb-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto p-8 rounded-md">
        <div className="text-center">
          <p className="text-text-colour font-semibold mt-2">GET IN TOUCH</p>
          <h2 className="text-2xl md:text-4xl font-bold text-text-colour font-serif">
            Contact
          </h2>
        </div>
        {/* Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 gap-x-0">
          <input
            type="text"
            placeholder="Name"
            className="p-4 bg-main-colour text-white rounded-tl-md border border-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-4 bg-main-colour text-white border rounded-tr-md border-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Subject */}
        <div className="">
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-4 bg-main-colour text-white border border-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Message */}
        <div className="mb-4">
          <textarea
            placeholder="Message"
            className="w-full h-40 p-4 m-0 bg-main-colour resize-none text-white border border-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-b-md"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button className="px-8 py-4 w-full bg-other-colour text-blue-800 font-semibold rounded-md hover:bg-blue-300 transition-all">
            SUBMIT
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
