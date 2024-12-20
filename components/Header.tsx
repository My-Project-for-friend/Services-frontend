"use client";
import Link from "next/link";
import { ModeToggle } from "./Toggle";
import { useState } from "react";
import dynamic from "next/dynamic";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

// Dynamically import modal to avoid SSR issues
const CreatePostDialog = dynamic(() => import("./Post"), { ssr: false });

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full h-[60px] bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 dark:from-indigo-800 dark:via-purple-800 dark:to-indigo-800 flex items-center justify-between px-4 sm:px-8">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-50 dark:text-gray-200 focus:outline-none"
          >
            {isMenuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex gap-6 items-center">
          <Link href="/">
            <span className="text-gray-50 hover:text-gray-200 cursor-pointer dark:text-gray-200 dark:hover:text-gray-300">
              Home
            </span>
          </Link>
          <Link href="/services">
            <span className="text-gray-50 hover:text-gray-200 cursor-pointer dark:text-gray-200 dark:hover:text-gray-300">
              Services
            </span>
          </Link>
          <Link href="/about">
            <span className="text-gray-50 hover:text-gray-200 cursor-pointer dark:text-gray-200 dark:hover:text-gray-300">
              About
            </span>
          </Link>
          <Link href="/contact">
            <span className="text-gray-50 hover:text-gray-200 cursor-pointer dark:text-gray-200 dark:hover:text-gray-300">
              Contact
            </span>
          </Link>
          <span
            className="text-gray-50 hover:text-gray-200 cursor-pointer dark:text-gray-200 dark:hover:text-gray-300"
            onClick={() => setIsModalOpen(true)}
          >
            Post Ad
          </span>
          <ModeToggle />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`absolute top-[60px] left-0 w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 dark:from-indigo-800 dark:via-purple-800 dark:to-indigo-800 z-10 flex flex-col items-center sm:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <Link href="/">
          <span
            className="block py-2 text-gray-50 hover:text-gray-200 cursor-pointer dark:text-gray-200 dark:hover:text-gray-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </span>
        </Link>
        <Link href="/services">
          <span
            className="block py-2 text-gray-50 hover:text-gray-200 cursor-pointer dark:text-gray-200 dark:hover:text-gray-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </span>
        </Link>
        <Link href="/about">
          <span
            className="block py-2 text-gray-50 hover:text-gray-200 cursor-pointer dark:text-gray-200 dark:hover:text-gray-300"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </span>
        </Link>
        <Link href="/contact">
          <span
            className="block py-2 text-gray-50 hover:text-gray-200 cursor-pointer dark:text-gray-200 dark:hover:text-gray-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </span>
        </Link>
        <span
          className="block py-2 text-gray-50 hover:text-gray-200 cursor-pointer dark:text-gray-200 dark:hover:text-gray-300"
          onClick={() => {
            setIsModalOpen(true);
            setIsMenuOpen(false);
          }}
        >
          Post Ad
        </span>
        <ModeToggle />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <CreatePostDialog onClose={() => setIsModalOpen(false)} />
      )}
    </nav>
  );
};

export default Header;
