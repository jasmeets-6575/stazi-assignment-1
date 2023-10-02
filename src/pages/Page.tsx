import Card from "../components/Card";
import PageContainer from "../components/PageContainer";
import { cardData } from "../utils/cardData";

const Page = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-8 pt-4 bg-gray-200 h-auto rounded-xl">
        {cardData.map((item, index) => {
          return (
            <>
              <Card key={index} item={item} />
            </>
          );
        })}
      </div>
      <PageContainer />
    </>
  );
};
export default Page;
