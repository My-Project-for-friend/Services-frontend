"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import SearchModal from "./SearchModal";

const Hero = () => {
  const [query, setQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const router = useRouter();

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/search`);
    }
  };
  return (
    <>
      <header
        className="w-full h-[500px] bg-cover bg-center flex items-center justify-center text-white dark:bg-cover dark:bg-center"
        style={{
          backgroundImage: "url('/images/dashboard.jpg')",
        }}
      >
        <div className="text-center">
          <h1 className="text-4xl text-gray-900 dark:text-gray-200 font-bold mb-4">
            Welcome to Our Company
          </h1>
          <p className="text-lg mb-6 text-gray-900 dark:text-gray-300 font-bold">
            Providing top-notch services tailored to your needs.
          </p>
          <div className="flex justify-center items-center space-x-4">
            <input
              type="text"
              placeholder="Search for services..."
              value={query}
              onFocus={() => setIsModalOpen(true)} // Open modal on focus
              onChange={(e) => setQuery(e.target.value)}
              className="px-4 py-2 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:ring-indigo-500"
            />
            <button
              onClick={handleSearch}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition dark:bg-indigo-800 dark:hover:bg-indigo-700"
            >
              Search
            </button>
          </div>
        </div>
      </header>

      {/* SearchModal */}
      {isModalOpen && (
        <SearchModal onClose={() => setIsModalOpen(false)} /> // Pass onClose prop
      )}
    </>
  );
};

export default Hero;
