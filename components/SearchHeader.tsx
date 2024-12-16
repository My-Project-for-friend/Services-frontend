import { FaUser, FaLocationDot, FaSearch } from "react-icons/fa";

const SearchHeader = () => {
  const filters = [
    "Indian",
    "IN Indian",
    "Busty",
    "Black Hair",
    "Curvy",
    "BDSM",
    "Men",
    "At home",
  ];

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4">
        {/* Top Section */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center text-pink-500 text-2xl font-bold">
              <span>▲</span>
              <span className="text-blue-500">●</span>
              <span className="ml-1 text-gray-800 dark:text-white">skokka</span>
            </div>
            <div className="text-gray-500 text-sm dark:text-gray-300">
              <span className="text-gray-800 dark:text-white font-medium">
                India
              </span>{" "}
              <span>Ludhiana</span>
            </div>
          </div>

          {/* Post Your Ad */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition">
            <FaUser />
            <span>POST YOUR AD</span>
          </button>
        </div>

        {/* Search Section */}
        <div className="mt-4">
          {/* Search Input */}
          <div className="relative w-full md:w-1/2">
            <FaLocationDot className="absolute left-3 top-3 text-gray-500 dark:text-gray-400" />
            <input
              type="text"
              placeholder="Punjab - Ludhiana"
              className="pl-10 pr-10 py-2 w-full border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 dark:focus:ring-pink-500 dark:bg-gray-700 dark:text-white"
            />
            <FaSearch className="absolute right-3 top-3 text-pink-500 cursor-pointer dark:text-pink-300" />
          </div>

          {/* Filter Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {filters.map((filter, index) => (
              <div
                key={index}
                className="flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-600 rounded-lg text-gray-700 dark:text-gray-300 text-sm"
              >
                <span className="mr-2 text-gray-500 dark:text-gray-400">✕</span>
                {filter}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default SearchHeader;
