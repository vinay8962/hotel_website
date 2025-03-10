import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineDinnerDining, MdPeopleOutline } from "react-icons/md";
import { LuBedDouble } from "react-icons/lu";
import { CiWifiOn } from "react-icons/ci";
import { LiaSwimmingPoolSolid } from "react-icons/lia";

const RoomCard = ({ room }) => {
  return (
    <div className="relative mb-5">
      <div className="flex flex-col md:flex-row w-full justify-center">
        <figure className="relative md:w-3xl">
          <img
            src={room.image}
            alt={room.name}
            className="w-full transition-transform duration-300 hover:scale-95"
          />
        </figure>
        <div className="absolute md:relative h-full flex flex-col right-50 top-1/2 md:top-20 w-1/3 md:w-auto bg-green-100 px-12 py-14 transform md:translate-y-0 -translate-y-1/2">
          <h3 className="text-2xl text-[#2095AE] mb-1">
            ${room.price} <span className="text-sm text-gray-500">/ Night</span>
          </h3>
          <h4 className="text-3xl text-[#0f2454] mb-2">
            <a href="room-details.html">{room.name}</a>
          </h4>
          <p className="text-gray-600 mb-4">{room.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-600">
            <ul>
              <li className="flex items-center gap-2">
                <MdPeopleOutline /> {room.occupancy}
              </li>
              <li className="flex items-center gap-2">
                <CiWifiOn /> {room.wifi}
              </li>
            </ul>
            <ul>
              <li className="flex items-center gap-2">
                <LuBedDouble /> {room.bedType}
              </li>
              <li className="flex items-center gap-2">
                <MdOutlineDinnerDining /> {room.breakfast}
              </li>
            </ul>
            <ul>
              <li className="flex items-center gap-2">
                <i className="flaticon-clock-1"></i> {room.size}
              </li>
              <li className="flex items-center gap-2">
                <LiaSwimmingPoolSolid /> {room.pool}
              </li>
            </ul>
          </div>
          <hr className="my-4 border-gray-300" />
          <div className="flex justify-between items-center">
            <a className="text-[#676977] text-sm hover:text-[#0f2454] flex items-center gap-1">
              Details <FaArrowRightLong />
            </a>
            <a
              href="#"
              data-scroll-nav="1"
              className="bg-[#2095AE] text-white px-4 py-2 uppercase tracking-widest border border-[#2095AE] hover:bg-transparent hover:text-[#0f2454] transition"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
