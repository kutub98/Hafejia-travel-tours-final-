import { Button } from '@material-tailwind/react';
import React from 'react';

const Subscribe = () => {
  return (
    <div className="max-w-3xl mx-auto text-center my-32">
      <h1 className="text-4xl font-medium">Subscribe</h1>
      <div className="max-w-3xl mx-auto flex justify-between bg-teal-500 items-center ">
        <div className="w-3/4">
          <input placeholder="Subscribe  " className="w-full px-2 py-2" />
        </div>
        <div className="w-1/4">
          <Button className="w-full">Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
