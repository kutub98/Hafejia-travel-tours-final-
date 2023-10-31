import React from "react";
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
import image18 from "../Assets/HappyClients/image26.jpeg";
import image19 from "../Assets/HappyClients/image27.jpeg";
import image20 from "../Assets/HappyClients/image27.jpeg";
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

  return (
    <section className="py-6 dark:bg-gray-800 dark:text-gray-50 px-8">
      <h1 className="text-center  lg:text-5xl font-bold xl:mt-36 lg:mt-36 lg:mb-24 animate-pulse text-3xl my-10">
        Gallery
      </h1>
      <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
        {galleryImage.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt=""
            className={`w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square ${
              index === 0 || index === galleryImage.length - 1
                ? "col-span-1 row-span-1"
                : index >= 1 && index <= galleryImage.length - 2
                ? "md-col-start-1 md-row-start-1"
                : ""
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
