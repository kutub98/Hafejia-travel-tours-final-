import HomePage from "@/Home/HomePage";
import Rootlayout from "@/Layout/Rootlayout";
import ImageDisplay from "@/UI/Advertise";

const Home = () => {
  return (
    <div className="">
      <title>Home || Hafejia Travel Tours</title>
      <HomePage></HomePage>
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return <Rootlayout>{page}</Rootlayout>;
};
