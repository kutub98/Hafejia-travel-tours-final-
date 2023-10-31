import Image from "next/image";
import displyImage from "../Assets/HappyClients/image21.jpeg";
import { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";

const ImageDisplay = () => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    // Function to show the image
    const showImageAfterDelay = () => {
      setShowImage(true);
    };

    // Function to hide the image
    const hideImage = () => {
      setShowImage(false);
    };

    const checkLocalStorage = () => {
      const isImageVisible = localStorage.getItem("isImageVisible");
      if (isImageVisible === "true") {
        showImageAfterDelay();
      }
    };

    // Check local storage on initial load
    checkLocalStorage();

    // Start showing the image after 40 seconds
    const timer1 = setTimeout(() => {
      showImageAfterDelay();
      localStorage.setItem("isImageVisible", "true");
    }, 40000);

    // Set an interval to show the image every 5 minutes
    const timer2 = setInterval(() => {
      showImageAfterDelay();
      localStorage.setItem("isImageVisible", "true");
    }, 300000);

    // Clean up timers to avoid memory leaks
    return () => {
      clearTimeout(timer1);
      clearInterval(timer2);
      hideImage();
      localStorage.setItem("isImageVisible", "false");
    };
  }, []);

  const handleCancelClick = () => {
    setShowImage(false);
    localStorage.setItem("isImageVisible", "false");
  };

  return (
    <>
      {showImage && (
        <div className="adverties max-w-4xl mx-auto container bg-black text-center text-white grid grid-cols-1 gap-7">
          <div className="">
            <Image
              src={displyImage}
              alt="Your Image"
              className="advertiseImg"
            />
            <Button
              className="bg-[#54bfb5] text-white"
              onClick={handleCancelClick}
            >
              Cancel
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageDisplay;
