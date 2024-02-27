import Rootlayout from '@/Layout/Rootlayout';
import Image from 'next/image';
import packageImg from '../../Assets/BG/PACKAGE.jpg';
import { Typography } from '@material-tailwind/react';
import { BsCheck } from 'react-icons/bs';
const Package = () => {
  return (
    <div className="container mx-auto max-w-7xl px-8">
      <title>Our Package || Hafejia Travel Tours</title>
      <div className="w-full h-auto">
        <Image
          src={packageImg}
          alt="package"
          layout="responsive"
          width={1200}
          height={500}
        />
      </div>
      {/* <div className="flex h-96 justify-center items-center"> */}
      <div className="">
        <h1 className="text-center justify-center items-center">
          Our Package || Hafejia Travel Tours
        </h1>{' '}
        <br></br>
        {/* <h1 className="text-center my-auto animate-pulse textColor text-white lg:text-7xl ltext-2xl">
          Process update is coming soon
        </h1> */}
        <div className="flex justify-between bg-gray-200 p-4 rounded">
          <h1 className="p-4 rounded bg-teal-700 text-white">Requirements</h1>
          <Typography
            className="p-4 rounded text-white bg-teal-700"
            as="a"
            href="https://wa.me/88001867158067"
          >
            Contact Now
          </Typography>
        </div>
        <div className="bg-gray-100 p-4">
          <p className="flex my-1">
            {' '}
            <BsCheck className="w-8 h-8 mr-2  p-2 rounded-full bg-white " /> 2ps
            Photographs
          </p>
          <p className="flex my-1">
            {' '}
            <BsCheck className="w-8 h-8 mr-2  p-2 rounded-full bg-white " />{' '}
            Mothers Nid Card (Photo Copy)
          </p>
          <p className="flex my-1">
            {' '}
            <BsCheck className="w-8 h-8 mr-2  p-2 rounded-full bg-white " />{' '}
            Father Nid Card (Photo Copy)
          </p>
          <p className="flex my-1">
            {' '}
            <BsCheck className="w-8 h-8 mr-2  p-2 rounded-full bg-white " />{' '}
            BankStatement
          </p>
          <p className="flex my-1">
            {' '}
            <BsCheck className="w-8 h-8 mr-2  p-2 rounded-full bg-white " />{' '}
            Original Passport
          </p>
          <p className="flex my-1">
            {' '}
            <BsCheck className="w-8 h-8 mr-2  p-2 rounded-full bg-white " />{' '}
            Payment receipt of Visa fee
          </p>
          <p className="flex my-1">
            {' '}
            <BsCheck className="w-8 h-8 mr-2  p-2 rounded-full bg-white " /> Old
            Passport
          </p>
        </div>
      </div>
    </div>
  );
};

export default Package;

Package.getLayout = function getLayout(page) {
  return <Rootlayout>{page}</Rootlayout>;
};
