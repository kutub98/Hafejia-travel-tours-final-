/* eslint-disable @next/next/no-img-element */
'use client';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import mobileBanking from '../Assets/mobileBanking.jpg';
import airTicke from '../Assets/airTicket.jpg';
import medicalVisa from '../Assets/dis-Medi.jpg';
import hotelBooking from '../Assets/hotelBooking.jpg';
import Image from 'next/image';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from '@material-tailwind/react';
import { useEffect, useState } from 'react';

const HotDeals = () => {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const items = [
    {
      imgSrc: mobileBanking,
      alt: 'Image 1',
      title: 'Mobile Banking',
      discount: 'Discount on',
    },
    {
      imgSrc: airTicke,
      alt: 'Image 2',
      title: 'Air Ticket',
      discount: 'Discount on',
    },
    {
      imgSrc: medicalVisa,
      alt: 'Image 3',
      title: 'Medical Visa',
      discount: 'Discount on',
    },
    {
      imgSrc: hotelBooking,
      alt: 'Image 4',
      title: 'Hotel Booking',
      discount: 'Discount on',
    },
  ];

  return (
    <div className="container hotDeals mx-auto max-w-7xl px-8 my-10 ">
            <h1 className="text-center  font-bold my-8 animate-pulse text-3xl lg:text-4xl my-2  rounded-xl lg:w-2/5 justify-center mx-auto ">

        আকর্ষনীয় অফার
      </h1>

      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        interval={15000}
        swipeable={false}
        className="container mx-auto grid-cols-4"
      >
        {items.map((item, index) => (
          <div key={index} className="">
            <div className="grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4">
              {items
                .slice(index * 1, index * 1 + (windowWidth < 1040 ? 1 : 2))
                .map((image, i) => (
                  <div key={i} className="">
                    <Card className=" lg:flex-row flex-col">
                      <CardHeader
                        shadow={false}
                        floated={false}
                        className="m-0 lg:w-2/5 w-full h-64 shrink-0 rounded-r-none"
                      >
                        <Image
                          src={image.imgSrc}
                          alt="card-image"
                          objectFit="contain"
                          className="h-full w-full object-cover"
                        />
                      </CardHeader>
                      <CardBody className="h-64 text-left ">
                        <Typography
                          variant="h6"
                          color="gray"
                          className="mb-4 uppercase"
                        >
                          {image.discount}
                        </Typography>
                        <Typography
                          variant="h4"
                          color="blue-gray"
                          className="mb-2"
                        >
                          {image.title}
                        </Typography>
                        <Typography color="gray" className="mb-8 font-normal">
                          Like so many organizations these days, Autodesk is a
                          company in transition.
                        </Typography>

                        <Typography as="a" href="/package">
                          <Button
                            variant="text"
                            className="flex btnTwo hover:bg-[#54bfb5] items-center gap-2"
                          >
                            আরো বিস্তারিত...
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
                        </Typography>
                      </CardBody>
                    </Card>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HotDeals;
