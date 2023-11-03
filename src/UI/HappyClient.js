/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import image1 from "../Assets/HappyClients/image11.jpeg";
import image2 from "../Assets/HappyClients/image12.jpeg";
import image3 from "../Assets/HappyClients/image13.jpeg";
import image4 from "../Assets/HappyClients/image14.jpeg";
import image5 from "../Assets/HappyClients/image15.jpeg";
import image6 from "../Assets/HappyClients/image16.jpeg";
import image7 from "../Assets/HappyClients/image17.jpeg";
import image8 from "../Assets/HappyClients/image18.jpeg";
import image9 from "../Assets/HappyClients/image19.jpeg";
import image10 from "../Assets/HappyClients/image20.jpeg";
import image11 from "../Assets/HappyClients/image21.jpeg";
import image12 from "../Assets/HappyClients/image22.jpeg";
import image13 from "../Assets/HappyClients/image23.jpeg";
import image14 from "../Assets/HappyClients/image24.jpeg";
import image15 from "../Assets/HappyClients/image25.jpeg";
import image16 from "../Assets/HappyClients/image26.jpeg";
import image17 from "../Assets/HappyClients/image27.jpeg";
import { Carousel } from "react-responsive-carousel";
import { Card, CardHeader } from "@material-tailwind/react";
import { useEffect, useState } from "react";

const HappyClient = () => {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
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
    //
    <div className="container mx-auto max-w-7xl px-8">
      <h1 className="text-center  lg:text-5xl font-bold xl:mt-36 lg:mt-36 lg:mb-24 animate-pulse text-3xl my-10">
        Happy Clients
      </h1>

      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        interval={15000}
        swipeable={false}
        className="container  mx-auto grid-cols-4"
      >
        {ClinetImage.map((item, index) => (
          <div key={index} className="">
            <div className="grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4">
              {ClinetImage.slice(
                index * 1,
                index * 1 + (windowWidth < 740 ? 1 : 2),
              ).map((image, i) => (
                <div key={i} className="h-72">
                  <Card className="h-72">
                    <CardHeader
                      shadow={false}
                      floated={false}
                      className="m-0   shrink-0 rounded-r-none"
                    >
                      <Image
                        src={image.imgSrc}
                        alt="card-image"
                        className="h-full  object-fit"
                      />
                    </CardHeader>
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

export default HappyClient;
