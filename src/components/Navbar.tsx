import { AiOutlineSearch, AiOutlineCaretDown } from "react-icons/ai";
import { useAppDispatch } from "../store/store";
import { setCurrentPage } from "../features/PaginationSlice";

interface INavbarProps {
  inputValue: string;
  handleInputChange: (query: string) => void;
}

const Navbar: React.FC<INavbarProps> = ({ inputValue, handleInputChange }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex gap-8 px-6 py-4 bg-gray-100 w-[90vw] mx-auto rounded-xl shadow-lg">
      <div className="flex bg-white rounded-lg items-center justify-between w-1/5">
        <input
          type="text"
          className="rounded-lg outline-none px-4 py-2"
          placeholder="Search by name"
          value={inputValue}
          onChange={(e) => {
            let query = e.target.value;
            dispatch(setCurrentPage(1));
            if (handleInputChange) handleInputChange(query);
          }}
        />
        <button type="submit">
          <AiOutlineSearch className="text-gray-600 text-xl mr-[6px]" />
        </button>
      </div>

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
