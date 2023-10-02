import { AiOutlineSearch, AiOutlineCaretDown } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex gap-8 px-6 py-4 bg-gray-100 w-[90vw] mx-auto rounded-xl shadow-lg">
      <form className="flex bg-white rounded-lg items-center justify-between w-1/5">
        <input
          type="text"
          className="rounded-lg outline-none px-4 py-2"
          placeholder="Search"
        />
        <button type="submit">
          <AiOutlineSearch className="text-gray-600 text-xl mr-[6px]" />
        </button>
      </form>

      <button className="flex items-center text-gray-700 gap-1 tracking-wide">
        <span>Relevance</span>
        <AiOutlineCaretDown />
      </button>

      <button className="flex items-center text-gray-700 gap-1 tracking-wide">
        <span>All Brands</span>
        <AiOutlineCaretDown />
      </button>
    </div>
  );
};
export default Navbar;
