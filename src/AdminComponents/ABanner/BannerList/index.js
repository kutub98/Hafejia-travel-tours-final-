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
    <Card className="h-full w-full">
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
                      <button
                        class="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        data-ripple-light="true"
                        data-dialog-target="animated-dialog"
                      >
                        Open Dialog
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          <div data-dialog-backdrop="animated-dialog" data-dialog-backdrop-close="true"
    class="pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300">
    <div data-dialog="animated-dialog" data-dialog-mount="opacity-100 translate-y-0 scale-100"
      data-dialog-unmount="opacity-0 -translate-y-28 scale-90 pointer-events-none"
      data-dialog-transition="transition-all duration-300"
      class="relative m-4 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl">
      <div
        class="flex items-center p-4 font-sans text-2xl antialiased font-semibold leading-snug shrink-0 text-blue-gray-900">
        Its a simple dialog.
      </div>
      <div
        class="relative p-4 font-sans text-base antialiased font-light leading-relaxed border-t border-b border-t-blue-gray-100 border-b-blue-gray-100 text-blue-gray-500">
        The key to more success is to have a lot of pillows. Put it this
        way, it took me twenty five years to get these plants, twenty five
        years of blood sweat and tears, and I&apos;m never giving up,
        I&apos;m just getting started. I&apos;m up to something. Fan luv.
      </div>
      <div class="flex flex-wrap items-center justify-end p-4 shrink-0 text-blue-gray-500">
        <button data-ripple-dark="true" data-dialog-close="true"
          class="px-6 py-3 mr-1 font-sans text-xs font-bold text-red-500 uppercase transition-all rounded-lg middle none center hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          Cancel
        </button>
        <button data-ripple-light="true" data-dialog-close="true"
          class="middle none center rounded-lg bg-gradient-to-tr from-green-600 to-green-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          Confirm
        </button>
      </div>
    </div>
  </div>
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
