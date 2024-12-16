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

const CategorySection = ({ title, icon, items }) => {
  return (
    <section className="bg-white rounded-lg shadow p-6 mb-6 text-center">
      <h2 className="text-xl font-bold text-gray-800 flex items-center justify-center gap-2 mb-4">
        {icon} {title}
      </h2>
      <div className="flex gap-4 flex-wrap justify-center">
        {items.map((item, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm cursor-pointer hover:bg-purple-200"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
};

const ServiceDetails = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <button className="text-purple-600 flex items-center gap-2">
            <FaArrowLeft /> Back to search
          </button>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-md">
            Post Your Ad
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto py-6 px-6 lg:px-16">
        {/* Title Section */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Sample Service Title Full Corporate 100% Safe and Secure Place
          </h1>
          <p className="text-gray-500 mt-2">
            22 years | Sample City, All Areas
          </p>
        </div>

        {/* Category Sections */}
        <CategorySection
          title="Call Girls"
          icon={<FaCircle className="text-pink-500 text-lg" />}
          items={[
            "Bangalore",
            "Delhi",
            "Hyderabad",
            "Mumbai",
            "Pune",
            "All cities",
          ]}
        />

        <CategorySection
          title="Massages"
          icon={<FaCircle className="text-pink-500 text-lg" />}
          items={["Bangalore", "Delhi", "Hyderabad", "Mumbai", "Pune"]}
        />

        <CategorySection
          title="Male Escorts"
          icon={<FaCircle className="text-pink-500 text-lg" />}
          items={["Bangalore", "Delhi", "Hyderabad", "Mumbai", "Pune"]}
        />

        {/* Existing Sections */}
        <section className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-600 leading-relaxed">
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
              <li key={index} className="text-gray-600 flex items-center gap-2">
                <FaCircle className="text-purple-500 text-xs" /> {service}
              </li>
            ))}
          </ul>
        </section>

        {/* Additional Sections */}
        <section className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Services</h2>
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
                className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm"
              >
                {service}
              </span>
            ))}
          </div>
        </section>

        {/* Location Section */}
        <section className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
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
                className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm"
              >
                {place}
              </span>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Contact Me</h2>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
              <FaPhone /> Call
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600">
              <FaWhatsapp /> WhatsApp
            </button>
          </div>
        </section>

        {/* Report Section */}
        <section className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex items-center justify-between">
            <button className="text-red-500 flex items-center gap-2">
              <AiOutlineFlag /> Report Abuse
            </button>
            <button className="text-gray-500 flex items-center gap-2">
              <AiOutlineShareAlt /> Share Ad
            </button>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Disclaimer</h2>
          <p className="text-gray-600 text-sm">
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
