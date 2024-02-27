import React from 'react';
import Lottie from 'lottie-react';
import lottiFile from '../../error.json';
import { Typography } from '@material-tailwind/react';
import { Button } from '@material-tailwind/react';
const ErrorPage = () => {
  return (
    <div className="">
      <div className="flex flex-col w-full justify-center items-center">
        <Lottie
          animationData={lottiFile}
          className="flex justify-center items-center h-96 w-96 bg-white"
          loop={true}
        />
      </div>

      <div className="w-[300px] mx-auto text-center">
        <h1 className="my-6 text-3xl">Sorry page not found</h1>
        <Typography as="a" href="/">
          <Button className="btnThree">Back to Home</Button>
        </Typography>
      </div>
    </div>
  );
};

export default ErrorPage;
