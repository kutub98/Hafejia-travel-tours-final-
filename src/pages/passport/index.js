import Rootlayout from '@/Layout/Rootlayout';
import Image from 'next/image';
import passport from '../../Assets/BG/passport.jpg';
import { Typography } from '@material-tailwind/react';
import { BsCheck } from 'react-icons/bs';
const Passport = () => {
  return (
    <div className="container mx-auto max-w-7xl px-8">
      <title>পার্সপোট || হাফেজিয়া ট্র্রাভেলস এন্ড ট্যুরস</title>
      <div className="w-full h-auto">
        <Image
          src={passport}
          alt="passport"
          objectFit="contain"
          width={1200}
          height={500}
        />
      </div>
      {/* <div className="flex h-96 justify-center items-center"> */}
      <div className="">
        <h1 className="text-center justify-center items-center">ভিসা</h1>{' '}
        <br></br>
        {/* <h1 className="text-center my-auto animate-pulse textColor text-white lg:text-7xl ltext-2xl">
          Process update is coming soon
        </h1> */}
        <div className="flex justify-between bg-gray-200 p-4 rounded">
          <h1 className="p-4 rounded bg-teal-700 text-white">প্রয়োজনপত্র</h1>
          <Typography
            className="p-4 rounded text-white bg-teal-700"
            as="a"
            href="https://wa.me/88001867158067"
          >
            যোগাযোগ
          </Typography>
        </div>
        <div className="bg-gray-100 p-4">
          <p className="flex my-1">
            {' '}
            <BsCheck className="w-8 h-8 mr-2  p-2 rounded-full bg-white " />
            নিজের জন্ম নিবন্দন বা এনআইডি (ফটোকপি)
          </p>
          <p className="flex my-1">
            {' '}
            <BsCheck className="w-8 h-8 mr-2  p-2 rounded-full bg-white " />{' '}
            দুকপি ছবি
          </p>
          <p className="flex my-1">
            {' '}
            <BsCheck className="w-8 h-8 mr-2  p-2 rounded-full bg-white " />{' '}
            মাতার এনআইডি বা বার্থ সার্টিফিকেট(ফটোকপি)
          </p>
          <p className="flex my-1">
            {' '}
            <BsCheck className="w-8 h-8 mr-2  p-2 rounded-full bg-white " />{' '}
            পিতার এনআইডি বা বার্থ সার্টিফিকেট(ফটোকপি)
          </p>
          <p className="flex my-1">
            {' '}
            <BsCheck className="w-8 h-8 mr-2  p-2 rounded-full bg-white " />{' '}
            বিদ্যুত বিলের কাগজ (নতুনদের জন্য)
          </p>
          <p className="flex my-1">
            {' '}
            <BsCheck className="w-8 h-8 mr-2  p-2 rounded-full bg-white " />{' '}
            খতিয়ান পেপার (পুরাতনদের জন্য)
          </p>

          <p className="flex my-1">
            {' '}
            <BsCheck className="w-8 h-8 mr-2  p-2 rounded-full bg-white " />{' '}
            অরিজিনাল পার্সপোট (পুরাতনদের জন্য)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Passport;

Passport.getLayout = function getLayout(page) {
  return <Rootlayout>{page}</Rootlayout>;
};
