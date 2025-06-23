"use client";

import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import { motion } from "motion/react";
import React from "react";
import { CgEye } from "react-icons/cg";
import PieChart from "@/components/charts/PieChart";
import useIsMobile from "@/hooks/useIsMobile";

const MyEarnings = () => {
  
  const { isMobile } = useIsMobile(1024);
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
      className="py-3 px-6 rounded-2xl max-2xl:col-span-3 col-span-2 row-span-3 bg-gradient-to-b from-surface/40 via-surface/60 to-white/10 flex flex-col gap-5"
    >
      {/* Header */}
      <div className="f-c-row justify-between">
        <h1 className="text-sm font-bold text-primaryText/80">
          Earnings this month
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

      {/* Earning */}
        <div className="flex max-[950px]:flex-col max-[950px]:gap-3 justify-between my-auto items-center px-5">
          

          {/* Pie Chart */}
          <PieChart size={ isMobile ? 120 : 180} strokeWidth={ isMobile ? 15 : 20} percentage={75} content={2587.59} isMoney={true}/>

          {/* Help for chart */}
          <div className="flex flex-col justify-start gap-5 text-secondaryText text-sm">
            <div className="flex justify-between items-center gap-2">
              <span className="flex items-center gap-3">
                <div className="bg-primary w-5 h-5 rounded" />
              <h6>My Earnings</h6>
              </span>
              <p className="text-secondaryText font-semibold">$ 2587.58</p>
            </div>
            <div className="flex justify-evenly items-center gap-2">
              <span className="flex items-center gap-3">
                <div className="bg-amber w-5 h-5 rounded" />
              <h6>Platform Charges</h6>
              </span>
              <p className="text-secondaryText font-semibold">$ 7.58</p>
            </div>
          </div>
        </div>

        
        
    </motion.div>
  );
};

export default MyEarnings;
