export default function Filters({ filters, setFilters }) {
  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-60 border p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h3 className="font-bold mb-4 text-gray-800 dark:text-gray-200">
        Filters
      </h3>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          Category
        </label>
        <select
          name="category"
          value={filters.category}
          onChange={handleFilterChange}
          className="w-full p-2 border rounded-lg bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300"
        >
          <option value="">All</option>
          <option value="IT">IT</option>
          <option value="Design">Design</option>
          <option value="Marketing">Marketing</option>
        </select>
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
          Location
        </label>
        <input
          type="text"
          name="location"
          value={filters.location}
          onChange={handleFilterChange}
          placeholder="Enter location"
          className="w-full p-2 border rounded-lg bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300"
        />
      </div>
    </div>
  );
}
