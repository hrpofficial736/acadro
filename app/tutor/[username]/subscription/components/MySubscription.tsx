import React from "react";
import { CgLock } from "react-icons/cg";
import SubscriptionLimitsCard from "./SubscriptionLimitsCard";

const MySubscription = () => {
  return (
    <div className="p-3 f-c-col gap-7 w-full">
      <h1 className="text-primaryText/80 text-xl font-bold self-start">
        My Subscription
        <br />
        <p className="font-normal text-secondaryText text-xs">
          View and manage your subscription plans.
        </p>
      </h1>

      <div className="f-c-row self-start w-[100px] gap-2 border border-primary bg-primary/10 font-black text-primary rounded-3xl px-3 py-2">
        <CgLock className="text-primary" />
        Free
      </div>

    <div className="grid grid-cols-2 grid-rows-3 gap-5">
        <SubscriptionLimitsCard suffix="" header="Total active classrooms" start={4} end={10} />
        <SubscriptionLimitsCard suffix="" header="Total active classrooms" start={4} end={10} />
        <SubscriptionLimitsCard suffix="" header="Total active classrooms" start={4} end={10} />
        <SubscriptionLimitsCard suffix="" header="Total active classrooms" start={4} end={10} />
        <SubscriptionLimitsCard suffix="" header="Total active classrooms" start={4} end={10} />
        <SubscriptionLimitsCard suffix="" header="Total active classrooms" start={4} end={10} />
    </div>

    </div>
  );
};

export default MySubscription;
