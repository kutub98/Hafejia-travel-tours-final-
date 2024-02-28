import React, { useState } from 'react';
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
import image18 from '../Assets/HappyClients/image26.jpeg';
import image19 from '../Assets/HappyClients/image27.jpeg';
import image20 from '../Assets/HappyClients/image27.jpeg';
import { Button } from '@material-tailwind/react';
const Gallery = () => {
  const galleryImage = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
  ];

  const [seeMore, setSeeMore] = useState(false);

  const seeMorePhoto = () => {
    setSeeMore(true);
  };
  const seeLessPhoto = () => {
    setSeeMore(false);
  };
  return (
    <section className="py-6  dark:bg-gray-800 dark:text-gray-50 px-8">
      <h1 className="text-center  sm:text-black  lg:text-5xl font-bold xl:mt-10 lg:mt-20 lg:mb-10 animate-pulse text-3xl my-10">
        ছবি গ্যালারি
      </h1>
      <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
        {seeMore
          ? galleryImage.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt=""
                className={`w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square ${
                  index === 0 || index === galleryImage.length - 1
                    ? 'col-span-1 row-span-1'
                    : index >= 1 && index <= galleryImage.length - 2
                    ? 'md-col-start-1 md-row-start-1'
                    : ''
                }`}
              />
            ))
          : galleryImage
              .slice(0, 4)
              .map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt=""
                  className={`w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square ${
                    index === 0 || index === galleryImage.length - 1
                      ? 'col-span-1 row-span-1'
                      : index >= 1 && index <= galleryImage.length - 2
                      ? 'md-col-start-1 md-row-start-1'
                      : ''
                  }`}
                />
              ))}
      </div>
      <div className="container max-w-7xl mx-auto justify-center items-center text-center">
        {seeMore ? (
          <Button
            onClick={seeLessPhoto}
            className="bg-red-600 justify-center mx-auto hover:bg-[#54bfb5]"
          >
            কম দেখান
          </Button>
        ) : (
          <Button
            onClick={seeMorePhoto}
            className=" btn justify-center mx-auto hover:bg-[#020540]"
          >
            আরো দেখুন
          </Button>
        )}
      </div>
    </section>
  );
};

export default Gallery;
