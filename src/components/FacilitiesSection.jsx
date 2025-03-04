import {
  FaGlobe,
  FaCar,
  FaBed,
  FaSwimmingPool,
  FaWifi,
  FaUtensils,
} from "react-icons/fa";
import FacilityCard from "./FacilityCard";

const facilities = [
  {
    icon: <FaGlobe />,
    title: "Pick Up & Drop",
    description: "We’ll pick up from the airport while you relax on your ride.",
  },
  {
    icon: <FaCar />,
    title: "Parking Space",
    description: "Secure and spacious parking for all our guests.",
  },
  {
    icon: <FaBed />,
    title: "Room Service",
    description: "Enjoy 24/7 room service with excellent hospitality.",
  },
  {
    icon: <FaSwimmingPool />,
    title: "Swimming Pool",
    description: "Dive into our luxurious swimming pool and relax.",
  },
  {
    icon: <FaWifi />,
    title: "Fibre Internet",
    description: "High-speed internet to keep you connected.",
  },
  {
    icon: <FaUtensils />,
    title: "Breakfast",
    description: "Delicious breakfast to start your day right.",
  },
];

const FacilitiesSection = () => {
  return (
    <section className="py-20 px-5 md:px-30 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h5 className="text-lg text-primary uppercase font-medium">
            Our Services
          </h5>
          <h2 className="text-5xl font-normal font-primary text-secondPrimary">
            Hotel Facilities
          </h2>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <FacilityCard key={index} {...facility} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
