"use client";
import AgeConfirmationModal from "@/components/AgeConfirmationModal";
import Card from "@/components/Card";
import CategorySection from "@/components/CategorySection";

import Hero from "@/components/Hero";
import Start from "@/components/Start";
import { FaCircle } from "react-icons/fa";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-start bg-gray-50 min-h-screen dark:bg-gray-900">
      <AgeConfirmationModal />
      {/* Navigation */}
      {/* <Header /> */}

      {/* Hero Section */}
      <Hero />

      {/* How It Starts Section */}
      <Start />

      {/* User Cards Section */}
      <section className="w-full py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl font-semibold text-center mb-8 text-gray-900 dark:text-white">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((user, index) => (
              <Card key={index} />
            ))}
          </div>
        </div>
      </section>

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

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
}
