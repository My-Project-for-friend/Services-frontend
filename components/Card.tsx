import React from "react";

const Card = () => {
  return (
    <div className="p-6 bg-white rounded-md shadow-lg hover:shadow-xl dark:bg-gray-800 dark:text-gray-200">
      <img
        src={`https://via.placeholder.com/150?text=User`}
        alt={`User `}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-100">
        Service Title
      </h3>
      <p className="text-gray-700 mb-2 dark:text-gray-300">
        Brief description of the service offered by this user.
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        <i className="fas fa-user"></i> Age: 25
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        <i className="fas fa-map-marker-alt"></i> Location: City, Country
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        <i className="fas fa-flag"></i> Nationality: Nationality
      </p>
      <div className="flex justify-between mt-4">
        <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800">
          <i className="fas fa-phone"></i> Call
        </button>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-800">
          <i className="fas fa-info-circle"></i> More Info
        </button>
      </div>
    </div>
  );
};

export default Card;
