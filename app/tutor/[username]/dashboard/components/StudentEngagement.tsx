"use client";

import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import React from "react";
import { motion } from "motion/react";

const StudentEngagement = () => {
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
      className="py-3 px-6 rounded-2xl col-span-3 max-2xl:col-start-2 max-2xl:col-end-6 row-span-3 bg-gradient-to-b from-surface/40 via-surface/60 to-white/10 flex flex-col gap-5"
    >
      <div className="f-c-row justify-between">
        <h6 className="text-sm md:text-sm font-bold text-primaryText/80">
          Classrooms Needing Attention
        </h6>
        <div className="flex gap-2">
          <PrimaryButton
            text="View all"
            className="text-xs"
            onPressed={() => {}}
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col text-lg font-semibold text-primaryText/90">
          <div className="lg:hidden flex justify-between">
            <div className="flex flex-col text-xs gap-1 text-center">
                <p className="text-secondaryText">Classrooms</p>
              </div>
              <div className="flex flex-col text-xs gap-1 text-center">
                <p className="text-secondaryText">Average <br />attendance</p>
              </div>
              <div className="flex flex-col text-xs gap-1 md:text-center">
                <p className="text-secondaryText">Assignment <br />submissions</p>
              </div>
              <div className="flex flex-col text-xs gap-1 text-center">
                <p className="text-secondaryText">Average <br />marks</p>
              </div>
            </div>  
          <div className="hover:scale-[1.01] hover:bg-surface flex items-center justify-between transition-all duration-200 p-2 cursor-pointer rounded-2xl">
            <div className="flex flex-col gap-1">
              <h6 className="max-lg:text-sm">4C-11</h6>
              <p className="text-xs md:text-sm text-secondaryText font-medium">
                (60)
              </p>
            </div>
            <div className="flex flex-col text-xs gap-1 text-center">
              50% <p className="text-error max-lg:hidden">(avg. attendance)</p>
            </div>
            <div className="flex flex-col text-xs gap-1 text-center">
              70% <p className="text-amber max-lg:hidden">(assignment submissions)</p>
            </div>
            <div className="flex flex-col text-xs gap-1 text-center">
              70% <p className="text-amber max-lg:hidden">(avg. marks in recent tests)</p>
            </div>
          </div>
          <div className="hover:scale-[1.01] hover:bg-surface flex items-center justify-between transition-all duration-200 p-2 cursor-pointer rounded-2xl">
            <div className="flex flex-col gap-1">
              <h6 className="max-lg:text-sm">4C-11</h6>
              <p className="text-xs md:text-sm text-secondaryText font-medium">
                (60)
              </p>
            </div>
            <div className="flex flex-col text-xs gap-1 text-center">
              50% <p className="text-error max-lg:hidden">(avg. attendance)</p>
            </div>
            <div className="flex flex-col text-xs gap-1 text-center">
              70% <p className="text-amber max-lg:hidden">(assignment submissions)</p>
            </div>
            <div className="flex flex-col text-xs gap-1 text-center">
              70% <p className="text-amber max-lg:hidden">(avg. marks in recent tests)</p>
            </div>
          </div>
          <div className="hover:scale-[1.01] hover:bg-surface flex items-center justify-between transition-all duration-200 p-2 cursor-pointer rounded-2xl">
            <div className="flex flex-col gap-1">
              <h6 className="max-lg:text-sm">4C-11</h6>
              <p className="text-xs md:text-sm text-secondaryText font-medium">
                (60)
              </p>
            </div>
            <div className="flex flex-col text-xs gap-1 text-center">
              50% <p className="text-error max-lg:hidden">(avg. attendance)</p>
            </div>
            <div className="flex flex-col text-xs gap-1 text-center">
              70% <p className="text-amber max-lg:hidden">(assignment submissions)</p>
            </div>
            <div className="flex flex-col text-xs gap-1 text-center">
              70% <p className="text-amber max-lg:hidden">(avg. marks in recent tests)</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StudentEngagement;
