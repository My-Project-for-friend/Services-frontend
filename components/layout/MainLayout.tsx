import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      {/* Navbar */}
      <Header />

      {/* Main content */}
      <main className="flex-grow bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
