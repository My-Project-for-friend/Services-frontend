import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg dark:bg-gray-800 dark:text-gray-200">
        {/* Page content goes here */}
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
