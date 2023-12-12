/* eslint-disable @next/next/no-img-element */
import { Input } from '@material-tailwind/react';
import React, { useState } from 'react';
import { Bs0Circle } from 'react-icons/bs';
import { MdDelete, MdDeleteForever } from 'react-icons/md';
import { Tooltip } from '@material-tailwind/react';
const ClineImage = () => {
  const [imgSrc, setImgSrc] = useState([]);
  const fileUpload = e => {
    for (const file of e.target.files) {
      const readImg = new FileReader();
      readImg.readAsDataURL(file);
      readImg.onload = () => {
        setImgSrc(imgs => [...imgs, readImg.result]);
      };
      readImg.onerror = () => {
        console.log(readImg.error);
      };
    }
  };

  const submitClientImage = e => {
    e.preventDefault();
    console.log(imgSrc);
  };

  const deleteImages = deleteimg => {
    setImgSrc(imgs => imgs.filter((_, i) => i !== deleteimg));
  };
  return (
    <div className="w-full bg-gray-50 p-10 mx-auto">
      <div className="w-full my-10 justify-center flex mx-auto">
        <label className="bg-red-600 py-5 justify-center mx-auto text-white px-5 text-center rounded cursor-pointer">
          <input
            onChange={fileUpload}
            type="file"
            name="file"
            className="hidden w-full bg-blue-gray-300"
            multiple
            placeholder="Upload Image"
          />
          Upload Client Image
        </label>
      </div>
      <form onClick={submitClientImage}>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-2 mx-auto  gap-4">
          {imgSrc.map((link, index) => (
            <div className="relative" key={index}>
              <img src={link} alt="image" className="h-72 w-72 rounded p-2 " />
              <Tooltip content="Delete" placement="top">
                <MdDeleteForever
                  data-tooltip-target="tooltip-top"
                  content="Delete"
                  onClick={() => deleteImages(index)}
                  className=" cursor-pointer h-8 w-8 rounded-full absolute top-4 right-4 bg-red-800 p-1 text-white"
                ></MdDeleteForever>
              </Tooltip>
            </div>
          ))}
        </div>
        <div className="w-full justify-center flex mx-auto ">
          <Tooltip content="Submit">
            <button
              type="submit"
              className="px-6 py-4 rounded w-1/2 mx-auto bg-green-700 text-white font-bold"
            >
              Submit
            </button>
          </Tooltip>
        </div>
      </form>
    </div>
  );
};

export default ClineImage;
