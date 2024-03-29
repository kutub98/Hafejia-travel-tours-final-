import ClientReview from '@/UI/ClinetReviw';
import Gallery from '@/UI/Gallery';
import HappyClient from '@/UI/HappyClient';
import HeroSection from '@/UI/HeroSection';
import HotDeals from '@/UI/HotDeals';
import OurService from '@/UI/OurService';
import Packge from '@/UI/Packge';
import Subscribe from '@/UI/Subscribe';
import WhyChoose from '@/UI/WhyChoose';
import AboutUs from '@/pages/aboutus';

const HomePage = () => {
  return (
    // hero section
    <div className="">
      {/* HeroSection */}
      <HeroSection />
      {/* OurService */}
      <OurService />

      {/* HotDeals */}
      <HotDeals />

      {/* OurService */}

      {/* Packge */}
      <Packge />
      {/* ClientReview */}
      {/* <ClientReview /> */}

      <WhyChoose />

      {/* HappyClient */}
      <HappyClient />

      <Subscribe />
      {/* Gellary */}

      {/* আমাদের সম্পর্কে */}
      {/* <AboutUs /> */}
    </div>
  );
};

export default HomePage;
