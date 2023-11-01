/* eslint-disable @next/next/no-img-element */
"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import packge1 from "../Assets/Package2.jpg"
import packge2 from "../Assets/Package3.jpg"
import packge3 from "../Assets/HappyClients/image21.jpeg"
import Image from "next/image";
const HeroSection = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      showThumbs={false}
      swipeable={false}
      interval={10000} // 5 seconds
      className="container mx-auto px-5"
    >
      <div className="">
        <Image
          src={packge3}
          alt="image 3 "
          className="lg:h-[460px] h-80 w-full object-fit"
        />
      </div>
      <div className="">
        <Image
          src={packge2}
          className="lg:h-[460px] h-80 w-full object-fit"
          alt="image 3"
        />
      </div>
      <div className="">
        <Image
          src={packge1}
          className="lg:h-[460px] h-80 w-full object-fit"
          alt="image 3"
        />
      </div>
    </Carousel>
  );
};

export default HeroSection;
