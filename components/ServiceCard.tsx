"use client";
import { FaPhone, FaInfoCircle } from "react-icons/fa";

export default function ServiceCard({ service }) {
  return (
    <div className="border p-4 rounded-lg shadow-md hover:shadow-lg">
      <h2 className="text-lg font-bold">{service.title}</h2>
      <p className="text-sm text-gray-600">Category: {service.category}</p>
      <p className="text-sm text-gray-600">Location: {service.location}</p>
      <p className="text-sm text-gray-600">Age: {service.age}</p>
      <div className="flex gap-2 mt-4">
        <button className="flex items-center gap-1 px-3 py-1 bg-green-600 text-white rounded-lg">
          <FaPhone /> Call
        </button>
        <button className="flex items-center gap-1 px-3 py-1 bg-purple-600 text-white rounded-lg">
          <FaInfoCircle /> More Info
        </button>
      </div>
    </div>
  );
}
