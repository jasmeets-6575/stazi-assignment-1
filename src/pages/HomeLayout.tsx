import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useAppDispatch, useAppSelector } from "../store/store";
import { setSearch } from "../features/SearchSlice";

const HomeLayout = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const { search } = useAppSelector((state) => state.search);

  const handleInputChange = (query: string) => {
    dispatch(setSearch(query));
  };

  const isPageLoading = navigation.state === "loading";
  return (
    <div className="bg-gray-200">
      <Navbar inputValue={search} handleInputChange={handleInputChange} />
      <section className="mx-auto my-0 py-5 px-2 w-[90vw] ">
        {isPageLoading ? <div className="loading" /> : <Outlet />}
      </section>
    </div>
  );
};
export default HomeLayout;
