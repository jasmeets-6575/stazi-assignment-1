import { GoPeople } from "react-icons/go";
import { BsFuelPumpFill } from "react-icons/bs";
import { PiEngineFill, PiSteeringWheelBold } from "react-icons/pi";
import { AiOutlineHeart } from "react-icons/ai";
import { Car } from "../utils/cardData";

interface Props {
  item: Car;
}

const Card = ({ item }: Props) => {
  return (
    <div className="rounded-xl p-2 bg-gray-100 shadow-md h-[450px]">
      <img
        className="h-[60%] w-full rounded-xl object-cover"
        src={item.img}
        alt="Car picture"
      />
      <div className="p-3 flex flex-col justify-between">
        <div className="flex justify-between">
          <h2 className="font-semibold text-[22px] tracking-wide">
            {item.name}
          </h2>
          <h3 className="font-semibold rounded-lg px-3 py-[2px] border border-dashed border-blue-400">
            {item.year}
          </h3>
        </div>

        <div className="grid grid-cols-2 py-2 border-b border-gray-300">
          <div className="flex space-x-2 items-center">
            <GoPeople className="text-blue-700" />
            <span className="font-medium">{item.seats} People</span>
          </div>
          <div className="flex space-x-2 items-center">
            <PiEngineFill className="text-blue-700" />
            <span className="font-medium">{item.engine}</span>
          </div>
          <div className="flex space-x-2 items-center">
            <BsFuelPumpFill className="text-blue-700" />
            <span className="font-medium">{item.fuel} km/litre</span>
          </div>
          <div className="flex space-x-2 items-center">
            <PiSteeringWheelBold className="text-blue-700" />
            <span className="font-medium">{item.type}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-[10px]">
          <span className="text-[20px] font-semibold">${item.price}/month</span>
          <div className="flex justify-between space-x-2 items-center">
            <AiOutlineHeart className=" text-[28px] p-[2.5px] text-blue-500 border border-blue-300 bg-blue-100 rounded-lg" />
            <button className="text-sm px-3 py-[6px] bg-blue-400 rounded-lg text-white tracking-wide font-bold">
              Rent now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
