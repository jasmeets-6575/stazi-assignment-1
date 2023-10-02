import { useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Page from "./Page";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <div className="bg-gray-200">
      <Navbar />
      <section className="mx-auto my-0 py-5 px-2 w-[90vw] ">
        {isPageLoading ? <div className="loading" /> : <Page />}
      </section>
    </div>
  );
};
export default HomeLayout;
