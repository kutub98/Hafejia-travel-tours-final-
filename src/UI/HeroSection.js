/* eslint-disable @next/next/no-img-element */
'use client';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import packge1 from '../Assets/Package2.jpg';
import packge2 from '../Assets/Package3.jpg';
import packge3 from '../Assets/HappyClients/image21.jpeg';
import saf from '../Assets/saf.jpg';
import Image from 'next/image';
import { Button } from '@material-tailwind/react';
const HeroSection = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      showThumbs={false}
      swipeable={false}
      interval={15000} // 5 seconds
      className="container mx-auto px-5 heroBgBanner bg-blue-gray-50"
    >
      <div className="grid lg:grid-cols-5 grid-cols-1 md:grid-cols-5  items-center">
        <div className=" px-12 text-left lg:col-span-3 md:col-span-3 ">
          <h1 className="text-3xl lg:text-7xl font-bold text-blue-gray-800 my-4">
            Travel makes a <br></br> man Refresh
          </h1>
          <h1 className="text-xl font-normal font-sans text-black">
            Travel with Hafezia Travel Tours
          </h1>

          <Button className="mr-2 my-4 btn py-4 px-8 text-blue-gray-900">
            Our Offers
          </Button>
          <Button className="mr-2  py-4 px-8 my-4">Contact</Button>
        </div>
        <div className="lg:col-span-2 md:col-span-2 lg:pr-10 ">
          <Image
            src={packge3}
            alt="Image 3"
            className=" h-auto w-full object-fit shadow-2xl"
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-5 grid-cols-1 md:grid-cols-5  items-center">
        <div className="px-12 text-left lg:col-span-3 md:col-span-3 ">
        <h1 className="text-3xl lg:text-7xl font-bold text-blue-gray-800 my-4">
            Travel makes a <br></br> man Refresh
          </h1>
          <h1 className="text-xl font-normal font-sans text-black">
            Travel with Hafezia Travel Tours
          </h1>

          <Button className="mr-2 my-4 btn py-4 px-8 text-blue-gray-900">
            Our Offers
          </Button>
          <Button className="mr-2 py-4 px-8 my-4">Contact</Button>
        </div>
        <div className="lg:col-span-2 md:col-span-2 lg:pr-10 ">
          <Image
            src={packge2}
            alt="Image 3"
            className=" h-auto w-full object-fit shadow-2xl"
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-5 grid-cols-1 md:grid-cols-5  items-center">
        <div className="px-12 text-left lg:col-span-3 md:col-span-3 ">
        <h1 className="text-3xl lg:text-7xl font-bold text-blue-gray-800 my-4">
            Travel makes a <br></br> man Refresh
          </h1>
          <h1 className="text-xl font-normal font-sans text-black">
            Travel with Hafezia Travel Tours
          </h1>

          <Button className="mr-2 my-4 btn py-4 px-8 text-blue-gray-900">
            Our Offers
          </Button>
          <Button className="mr-2  py-4 px-8 my-4">Contact</Button>
        </div>
        <div className="lg:col-span-2 md:col-span-2 lg:pr-10 ">
          <Image
            src={packge1}
            alt="Image 3"
            className=" h-auto w-full object-fit shadow-2xl"
          />
        </div>
      </div>
    </Carousel>
  );
};

export default HeroSection;
