import React, { useState } from 'react';
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
} from '@material-tailwind/react';
import { FaChalkboardUser } from 'react-icons/fa6';
import { Heater } from 'lucide-react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { PiFlagBannerFill } from 'react-icons/pi';
import { RxDashboard } from 'react-icons/rx';
import { FaClipboardList, FaHotjar } from 'react-icons/fa';
import { TfiGallery } from 'react-icons/tfi';
import HomePage from '@/Home/HomePage';
import ABanner from '@/AdminComponents/ABanner';
import ClineImage from '@/AdminComponents/HappyClients';
import ARecentPackage from '@/AdminComponents/ARecentPackage';
import AHotDeals from '@/AdminComponents/AhotDeals';
import AGallery from '@/AdminComponents/AGallery';
import { Tooltip } from '@material-tailwind/react';
import { FaBars } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Aservices from '@/AdminComponents/AService';
import BannerList from '@/AdminComponents/ABanner/BannerList';
import { LuFileBox, LuImage, LuPackagePlus, LuServerCog, LuSettings, LuUserPlus } from 'react-icons/lu';
import ServiceList from '@/AdminComponents/AService/ServiceList';
import HotDealsList from '@/AdminComponents/AhotDeals/AhotDealsList';
import PackageList from '@/AdminComponents/ARecentPackage/PackageList';
import GalleryList from '@/AdminComponents/AGallery/GalleryList';
import ClientImageList from '@/AdminComponents/HappyClients/ClientImgList';
import AddUser from '@/AdminComponents/User/AddUser';

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
      case 'clientImgList':
        return <ClientImageList className="transition-all duration-500" />;
      case 'recentPackage':
        return <ARecentPackage className="transition-all duration-500" />;
      case 'PackageList':
        return <PackageList className="transition-all duration-500" />;
      case 'services':
        return <Aservices className="transition-all duration-500" />;
      case 'hotDeals':
        return <AHotDeals className="transition-all duration-500" />;
      case 'HotDealsList':
        return <HotDealsList className="transition-all duration-500" />;
      case 'BannerList':
        return <BannerList className="transition-all duration-500" />;
      case 'ServiceList':
        return <ServiceList className="transition-all duration-500" />;
      case 'gallery':
        return <AGallery className="transition-all duration-500" />;
      case 'galleryList':
        return <GalleryList className="transition-all duration-500" />;
      case 'addUser':
        return <AddUser className="transition-all duration-500" />;
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
        className={` h-screen ${
          hideIconText
            ? 'w-full max-w-[18rem] transition-all ease-in  z-[999]'
            : 'w-full max-w-[6rem] transition-all ease-out z-[999]'
        } p-4 shadow-xl shadow-blue-gray-900/5  fixed top-0 left-0 bg-blue-gray-900 overflow-y-scroll`}
        style={{
          maxHeight: 'h-screen',
          overflowY: 'scroll',
          scrollbarWidth: 'thin',
          scrollbarColor: 'transparent transparent',
        }}
      >
        <div className=" flex justify-end sticky   right-2 z-50 top-0 rounded-full  mb-0">
          {hideIconText ? (
            <div
              className=" rounded-full   bg-white cursor-pointer flex justify-center items-center transition-all ease-intransition-all ease-in"
              onClick={() => HandleHideIcon(hideIconText)}
            >
              <IoIosArrowBack className="h-10 w-10 p-2" />
            </div>
          ) : (
            <div
              className=" rounded-full transition-transform  bg-white cursor-pointer flex justify-center items-center"
              onClick={() => HandleHideText(hideIconText)}
            >
              <FaBars className="h-10 w-10 p-2" />
            </div>
          )}
        </div>
        <div className="mb-2 p-4 ">
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
                className={`mx-auto h-4 w-4 transition-transform transition-all ${
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
            {/* BannerList */}
            <Tooltip content="BannerList" placement="right">
              {hideIconText ? (
                <ListItem
                  className={`cursor-pointer flex items-center px-4 py-3 rounded my-2 transition-all duration-1000   ${
                    selectedContent === 'BannerList'
                      ? 'bg-blue-800 text-white'
                      : 'bg-gray-50 text-blue-gray-800'
                  }  `}
                  onClick={() => selectContent('BannerList')}
                >
                  <ListItemPrefix className="flex">
                    <FaClipboardList className="h-5 w-5" />
                  </ListItemPrefix>
                  BannerList
                </ListItem>
              ) : (
                <ListItem
                  className={`cursor-pointer w-10 rounded my-2 transition-all duration-1000   ${
                    selectedContent === 'BannerList'
                      ? 'bg-blue-800 text-white'
                      : 'bg-gray-50 text-blue-gray-800'
                  }  `}
                  onClick={() => selectContent('BannerList')}
                >
                  <ListItemPrefix>
                  <FaClipboardList className="h-5 w-5" />
                  </ListItemPrefix>
                </ListItem>
              )}
            </Tooltip>

            {/* Services */}
            <Tooltip content="services" placement="right">
              {hideIconText ? (
                <ListItem
                  className={`cursor-pointer flex items-center px-4 py-3 rounded my-2 transition-all duration-1000   ${
                    selectedContent === 'services'
                      ? 'bg-blue-800 text-white'
                      : 'bg-gray-50 text-blue-gray-800'
                  }  `}
                  onClick={() => selectContent('services')}
                >
                  <ListItemPrefix>
                    <LuSettings className="h-5 w-5" />
                  </ListItemPrefix>
                  Services
                </ListItem>
              ) : (
                <ListItem
                  className={`cursor-pointer w-10 rounded my-2 transition-all duration-1000   ${
                    selectedContent === 'services'
                      ? 'bg-blue-800 text-white'
                      : 'bg-gray-50 text-blue-gray-800'
                  }  `}
                  onClick={() => selectContent('services')}
                >
                  <ListItemPrefix>
                  <LuSettings className="h-5 w-5" />
                  </ListItemPrefix>
                </ListItem>
              )}
            </Tooltip>
            {/* ServiceList */}
            <Tooltip content="ServiceList" placement="right">
              {hideIconText ? (
                <ListItem
                  className={`cursor-pointer flex items-center px-4 py-3 rounded my-2 transition-all duration-1000   ${
                    selectedContent === 'ServiceList'
                      ? 'bg-blue-800 text-white'
                      : 'bg-gray-50 text-blue-gray-800'
                  }  `}
                  onClick={() => selectContent('ServiceList')}
                >
                  <ListItemPrefix>
                
                    <LuServerCog className="h-5 w-5  -ml-1" />
                  </ListItemPrefix>
                  Service List
                </ListItem>
              ) : (
                <ListItem
                  className={`cursor-pointer w-10 rounded my-2 transition-all duration-1000   ${
                    selectedContent === 'ServiceList'
                      ? 'bg-blue-800 text-white'
                      : 'bg-gray-50 text-blue-gray-800'
                  }  `}
                  onClick={() => selectContent('ServiceList')}
                >
                  <ListItemPrefix>
                    <LuServerCog className="h-5 w-5 -ml-1" />
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
                    {/* <Image className="h-5 w-5" src="../../Assets/icons/image.png" alt='Icon'/> */}
                    <FaChalkboardUser className="h-5 w-5" />
                  </ListItemPrefix>
                  Clients Image
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
            {/* Happy Clients list */}
            <Tooltip content=" Client Image list" placement="right">
              {hideIconText ? (
                <ListItem
                  className={`cursor-pointer  rounded my-2 transition-all duration-1000   ${
                    selectedContent === 'clientImgList'
                      ? 'bg-blue-800 text-white'
                      : 'bg-gray-50 text-blue-gray-800'
                  }  `}
                  onClick={() => selectContent('clientImgList')}
                >
                  <ListItemPrefix>
                    <FaChalkboardUser className="h-5 w-5" />
                  </ListItemPrefix>
                  Client Image list
                </ListItem>
              ) : (
                <ListItem
                  className={`cursor-pointer w-10 rounded my-2 transition-all duration-1000   ${
                    selectedContent === 'clientImgList'
                      ? 'bg-blue-800 text-white'
                      : 'bg-gray-50 text-blue-gray-800'
                  }  `}
                  onClick={() => selectContent('clientImgList')}
                >
                  <ListItemPrefix>
                    <FaChalkboardUser className="h-5 w-5 -ml-1" />
                  </ListItemPrefix>
                </ListItem>
              )}
            </Tooltip>

            {/* প্যাকেজস  */}
            <Tooltip content="Package" placement="right">
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
                    
                    <LuPackagePlus className="h-5 w-5" />
                  </ListItemPrefix>
                  Package
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
                      
                    <LuPackagePlus className="h-5 w-5" />
                  </ListItemPrefix>
                </ListItem>
              )}
            </Tooltip>
            {/* PackageList  */}
            <Tooltip content="PackageList" placement="right">
              {hideIconText ? (
                <ListItem
                  className={`cursor-pointer flex items-center px-4 py-3 rounded my-2 transition-all duration-1000   ${
                    selectedContent === 'PackageList'
                      ? 'bg-blue-800 text-white'
                      : 'bg-gray-50 text-blue-gray-800'
                  }  `}
                  onClick={() => selectContent('PackageList')}
                >
                  <ListItemPrefix>
                    
                    <LuFileBox className="h-5 w-5" />
                  </ListItemPrefix>
                  Package list
                </ListItem>
              ) : (
                <ListItem
                  className={`cursor-pointer w-10 rounded my-2 transition-all duration-1000   ${
                    selectedContent === 'PackageList'
                      ? 'bg-blue-800 text-white'
                      : 'bg-gray-50 text-blue-gray-800'
                  }  `}
                  onClick={() => selectContent('PackageList')}
                >
                  <ListItemPrefix>
                  <LuFileBox className="h-5 w-5" />
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
            {/* hotDealsList  */}
            <Tooltip content="Hot Deal List" placement="right">
              {hideIconText ? (
                <ListItem
                  className={`cursor-pointer flex items-center px-4 py-3 rounded my-2 transition-all duration-1000   ${
                    selectedContent === 'HotDealsList'
                      ? 'bg-blue-800 text-white'
                      : 'bg-gray-50 text-blue-gray-800'
                  }  `}
                  onClick={() => selectContent('HotDealsList')}
                >
                  <ListItemPrefix>
                    
                    <Heater className="h-5 w-5" />
                  </ListItemPrefix>
                  Hot Deals list
                </ListItem>
              ) : (
                <ListItem
                  className={`cursor-pointer w-10 rounded my-2 transition-all duration-1000   ${
                    selectedContent === 'HotDealsList'
                      ? 'bg-blue-800 text-white'
                      : 'bg-gray-50 text-blue-gray-800'
                  }  `}
                  onClick={() => selectContent('HotDealsList')}
                >
                  <ListItemPrefix>
                    <Heater className="h-5 w-5 -ml-1" />
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
                    
                    <LuImage className="h-5 w-5" />
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
            {/* galleryList  */}
            <Tooltip content="galleryList" placement="left">
              {hideIconText ? (
                <ListItem
                  className={`cursor-pointer flex items-center px-4 py-3 rounded my-2 transition-all duration-1000   ${
                    selectedContent === 'galleryList'
                      ? 'bg-blue-800 text-white'
                      : 'bg-gray-50 text-blue-gray-800'
                  }  `}
                  onClick={() => selectContent('galleryList')}
                >
                  <ListItemPrefix>
                    <TfiGallery className="h-5 w-5" />
                  </ListItemPrefix>
                  Gallery List
                </ListItem>
              ) : (
                <ListItem
                  className={`cursor-pointer w-10 rounded my-2 transition-all duration-1000   ${
                    selectedContent === 'galleryList'
                      ? 'bg-blue-800 text-white'
                      : 'bg-gray-50 text-blue-gray-800'
                  }  `}
                  onClick={() => selectContent('galleryList')}
                >
                  <ListItemPrefix>
                    <TfiGallery className="h-5 w-5 -ml-1" />
                  </ListItemPrefix>
                </ListItem>
              )}
            </Tooltip>

            {/* addUser  */}
            <Tooltip content="addUser" placement="left">
              {hideIconText ? (
                <ListItem
                  className={`cursor-pointer flex items-center px-4 py-3 rounded my-2 transition-all duration-1000   ${
                    selectedContent === 'addUser'
                      ? 'bg-blue-800 text-white'
                      : 'bg-gray-50 text-blue-gray-800'
                  }  `}
                  onClick={() => selectContent('addUser')}
                >
                  <ListItemPrefix>
                    <LuUserPlus className="h-5 w-5" />
                  </ListItemPrefix>
                 Add User
                </ListItem>
              ) : (
                <ListItem
                  className={`cursor-pointer w-10 rounded my-2 transition-all duration-1000   ${
                    selectedContent === 'addUser'
                      ? 'bg-blue-800 text-white'
                      : 'bg-gray-50 text-blue-gray-800'
                  }  `}
                  onClick={() => selectContent('addUser')}
                >
                  <ListItemPrefix>
                    <LuUserPlus className="h-5 w-5 -ml-1" />
                  </ListItemPrefix>
                </ListItem>
              )}
            </Tooltip>
          </Accordion>
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
