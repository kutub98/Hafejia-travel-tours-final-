/* eslint-disable @next/next/no-img-element */
'use client';

import Lottie from 'lottie-react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Image from 'next/image';
import { Button, Typography } from '@material-tailwind/react';
import lottiFile from '../../lottie.json';
import animation from '../../Animation.json';
import logo1 from '../Assets/logo1.jpg';
const HeroSection = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      showThumbs={false}
      swipeable={false}
      interval={15000} // 5 seconds
      className="container mx-auto px-5  CustomBg bg-white "
    >
      <div className="grid lg:grid-cols-5 grid-cols-1 md:grid-cols-5  items-center  lg:py-16">
        <div className=" px-12 text-left lg:col-span-3 md:col-span-3 ">
          <h1 className="text-3xl lg:text-4xl font-bold text-blue-gray-800 my-4">
            ভ্রমণ মানুষের মন কে ফ্রেশ রাখে
          </h1>
          <div className="max-w-[450px] text-justify my-5">
            <h1 className=" text-2xl text-justify">
              হজ্ব, ওমরাহ যেকোন দেশের ভিসা প্রসেসিং, বিমানের টিকিট ও ম্যানপাওয়ার
              কার্ডসহ বিদেশ সংক্রান্ত যেকোন সেবার জন্য হাফেজিয়া ট্যুর এন্ড
              ট্রাভেলস অন্যন্য
            </h1>
          </div>
          {/* <h1 className="text-xl font-normal  text-black">
            হাফেজিয়া ট্যুর এন্ড ট্রাভেলস সাথে ভ্রমন করুন
          </h1> */}
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
            src={packge3}
            alt="Image 3"
            className=""
            objectFit="contain"
            height={1200}
            width={500}
          />
        </div> */}

        <div className="flex flex-col justify-center items-center relative bg-transparent">
          <Lottie
            animationData={lottiFile}
            className="flex justify-center items-center h-96 w-96 "
            loop={true}
          />
          <div className=" lottiLogo absolute h-40 w-40 ">
            <Image
              src={logo1}
              height={200}
              width={200}
              alt="logo"
              className=" h-full w-full  rounded-full"
            />
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default HeroSection;
