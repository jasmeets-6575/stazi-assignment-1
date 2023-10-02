import { GoPeople } from "react-icons/go";
import { BsFuelPumpFill } from "react-icons/bs";
import { PiEngineFill, PiSteeringWheelBold } from "react-icons/pi";
import { AiOutlineHeart } from "react-icons/ai";

const Card = () => {
  return (
    <div className="border border-red-500 rounded-xl p-2 bg-gray-100">
      <img
        className="h-1/2 w-full border border-blue-500 rounded-xl object-contain"
        src=""
        alt="Car picture"
      />
      <div className="p-3">
        <div className="flex justify-between">
          <h2>Toyota RAV4</h2>
          <span>2021</span>
        </div>

        <div className="grid grid-cols-2">
          <div className="flex space-x-2 items-center">
            <GoPeople />
            <span>4 People</span>
          </div>
          <div className="flex space-x-2 items-center">
            <PiEngineFill />
            <span>Hybrid</span>
          </div>
          <div className="flex space-x-2 items-center">
            <BsFuelPumpFill />
            <span>6.1km/1-litre</span>
          </div>
          <div className="flex space-x-2 items-center">
            <PiSteeringWheelBold />
            <span>Automatic</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span>$440/month</span>
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
