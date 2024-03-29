import React from 'react';
import { Typography } from '@material-tailwind/react';
import {
  Presentation,
  Car,
  BadgeDollarSign,
  TestTubes,
  Bolt,
  RefreshCwOff,
} from 'lucide-react';
import { LuBrainCog } from 'react-icons/lu';
import { TbHeartHandshake } from 'react-icons/tb';
import { Button } from '@material-tailwind/react';

const WhyChoose = () => {
  return (
    <div className=" max-w-7xl mx-auto px-6  bg-gray-50 pb-10 pt-1">
      <h1 className="text-center  font-bold my-8 animate-pulse text-3xl lg:text-4xl my-2  rounded-xl lg:w-2/5 justify-center mx-auto ">
        আমাদের কেন বেঁচে নিবেন?
      </h1>
      <div className="text-center flex justify-center items-center ">
        {/* <div>
          <p className="max-ch[80] my-3 text-justify flex justify-center">
            Selecting a travel agency demands professionalism and excellence.
            Choose us for tailored journeys, meticulous planning, and seamless
            experiences. With a dedicated team committed to your satisfaction,
            we ensure every aspect of your trip exceeds expectations. Entrust us
            with your travel dreams and discover the difference of our
            unparalleled service.
          </p>
        </div> */}
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="bg-gray-100  hover:bg-[#54bfb5]  hover:text-white rounded text-center items-center lg:p-6 md:p-4 p-3  shadow-lg text-gray-700">
          <Car className="w-10 h-10  hover:rotate-[360deg] text-center mx-auto" />
          <h1 className="text-xl font-bold  hover:text-white my-3">
            ১. উপযোগী যাত্রা
          </h1>
        </div>
        <div className="bg-gray-100 hover:bg-[#54bfb5]  hover:text-white  text-center items-center lg:p-6 md:p-4 p-3 rounded shadow-lg text-gray-700">
          <Presentation className="w-10 h-10  hover:rotate-[360deg] text-center mx-auto" />
          <h1 className="text-xl font-bold  hover:text-white my-3">
            ২. সূক্ষ্ম পরিকল্পনা
          </h1>
        </div>
        <div className="bg-gray-100 hover:bg-[#54bfb5]  hover:text-white rounded text-center items-center lg:p-6 md:p-4 p-3  shadow-lg text-gray-700">
          <LuBrainCog className="w-10 h-10  hover:rotate-[360deg] text-center mx-auto" />
          <h1 className="text-xl font-bold  hover:text-white my-3">
            ৩.বিরামহীন অভিজ্ঞতা
          </h1>
        </div>
        <div className="bg-gray-100 hover:bg-[#54bfb5]  hover:text-white rounded text-center items-center lg:p-6 md:p-4 p-3  shadow-lg text-gray-700">
          <TbHeartHandshake className="w-10 h-10  hover:rotate-[360deg] text-center mx-auto" />

          <h1 className="text-xl font-bold  hover:text-white my-3">
            ৪. গ্রাহক সন্তুষ্টি
          </h1>
        </div>
        <div className="bg-gray-100 hover:bg-[#54bfb5]  hover:text-white rounded text-center items-center lg:p-6 md:p-4 p-3  shadow-lg text-gray-700">
          <TestTubes className="w-10 h-10  hover:rotate-[360deg] text-center mx-auto" />

          <h1 className="text-xl font-bold  hover:text-white my-3">
            ৫.দক্ষতা এবং শ্রেষ্ঠত্ব
          </h1>
        </div>
        <div className="bg-gray-200  hover:bg-[#54bfb5]  hover:text-white rounded text-center items-center lg:p-6 md:p-4 p-3  shadow-lg text-gray-700">
          <BadgeDollarSign className="w-10 h-10  hover:rotate-[360deg] text-center mx-auto" />

          <h1 className="text-xl font-bold  hover:text-white my-3">
            ৬.কোন লুকানো চার্জ নেই
          </h1>
        </div>
        <div className="bg-gray-100 hover:bg-[#54bfb5]  hover:text-white rounded text-center items-center lg:p-6 md:p-4 p-3  shadow-lg text-gray-700">
          <Bolt className="w-10 h-10  hover:rotate-[360deg] text-center mx-auto" />

          <h1 className="text-xl font-bold  hover:text-white my-3">
            ৭.গুণমানের নিশ্চয়তা
          </h1>
        </div>
        <div className="bg-gray-100 hover:bg-[#54bfb5]  hover:text-white rounded text-center items-center lg:p-6 md:p-4 p-3  shadow-lg text-gray-700">
          <RefreshCwOff className="w-10 h-10  hover:rotate-[360deg] text-center mx-auto" />

          <h1 className="text-xl font-bold  hover:text-white my-3">
            ৮. ঝামেলা-মুক্ত ভ্রমণ
          </h1>
        </div>
      </div>
      <Typography
        className="lg:w-[300px] mx-auto my-8  "
        as="a"
        href="https://wa.me/88001867158067"
      >
        <Button className="w-full btnThree bg-gray-100 hover:bg-[#54bfb5] hover:rounded">
          Contact
        </Button>
      </Typography>
    </div>
  );
};

export default WhyChoose;
