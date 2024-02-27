import React, { useState } from 'react';

function CustomTabs() {
  const tabs = [
    // { label: "All", content: <OurService/> },

    
  ];

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = index => {
    setActiveTab(index);
  };

  return (
    <div className="container   mx-auto  my-4  lg:my-24">
      <div className="max-w-7xl w-full mx-auto">
        <h1 className="text-center  lg:text-5xl font-bold xl:mt-36 lg:mt-36 lg:mb-16 animate-pulse text-3xl my-10">
          Our Services
        </h1>
        <div className=" mx-auto flex xl:justify-between justify-between md:justify-center ">
          <h1 className=" lg:text-left sm:text-center  text-2xl sm:text-4xl font-semibold "></h1>

          <ul className=" lg:w-[480px]  w-full overflow-hidden flex justify-start  sm:justify-start  my-2 bg-[#f1f3f3] shadow-md  p-2 rounded">
            {tabs.map((tab, index) => (
              <li
                key={index}
                className={`mx-auto px-2 cursor-pointer  sm:px-4 py-2 rounded text-center sm:text-right ${
                  activeTab === index
                    ? 'text-white bg-[#020540] text-lg'
                    : 'text-black   text-lg'
                }`}
                onClick={() => handleTabClick(index)}
              >
                {tab.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full my-4 sm:my-8 px-4 sm:px-8 Tabs">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`${
                activeTab === index ? 'block tabsContent' : 'hidden'
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
