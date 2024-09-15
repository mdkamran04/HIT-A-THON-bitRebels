import React from "react";

const Search = () => {
  return (
    <section className="h-full py-8 md:py-16 mt-28 px-4 md:px-8 bg-hero-pattern-dark text-center text-white">
      <h3 className="text-xl md:text-2xl font-bold">
        Better Information, Better Health
      </h3>
      <div className="mt-8 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
        <input
          type="text"
          placeholder="Location"
          className="px-4 py-2 rounded-lg focus:outline-none text-gray-800"
        />
        <input
          type="text"
          placeholder="Specialty"
          className="px-4 py-2 rounded-lg focus:outline-none text-gray-800"
        />
        <button className="bg-white text-blue-800 px-6 py-2 rounded-lg">
          Search
        </button>
      </div>
    </section>
  );
};

export default Search;
