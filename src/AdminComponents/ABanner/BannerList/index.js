import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { PencilIcon, UserPlusIcon } from '@heroicons/react/24/solid';
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Tooltip,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
} from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { LuCheck, LuDelete, LuFileEdit, LuPencil } from 'react-icons/lu';

const TABLE_HEAD = [
  'Banner Image',
  'Banner Title',
  'Banner Description',
  'Status',
  'Action',
];

const BannerList = () => {
  const [bList, setBannerList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/v1/banner')
      .then(res => res.json())
      .then(data => {
        setBannerList(data.data);
        console.log(data); // Check the structure of data to ensure it matches your expectations
      })
      .catch(error => {
        console.error('Error fetching banner data:', error);
      });
  }, []);
  return (
    <Card className="h-full max-w-6xl mx-auto  p-10">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Banner List
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Typography
              as="a"
              href="sidebar/AdminComponents/ABanner"
              color="white"
            >
              <Button className="flex items-center gap-3" size="sm">
                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add Banner
              </Button>
            </Typography>
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map(head => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bList.map((item, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={item.img}
                    alt={item.BannerName}
                    className="h-20 w-20"
                  />
                </td>
                <td>{item.BannerName}</td>
                <td>{item.BannerDetailse}</td>
                <td>{item.status}</td>
                <td>
                  <div className="w-full mx-auto">
                    <div className="flex  m-auto">
                      <Tooltip content="Edit">
                        <Button className=" text-black bg-white justify-center items-center ">
                          <LuPencil className="h-6 w-6 " />
                        </Button>
                      </Tooltip>
                      <Tooltip content="Approved">
                        <Button className=" text-black bg-white justify-center items-center ">
                          <LuCheck className="h-6 w-6 " />
                        </Button>
                      </Tooltip>
                      <Tooltip content="Delete">
                        <Button className=" text-black bg-white justify-center items-center ">
                          {' '}
                          <LuDelete className="h-6 w-6 " />
                        </Button>
                      </Tooltip>
                      
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm">
            Previous
          </Button>
          <Button variant="outlined" size="sm">
            Next
          </Button>
        </div>
      </CardFooter>
      
    </Card>
  );
};

export default BannerList;
