import Link from "next/link";
import { ModeToggle } from "./Toggle";

const Header = () => {
  return (
    <nav className="w-full h-[60px] bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 flex items-center justify-between px-4 sm:px-8 dark:bg-gradient-to-r dark:from-indigo-800 dark:via-purple-800 dark:to-indigo-800">
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
      </div>
      <div className="flex gap-6 items-center">
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
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Header;
