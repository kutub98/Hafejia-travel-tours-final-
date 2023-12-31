import Rootlayout from "@/Layout/Rootlayout";

const VisaProcess = () => {
  return (
    <div className="container mx-auto max-w-7xl px-8">
      <div className="flex h-96 justify-center items-center">
        <h1 className="text-center justify-center items-center">
          {" "}
          Visit Visa | Working Visa
        </h1>{" "}
        <br></br>
        <h1 className="text-center my-auto animate-pulse textColor text-white lg:text-7xl ltext-2xl">
          Process update is coming soon
        </h1>
      </div>
    </div>
  );
};

export default VisaProcess;

VisaProcess.getLayout = function getLayout(page) {
  return <Rootlayout>{page}</Rootlayout>;
};
