import React, { useState } from "react";
import AllService from "./AllService";
function CustomTabs() {
  const tabs = [
    { label: "All", content: <AllService></AllService> },
    { label: "Hazh", content: "React services content" },
    { label: "Umrah", content: "Vue services content" },
    { label: "Passport", content: "Svelte services content" },
  ];

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    //     <div className="container mx-auto bg-gray-50 my-24">
    //       <div className="max-w-7xl  w-full">
    //           <div className="px-8 lg:flex justify-between">
    //           <h1 className="text-4xl font-semibold">Our Service</h1>

    // <ul className="w-96 flex ">
    //     {tabs.map((tab, index) => (
    //       <li
    //         key={index}

    //         className={`cursor-pointer  mx-2 px-4 sm:px-2 py-2 rounded text-right ${
    //           activeTab === index ? "text-white bg-[#020540] " : "text-black "
    //         }`}
    //         onClick={() => handleTabClick(index)}
    //       >
    //         {tab.label}
    //       </li>
    //     ))}
    //   </ul>
    //           </div>

    //         <div className="w-full my-8 px-8">

    //           {tabs.map((tab, index) => (
    //             <div
    //               key={index}
    //               className={`${
    //                 activeTab === index ? "block" : "hidden"
    //               } max-w-7xl animate-fade-out `}
    //             >
    //               {tab.content}
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    <div className="container mx-auto bg-gray-50 my-4 sm:my-8 lg:my-24">
      <div className="max-w-7xl w-full">
        <div className="px-4 sm:px-8 lg:flex xl:justify-between justify-between md:justify-between">
          <h1 className=" lg:text-left sm:text-center  text-2xl sm:text-4xl font-semibold">
            Our Service
          </h1>

          <ul className="w-full sm:w-96 flex justify-start  sm:justify-start my-7">
            {tabs.map((tab, index) => (
              <li
                key={index}
                className={`cursor-pointer mx-2 px-2 sm:px-4 py-2 rounded text-center sm:text-right ${
                  activeTab === index ? "text-white bg-[#020540]" : "text-black"
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
