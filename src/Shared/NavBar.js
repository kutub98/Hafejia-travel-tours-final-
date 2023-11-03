/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "../Assets/logo.jpg";

const navListMenuItems = [
  {
    title: "Hafezia Travel",
    link: "/aboutus",
  },
  {
    title: "Why Hafezia Travel",
    link: "#",
  },
  {
    title: "Travel Guide",
    link: "#",
  },
  {
    title: "News",
    link: "#",
  },
  {
    title: "FAQ And Support",
    link: "#",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const renderItems = navListMenuItems.map(({ icon, title, link }, key) => (
    <a href={link} key={key}>
      <div className="flex items-center gap-3 rounded-lg">
        <div>
          <Typography
            color="white"
            className="flex items-center ml-2 customHover px-2 py-2 rounded "
          >
            {title}
          </Typography>
        </div>
      </div>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler className="sticky top-0 z-10">
          <Typography as="div" className="">
            <ListItem
              className="flex items-center gap-2 customHover py-2 pr-4 text-white focus:bg-[#54BFB5] focus:text-white"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Know More
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-1 gap-y-2  submenu">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <div>
      <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 text-lg">
        {/* visa process  */}
        <Typography
          as="a"
          href="/visaProcess"
          color="white"
          className="customHover focus:bg-[#54BFB5] focus:text-white"
        >
          <ListItem className="flex items-center gap-2 py-2 pr-4 customHover focus:bg-[#54BFB5] focus:text-white!">
            Visa Processing
          </ListItem>
        </Typography>

        {/* HAZE UMRA  */}
        <Typography
          as="a"
          href="/hazh"
          color="white"
          className="customHover focus:bg-[#54BFB5] focus:text-white"
        >
          <ListItem className="flex customHover focus:bg-[#54BFB5] focus:text-white items-center gap-2 py-2 pr-4 ">
            Hazz
          </ListItem>
        </Typography>

        <Typography
          as="a"
          href="/umrah"
          color="white"
          className="customHover focus:bg-[#54BFB5] focus:text-white"
        >
          <ListItem className="flex customHover focus:bg-[#54BFB5] focus:text-white items-center gap-2 py-2 pr-4 ">
            Umrah
          </ListItem>
        </Typography>

        {/* Pasport  */}
        <Typography
          as="a"
          href="/passport"
          color="white"
          className="customHover lg:hidden focus:bg-[#54BFB5] focus:text-white"
        >
          <ListItem className="flex customHover focus:bg-[#54BFB5] focus:text-white  items-center gap-2 py-2 pr-4  ">
            Pasport
          </ListItem>
        </Typography>
        {/* Package  */}
        {/* <Typography
          as="a"
          href="/todayPackage"
          color="white"
          className="customHover focus:bg-[#54BFB5] focus:text-white"
        >
          <ListItem className="flex customHover focus:bg-[#54BFB5] focus:text-white  items-center gap-2 py-2 pr-4  ">
            Package
          </ListItem>
        </Typography> */}
        {/* AirTicke  */}
        <Typography
          as="a"
          href="/airTicket"
          color="white"
          className="customHover focus:bg-[#54BFB5] focus:text-white"
        >
          <ListItem className="flex customHover focus:bg-[#54BFB5] focus:text-white  items-center gap-2 py-2 pr-4  ">
            Air Ticket
          </ListItem>
        </Typography>

        {/* police clearence  */}
        <Typography
          as="a"
          href="/policeClearenc"
          color="white"
          className="font-medium lg:hidden  customHover focus:bg-[#54BFB5] focus:text-white"
        >
          <ListItem className="flex customHover focus:bg-[#54BFB5] focus:text-white items-center gap-2 py-2 pr-4 text-white">
            Police clearence
          </ListItem>
        </Typography>
        <NavListMenu />
      </List>
    </div>
  );
}

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [windowWidth, setWindowWidth] = useState(null);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    if (windowWidth >= 960) {
      setOpenNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto w-full overflow-auto py-2 navBar text-white px-8">
      <div className="flex items-center justify-between">
        <Typography
          as="a"
          href="/"
          variant="h6"
          className="mr-4 hidden lg:block cursor-pointer py-1.5 lg:ml-2"
        >
          Hafezia Travel Tours
        </Typography>
        <Typography
          as="a"
          href="/"
          variant="h6"
          className="mr-4  cursor-pointer py-1.5 lg:ml-2 sm:block lg:hidden md:block rounded-full"
        >
          <Image
            width={16}
            height={16}
            alt="logo"
            className="w-12 h-12  sm:block lg:hidden md:block rounded-full ri ri dark:bg-gray-500 ri ri"
            src={logo}
          />
        </Typography>

        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <Button className="btnTwo" size="sm">
            Log In
          </Button>
          <Button className="btn" size="sm">
            Sign In
          </Button>
        </div>
        <IconButton
          variant="text"
          color="white"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList className="text-white" />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button className="btnTwo" size="sm" color="white" fullWidth>
            Log In
          </Button>
          <Button className="btn" size="sm" fullWidth>
            Sign In
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
};

export default NavBar;
