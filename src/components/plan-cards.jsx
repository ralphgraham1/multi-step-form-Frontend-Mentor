import React from "react";

const PlanCards = ({ icon, heading, description }) => {
  return (
    <div className=" w-full h-full border border-CoolGray rounded-md">
      <div className="flex flex-row my-4  items-center text-center h-[100%] p-4">
        <span className="w-8 h-8 ">{icon}</span>
      </div>
      <div className=" p-4">
        <h1 className="text-xl items-center font-semibold">{heading}</h1>
        <p className="">{description}</p>
      </div>
    </div>
  );
};

export default PlanCards;
