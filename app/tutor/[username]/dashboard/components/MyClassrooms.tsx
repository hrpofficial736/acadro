"use client";

import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import { motion } from "motion/react";

const MyClassrooms = () => {
  return (
    <motion.div initial={{
        scale: 0.8,
        opacity: 0
    }} animate={{
        scale: 1,
        opacity: 1
    }} transition={{
        duration: 0.2,
        type: "tween"
    }} className="py-3 px-6 rounded-2xl max-2xl:col-span-3 col-span-2 row-span-3 bg-gradient-to-b from-surface/40 via-surface/60 to-white/10 flex flex-col gap-5">
      <div className="f-c-row justify-between">
        <h6 className="text-sm font-bold text-primaryText/80">My Classrooms</h6>
        <div className="flex gap-2">
          <PrimaryButton
            text="View all"
            className="text-xs"
            onPressed={() => {}}
          />
          <PrimaryButton
            onPressed={() => {}}
            text="Create"
            className="text-xs"
            icon={<FaPlusCircle className="text-primaryText" />}
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col text-lg font-semibold text-primaryText/90">
          <div className="hover:scale-[1.01] hover:bg-surface transition-all duration-200 p-2 cursor-pointer rounded-2xl">
            <h6>Classrooms</h6>
            <p className="text-sm text-secondaryText font-medium">
              Total students: 60
            </p>
          </div>
          <div className="hover:scale-[1.01] hover:bg-surface transition-all duration-200 p-2 cursor-pointer rounded-2xl">
            <h6>Classrooms</h6>
            <p className="text-sm text-secondaryText font-medium">
              Total students: 60
            </p>
          </div>
          <div className="hover:scale-[1.01] hover:bg-surface transition-all duration-200 p-2 cursor-pointer rounded-2xl">
            <h6>Classrooms</h6>
            <p className="text-sm text-secondaryText font-medium">
              Total students: 60
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MyClassrooms;
