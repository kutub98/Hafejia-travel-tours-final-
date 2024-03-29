/* eslint-disable @next/next/no-img-element */
'use client';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';
import Link from 'next/link';
import visaProcess from '../Assets/visa.jpg';
import passport from '../Assets/passport.jpg';
import hazhUmrah from '../Assets/hazhUmrah.jpg';
import policeClearnce from '../Assets/policeClearnce.jpg';
import medicalVisa from '../Assets/medicalVisa.jpg';
import Package from '../Assets/Package.jpg';

import Image from 'next/image';

const OurService = () => {
  return (
    <div className="container my-20 services max-w-7xl mx-auto bg-white p-2 rounded">
      <h1 className="text-center  font-bold my-8 animate-pulse text-3xl lg:text-4xl my-2  rounded-xl lg:w-2/5 justify-center mx-auto ">
        আমাদের সেবা সমূহ
      </h1>
      <div className="grid lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-6 auto px-8">
        <Card className="my-6 ">
          <CardHeader color="blue-gray" className="relative h-56">
            <Image
              src={visaProcess}
              width={'w-full'}
              height={'full'}
              alt="card-image"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              ভিসা প্রসেসিং
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quotNaviglio&quot where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Link href={'/visaProcess'}>
              <Button className="w-full btnTwo hover:bg-[#54bfb5]">
                আরো বিস্তারিত...
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="my-6 ">
          <CardHeader color="blue-gray" className="relative h-56">
            <Image src={passport} alt="card-image" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              পার্সপোট
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quotNaviglio&quot where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Link href={'/passport'}>
              <Button className="w-full btnTwo hover:bg-[#54bfb5]">
                আরো বিস্তারিত...
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="my-6 ">
          <CardHeader color="blue-gray" className="relative h-56">
            <Image src={hazhUmrah} alt="card-image" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              হজ্ব ও ওমরাহ প্রসেসিং
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quotNaviglio&quot where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Link href={'/hazh'}>
              <Button className="w-full btnTwo hover:bg-[#54bfb5]">
                আরো বিস্তারিত...
              </Button>
            </Link>
          </CardFooter>
        </Card>
        {/* <Card className="my-6 ">
          <CardHeader color="blue-gray" className="relative h-56">
            <Image src={policeClearnce} alt="card-image" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Police Clearence
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quotNaviglio&quot where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Link href={'/policeClearenc'} className="bg-[#54bfb5]">
              <Button className="w-full btnTwo hover:bg-[#54bfb5]">
               আরো বিস্তারিত...
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="my-6 ">
          <CardHeader color="blue-gray" className="relative h-56">
            <Image src={medicalVisa} alt="card-image" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Medical Visa
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quotNaviglio&quot where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Link href={'/visaProcess'}>
              <Button className="w-full btnTwo hover:bg-[#54bfb5]">
               আরো বিস্তারিত...
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="my-6 ">
          <CardHeader color="blue-gray" className="relative h-56">
            <Image src={Package} alt="card-image" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Packeage
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quotNaviglio&quot where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Link href={'/todayPackage'}>
              <Button className="w-full btnTwo hover:bg-[#54bfb5]">
               আরো বিস্তারিত...
              </Button>
            </Link>
          </CardFooter>
        </Card> */}
      </div>
    </div>
  );
};

export default OurService;
