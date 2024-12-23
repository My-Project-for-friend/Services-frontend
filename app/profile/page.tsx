"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function UserProfile() {
  const user = useSelector((state) => state.auth.user);
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <div>
      {/* Header */}
      <header className="bg-blue-600 dark:bg-blue-800 py-6 px-8 text-white shadow-lg">
        <h1 className="text-3xl font-bold">User Profile</h1>
      </header>

      {/* Profile Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8 px-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 w-full max-w-md">
          <div className="flex items-center justify-center">
            {/* <Image */}
            {/* src={user?.profileImage || "https://via.placeholder.com/100"} */}
            {/* alt="User Profile" */}
            {/* className="w-24 h-24 rounded-full border-4 border-blue-600 shadow-md" */}
            {/* width={100} */}
            {/* height={100} */}
            {/* /> */}
          </div>
          <div className="text-center mt-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
              {user?.name || "John Doe"}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {user?.email || "john.doe@example.com"}
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Location: {user?.location || "New York, USA"}
            </p>
          </div>
          <div className="mt-4 text-center">
            <button className="bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-800 text-white py-2 px-6 rounded shadow transition">
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* Ads Section */}
      <section className="mt-8 px-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center">
          Ads Posted
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* {ads?.map((ad, index) => ( */}
          {/* <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"> */}
          {/* <Image */}
          {/* src={ad.image || "https://via.placeholder.com/400x200"} */}
          {/* alt={`Ad Image ${index + 1}`} */}
          {/* className="w-full h-40 object-cover" */}
          {/* width={400} */}
          {/* height={200} */}
          {/* /> */}
          {/* <div className="p-4"> */}
          {/* <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">{ad.title}</h3> */}
          {/* <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{ad.description}</p> */}
          {/* <div className="flex items-center justify-between mt-4"> */}
          {/* <span className="text-sm font-medium text-blue-600 dark:text-blue-400"> */}
          {/* Category: {ad.category} */}
          {/* </span> */}
          {/* <button className="text-blue-600 hover:underline">View Details</button> */}
          {/* </div> */}
          {/* </div> */}
          {/* </div> */}
          {/* ))} */}
        </div>
      </section>
    </div>
  );
}
