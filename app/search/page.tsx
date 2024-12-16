"use client";
import CardList from "@/components/CardList";
import Filters from "@/components/Filters";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";
import { Pagination } from "@/components/ui/pagination";
import { useRouter } from "next/navigation";

import { useState } from "react";

const mockServices = [
  { id: 1, title: "Web Development", category: "IT", age: 25, location: "USA" },
  {
    id: 2,
    title: "Graphic Design",
    category: "Design",
    age: 30,
    location: "Canada",
  },
  {
    id: 3,
    title: "Content Writing",
    category: "Marketing",
    age: 28,
    location: "UK",
  },
];

export default function SearchPage() {
  const router = useRouter();
  const [filters, setFilters] = useState({ category: "", location: "" });

  const filteredServices = mockServices.filter(
    (service) =>
      service.title.toLowerCase().includes("".toString().toLowerCase()) &&
      (filters.category ? service.category === filters.category : true) &&
      (filters.location ? service.location === filters.location : true)
  );

  return (
    <>
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold text-gray-800">
            Ludhiana Call Girls Listings
          </h1>
          <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition">
            Contact Us
          </button>
        </div>
      </header>
      <CardList />
      <Pagination />
    </>
  );
}
