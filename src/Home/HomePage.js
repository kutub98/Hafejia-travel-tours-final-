import ClientReview from "@/UI/ClinetReviw";
import Gallery from "@/UI/Gallery";
import HappyClient from "@/UI/HappyClient";
import HeroSection from "@/UI/HeroSection";
import HotDeals from "@/UI/HotDeals";
import OurService from "@/UI/OurService";
import Packge from "@/UI/Packge";
import CustomTabs from "@/UI/Tabs";
import AboutUs from "@/pages/aboutus";

const HomePage = () => {
  return (
    // hero section
    <div className="">
      {/* HeroSection */}
      <HeroSection />

      {/* HappyClient */}
      <HappyClient />

      {/* OurService */}
      {/* <OurService/> */}

      {/* HotDeals */}
      <HotDeals />

      {/* HotDeals */}
      <div>
        <CustomTabs />
      </div>

      {/* Packge */}
      <Packge />
      {/* ClientReview */}
      <ClientReview />

      {/* Gellary */}
      <Gallery />
      {/* About us */}
      {/* <AboutUs /> */}
    </div>
  );
};

export default HomePage;
