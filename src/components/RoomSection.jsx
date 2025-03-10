import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RoomCard from "./RoomCard";
import RoomImageA from "../assets/rooms/a.jpg";
import RoomImageB from "../assets/rooms/b.jpg";
import RoomImageC from "../assets/rooms/c.jpg";
import RoomImageD from "../assets/rooms/d.jpg";

const roomsData = [
  {
    id: 1,
    name: "Junior Suite",
    price: 150,
    image: RoomImageA,
    description:
      "Spacious, bright guestrooms with tasteful furnishing, wooden floor.",
    occupancy: "1-2 Persons",
    wifi: "Free Wifi",
    bedType: "Twin Bed",
    breakfast: "Breakfast Included",
    size: "200 sqft room",
    pool: "Swimming Pool",
  },
  {
    id: 2,
    name: "Deluxe Room",
    price: 180,
    image: RoomImageB,
    description: "Elegant rooms with modern decor and stunning views.",
    occupancy: "2-3 Persons",
    wifi: "Free Wifi",
    bedType: "King Bed",
    breakfast: "Breakfast Included",
    size: "250 sqft room",
    pool: "Swimming Pool",
  },
  {
    id: 3,
    name: "Superior Room",
    price: 200,
    image: RoomImageC,
    description: "Premium room with luxury amenities and comfort.",
    occupancy: "2-4 Persons",
    wifi: "Free Wifi",
    bedType: "Queen Bed",
    breakfast: "Breakfast Included",
    size: "300 sqft room",
    pool: "Swimming Pool",
  },
  {
    id: 4,
    name: "Executive Suite",
    price: 250,
    image: RoomImageD,
    description:
      "Spacious suite with separate living area and exclusive services.",
    occupancy: "4-5 Persons",
    wifi: "Free Wifi",
    bedType: "King Bed",
    breakfast: "Breakfast Included",
    size: "400 sqft room",
    pool: "Private Pool",
  },
];

const RoomSection = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-8">
        <h4 className="text-lg text-gray-600">Beach Resort Hotel</h4>
        <h1 className="text-4xl font-bold text-[#0f2454]">Rooms & Suites</h1>
      </div>
      <Slider {...sliderSettings}>
        {roomsData.map((room, index) => (
          <RoomCard key={room.id} room={room} index={index} />
        ))}
      </Slider>
    </div>
  );
};

export default RoomSection;
