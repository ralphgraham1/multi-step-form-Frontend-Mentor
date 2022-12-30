import React from "react";
import ar from "../assets/images/icon-arcade.svg";
import ad from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";
import PlanCards from "./plan-cards";

const Plan = () => {
  const plans = [
    {
      heading: "Arcade",
      description: "$9/mo",
      icon: <img src={ar} alt=""></img>,
    },
    {
      heading: "Advanced",
      description: "$12/mo",
      icon: <img src={ad} alt=""></img>,
    },
    {
      heading: "Pro",
      description: "$15/mo",
      icon: <img src={pro} alt=""></img>,
    },
  ];

  return (
    <div className=" pl-28 w-full h-full border border-green-500">
      <div className=" flex flex-col py-10 w-[70%] space-y-10">
        <div className="space-y-5">
          <h1 className=" text-4xl font-semibold text-MarineBlue">
            Select your plan{" "}
          </h1>
          <h1 className="p-2 text-xl text-CoolGray">
            You have the option of monthly or yearly billing
          </h1>
        </div>
        <div className="flex w-full items-center space-x-5 h-full">
          {plans.map((plans, index) => {
            return (
             <PlanCards
             key = {index}
             heading={plans.heading}
             description={plans.description}
             icon={plans.icon}
             />
             
             
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Plan;
