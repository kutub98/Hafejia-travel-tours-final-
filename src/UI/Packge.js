/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import image15 from '../Assets/HappyClients/image21.jpeg';
import image16 from '../Assets/Package3.jpg';
import image17 from '../Assets/Package2.jpg';
import { Carousel } from 'react-responsive-carousel';
import {
  Button,
  Card,
  CardBody,
  Tooltip,
  CardHeader,
  Typography,
  CardFooter,
  IconButton,
} from '@material-tailwind/react';

import { useEffect, useState } from 'react';
import Image from 'next/image';

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
    // <div className="container mx-auto max-w-7xl px-8">
    //   <h1 className="text-center  lg:text-5xl font-bold xl:mt-36 lg:mt-36 lg:mb-24 animate-pulse text-3xl my-10">
    //     Recent Package
    //   </h1>

    //   <Carousel
    //     autoPlay={true}
    //     infiniteLoop={true}
    //     showStatus={false}
    //     showThumbs={false}
    //     interval={15000}
    //     swipeable={false}
    //     className="container mx-auto"
    //   >
    //     {ClinetImage.map((item, index) => (
    //       <div key={index} className="">
    //         <div className="">
    //           <Card className="w-full lg:flex-row flex-col">
    //             <CardHeader
    //               shadow={false}
    //               floated={false}
    //               className="m-0 lg:w-2/5 w-full  h-72  shrink-0 rounded-r-none"
    //             >
    //               <Image
    //                 src={item.imgSrc}
    //                 alt="card-image"
    //                 className="h-full w-full object-fit"
    //               />
    //             </CardHeader>
    //             <CardBody>
    //               <Typography
    //                 variant="h6"
    //                 color="gray"
    //                 className="mb-4 uppercase"
    //               >
    //                 startups
    //               </Typography>
    //               <Typography variant="h4" color="blue-gray" className="mb-2">
    //                 Lyft launching cross-platform service this week
    //               </Typography>
    //               <Typography color="gray" className="mb-8 font-normal">
    //                 Like so many organizations these days, Autodesk is a company
    //                 in transition.
    //               </Typography>
    //               <a href="#" className="inline-block bg-[#54bfb5] rounded">
    //                 <Button
    //                   variant="text"
    //                   className="flex btnThree items-center gap-2 text-white"
    //                 >
    //                   Learn More
    //                   <svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     fill="none"
    //                     viewBox="0 0 24 24"
    //                     stroke="currentColor"
    //                     strokeWidth={2}
    //                     className="h-4 w-4"
    //                   >
    //                     <path
    //                       strokeLinecap="round"
    //                       strokeLinejoin="round"
    //                       d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
    //                     />
    //                   </svg>
    //                 </Button>
    //               </a>
    //             </CardBody>
    //           </Card>
    //         </div>
    //       </div>
    //     ))}
    //   </Carousel>
    // </div>
    <div className=" max-w-5xl mx-auto container my-32">
      <h1 className="text-center  lg:text-4xl font-bold xl:mt-36 lg:mt-36 lg:mb-24 animate-pulse text-3xl my-10  rounded-xl lg:w-2/5 justify-center mx-auto border-b-8 border-[#499ebf]">
        Recent Package
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {ClinetImage.map((img, index) => (
          <div className="" key={index}>
            <Card className="w-full max-w-[26rem] shadow-lg">
              <CardHeader floated={false} color="blue-gray">
                <Image src={img.imgSrc} />
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
              </CardHeader>
              <div className="hover:bg-[#499ebf] hover:text-white hover:duration-500">
                <CardBody>
                  <div className="mb-3 flex items-center justify-between">
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="font-medium"
                    >
                      Wooden House, Florida
                    </Typography>
                    <Typography
                      color="blue-gray"
                      className="flex items-center gap-1.5 font-normal"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="-mt-0.5 h-5 w-5 text-yellow-700"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                      5.0
                    </Typography>
                  </div>
                  <Typography color="gray">
                    Enter a freshly updated and thoughtfully furnished peaceful
                    home surrounded by ancient trees, stone walls, and open
                    meadows.
                  </Typography>
                </CardBody>
                <CardFooter className="pt-3">
                  <Button size="lg" fullWidth={true}>
                    Reserve
                  </Button>
                </CardFooter>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packge;
