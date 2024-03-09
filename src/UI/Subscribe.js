import { Button } from '@material-tailwind/react';
import React from 'react';

const Subscribe = () => {
  return (
    <div className="max-w-xl mx-auto text-center my-32">
      <h1 className="text-center  font-bold my-8 animate-pulse text-3xl lg:text-5xl my-2  rounded-xl lg:w-2/5 justify-center mx-auto ">সাবসক্রাইব</h1>
     
      <div className="max-w-xl mx-auto flex justify-between items-center ">
        <div className="w-3/4">
          <input placeholder="Subscribe  " className="w-full px-2 py-2" />
        </div>
        <div className="w-1/4">
          <Button className="w-full btnTwo">সাবমিট করুন</Button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
