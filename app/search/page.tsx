import React from "react";
import { FaUser, FaSearch, FaFlag } from "react-icons/fa";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ProfessionalsList = () => {
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
          />
          <Button className="flex items-center gap-2">
            <FaSearch />
            Search
          </Button>
        </div>

        {/* Professional Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array(6)
            .fill(null)
            .map((_, index) => (
              <Card
                key={index}
                className="transition-transform transform hover:scale-105 bg-neutral-50 dark:bg-neutral-800"
              >
                <CardHeader className="flex items-center justify-center bg-blue-500 dark:bg-blue-700 p-6 rounded-t-lg">
                  <FaUser className="text-6xl text-white" />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-lg font-semibold text-neutral-800 dark:text-neutral-50">
                    John Doe
                  </CardTitle>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
                    An experienced professional specializing in quality and
                    efficiency. Passionate about providing excellent service to
                    clients.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-neutral-700 dark:text-neutral-400 mt-4">
                    <div className="flex items-center gap-2">
                      <FaUser />
                      <span>29 yrs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaFlag />
                      <span>Indian</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-neutral-100 dark:bg-neutral-900 p-4 rounded-b-lg">
                  <p className="text-center text-sm text-neutral-500 dark:text-neutral-400">
                    Professional Member
                  </p>
                </CardFooter>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalsList;
