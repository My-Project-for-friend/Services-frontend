"use client";
import React from "react";
import {
  FaPhone,
  FaWhatsapp,
  FaArrowLeft,
  FaStar,
  FaCircle,
} from "react-icons/fa";
import { BiShieldAlt2 } from "react-icons/bi";
import { AiOutlineFlag, AiOutlineShareAlt } from "react-icons/ai";
// import CreatePostDialog from "@/components/Post";

const ServiceDetails = () => {
  return (
    <div className="bg-gray-50 min-h-screen dark:bg-gray-900">
      {/* <CreatePostDialog /> */}
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10 dark:bg-gray-800">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <button className="text-purple-600 flex items-center gap-2 dark:text-purple-400">
            <FaArrowLeft /> Back to search
          </button>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600">
            Post Your Ad
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto py-6 px-6 lg:px-16">
        {/* Title Section */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Sample Service Title Full Corporate 100% Safe and Secure Place
          </h1>
          <p className="text-gray-500 mt-2 dark:text-gray-400">
            22 years | Sample City, All Areas
          </p>
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {Array(6)
            .fill("")
            .map((_, index) => (
              <img
                key={index}
                src={`https://via.placeholder.com/300x200?text=Image+${
                  index + 1
                }`}
                alt={`Service Image ${index + 1}`}
                className="rounded-lg shadow-md dark:shadow-lg"
              />
            ))}
        </div>

        {/* About Section */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6 dark:bg-gray-800 dark:text-white">
          <h2 className="text-xl font-bold text-gray-800 mb-4 dark:text-white">
            About Me
          </h2>
          <p className="text-gray-600 leading-relaxed dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Sed id nisl nec nulla hendrerit pretium. Suspendisse
            potenti. Vivamus commodo turpis vel massa ultrices, id aliquet nunc
            volutpat.
          </p>
          <ul className="mt-4 space-y-2">
            {[
              "Service 1",
              "Service 2",
              "Service 3",
              "Service 4",
              "Service 5",
            ].map((service, index) => (
              <li
                key={index}
                className="text-gray-600 flex items-center gap-2 dark:text-gray-300"
              >
                <FaCircle className="text-purple-500 text-xs" /> {service}
              </li>
            ))}
          </ul>
        </section>

        {/* Services Section */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6 dark:bg-gray-800 dark:text-white">
          <h2 className="text-xl font-bold text-gray-800 mb-4 dark:text-white">
            Services
          </h2>
          <div className="flex gap-4 flex-wrap">
            {[
              "Oral",
              "Girlfriend Experience",
              "Threesome",
              "Massage",
              "More",
            ].map((service, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm dark:bg-purple-600 dark:text-white"
              >
                {service}
              </span>
            ))}
          </div>
        </section>

        {/* Location Section */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6 dark:bg-gray-800 dark:text-white">
          <h2 className="text-xl font-bold text-gray-800 mb-4 dark:text-white">
            Place of Service
          </h2>
          <div className="flex gap-4 flex-wrap">
            {[
              "At Home",
              "Hotel / Motel",
              "Events and Parties",
              "Outcall",
              "Other",
            ].map((place, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm dark:bg-blue-600 dark:text-white"
              >
                {place}
              </span>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6 dark:bg-gray-800 dark:text-white">
          <h2 className="text-xl font-bold text-gray-800 mb-4 dark:text-white">
            Contact Me
          </h2>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 dark:bg-green-400 dark:hover:bg-green-500">
              <FaPhone /> Call
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 dark:bg-purple-400 dark:hover:bg-purple-500">
              <FaWhatsapp /> WhatsApp
            </button>
          </div>
        </section>

        {/* Report Section */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6 dark:bg-gray-800 dark:text-white">
          <div className="flex items-center justify-between">
            <button className="text-red-500 flex items-center gap-2 dark:text-red-400">
              <AiOutlineFlag /> Report Abuse
            </button>
            <button className="text-gray-500 flex items-center gap-2 dark:text-gray-400">
              <AiOutlineShareAlt /> Share Ad
            </button>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-800 dark:text-white">
          <h2 className="text-lg font-bold text-gray-800 mb-4 dark:text-white">
            Disclaimer
          </h2>
          <p className="text-gray-600 text-sm dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non
            orci magna. Curabitur quis nunc id nisl consequat luctus nec et
            nulla.
          </p>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; 2024 Sample Company. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ServiceDetails;
