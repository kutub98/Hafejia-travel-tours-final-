
import image15 from "../Assets/HappyClients/image21.jpeg";
import image16 from "../Assets/Package3.jpg";
import image17 from "../Assets/Package2.jpg";
import { Carousel } from "react-responsive-carousel";
import { Button, Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import Image from "next/image";

const Packge = () => {
  
  const ClinetImage = [
  
    {
      imgSrc: image15,
    },
    {
      imgSrc: image16,
    },
    {
      imgSrc: image17,
    },
  ];

  return (
    //
    <div className="container mx-auto max-w-7xl px-8">
      <h1 className="text-center  lg:text-5xl font-bold xl:mt-36 lg:mt-36 lg:mb-24 animate-pulse text-3xl my-10">
        Recent Package
      </h1>

      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        interval={10000}
        swipeable={false}
        className="container"
      >
        {ClinetImage.map((item, index) => (
          <div key={index} className="">
            <div className="">
            <Card className="w-full lg:flex-row flex-col">
         <CardHeader
            shadow={false}
            floated={false}
            className="m-0 lg:w-2/5 w-full  h-72  shrink-0 rounded-r-none"
          >
            <Image
              src={item.imgSrc}
              alt="card-image"
              className="h-full w-full object-fit"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h6" color="gray" className="mb-4 uppercase">
              startups
            </Typography>
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Lyft launching cross-platform service this week
            </Typography>
            <Typography color="gray" className="mb-8 font-normal">
              Like so many organizations these days, Autodesk is a company in
              transition. 
            </Typography>
            <a href="#" className="inline-block bg-[#54bfb5] rounded">
              <Button variant="text" className="flex items-center gap-2 text-white">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
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
        ))}
      </Carousel>
    </div>
  );
};

export default Packge;
