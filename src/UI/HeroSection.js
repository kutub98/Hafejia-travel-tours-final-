/* eslint-disable @next/next/no-img-element */
"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
        <img
          src="https://images.unsplash.com/photo-1473625247510-8ceb1760943f?auto=format&fit=crop&q=80&w=1411&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="h-96 w-full object-cover"
          alt="image 3"
        />
      </div>
      <div className="">
        <img
          src="https://plus.unsplash.com/premium_photo-1679758629770-24b3b6de388c?auto=format&fit=crop&q=80&w=1632&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="h-96 w-full object-cover"
          alt="image 3"
        />
      </div>
      <div className="">
        <img
          src="https://images.unsplash.com/photo-1437846972679-9e6e537be46e?auto=format&fit=crop&q=80&w=1471&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="h-96 w-full object-cover"
          alt="image 3"
        />
      </div>
    </Carousel>
  );
};

export default HeroSection;
