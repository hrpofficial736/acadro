import PricingCard from "@/components/cards/PricingCard";
import React from "react";

const SwitchPlan = () => {
  return (
    <div className="p-3 f-c-col gap-7 w-full">
      <h1 className="text-primaryText/80 text-xl font-bold self-start">
        Switch to Premium
        <br />
        <p className="font-normal text-secondaryText text-xs">
          Instantly get access to all the premium features of Acadro.
        </p>
      </h1>

      {/* Pricing Card */}

      <PricingCard
        isFree
        amount={0}
        featuresList={[
          "Up to 2 active classrooms",
          "Up to 50 students",
          "200 MB total storage",
          "20 live sessions per month",
          "Basic Collaborative Tools",
          "Basic Analytics",
          "15% platform fee on student payments",
        ]}
      />
    </div>
  );
};

export default SwitchPlan;
