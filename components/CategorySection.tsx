const CategorySection = ({ title, icon, items }) => {
  return (
    <section className="bg-white rounded-lg shadow-md p-6 mb-6 text-center w-full dark:bg-gray-800 dark:text-gray-200">
      <h2 className="text-xl font-bold text-gray-800 flex items-center justify-center gap-2 mb-4 dark:text-gray-100">
        {icon} {title}
      </h2>
      <div className="flex gap-4 flex-wrap justify-center">
        {items.map((item, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm cursor-pointer hover:bg-purple-200 dark:bg-purple-700 dark:text-purple-300 dark:hover:bg-purple-600"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
