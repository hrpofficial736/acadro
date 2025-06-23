"use client";

import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import React from "react";
import { FaPlusCircle, FaVideo } from "react-icons/fa";
import { motion } from "motion/react";
import { ImBin } from "react-icons/im";
import { FaPencil } from "react-icons/fa6";

const UpcomingEvents = () => {
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
      className="py-3 px-6 rounded-2xl col-span-3 row-span-3 bg-gradient-to-b from-surface/40 via-surface/60 to-white/10 flex flex-col gap-5"
    >
      <div className="f-c-row justify-between">
        <h6 className="text-xs md:text-sm font-bold text-primaryText/80">
          Upcoming events
        </h6>
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
          <div className="hover:scale-[1.01] hover:bg-surface flex items-center justify-between transition-all duration-200 p-2 cursor-pointer rounded-2xl">
            <div className="flex flex-col gap-1">
              <h6 className="max-md:text-sm">Magnetism and Magnetic Field</h6>
              <p className="text-sm text-secondaryText font-medium">
                Classroom: 4C-11
              </p>
            </div>
            <div className="flex flex-col text-xs gap-1">
              23-06-2025 <p className="text-accent">(5:00)</p>
            </div>
            <div className="f-c-row gap-2 max-2xl:hidden">
              <PrimaryButton text="Join" icon={<FaVideo />} className="text-xs" onPressed={() => {}} />
              <PrimaryButton text="Edit" icon={<FaPencil />} className="text-xs" onPressed={() => {}} />
              <PrimaryButton text="Cancel" icon={<ImBin />} className="from-error to-error/70 text-xs" onPressed={() => {}} />
            </div>
          </div>
          <div className="hover:scale-[1.01] hover:bg-surface flex items-center justify-between transition-all duration-200 p-2 cursor-pointer rounded-2xl">
           <div className="flex flex-col gap-1">
              <h6 className="max-md:text-sm">Magnetism and Magnetic Field</h6>
              <p className="text-sm text-secondaryText font-medium">
                Classroom: 4C-11
              </p>
            </div>
            <div className="flex flex-col text-xs gap-1">
              23-06-2025 <p className="text-accent">(5:00)</p>
            </div>

            <div className="f-c-row gap-2 max-2xl:hidden">
              <PrimaryButton text="Join" icon={<FaVideo />} className="text-xs" onPressed={() => {}} />
              <PrimaryButton text="Edit" icon={<FaPencil />} className="text-xs" onPressed={() => {}} />
              <PrimaryButton text="Cancel" icon={<ImBin />} className="from-error to-error/70 text-xs" onPressed={() => {}} />
            </div>
          </div>
          <div className="hover:scale-[1.01] hover:bg-surface flex items-center justify-between transition-all duration-200 p-2 cursor-pointer rounded-2xl">
            <div className="flex flex-col gap-1">
              <h6 className="max-md:text-sm">Magnetism and Magnetic Field</h6>
              <p className="text-sm text-secondaryText font-medium">
                Classroom: 4C-11
              </p>
            </div>
            <div className="flex flex-col text-xs gap-1">
              23-06-2025 <p className="text-accent">(5:00)</p>
            </div>
            <div className="f-c-row gap-2 max-2xl:hidden">
              <PrimaryButton text="Join" icon={<FaVideo />} className="text-xs" onPressed={() => {}} />
              <PrimaryButton text="Edit" icon={<FaPencil />} className="text-xs" onPressed={() => {}} />
              <PrimaryButton text="Cancel" icon={<ImBin />} className="from-error to-error/70 text-xs" onPressed={() => {}} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default UpcomingEvents;
