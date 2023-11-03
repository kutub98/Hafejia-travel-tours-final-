import Rootlayout from "@/Layout/Rootlayout";
import UmrahRequirements from "@/UI/UmrahRequirement";

const Umrah = () => {
  return (
    <div className="container mx-auto max-w-7xl px-8 Tabs">
      {/* <div className="flex h-96 justify-center items-center">
        <h1 className="text-center my-auto animate-pulse textColor text-white lg:text-7xl ltext-2xl">
          Umrah update is coming soon
        </h1>
      </div> */}
      <UmrahRequirements />
    </div>
  );
};

export default Umrah;

Umrah.getLayout = function getLayout(page) {
  return <Rootlayout>{page}</Rootlayout>;
};
