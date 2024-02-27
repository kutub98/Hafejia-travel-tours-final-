/* eslint-disable @next/next/no-img-element */
'use client';

import Lottie from 'lottie-react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import packge1 from '../Assets/Package2.jpg';
import packge2 from '../Assets/Package3.jpg';
import air from '../Assets/air.png';
import packge3 from '../Assets/HappyClients/image21.jpeg';
import saf from '../Assets/saf.jpg';
import Image from 'next/image';
import { Button, Typography } from '@material-tailwind/react';
import lottiFile from '../../lottie.json';
const HeroSection = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      showThumbs={false}
      swipeable={false}
      interval={15000} // 5 seconds
      className="container mx-auto px-5   "
    >
      <div className="grid lg:grid-cols-5 grid-cols-1 md:grid-cols-5  items-center bg-white lg:py-16">
        <div className=" px-12 text-left lg:col-span-3 md:col-span-3 bg-white">
          <h1 className="text-3xl lg:text-7xl font-bold text-blue-gray-800 my-4">
            ভ্রমন মানুষ কে <br></br> মন ফ্রেশ রাখে
          </h1>
          <h1 className="text-xl font-normal font-sans text-black">
            হাফেজিয়া ট্যুরস এন্ড ট্রাভেলস সাথে ভ্রমন করুন
          </h1>

          <div className="flex justify-between w-64 my-5">
            <Typography as="a" href="package">
              <Button className=" btnThree bg-gray-100 hover:bg-[#54bfb5] hover:rounded">
                আমাদের অফার
              </Button>
            </Typography>

            <Typography
              className="  "
              as="a"
              href="https://wa.me/88001867158067"
            >
              <Button className=" btnThree bg-gray-100 hover:bg-[#54bfb5] hover:rounded">
                যোগাযোগ
              </Button>
            </Typography>
          </div>
        </div>
        {/* <div className="lg:col-span-2 md:col-span-2 lg:pr-10 ">
          <Image
            src={air}
            alt="Image 3"
            className=""
            layout="responsive"
            height={1200}
            width={500}
          />
        </div> */}

        <div className="flex flex-col w-full justify-center items-center">
          <Lottie
            animationData={lottiFile}
            className="flex justify-center items-center h-96 w-96 bg-white"
            loop={true}
          />
        </div>
      </div>
      {/* <div className="grid lg:grid-cols-5 grid-cols-1 md:grid-cols-5  items-center">
        <div className="px-12 text-left lg:col-span-3 md:col-span-3 ">
          <h1 className="text-3xl lg:text-7xl font-bold text-blue-gray-800 my-4">
            Travel makes a <br></br> man Refresh
          </h1>
          <h1 className="text-xl font-normal font-sans text-black">
            Travel with হাফেজিয়া ট্যুরস এন্ড ট্রাভেলস
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
          <h1 className="text-xl   text-black">
            Travel with হাফেজিয়া ট্যুরস এন্ড ট্রাভেলস
          </h1>

          <Button className="mr-2 my-4 btn py-4 px-8 text-blue-gray-900">
            Our Offers
          </Button>
          <Button className="mr-2  py-4 px-8 my-4">Contact</Button>
        </div>
        <div className="lg:col-span-2 md:col-span-2 lg:pr-10 ">
          <img
            alt="Image 3"
            // src={packge1}
            src="https://images.unsplash.com/photo-1619941400844-ec5ef7495cb8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFpcnBsYW5lfGVufDB8fDB8fHww"
            className=" h-auto w-full object-fit shadow-2xl"
          />
        </div>
      </div> */}
    </Carousel>
  );
};

export default HeroSection;
