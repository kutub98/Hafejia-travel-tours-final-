/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useEffect, useState } from 'react';
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
} from '@material-tailwind/react';
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import logo from '../Assets/logo.png';
import { signOut, useSession } from 'next-auth/react';
// import { data } from 'autoprefixer';

const navListMenuItems = [
  {
    title: 'কেন হাফেজিয়া সেরা',
    link: '#',
  },
  {
    title: 'ভ্রমন নির্দেশনা',
    link: '#',
  },
  {
    title: 'নিউজ',
    link: '#',
  },
  {
    title: 'প্রশ্ন ও জিজ্ঞাসা',
    link: '#',
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data: session, status } = useSession();
  console.log(session, 'from session');
  const renderItems = navListMenuItems.map(({ icon, title, link }, key) => (
    <a href={link} key={key}>
      <div className="flex items-center gap-3 ">
        <div>
          <Typography
            color="white"
            className="flex items-center ml-2 hover:bg-blue-gray-100 hover:text-black px-3 py-2  "
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
              onClick={() => setIsMobileMenuOpen(cur => !cur)}
            >
              আরো জানুন
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? 'rotate-180' : ''
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <div>
          {session?.user ? (
            <Typography
              onClick={() => signOut()}
              color="white"
              className="bg-teal-700 text-white max-w-28 text-center mx-auto"
            >
              <ListItem className="flex customHover focus:bg-[#54BFB5] focus:text-white  items-center gap-2 py-2 pr-4  ">
                লগ আউট
              </ListItem>
            </Typography>
          ) : null}
        </div>
        <MenuList className="hidden max-w-screen-xl bg-[#001719] lg:block">
          <ul className="grid grid-cols-1 gap-y-2 ">{renderItems}</ul>
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
    <>
      <div>
        <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 text-lg">
          {/* HAZE UMRA  */}
          <Typography
            as="a"
            href="/umrahAndHaze"
            color="white"
            className="customHover focus:bg-[#54BFB5] focus:text-white"
          >
            <ListItem className="flex customHover focus:bg-[#54BFB5] focus:text-white items-center gap-2 py-2 pr-4 ">
              হজ্ব ও ওমরাহ
            </ListItem>
          </Typography>
          {/* visa process  */}
          <Typography
            as="a"
            href="/visaProcess"
            color="white"
            className="customHover focus:bg-[#54BFB5] focus:text-white"
          >
            <ListItem className="flex items-center gap-2 py-2 pr-4 customHover focus:bg-[#54BFB5] focus:text-white!">
              ভিসা প্রসেসিং
            </ListItem>
          </Typography>

          {/*  বিমান টিকেট  */}
          <Typography
            as="a"
            href="/passport"
            color="white"
            className="customHover  focus:bg-[#54BFB5] focus:text-white"
          >
            <ListItem className="flex customHover focus:bg-[#54BFB5] focus:text-white  items-center gap-2 py-2 pr-4  ">
              বিমান টিকেট
            </ListItem>
          </Typography>

          {/* প্যাকেজ  */}
          <Typography
            as="a"
            href="/package"
            color="white"
            className="customHover focus:bg-[#54BFB5] focus:text-white"
          >
            <ListItem className="flex customHover focus:bg-[#54BFB5] focus:text-white  items-center gap-2 py-2 pr-4  ">
              প্যাকেজ
            </ListItem>
          </Typography>
          {/* আমাদের সম্পর্কে  */}
          <Typography
            as="a"
            href="/aboutus"
            color="white"
            className="customHover focus:bg-[#54BFB5] focus:text-white"
          >
            <ListItem className="flex customHover focus:bg-[#54BFB5] focus:text-white  items-center gap-2 py-2 pr-4  ">
              আমাদের সম্পর্কে
            </ListItem>
          </Typography>

          <NavListMenu />
        </List>
      </div>
    </>
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
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto w-full overflow-auto py-1 navBar border-none shadow-none rounded-none text-teal-500 px-8 items-center">
      <div className="flex items-center justify-between text-teal-500">
        {/* logo  */}
        <Typography
          as="a"
          href="/"
          variant="h6"
          className="mr-4  justify-center items-center my-auto hidden lg:block cursor-pointer  lg:ml-2"
        >
          <Image
            alt="logo"
            // objectFit="contain"
            className=" max-w-[300px] mt-4  h-[100px]  sm:hidden lg:block md:hidden dark:bg-gray-500 "
            src={logo}
          />
        </Typography>

        <Typography
          as="a"
          href="/"
          variant="h6"
          className="mr-4  cursor-pointer py-1.5 lg:ml-2 sm:block lg:hidden md:block rounded-full"
        >
          <Image
            alt="logo"
            className=" max-w-[200px] mt-4 sm:block lg:hidden md:block  dark:bg-gray-500 "
            src={logo}
          />
        </Typography>

        <div className="hidden lg:block">
          <NavList />
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
      </Collapse>
    </Navbar>
  );
};

export default NavBar;
