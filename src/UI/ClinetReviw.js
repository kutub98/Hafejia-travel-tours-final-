/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import image1 from '../Assets/HappyClients/image11.jpeg';
import image2 from '../Assets/HappyClients/image12.jpeg';
import image3 from '../Assets/HappyClients/image13.jpeg';
import image4 from '../Assets/HappyClients/image14.jpeg';
import image5 from '../Assets/HappyClients/image15.jpeg';
import image6 from '../Assets/HappyClients/image16.jpeg';
import image7 from '../Assets/HappyClients/image17.jpeg';
import image8 from '../Assets/HappyClients/image18.jpeg';
import image9 from '../Assets/HappyClients/image19.jpeg';
import image10 from '../Assets/HappyClients/image20.jpeg';
import image11 from '../Assets/HappyClients/image20.jpeg';
import image12 from '../Assets/HappyClients/image22.jpeg';
import image13 from '../Assets/HappyClients/image23.jpeg';
import image14 from '../Assets/HappyClients/image24.jpeg';
import image15 from '../Assets/HappyClients/image25.jpeg';
import image16 from '../Assets/HappyClients/image26.jpeg';
import image17 from '../Assets/HappyClients/image27.jpeg';
import { Carousel } from 'react-responsive-carousel';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from '@material-tailwind/react';
import { useEffect, useState } from 'react';
function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-yellow-700"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const ClientReview = () => {
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
  const ClinetImage = [
    {
      imgSrc: image1,
    },
    {
      imgSrc: image2,
    },
    {
      imgSrc: image3,
    },
    {
      imgSrc: image4,
    },
    {
      imgSrc: image5,
    },
    {
      imgSrc: image6,
    },
    {
      imgSrc: image7,
    },
    {
      imgSrc: image8,
    },
    {
      imgSrc: image9,
    },
    {
      imgSrc: image10,
    },
    {
      imgSrc: image11,
    },
    {
      imgSrc: image12,
    },
    {
      imgSrc: image13,
    },
    {
      imgSrc: image14,
    },
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
    <div className="container  clinetReview mx-auto max-w-5xl px-8 my-24">
      <h1 className="text-center lg:text-5xl font-bold  animate-pulse text-3xl lg:my-10 my-14 text-black">
        What clinet say আমাদের সম্পর্কে
      </h1>
      <section className="py-6 mx-auto px-10 dark:bg-gray-800 dark:text-gray-50">
        <div className="">
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            interval={15000}
            swipeable={false}
            // 5 seconds
            className="conatiner mx-auto grid-cols-4"
          >
            {ClinetImage.map((item, index) => (
              <div key={index} className="mx-auto">
                <div className="grid lg:grid-cols-1 xl:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-4  justify-center mx-auto">
                  {ClinetImage.slice(
                    index * 1,
                    index * 1 + (windowWidth < 740 ? 1 : 1),
                  ).map((image, i) => (
                    <div className="" key={i}>
                      <Card className="w-2/3 mx-auto py-6 bg-gray-50 items-center px-5">
                        <CardHeader
                          shadow={false}
                          floated={false}
                          className="m-0 w-40 h-40 shrink-0 bg-transparent rounded-r-none"
                        >
                          <Image
                            src={image.imgSrc}
                            alt="card-image"
                            className="h-full w-full rounded-full object-cover border-1 bg-none"
                          />
                        </CardHeader>
                        <CardBody className="relative">
                          <Typography
                            variant="h6"
                            color="blue-gray"
                            className="mb-2"
                          >
                            Arshad Hossain
                          </Typography>
                          <Typography
                            variant="h5"
                            color="gray"
                            className="mb-8  h-auto"
                          >
                            Like so many organizations these days, Autodesk is a
                            company in transition.
                          </Typography>
                          {/* <div className="mx-auto "> */}
                          <div className="flex gap-0 justify-center">
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            {/* </div> */}
                          </div>
                        </CardBody>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default ClientReview;
