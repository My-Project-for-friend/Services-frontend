import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const CardList = () => {
  const cards = [
    {
      id: 1,
      image: "/placeholder.png",
      title: "HOT Ludhiana Call Girls Available 24/7",
      description: "Luxury companionship with verified girls, available 24/7.",
      location: "Ludhiana, India",
      contact: "9876543210",
    },
    {
      id: 2,
      image: "/placeholder.png",
      title: "Gorgeous College Girls in Ludhiana",
      description: "Meet beautiful college girls in Ludhiana.",
      location: "Ludhiana Center",
      contact: "9876543222",
    },
    // Add more card objects as needed
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
        >
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-52 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">{card.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{card.description}</p>
            <div className="flex items-center text-gray-500 text-sm">
              <FaMapMarkerAlt className="mr-2" />
              <span>{card.location}</span>
            </div>
            <div className="flex items-center text-gray-500 text-sm mt-2">
              <FaPhone className="mr-2" />
              <span>{card.contact}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
