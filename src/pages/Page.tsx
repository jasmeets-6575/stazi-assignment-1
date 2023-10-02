import { useEffect } from "react";
import Card from "../components/Card";
import { setCurrentPage, setTotalItems } from "../features/PaginationSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import { Car, cardData } from "../utils/cardData";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const Page = () => {
  const { currentPage, itemsPerPage, totalItems } = useAppSelector(
    (store) => store.pagination
  );
  const dispatch = useAppDispatch();

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedData = cardData.slice(startIndex, endIndex);

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

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
        <h1 className="font-semibold tracking-wide text-lg">60 items</h1>

        <div className="flex items-center">
          <div className="flex items-center font-semibold">
            <GrFormPrevious className=" text-xl" />
            <h1>Prev</h1>
          </div>

          {pageNumbers.map((_, index) => {
            return (
              <button key={index} className="p-1 m-1 font-bold ">
                {index + 1}
              </button>
            );
          })}

          <div className="flex items-center font-semibold">
            <h1>Next</h1>
            <GrFormNext className="text-[22px]" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Page;
