"use client";

import React, { useState } from "react";
import { FaSearch, FaFilter, FaTrash, FaChevronRight } from "react-icons/fa";
import {
  Dialog,
  // DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "./ui/dialog";

const SearchModal = ({ onClose }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <Dialog open={true} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="max-w-3xl w-full dark:bg-gray-800 dark:text-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-gray-900 dark:text-gray-100">
            <FaSearch /> Search
          </DialogTitle>
          <DialogClose
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            onClick={onClose}
          >
            &times;
          </DialogClose>
        </DialogHeader>
        <div className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <select className="p-2 border rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600">
              <option>Call Girls</option>
              <option>Massages</option>
              <option>Male Escorts</option>
            </select>
            <input
              type="text"
              placeholder="Search here..."
              className="p-2 border rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
            <select className="p-2 border rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600">
              <option>All the regions</option>
              <option>Region 1</option>
              <option>Region 2</option>
            </select>
            <select className="p-2 border rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600">
              <option>All the cities</option>
              <option>City 1</option>
              <option>City 2</option>
            </select>
          </div>
          <button className="flex items-center gap-2 mt-4 text-blue-500 hover:underline dark:text-blue-400">
            <FaFilter /> Filters
          </button>
          <ul className="mt-4 space-y-2">
            {[
              "Ethnicity",
              "Nationality",
              "Breast",
              "Hair",
              "Body type",
              "Services",
              "Attention to",
              "Place of service",
            ].map((filter, index) => (
              <li key={index} className="border-b dark:border-gray-700">
                <div
                  className="flex items-center justify-between py-2 hover:bg-gray-50 cursor-pointer dark:hover:bg-gray-700"
                  onClick={() => toggleDropdown(index)}
                >
                  <span className="text-gray-900 dark:text-gray-100">
                    {filter}
                  </span>
                  <FaChevronRight
                    className={`text-gray-400 transform transition-transform duration-200 dark:text-gray-500 ${
                      activeDropdown === index ? "rotate-90" : ""
                    }`}
                  />
                </div>
                {activeDropdown === index && (
                  <div className="pl-6 py-2 bg-gray-100 dark:bg-gray-700">
                    <ul className="space-y-1 flex items-center gap-x-2">
                      <li className="bg-white shadow-md hover:bg-gray-200 p-2 rounded dark:bg-gray-600 dark:hover:bg-gray-500">
                        Option 1
                      </li>
                      <li className="bg-white shadow-md hover:bg-gray-200 p-2 rounded dark:bg-gray-600 dark:hover:bg-gray-500">
                        Option 2
                      </li>
                      <li className="bg-white shadow-md hover:bg-gray-200 p-2 rounded dark:bg-gray-600 dark:hover:bg-gray-500">
                        Option 3
                      </li>
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between items-center mt-6">
          <button className="flex items-center gap-2 text-red-500 dark:text-red-400">
            <FaTrash /> Delete All
          </button>
          <button className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 flex items-center gap-2 dark:bg-purple-700 dark:hover:bg-purple-600">
            <FaSearch /> Search
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchModal;
