import React, { useState } from 'react';
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';
import { Cog6ToothIcon } from '@heroicons/react/24/solid';
import { FaChalkboardUser } from 'react-icons/fa6';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { PiFlagBannerFill } from 'react-icons/pi';
import { TbPackages } from 'react-icons/tb';
import { RxDashboard } from 'react-icons/rx';
import { FaHotjar } from 'react-icons/fa';
import { TfiGallery } from 'react-icons/tfi';
import HomePage from '@/Home/HomePage';
import ABanner from '@/AdminComponents/ABanner';
import ClineImage from '@/AdminComponents/HappyClients';
import ARecentPackage from '@/AdminComponents/ARecentPackage';
import Aservice from '@/AdminComponents/AService';
import AHotDeals from '@/AdminComponents/AhotDeals';
import AGallery from '@/AdminComponents/AGallery';
import { Tooltip } from '@material-tailwind/react';
import { BsArrowBarUp } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
const SidebarWithContentSeparator = () => {
  const [open, setOpen] = React.useState(0);
  const [selectedContent, setSelectedContent] = useState('Home');

  const renderContent = () => {
    switch (selectedContent) {
      case 'Home':
        return <HomePage className="transition-all duration-500" />;
      case 'banner':
        return <ABanner className="transition-all duration-500" />;
      case 'clientImg':
        return <ClineImage className="transition-all duration-500" />;
      case 'recentPackage':
        return <ARecentPackage className="transition-all duration-500" />;
      case 'services':
        return <Aservice className="transition-all duration-500" />;
      case 'hotDeals':
        return <AHotDeals className="transition-all duration-500" />;
      case 'gallery':
        return <AGallery className="transition-all duration-500" />;
      default:
        return null;
    }
  };
  const handleOpen = value => {
    setOpen(open === value ? 0 : value);
  };

  const selectContent = content => {
    setSelectedContent(content);
  };

  const [hideIconText, setHideIconText] = useState(true);
  const HandleHideIcon = () => {
    setHideIconText(false);
  };
  const HandleHideText = () => {
    setHideIconText(true);
  };

  return (
    <div className="flex max-w-7xl container mx-auto">
      <Card
        className={`h-[calc(100vh-2rem)]  ${
          hideIconText
            ? 'w-full max-w-[18rem]'
            : 'w-full max-w-[6rem] text-center justify-center'
        } p-4 shadow-xl shadow-blue-gray-900/5  fixed top-0 left-0 bg-blue-gray-100 overflow-y-scroll`}
        style={{
          maxHeight: 'calc(100vh - 2rem)',
          overflowY: 'scroll',
          scrollbarWidth: 'thin',
          scrollbarColor: 'transparent transparent',
        }}
      >
        <div className=" absolute right-2 z-50 top-0 my-4 bg-white p-4 rounded-full text-center ">
          {hideIconText ? (
            <IoIosArrowBack
              className="h-5 w-5"
              onClick={() => HandleHideIcon(hideIconText)}
            />
          ) : (
            <FaBars
              className="h-5 w-5"
              onClick={() => HandleHideText(hideIconText)}
            />
          )}
        </div>
        <div className="mb-2 p-4 my-5">
          <Typography
            href="/"
            as="a"
            className="cursor-pointer"
            variant="h5"
            color="blue-gray"
          ></Typography>
        </div>
        <List>
          <Accordion
            open={open === 1}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 1 ? 'rotate-180' : ''
                }`}
              />
            }
          >
            {/* HomePage */}
            <Tooltip content="Home Page" placement="right">
              {hideIconText ? (
                <ListItem
                  className={`cursor-pointer flex items-center px-4 py-3 rounded my-2 transition-all duration-1000   ${
                    selectedContent === 'Home'
                      ? 'bg-blue-800 text-white'
                      : 'bg-gray-50 text-blue-gray-800'
                  }  `}
                  onClick={() => selectContent('Home')}
                >
                  <ListItemPrefix>
                    <RxDashboard className="h-5 w-5" />
                  </ListItemPrefix>
                  Dashboard
                </ListItem>
              ) : (
                <ListItem
                  className={`cursor-pointer items-center w-10 rounded my-2 transition-all duration-1000   ${
                    selectedContent === 'Home'
                      ? 'bg-blue-800 text-white'
                      : 'bg-gray-50 text-blue-gray-800'
                  }  `}
                  onClick={() => selectContent('Home')}
                >
                  <ListItemPrefix>
                    <RxDashboard className="h-5 w-5 -ml-1" />
                  </ListItemPrefix>
                </ListItem>
              )}
            </Tooltip>
            {/* banner */}
            <Tooltip content="Banner" placement="right">
              {hideIconText ? (
                <ListItem
                  className={`cursor-pointer flex items-center px-4 py-3 rounded my-2 transition-all duration-1000   ${
                    selectedContent === 'banner'
                      ? 'bg-blue-800 text-white'
                      : 'bg-gray-50 text-blue-gray-800'
                  }  `}
                  onClick={() => selectContent('banner')}
                >
                  <ListItemPrefix>
                    <PiFlagBannerFill className="h-5 w-5" />
                  </ListItemPrefix>
                  Banner
                </ListItem>
              ) : (
                <ListItem
                  className={`cursor-pointer w-10 rounded my-2 transition-all duration-1000   ${
                    selectedContent === 'banner'
                      ? 'bg-blue-800 text-white'
                      : 'bg-gray-50 text-blue-gray-800'
                  }  `}
                  onClick={() => selectContent('banner')}
                >
                  <ListItemPrefix>
                    <PiFlagBannerFill className="h-5 w-5 -ml-1" />
                  </ListItemPrefix>
                </ListItem>
              )}
            </Tooltip>
            {/* Happy Clients Pic */}
            <Tooltip content="Happy Client Image" placement="right">
              {hideIconText ? (
                <ListItem
                  className={`cursor-pointer  rounded my-2 transition-all duration-1000   ${
                    selectedContent === 'clientImg'
                      ? 'bg-blue-800 text-white'
                      : 'bg-gray-50 text-blue-gray-800'
                  }  `}
                  onClick={() => selectContent('clientImg')}
                >
                  <ListItemPrefix>
                    <FaChalkboardUser className="h-5 w-5" />
                  </ListItemPrefix>
                  Happy Clients Pic
                </ListItem>
              ) : (
                <ListItem
                  className={`cursor-pointer w-10 rounded my-2 transition-all duration-1000   ${
                    selectedContent === 'clientImg'
                      ? 'bg-blue-800 text-white'
                      : 'bg-gray-50 text-blue-gray-800'
                  }  `}
                  onClick={() => selectContent('clientImg')}
                >
                  <ListItemPrefix>
                    <FaChalkboardUser className="h-5 w-5 -ml-1" />
                  </ListItemPrefix>
                </ListItem>
              )}
            </Tooltip>
          </Accordion>
          <Accordion
            open={open === 2}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 2 ? 'rotate-180' : ''
                }`}
              />
            }
          >
            {/* // services  */}
            <Tooltip content="Services" placement="right">
              {hideIconText ? (
                <ListItem
                  selected={open === 2}
                  className={`cursor-pointer text-white flex items-center px-4 py-3 rounded my-2 transition-all duration-1000 p-0   ${
                    selectedContent === 'services'
                      ? 'bg-blue-800 text-white'
                      : 'bg-gray-50 text-blue-gray-800'
                  }  `}
                  onClick={() => selectContent('services')}
                >
                  <AccordionHeader
                    onClick={() => handleOpen(2)}
                    className="border-b-0 p-3"
                  >
                    <ListItemPrefix>
                      <Cog6ToothIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    <Typography
                      color="blue-gray"
                      className="mr-auto font-normal"
                    >
                      Services
                    </Typography>
                  </AccordionHeader>
                </ListItem>
              ) : (
                <ListItem
                  selected={open === 2}
                  className={`cursor-pointer text-white w-10 rounded my-2 transition-all duration-1000 p-0   ${
                    selectedContent === 'services'
                      ? 'bg-blue-800 text-white'
                      : 'bg-gray-50 text-blue-gray-800'
                  }  `}
                  onClick={() => selectContent('services')}
                >
                  <AccordionHeader
                    onClick={() => handleOpen(2)}
                    className="border-b-0 p-3"
                  >
                    <ListItemPrefix>
                      <Cog6ToothIcon className="h-5 w-5 -ml-1" />
                    </ListItemPrefix>
                  </AccordionHeader>
                </ListItem>
              )}
            </Tooltip>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Orders
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Orders
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Orders
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Orders
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Products
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>
          <hr className="my-2 border-blue-gray-50" />
          {/* Packages  */}
          <Tooltip content="Packages" placement="right">
            {hideIconText ? (
              <ListItem
                className={`cursor-pointer flex items-center px-4 py-3 rounded my-2 transition-all duration-1000   ${
                  selectedContent === 'recentPackage'
                    ? 'bg-blue-800 text-white'
                    : 'bg-gray-50 text-blue-gray-800'
                }  `}
                onClick={() => selectContent('recentPackage')}
              >
                <ListItemPrefix>
                  <TbPackages className="h-5 w-5" />
                </ListItemPrefix>
                Packages
              </ListItem>
            ) : (
              <ListItem
                className={`cursor-pointer w-10 rounded my-2 transition-all duration-1000   ${
                  selectedContent === 'recentPackage'
                    ? 'bg-blue-800 text-white'
                    : 'bg-gray-50 text-blue-gray-800'
                }  `}
                onClick={() => selectContent('recentPackage')}
              >
                <ListItemPrefix>
                  <TbPackages className="h-5 w-5 -ml-1" />
                </ListItemPrefix>
              </ListItem>
            )}
          </Tooltip>

          {/* hotDeals  */}
          <Tooltip content="Hot Deals Offer" placement="right">
            {hideIconText ? (
              <ListItem
                className={`cursor-pointer flex items-center px-4 py-3 rounded my-2 transition-all duration-1000   ${
                  selectedContent === 'hotDeals'
                    ? 'bg-blue-800 text-white'
                    : 'bg-gray-50 text-blue-gray-800'
                }  `}
                onClick={() => selectContent('hotDeals')}
              >
                <ListItemPrefix>
                  <FaHotjar className="h-5 w-5" />
                </ListItemPrefix>
                Hot Deals
              </ListItem>
            ) : (
              <ListItem
                className={`cursor-pointer w-10 rounded my-2 transition-all duration-1000   ${
                  selectedContent === 'hotDeals'
                    ? 'bg-blue-800 text-white'
                    : 'bg-gray-50 text-blue-gray-800'
                }  `}
                onClick={() => selectContent('hotDeals')}
              >
                <ListItemPrefix>
                  <FaHotjar className="h-5 w-5 -ml-1" />
                </ListItemPrefix>
              </ListItem>
            )}
          </Tooltip>
          {/* gallery  */}
          <Tooltip content="Gallary" placement="left">
            {hideIconText ? (
              <ListItem
                className={`cursor-pointer flex items-center px-4 py-3 rounded my-2 transition-all duration-1000   ${
                  selectedContent === 'gallery'
                    ? 'bg-blue-800 text-white'
                    : 'bg-gray-50 text-blue-gray-800'
                }  `}
                onClick={() => selectContent('gallery')}
              >
                <ListItemPrefix>
                  <TfiGallery className="h-5 w-5" />
                </ListItemPrefix>
                Gallery
              </ListItem>
            ) : (
              <ListItem
                className={`cursor-pointer w-10 rounded my-2 transition-all duration-1000   ${
                  selectedContent === 'gallery'
                    ? 'bg-blue-800 text-white'
                    : 'bg-gray-50 text-blue-gray-800'
                }  `}
                onClick={() => selectContent('gallery')}
              >
                <ListItemPrefix>
                  <TfiGallery className="h-5 w-5 -ml-1" />
                </ListItemPrefix>
              </ListItem>
            )}
          </Tooltip>
        </List>
      </Card>
      <div
        className={`content-stretch mx-auto container ${
          hideIconText ? 'ml-64' : 'ml-28'
        }`}
      >
        {renderContent()}
      </div>
    </div>
  );
};

export default SidebarWithContentSeparator;
