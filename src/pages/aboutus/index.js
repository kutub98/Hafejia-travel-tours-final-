import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from '@material-tailwind/react';
import Image from 'next/image';
import React from 'react';
import ceo from '../../Assets/CEO/nazrul.jpg';
import Rootlayout from '@/Layout/Rootlayout';

const AboutUs = () => {
  return (
    <div className=" container bg-[#54bfb5] mx-auto rounded">
      <title>আমাদের সম্পর্কে Hafejia | Travel Tours </title>
      <div className=" max-w-5xl mx-auto p-2">
        <Card className="lg:flex-row flex-col items-center p-8 m-4 bg-[#54bfb5] rounded">
          <CardHeader className=" w-72 h-72 lg:w-96 m-6 lg:h-96 removeBackgournd shrink-0 rounded-r-none justify-center items-center">
            <Image
              src={ceo}
              alt="card-image"
              className="lg:h-96 lg:w-96 w-72 h-72 rounded-full  p-2 border-2 object-cover justify-center items-center"
            />
          </CardHeader>
          <CardBody className="h-96">
            <Typography variant="h6" color="white" className="mb-4 uppercase">
              আমাদের সম্পর্কে
            </Typography>
            <Typography
              color="white"
              className="mb-2 lg:text-4xl text-2xl font-bold"
            >
              Muhammed Nazrul Islam
            </Typography>
            <Typography color="white" className="mb-2 lg:text-xl text-lg ">
              Managing Director
            </Typography>
            <Typography color="white" className="mb-2 text-lg ">
              Hafejia Travel and Tours
            </Typography>
            <Typography color="white" className="mb-2 text-lg ">
              Mobail: 01867-158067
            </Typography>
            <Typography color="white" className="mb-2 text-lg ">
              Mail: nazrulcbb@gmail.com
            </Typography>
            <a
              href="#"
              className="inline-block bg-[#020540] text-white rounded"
            >
              <Button
                variant="text"
                className="flex items-center gap-2 text-white"
              >
                Click to Contact
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  className="h-4 w-4 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </a>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default AboutUs;

AboutUs.getLayout = function getLayout(page) {
  return <Rootlayout>{page}</Rootlayout>;
};
