import { Button } from "@material-tailwind/react";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { MdCheckCircle, MdEmail } from "react-icons/md";
const Airticket = () => {
  return (
    <div className="py-8">
      <h1 className="lg:text-5xl text-3xl mb-8 font-bold text-white text-center">
        Airticket
      </h1>
      <h1 className="lg:text-4xl text-2xl mb-8 font-bold text-white">
        Requirements
      </h1>
      <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 grid-cols-full gap-4 ">
        <div className="flex bgClip w-full my-1 font-semibold">
          {" "}
          <MdCheckCircle className="h-6 w-6 mr-2 text-green-600" />
          Passport
        </div>
        <div className="flex bgClip w-full my-1 font-semibold">
          {" "}
          <MdCheckCircle className="h-6 w-6 mr-2 text-green-600" />
          Nid Card (Photo Copy)
        </div>
        <div className="flex bgClip w-full my-1 font-semibold">
          {" "}
          <MdCheckCircle className="h-6 w-6 mr-2 text-green-600" />
          Electirict Bill
        </div>
        <div className="flex bgClip w-full my-1 font-semibold">
          {" "}
          <MdCheckCircle className="h-6 w-6 mr-2 text-green-600" />
          Mothers Nid Card (Photo Copy)
        </div>
        <div className="flex bgClip w-full my-1 font-semibold">
          {" "}
          <MdCheckCircle className="h-6 w-6 mr-2 text-green-600" />
          Fathers Nid Card (Photo Copy)
        </div>
        <div className="flex bgClip w-full my-1 font-semibold">
          {" "}
          <MdCheckCircle className="h-6 w-6 mr-2 text-green-600" />
          BankStatement
        </div>
        <div className="flex bgClip w-full my-1 font-semibold">
          {" "}
          <MdCheckCircle className="h-6 w-6 mr-2 text-green-600" />
          2pc Pictures
        </div>
      </div>

      <div className="flex items-center my-4">
        <Button className="btn ">Contact with us </Button> :
        <BsWhatsapp className="h-6 w-6 mx-1 text-white" />{" "}
        <IoCallOutline className="h-6 w-6 mx-1 text-white" />{" "}
        <MdEmail className="h-6 w-6 mx-1 text-white" />
      </div>
    </div>
  );
};

export default Airticket;
