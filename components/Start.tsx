import React from "react";

const Start = () => {
  return (
    <section className="w-full py-12 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-900 dark:text-white">
          How It Starts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-md shadow hover:shadow-lg flex flex-col items-center text-center dark:bg-gray-700 dark:text-white">
            <i className="fas fa-lightbulb text-4xl text-indigo-600 mb-4 dark:text-indigo-400"></i>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Step 1: Ideation
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Start with your idea. Share your vision, and we'll help shape it.
            </p>
          </div>
          <div className="p-6 bg-white rounded-md shadow hover:shadow-lg flex flex-col items-center text-center dark:bg-gray-700 dark:text-white">
            <i className="fas fa-cogs text-4xl text-purple-600 mb-4 dark:text-purple-400"></i>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Step 2: Planning
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Develop a structured plan with milestones to achieve your goals.
            </p>
          </div>
          <div className="p-6 bg-white rounded-md shadow hover:shadow-lg flex flex-col items-center text-center dark:bg-gray-700 dark:text-white">
            <i className="fas fa-rocket text-4xl text-green-600 mb-4 dark:text-green-400"></i>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              Step 3: Execution
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Bring the plan to life with our expert team and cutting-edge
              tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
