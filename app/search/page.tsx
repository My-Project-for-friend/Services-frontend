"use client";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useFetchPostsQuery } from "@/redux/api/postApi";
import ServiceCard from "@/components/ServiceCard";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setPosts } from "@/redux/slices/postSlice";
import SearchModal from "@/components/SearchModal";

const ProfessionalsList = () => {
  const { data, error, isLoading } = useFetchPostsQuery({ all: true });
  const dispatch = useDispatch();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/search`);
    }
  };

  useEffect(() => {
    if (data) {
      console.log("Raw data from RTK Query:", data);
      dispatch(setPosts(data));
    }
    if (error) {
      console.error("Error from RTK Query:", error);
    }
  }, [data, error]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner"></div> {/* Add a spinner component */}
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-red-600 text-center">
        Something went wrong. Please try again later.
      </p>
    );
  }

  return (
    <div className="flex justify-center mt-6 px-4">
      <div className="w-full max-w-6xl p-6 bg-white dark:bg-neutral-950 rounded-lg shadow-md flex flex-col gap-8">
        {/* Header */}
        <h1 className="text-3xl font-bold text-neutral-800 dark:text-neutral-50 text-center">
          Explore Professionals
        </h1>

        {/* Search Bar */}
        <div className="flex items-center gap-4">
          <Input
            type="text"
            className="flex-grow"
            placeholder="Search for professionals..."
            aria-label="Search input"
            value={query}
            onFocus={() => setIsModalOpen(true)} // Open modal on focus
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button
            className="flex items-center gap-2"
            aria-label="Search button"
            onClick={handleSearch}
          >
            <FaSearch />
            Search
          </Button>
        </div>

        {/* Professional Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data && data.length > 0 ? (
            data.map((item, index) => (
              <ServiceCard
                item={item}
                key={index}
                onClick={() => router.push(`/serviceDetails/${item?._id}`)}
              />
            ))
          ) : (
            <p className="text-center text-gray-600">No professionals found.</p>
          )}
        </div>
      </div>

      {/* SearchModal */}
      {isModalOpen && (
        <SearchModal onClose={() => setIsModalOpen(false)} /> // Pass onClose prop
      )}
    </div>
  );
};

export default ProfessionalsList;
