import Rootlayout from '@/Layout/Rootlayout';
import Image from 'next/image';
import umrah from '../../Assets/BG/HAZHUMRAH.jpg';
import { Typography } from '@material-tailwind/react';
import { BsCheck } from 'react-icons/bs';
const Umrah = () => {
  return (
    <div className="container mx-auto max-w-7xl px-8">
      <title>Umrah ভিসা প্রসেসিং || Hafejia Travel Tours</title>
      <div className="w-full h-auto">
        <Image
          src={umrah}
          alt="umrah"
          layout="responsive"
          width={1200}
          height={500}
        />
      </div>
      {/* <div className="flex h-96 justify-center items-center"> */}
      <div className="">
        <h1 className="text-center justify-center items-center">
          উমরা ভিসা প্রসেসিং ||হাফেজিয়া ট্রাভেলস এন্ড ট্যুরস
        </h1>{' '}
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
            যোগাযোগ
          </Typography>
        </div>
        <div className="bg-gray-100 p-4">
          <p className="flex my-1">
            {' '}
            <BsCheck className="w-8 h-8 mr-2  p-2 rounded-full bg-white " /> দুই
            কপি ছবি
          </p>
          <p className="flex my-1">
            {' '}
            <BsCheck className="w-8 h-8 mr-2  p-2 rounded-full bg-white " />{' '}
            মাতার এনআইডি বা বার্থ সার্টিফিকেট(ফটোকপি)
          </p>
          <p className="flex my-1">
            {' '}
            <BsCheck className="w-8 h-8 mr-2  p-2 rounded-full bg-white " />
            পিতার এনআইডি বা বার্থ সার্টিফিকেট(ফটোকপি)
          </p>
          <p className="flex my-1">
            {' '}
            <BsCheck className="w-8 h-8 mr-2  p-2 rounded-full bg-white " />{' '}
            ব্যাংক স্টেটমন্টে
          </p>
          <p className="flex my-1">
            {' '}
            <BsCheck className="w-8 h-8 mr-2  p-2 rounded-full bg-white " />{' '}
            অরিজিনাল পার্সপোট
          </p>
          <p className="flex my-1">
            {' '}
            <BsCheck className="w-8 h-8 mr-2  p-2 rounded-full bg-white " />{' '}
            ভিসা ফি রিসিপ্ট
          </p>
          <p className="flex my-1">
            {' '}
            <BsCheck className="w-8 h-8 mr-2  p-2 rounded-full bg-white " />{' '}
            পুরাতন পার্সপোট
          </p>
        </div>
      </div>
    </div>
  );
};

export default Umrah;

Umrah.getLayout = function getLayout(page) {
  return <Rootlayout>{page}</Rootlayout>;
};
