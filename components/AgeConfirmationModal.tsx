"use client";

import React, { useState } from "react";
import { FaUserShield, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

const AgeConfirmationModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleAccept = () => {
    setIsOpen(false);
    // Add any further logic, e.g., storing acceptance in localStorage
  };

  const handleDecline = () => {
    alert("You must be 18+ to access this content.");
    // Redirect to a different page or handle decline logic
  };

  return (
    <Dialog open={isOpen}>
      <DialogContent className="max-w-md w-full rounded-lg p-6 shadow-lg bg-white text-center dark:bg-gray-800 dark:text-gray-200">
        <DialogHeader>
          <div className="flex justify-center mb-4">
            {/* 18+ Icon */}
            <div className="relative inline-block">
              <FaUserShield className="text-pink-500 text-6xl dark:text-pink-400" />
              <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs font-bold rounded-full px-2 py-0.5">
                18+
              </span>
            </div>
          </div>
          <DialogTitle className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            Please read the following warning before continuing
          </DialogTitle>
        </DialogHeader>
        <div className="text-gray-600 mt-2 dark:text-gray-300">
          <p>
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              I am over 18 years old
            </span>{" "}
            and I accept the viewing of explicit texts and images intended for
            an{" "}
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              adult audience
            </span>
            .
          </p>
          <p className="mt-4">
            I have read and accept the{" "}
            <a
              href="/terms"
              className="text-pink-600 hover:underline dark:text-pink-400"
            >
              Terms and Conditions
            </a>
          </p>
        </div>
        <div className="mt-6 space-y-4">
          {/* Accept Button */}
          <button
            onClick={handleAccept}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-pink-600 text-white rounded-lg shadow-md hover:bg-pink-700 transition duration-200 dark:bg-pink-700 dark:hover:bg-pink-800"
          >
            <FaCheckCircle className="text-lg" />
            <span className="font-semibold uppercase">Accept</span>
          </button>
          {/* Decline Button */}
          <button
            onClick={handleDecline}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 text-pink-600 border border-pink-600 rounded-lg shadow hover:bg-pink-100 transition duration-200 dark:text-pink-400 dark:border-pink-400 dark:hover:bg-pink-600 dark:hover:text-white"
          >
            <FaTimesCircle className="text-lg" />
            <span className="font-semibold">Decline</span>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AgeConfirmationModal;
