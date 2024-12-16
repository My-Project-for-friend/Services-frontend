const Pagination = () => {
  return (
    <div className="flex justify-center mt-6">
      <button className="mx-1 px-3 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
        Previous
      </button>
      <button className="mx-1 px-3 py-2 bg-pink-500 text-white rounded hover:bg-pink-600">
        1
      </button>
      <button className="mx-1 px-3 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
        2
      </button>
      <button className="mx-1 px-3 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
        Next
      </button>
    </div>
  );
};

export default Pagination;
