import Rootlayout from "@/Layout/Rootlayout";
import Packge from "@/UI/Packge";

const TodayPackage = () => {
  return (
    <div className="container mx-auto max-w-7xl px-8 Tabs text-white">
      <div className="flex h-96 justify-center items-center text-white">
        <h1 className="text-center my-auto animate-pulse textColor text-white lg:text-7xl ltext-2xl">
          Package update is coming soon
        </h1>
      </div>
      {/* <Packge/> */}
    </div>
  );
};

export default TodayPackage;

TodayPackage.getLayout = function getLayout(page) {
  return <Rootlayout>{page}</Rootlayout>;
};
