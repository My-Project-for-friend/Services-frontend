import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-12 mt-12 dark:bg-gray-800 dark:text-gray-200">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* <!-- Left Section - About the Company --> */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">About Us</h2>
            <p className="text-sm text-gray-400 dark:text-gray-300">
              We are a leading company dedicated to providing top-notch services
              to clients worldwide. Our mission is to deliver innovative
              solutions that help businesses grow.
            </p>
            <div className="flex space-x-4">
              {/* <!-- Social Icons --> */}
              <a
                href="#"
                className="text-gray-400 hover:text-blue-500 transition dark:hover:text-blue-400"
              >
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition dark:hover:text-blue-300"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-pink-500 transition dark:hover:text-pink-400"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-500 transition dark:hover:text-red-400"
              >
                <i className="fab fa-youtube text-xl"></i>
              </a>
            </div>
          </div>

          {/* <!-- Right Section - Quick Links --> */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Quick Links</h2>
            <ul className="text-sm text-gray-400 space-y-2 dark:text-gray-300">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition dark:hover:text-gray-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition dark:hover:text-gray-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition dark:hover:text-gray-200"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition dark:hover:text-gray-200"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition dark:hover:text-gray-200"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- Bottom Section - Copyright --> */}
        <div className="mt-12 text-center border-t border-gray-800 pt-6 dark:border-gray-700">
          <p className="text-sm text-gray-400 dark:text-gray-300">
            &copy; 2024 Company Name. All Rights Reserved. Designed with{" "}
            <i className="fas fa-heart text-red-500"></i> by Our Team.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
