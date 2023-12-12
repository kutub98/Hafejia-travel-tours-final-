import HomePage from '@/Home/HomePage';
import { Typography } from '@material-tailwind/react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
// import { IoIosArrowForward } from "react-icons/io";
import { useState } from 'react';
import ABanner from '../ABanner';
import ClineImage from '../HappyClients';
import ARecentPackage from '../ARecentPackage';
import AhotDeals from '../AhotDeals';
import AGallery from '../AGallery';
import { BsHouseExclamation, BsImage } from 'react-icons/bs';
import Aservice from '../AService';
import { MdMiscellaneousServices } from 'react-icons/md';
import { LuPackageOpen } from 'react-icons/lu';
import { FaHotjar } from 'react-icons/fa';
import { GrGallery } from 'react-icons/gr';
import { LuGalleryHorizontal } from 'react-icons/lu';
import { Tooltip } from '@material-tailwind/react';
const AdminSideBar = () => {
  const [selectedContent, setSelectedContent] = useState('Home');
  const [hideAndShowIcon, setHideAndShowIcon] = useState(true);
  const [servicse, setServices] = useState(false);

  const selectContent = content => {
    setSelectedContent(content);
  };
  const hideText = () => {
    setHideAndShowIcon(false);
  };
  const showIcon = () => {
    setHideAndShowIcon(true);
  };

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
        return <AhotDeals className="transition-all duration-500" />;
      case 'gallery':
        return <AGallery className="transition-all duration-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-between container content-around max-w-7xl">
      <div className="p-4 bg-blue-gray-100 rounded fixed top-0 left-0  flex">
        {/* sidebar  */}
        <div>
          <div className="w-full bg-red-600 flex justify-end relative text-end">
            {hideAndShowIcon ? (
              <IoIosArrowBack
                onClick={hideText}
                className=" justify-end h-8 w-8 rounded-full "
              />
            ) : (
              <IoIosArrowForward
                onClick={showIcon}
                className=" justify-end h-8 w-8 rounded-full "
              />
            )}
          </div>

          <ul
            className={` inline-block ${hideAndShowIcon ? 'w-16' : 'w-full'}`}
          >
            {/* Dashhome  */}
            <Tooltip content="Home">
              <Typography
                className={`cursor-pointer flex items-center px-4 py-2 rounded my-2 transition-all duration-1000   ${
                  selectedContent === 'Home'
                    ? 'bg-blue-800 text-white'
                    : 'bg-red-600 text-white'
                }  `}
                onClick={() => selectContent('Home')}
              >
                {hideAndShowIcon ? (
                  <Typography>
                    <BsHouseExclamation className="mr-2" />
                  </Typography>
                ) : (
                  <Typography className="flex items-center">
                    <BsHouseExclamation className="mr-2" />
                    DashHome
                  </Typography>
                )}
              </Typography>
            </Tooltip>
            {/* Banner  */}
            <Tooltip content="Banner">
              <Typography
                className={`cursor-pointer flex items-center px-4 py-2 rounded my-2 transition-all duration-1000   ${
                  selectedContent === 'banner'
                    ? 'bg-blue-800 text-white'
                    : 'bg-red-600 text-white'
                }  `}
                onClick={() => selectContent('banner')}
              >
                {hideAndShowIcon ? (
                  <Typography>
                    <LuGalleryHorizontal className="" />
                  </Typography>
                ) : (
                  <Typography className="flex items-center">
                    <LuGalleryHorizontal className="mr-2" /> Banner
                  </Typography>
                )}
              </Typography>
            </Tooltip>
            {/* ClientImg */}
            <Tooltip content="Client Image">
              <Typography
                className={`cursor-pointer flex items-center px-4 py-2 rounded my-2 transition-all duration-1000   ${
                  selectedContent === 'clientImg'
                    ? 'bg-blue-800 text-white'
                    : 'bg-red-600 text-white'
                }  `}
                onClick={() => selectContent('clientImg')}
              >
                {hideAndShowIcon ? (
                  <Typography>
                    <BsImage className="mr-2" />
                  </Typography>
                ) : (
                  <Typography className="flex items-center">
                    <BsImage className="mr-2" />
                    Happy Client Pic
                  </Typography>
                )}
              </Typography>
            </Tooltip>
            {/* services  */}
            <Tooltip content="Services">
              <Typography
                className={`cursor-pointer flex items-center px-4 py-2 rounded my-2 transition-all duration-1000   ${
                  selectedContent === 'services'
                    ? 'bg-blue-800 text-white'
                    : 'bg-red-600 text-white'
                }  `}
                onClick={() => selectContent('services')}
              >
                {hideAndShowIcon ? (
                  <Typography>
                    <MdMiscellaneousServices className="mr-2" />
                  </Typography>
                ) : (
                  <Typography className="flex items-center">
                    <MdMiscellaneousServices className="mr-2" />
                    Services
                  </Typography>
                )}

                {servicse ? (
                  <IoIosArrowBack
                    onClick={hideText}
                    className=" justify-end h-8 w-8 rounded-full "
                  />
                ) : (
                  <IoIosArrowForward
                    onClick={showIcon}
                    className=" justify-end h-8 w-8 rounded-full "
                    />
                    
                )}
                
              </Typography>
            </Tooltip>
            <Tooltip content="Recent Package">
              <Typography
                className={`cursor-pointer flex items-center px-4 py-2 rounded my-2 transition-all duration-1000   ${
                  selectedContent === 'recentPackage'
                    ? 'bg-blue-800 text-white'
                    : 'bg-red-600 text-white'
                }  `}
                onClick={() => selectContent('recentPackage')}
              >
                {hideAndShowIcon ? (
                  <Typography>
                    <LuPackageOpen className="mr-2" />
                  </Typography>
                ) : (
                  <Typography className="flex items-center">
                    <LuPackageOpen className="mr-2" /> Packages
                  </Typography>
                )}
              </Typography>
            </Tooltip>
            <Tooltip content="Hot Deals">
              <Typography
                className={`cursor-pointer flex items-center px-4 py-2 rounded my-2 transition-all duration-1000   ${
                  selectedContent === 'hotDeals'
                    ? 'bg-blue-800 text-white'
                    : 'bg-red-600 text-white'
                }  `}
                onClick={() => selectContent('hotDeals')}
              >
                {hideAndShowIcon ? (
                  <Typography>
                    <FaHotjar className="mr-2" />
                  </Typography>
                ) : (
                  <Typography className="flex items-center">
                    <FaHotjar className="mr-2" /> Hot Deals
                  </Typography>
                )}
              </Typography>
            </Tooltip>
            <Tooltip content="Gallery">
              <Typography
                className={`cursor-pointer flex items-center px-4 py-2 rounded my-2 transition-all duration-1000   ${
                  selectedContent === 'gallery'
                    ? 'bg-blue-800 text-white'
                    : 'bg-red-600 text-white'
                }  `}
                onClick={() => selectContent('gallery')}
              >
                {hideAndShowIcon ? (
                  <Typography>
                    <GrGallery className="mr-2" />
                  </Typography>
                ) : (
                  <Typography className="flex items-center">
                    <GrGallery className="mr-2" /> Gallery Image
                  </Typography>
                )}
              </Typography>
            </Tooltip>
          </ul>
        </div>
      </div>
      {/* content  */}
      {/* <div className=" content-stretch container ml-64 ">{renderContent()}</div> */}
      <div
        className={` content-stretch container ${
          hideAndShowIcon ? ' ml-32' : 'ml-64'
        }`}
      >
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminSideBar;
