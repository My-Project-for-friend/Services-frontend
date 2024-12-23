"use client";

import React, { useEffect } from "react";
import { FaPhone, FaWhatsapp, FaArrowLeft, FaCircle } from "react-icons/fa";
import { BiShieldAlt2 } from "react-icons/bi";
import { AiOutlineFlag, AiOutlineShareAlt } from "react-icons/ai";
import { useParams } from "next/navigation";
import { useFetchPostsQuery } from "@/redux/api/postApi";

const ServiceDetails = () => {
  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id || "";
  const { data, error, isLoading } = useFetchPostsQuery({ all: true, id });

  useEffect(() => {
    if (data) {
      console.log("data ", data);
    }
    if (error) {
      console.log("error ", error);
    }
    console.log(id);
  }, [data, error, id]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10 dark:bg-gray-800">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <button
            className="text-purple-600 flex items-center gap-2 dark:text-purple-400"
            onClick={() => window.history.back()}
          >
            <FaArrowLeft /> Back to search
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto py-6 px-6 lg:px-16">
        {data && (
          <>
            {/* Title Section */}
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                {data[0]?.title}
              </h1>
              <p className="text-gray-500 dark:text-gray-400">
                {data[0]?.age} years | {data[0]?.city}, All Areas
              </p>
            </div>

            {/* Image Gallery */}
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
            <section className="bg-white rounded-lg shadow-md p-6 mb-6 dark:bg-gray-800">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                About Me
              </h2>
              <p className="text-gray-600 leading-relaxed dark:text-gray-400 mb-4">
                {data[0]?.description}
              </p>
              <div className="flex gap-4 flex-wrap">
                {data[0]?.typeOfService?.map((service, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm dark:bg-purple-600 dark:text-white"
                  >
                    {service}
                  </span>
                ))}
                <span className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm dark:bg-purple-600 dark:text-white">
                  {data[0]?.breastType}
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm dark:bg-purple-600 dark:text-white">
                  {data[0]?.hairType}
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm dark:bg-purple-600 dark:text-white">
                  {data[0]?.bodyType}
                </span>
              </div>
            </section>

            {/* Services Section */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-6 dark:bg-gray-800">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Services
              </h2>
              <div className="flex gap-4 flex-wrap">
                {data[0]?.services?.map((service, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm dark:bg-purple-600 dark:text-white"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </section>

            {/* Place of Service Section */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-6 dark:bg-gray-800">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Place of Service
              </h2>
              <div className="flex gap-4 flex-wrap">
                {data[0]?.placeOfService?.map((place, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm dark:bg-blue-600 dark:text-white"
                  >
                    {place}
                  </span>
                ))}
              </div>
            </section>

            {/* Payment Section */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-6 dark:bg-gray-800">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Payments
              </h2>
              <p className="text-gray-600 text-lg dark:text-gray-400">
                Price per hour:{" "}
                <span className="font-bold">₹{data[0]?.perHourRate}</span>
              </p>
            </section>

            {/* Contact Section */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-6 dark:bg-gray-800">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Contact Me
              </h2>
              <div className="flex gap-4">
                <button
                  className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 dark:bg-green-400"
                  onClick={() =>
                    (window.location.href = `tel:${data[0]?.phoneNo}`)
                  }
                >
                  <FaPhone /> Call {data[0]?.phoneNo}
                </button>
                <button
                  className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 dark:bg-purple-400"
                  onClick={() =>
                    window.open(`https://wa.me/91${data[0]?.phoneNo}`, "_blank")
                  }
                >
                  <FaWhatsapp /> WhatsApp {data[0]?.phoneNo}
                </button>
              </div>
            </section>

            {/* Report Section */}
            <section className="bg-white rounded-lg border border-pink-500 p-6 mb-6 dark:bg-gray-800">
              <h2 className="text-lg font-bold text-gray-700 dark:text-gray-100 flex items-center gap-2 mb-4">
                <AiOutlineFlag className="text-pink-500" /> Report Abuse
              </h2>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                <li>
                  Reports of intellectual property infringement can be notified
                  to:
                  <a
                    href="mailto:privacy@skokka.in"
                    className="text-pink-500 font-medium"
                  >
                    privacy@skokka.in
                  </a>
                  .
                </li>
                <li>
                  For illegal content cases, email:
                  <a
                    href="mailto:grievances@skokka.in"
                    className="text-pink-500 font-medium"
                  >
                    grievances@skokka.in
                  </a>
                  .
                </li>
              </ul>
            </section>

            {/* Disclaimer Section */}
            <section className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-800">
              <h2 className="text-lg font-bold text-gray-800 mb-4 dark:text-white">
                Disclaimer
              </h2>
              <p className="text-gray-600 text-sm dark:text-gray-400">
                Skokka.in does not intervene in relationships between end users
                and advertisers By accessing our website and using our services,
                the User is accepting our Terms and Conditions of use, and the
                commitment of getting informed about any change. The present ads
                in Skokka has been published by own initiative of the Advertiser
                under his complete responsibility. The publishing of such ads is
                not subjected to any type of prior verification by Skokka.in.
                Skokka.in will not be responsible about the veracity, legality,
                respect to the property right and possible displeasure with the
                public or moral order of the online contents entered by the user
                under any condition. Skokka.in offers publication and website
                navigation services of free Internet Ads. Skokka.in do not
                interpose or mediate between the User who navigates the website,
                the User who publishes the contents and the User who replies to
                adverts.
              </p>
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;
