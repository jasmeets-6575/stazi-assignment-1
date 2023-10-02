import { GoPeople } from "react-icons/go";
import { BsFuelPumpFill } from "react-icons/bs";
import { PiEngineFill, PiSteeringWheelBold } from "react-icons/pi";
import { AiOutlineHeart } from "react-icons/ai";

const Card = () => {
  return (
    <div className="rounded-xl p-2 bg-gray-100 flex flex-col justify-between">
      <img
        className="h-[60%] w-full rounded-xl object-cover"
        src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Car picture"
      />
      <div className="p-3">
        <div className="flex justify-between">
          <h2 className="font-semibold text-[22px] tracking-wide">
            Toyota RAV4
          </h2>
          <h3 className="font-semibold rounded-lg px-3 py-[2px] border border-dashed border-blue-400">
            2021
          </h3>
        </div>

        <div className="grid grid-cols-2 py-2 border-b border-gray-300">
          <div className="flex space-x-2 items-center">
            <GoPeople className="text-blue-700" />
            <span className="font-medium">4 People</span>
          </div>
          <div className="flex space-x-2 items-center">
            <PiEngineFill className="text-blue-700" />
            <span className="font-medium">Hybrid</span>
          </div>
          <div className="flex space-x-2 items-center">
            <BsFuelPumpFill className="text-blue-700" />
            <span className="font-medium">6.1km/1-litre</span>
          </div>
          <div className="flex space-x-2 items-center">
            <PiSteeringWheelBold className="text-blue-700" />
            <span className="font-medium">Automatic</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-[10px]">
          <span className="text-[20px] font-semibold">$440/month</span>
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
