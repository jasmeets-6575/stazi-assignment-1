import Card from "../components/Card";
import PageContainer from "../components/PageContainer";

const Page = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-8 pt-4 bg-gray-100 h-screen rounded-xl">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <PageContainer />
    </>
  );
};
export default Page;
