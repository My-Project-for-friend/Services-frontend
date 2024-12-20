"use client";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

interface ToastProviderProps {
  children: React.ReactNode;
}

export default function ToastProvider({ children }: ToastProviderProps) {
  const contextClass = {
    success: "bg-green-500 dark:bg-green-600 text-white",
    error: "bg-red-500 dark:bg-red-600 text-white",
    info: "bg-blue-500 dark:bg-blue-600 text-white",
    warning: "bg-yellow-500 dark:bg-yellow-600 text-black",
    default: "bg-gray-800 dark:bg-gray-700 text-white",
    dark: "bg-black text-white border border-gray-700",
  };

  return (
    <>
      {children}
      <ToastContainer
        toastClassName={(context) =>
          `${contextClass[context?.type || "default"]} 
          relative flex items-center p-4 rounded-lg shadow-lg overflow-hidden cursor-pointer`
        }
        bodyClassName={() =>
          "text-sm font-medium p-2 leading-relaxed dark:text-gray-200"
        }
        closeButtonClassName="text-white hover:text-gray-200 dark:hover:text-gray-500"
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
