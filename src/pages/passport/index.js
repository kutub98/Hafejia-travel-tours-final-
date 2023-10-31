import Rootlayout from "@/Layout/Rootlayout";

const Passport = () => {
  return (
    <div className="container mx-auto max-w-7xl px-8">
      <div className="flex h-96 justify-center items-center">
        <h1 className="text-center my-auto animate-pulse textColor text-white lg:text-7xl ltext-2xl">
          Passport update is coming soon
        </h1>
      </div>
    </div>
  );
};

export default Passport;

Passport.getLayout = function getLayout(page) {
  return <Rootlayout>{page}</Rootlayout>;
};
