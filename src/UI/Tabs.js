import React, { useState } from "react";
import AllService from "./AllService";
import Hazh from "@/pages/hazh";
import Umrah from "@/pages/umrah";
import Passport from "@/pages/passport";
function CustomTabs() {
  const tabs = [
    { label: "All", content: <AllService></AllService> },
    { label: "Hazh", content: <Hazh></Hazh> },
    { label: "Umrah", content: <Umrah></Umrah> },
    { label: "Passport", content: <Passport></Passport> },
  ];

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="container mx-auto  my-4  lg:my-24">
      <div className="max-w-7xl w-full">
      <h1 className="text-center  lg:text-5xl font-bold xl:mt-36 lg:mt-36 lg:mb-24 animate-pulse text-3xl my-10">
        Our Services
      </h1>
        <div className="  flex xl:justify-between justify-between md:justify-center ">
          <h1 className=" lg:text-left sm:text-center  text-2xl sm:text-4xl font-semibold ">
            
          </h1>

          <ul className="w-full sm:w-96 flex justify-start  sm:justify-start md:jus 4 my-2 bg-[#f1f3f3] shadow-md  p-2 rounded">
            {tabs.map((tab, index) => (
              <li
                key={index}
                className={`cursor-pointer mx-2 px-2 sm:px-4 py-2 rounded text-center sm:text-right ${
                  activeTab === index ? "text-white bg-[#020540] text-lg" : "text-black   text-lg"
                }`}
                onClick={() => handleTabClick(index)}
              >
                {tab.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full my-4 sm:my-8 px-4 sm:px-8">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`${
                activeTab === index ? "block" : "hidden"
              } max-w-7xl animate-fade-out mx-auto`}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomTabs;
