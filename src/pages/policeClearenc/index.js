import Rootlayout from "@/Layout/Rootlayout";

const PoliceClearenc = () => {
  return (
    <div className="container mx-auto max-w-7xl px-8 Tabs">
      <div className="flex h-96 justify-center items-center">
        <h1 className="text-center my-auto animate-pulse textColor text-white lg:text-7xl ltext-2xl">
          PoliceClearenc update is coming soon
        </h1>
      </div>
    </div>
  );
};

export default PoliceClearenc;

PoliceClearenc.getLayout = function getLayout(page) {
  return <Rootlayout>{page}</Rootlayout>;
};
