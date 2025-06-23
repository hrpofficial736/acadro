"use client";

import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import PieChart from "@/components/charts/PieChart";
import { motion } from "motion/react";
import React from "react";
import { CgEye, CgLock } from "react-icons/cg";

const MySubscription = () => {
  return (
    <motion.div
      initial={{
        scale: 0.8,
        opacity: 0,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      transition={{
        duration: 0.2,
        type: "tween",
      }}
      className="py-3 px-6 rounded-2xl max-2xl:col-span-3 col-span-2 row-span-3 bg-gradient-to-b from-surface/40 via-surface/60 to-white/10 flex flex-col justify-center gap-3"
    >
      <div className="f-c-row justify-between">
        <h1 className="text-sm font-bold text-primaryText/80">
          My Subscription
        </h1>
        <div className="flex gap-2">
          <PrimaryButton
            onPressed={() => {}}
            text="View More"
            className="text-xs"
            icon={<CgEye className="text-primaryText" />}
          />
        </div>
      </div>

      <div className="h-full flex flex-col gap-5 md:gap-3 items-start">
        <div className="px-3 py-1 border-2 font-normal border-primary/5 bg-primary rounded-3xl f-c-row gap-2">
          <CgLock className="text-white" />
          Free
        </div>

        <div className="w-full h-[80%] f-c-row justify-center">
          <div className="flex flex-col gap-3 items-center justify-around w-full">
            <p className="text-xs text-secondaryText text-center">
              Total Active
              <br /> Classrooms
            </p>
            <PieChart size={ 70 } strokeWidth={ 10 } percentage={75} content={9} isMoney={ false } />
            <div className="text-sm f-c-row items-end">
              <h1 className="text-3xl font-bold">9</h1>/10
            </div>
          </div>

          <div className="flex flex-col gap-3 items-center justify-around w-full">
            <p className="text-xs text-secondaryText text-center">
              Total Active
              <br /> Classrooms
            </p>
            <PieChart size={ 70 } strokeWidth={ 10 } percentage={75} content={9} isMoney={ false } />
            <div className="text-sm f-c-row items-end">
              <h1 className="text-3xl font-bold">9</h1>/10
            </div>
          </div>
          <div className="flex flex-col gap-3 items-center justify-around w-full">
            <p className="text-xs text-secondaryText text-center">
              Total Active
              <br /> Classrooms
            </p>
            <PieChart size={ 70 } strokeWidth={ 10 } percentage={75} content={9} isMoney={ false } />
            <div className="text-sm f-c-row items-end">
              <h1 className="text-3xl font-bold">9</h1>/10
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MySubscription;
