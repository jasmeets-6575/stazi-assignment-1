import { useEffect } from "react";
import Card from "../components/Card";
import {
  setCurrentPage,
  setTotalItems,
  nextPage,
  prevPage,
} from "../features/PaginationSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import { cardData } from "../utils/cardData";
import { useNavigate } from "react-router-dom";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const Page = () => {
  const { currentPage, itemsPerPage, totalItems } = useAppSelector(
    (store) => store.pagination
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { search } = useAppSelector((state) => state.search);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const filteredData = cardData.filter((car) =>
    car.name.toLowerCase().includes(search.toLowerCase())
  );
  const displayedData = filteredData.slice(startIndex, endIndex);

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const handlePageChange = (newPage: number) => {
    dispatch(setCurrentPage(newPage));
    navigate(`/${newPage}`);
  };

  const handleNextClick = () => {
    dispatch(nextPage());
    navigate(`/${currentPage + 1}`);
  };

  const handlePrevClick = () => {
    dispatch(prevPage());
    navigate(`/${currentPage - 1}`);
  };

  useEffect(() => {
    dispatch(setTotalItems(cardData.length));
  }, []);

  return (
    <>
      <div className="grid grid-cols-3 gap-8 pt-4 bg-gray-200 h-auto rounded-xl">
        {displayedData.map((item, index) => {
          return (
            <>
              <Card key={index} item={item} />
            </>
          );
        })}
      </div>

      <div className="flex items-center justify-between p-4 bg-gray-100 mt-8 rounded-lg">
        <h1 className="font-semibold tracking-wide text-lg">
          Total items = {totalItems}
        </h1>

        <div className="flex items-center">
          <button
            className="flex items-center font-bold mr-2"
            onClick={handlePrevClick}
            disabled={currentPage === 1}
          >
            <GrFormPrevious className=" text-xl" />
            <span>Prev</span>
          </button>

          {pageNumbers.map((_, index) => {
            return (
              <button
                key={index}
                className="p-1 m-1 font-bold text-lg mx-[5px]"
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            );
          })}

          <button
            className="flex items-center font-bold ml-3"
            onClick={handleNextClick}
            disabled={currentPage === totalPages}
          >
            <span>Next</span>
            <GrFormNext className="text-[22px]" />
          </button>
        </div>
      </div>
    </>
  );
};
export default Page;
