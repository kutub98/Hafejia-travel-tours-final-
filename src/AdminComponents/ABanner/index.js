/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { PencilIcon, UserPlusIcon } from '@heroicons/react/24/solid';

import {
  Card,
  Input,
  Typography,
  Button,
  CardBody,
  Tooltip,
} from '@material-tailwind/react';
import { IoAddCircle } from 'react-icons/io5';
import { LuDelete } from 'react-icons/lu';

const ABanner = () => {
  const [formData, setFormData] = useState([]);
  const addOneBanner = () => {
    const newRow = {
      serialNumber: formData.length + 1,
      img: '',
      BannerName: '',
      BannerDetailse: '',
    };
    setFormData([...formData, newRow]);
  };

  const handleInputChange = (index, field, e) => {
    const updatedFormData = [...formData];
    if (field === 'img') {
      updatedFormData[index][field] = e.target.files[0]; // Store File object
    } else {
      updatedFormData[index][field] = e.target.value;
    }
    setFormData(updatedFormData);
  };

  const deleteRow = index => {
    const updateLength = formData
      .filter((_, i) => i !== index)
      .map((row, index) => ({ ...row, serialNumber: index + 1 }));
    setFormData(updateLength);
  };

  const uploadImageToImgBB = async file => {
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=eabfc704d2e8635a3a4a57426aa9487b`,
        {
          method: 'POST',
          body: formData,
        },
      );
      const data = await response.json();
      return data.data.url;
    } catch (error) {
      console.error('Error uploading image:', error);
      return '';
    }
  };

  const handleSumbiFormData = async event => {
    event.preventDefault();
    const promises = formData.map(async (row, index) => {
      if (row.img && typeof row.img !== 'string') {
        const imgUrl = await uploadImageToImgBB(row.img);
        return { ...row, img: imgUrl };
      }
      return row;
    });

    const formDataWithImgUrls = await Promise.all(promises);

    const bannerInfo = formDataWithImgUrls.map(row => ({
      img: row.img,
      BannerName: row?.BannerName,
      BannerDetailse: row?.BannerDetailse,
    }));

    console.log(bannerInfo, 'BANNER INFO');

    const submitBanner = async bannerInfo => {
      try {
        const response = fetch('http://localhost:5000/api/v1/banner', {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(bannerInfo),
        });

        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };

    submitBanner(bannerInfo);
  };

  return (
    <div className="mx-auto w-full bg-gray-50 sm:p-8">
      <div className="flex flex-col sm:flex-row justify-between">
        <h1 className="py-2 px-6 bg-green-600 text-white rounded mb-4 sm:mb-0">
          Add a Banner
        </h1>

        <div onClick={addOneBanner}>
          <Tooltip content=" Add a Banner">
            <Button className="flex items-center gap-3" size="sm">
              <IoAddCircle strokeWidth={2} className="h-4 w-4" />
              Add a Banner
            </Button>
          </Tooltip>
        </div>
      </div>
      <div>
        <Card>
          <CardBody className="p-2 sm:p-2">
            <form onSubmit={handleSumbiFormData}>
              <div className="overflow-x-auto">
                <table className="mt-4 w-full min-w-max table-auto text-center">
                  <thead>
                    <tr className="lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1">
                      <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal leading-none opacity-70"
                        >
                          SL No:
                        </Typography>
                      </th>
                      <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal leading-none opacity-70"
                        >
                          Image
                        </Typography>
                      </th>
                      <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal leading-none opacity-70"
                        >
                          Banner Name
                        </Typography>
                      </th>
                      <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal leading-none opacity-70"
                        >
                          Banner Details
                        </Typography>
                      </th>

                      <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal leading-none opacity-70"
                        >
                          Action
                        </Typography>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.map((row, index) => (
                      <tr
                        key={index}
                        className="items-center lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1 w-full"
                      >
                        <td className="text-center">{row?.serialNumber}</td>
                        <td className="flex mx-3 items-center ">
                          {row.img && (
                            <img
                              src={row.img}
                              alt="Hafejia"
                              className="px-2"
                              style={{ maxWidth: '100px', maxHeight: '200px' }}
                            />
                          )}
                          <label
                            htmlFor={`imageUpload-${index}`}
                            className="cursor-pointer ml-2"
                          >
                            <div className="bg-blue-500 text-white py-2 px-4 rounded-md">
                              Upload Image
                            </div>
                            <input
                              type="file"
                              id={`imageUpload-${index}`}
                              className="hidden"
                              onChange={e => handleInputChange(index, 'img', e)}
                            />
                          </label>
                        </td>
                        <td className=" mx-3">
                          <Input
                            value={row?.BannerName}
                            label="BannerName"
                            className="w-full"
                            onChange={e =>
                              handleInputChange(index, 'BannerName', e)
                            }
                          />
                        </td>
                        <td className="mx-3 ">
                          <Input
                            type="textarea"
                            value={row?.BannerDetailse}
                            label="Banner Details"
                            className="w-full"
                            onChange={e =>
                              handleInputChange(index, 'BannerDetailse', e)
                            }
                          />
                        </td>

                        <td onClick={() => deleteRow(index)} className="mx-1">
                          <Tooltip content="Delete">
                            <Button>
                              <LuDelete />
                            </Button>
                          </Tooltip>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="w-full flex my-10 justify-center mx-auto">
                <Button className="w-full sm:w-96" type="submit">
                  Submit
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default ABanner;
