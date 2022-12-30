import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import bg from "../assets/images/bg-sidebar-desktop.svg";

const Navigations = () => {
  const navigations = [
    {
      name: "Step 1",
      description: "YOUR INFO",
      count: 1,
    },
    {
      name: "Step 2",
      description: "SELECT PLAN",
      count: 2,
    },
    {
      name: "Step 3",
      description: "ADDONS",
      count: 3,
    },
    {
      name: "Step 4",
      description: "SUMMARY",
      count: 4,
    },
  ];

  return (
    <>
      <div className="flex p-6 h-screen w-[100%]">
        <div className="bg-[url('/src/assets/images/bg-sidebar-desktop.svg')] w-[30%] h-full bg-cover bg-no-repeat bg-center rounded-lg">
          <div className="w-full h-full">
            {navigations.map((navigation, index) => {
              return (
                <div className="flex  items-center  " key={index}>
                  <div className="flex justify-center items-center m-8 w-10 h-10 font-semibold text-2xl rounded-full text-white border border-white">
                    {navigation.count}
                  </div>
                  <div>
                    <p className="font-thin text-gray-300">{navigation.name}</p>
                    <p className="text-xl text-white">
                      {navigation.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <main className="w-[70%] ">
          {/* <button>
            Next Step
          </button> */}
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Navigations;
