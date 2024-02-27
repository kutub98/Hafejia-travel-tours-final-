import ClientReview from '@/UI/ClinetReviw';
import Gallery from '@/UI/Gallery';
import HappyClient from '@/UI/HappyClient';
import HeroSection from '@/UI/HeroSection';
import HotDeals from '@/UI/HotDeals';
import OurService from '@/UI/OurService';
import Packge from '@/UI/Packge';
import WhyChoose from '@/UI/WhyChoose';
import AboutUs from '@/pages/aboutus';

const HomePage = () => {
  return (
    // hero section
    <div className="">
      {/* HeroSection */}
      <HeroSection />

      {/* HappyClient */}
      <HappyClient />

      {/* OurService */}
      <OurService />

      {/* HotDeals */}
      <HotDeals />

      {/* OurService */}
      {/* <div>
        <CustomTabs />
      </div> */}

      {/* Packge */}
      <Packge />
      {/* ClientReview */}
      {/* <ClientReview /> */}

      <WhyChoose />

      {/* Gellary */}
      <Gallery />
      {/* আমাদের সম্পর্কে */}
      {/* <AboutUs /> */}
    </div>
  );
};

export default HomePage;
