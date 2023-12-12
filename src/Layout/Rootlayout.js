import { Footer } from "@/Shared/Footer";
import NavBar from "@/Shared/NavBar";
import ImageDisplay from "@/UI/Advertise";

import { ArrowUpCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Drawer,
  IconButton,
  Input,
  Textarea,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsWhatsapp, BsEnvelopeOpen, BsFacebook } from "react-icons/bs";
import { IoChatboxOutline } from "react-icons/io5";

const Rootlayout = ({ children }) => {
  const [openRight, setOpenRight] = useState(false);
  const openDrawer = () => setOpenRight(true);
  const closeDrawer = () => setOpenRight(false);

  const [isHidden, setIsHidden] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 1600) {
      setIsHidden(false);
    } else {
      setIsHidden(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // console.log("hello")
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // social Media scroll
  const [isVisible, setIsVisible] = useState(true); // Initially visible
  const [clickToHide, setClickToHide] = useState(true);

  const HideSocialMedia = () => {
    setIsVisible(false);
  };
  useEffect(() => {
    let isScrolling = false;
    let scrollTimeout;

    const handleScroll = () => {
      if (!isScrolling) {
        setIsVisible(false);
      }

      isScrolling = true;

      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      scrollTimeout = setTimeout(() => {
        isScrolling = false;
        setIsVisible(true);
      }, 1000); // Adjust the delay as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []);

  return (
    <div className="">
      {/* ImageDisplay */}

      <div className="">
        <ImageDisplay />
      </div>

      {/* NavBar */}
      <div className=" sticky top-0 w-full z-10">
        <NavBar />
      </div>

      {/* children */}
      <div>{children}</div>

      {/* footer */}
      <Footer className="bottom-0 w-full" />

      {/* bottom to to scroll */}
      <div
        className={`fixed left-8 cursor-pointer bottom-16 ${
          isHidden ? "hidden" : ""
        }`}
        onClick={scrollToTop}
      >
        <ArrowUpCircleIcon className="h-12 w-12 animate-bounce hover:scale-105 rounded-full bg-cyan-500 border-none text-white "></ArrowUpCircleIcon>
      </div>

      {/* Drawer section */}
      <div className="fixed right-2 cursor-pointer bottom-4">
        <IoChatboxOutline
          onClick={openDrawer}
          className="h-10 w-10  hover:scale-105 text-black bg-white rounded"
        />
        <Drawer open={openRight} onClose={closeDrawer} className="">
          <div className=" fixed !right-0">
            <Typography variant="h5" color="blue-gray">
              Contact Us
            </Typography>
            <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
          <div className="mb-5 px-4">
            <Typography variant="small" color="gray" className="font-normal ">
              Write the message and then click button.
            </Typography>
          </div>
          <form className="flex flex-col gap-6 p-4">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input type="email" label="Email" required />
            <Input label="Subject" />
            <Textarea rows={6} label="Message" required />
            <Button>Send Message</Button>
          </form>
        </Drawer>
      </div>

      {/* social scroll handle  */}
      <div
        onClick={() => HideSocialMedia()}
        className={`block px-2 py-4 items-center justify-center text-center fixed right-0 bg-white rounded bottom-16 z-auto transition-all duration-300 ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Tooltip content="Hide" onClick={() => setClickToHide(false)}>
          <XMarkIcon className={`block`}></XMarkIcon>
        </Tooltip>
        <Link
          href="https://wa.me/88001867158067"
          target="_blank"
          className="h-10 w-10 hover:scale-105 mx-auto my-2 text-center"
        >
          <BsWhatsapp className="h-10 w-10 rounded-full bg-[#25d366] border-none text-white" />
        </Link>

        <Link
          href="https://www.facebook.com/HafeziaTravelsLohagara"
          target="_blank"
        >
          <BsFacebook className="h-10 w-10 hover:scale-105  text-[#3b5998] mx-auto my-2" />
        </Link>
      </div>
    </div>
  );
};

export default Rootlayout;
