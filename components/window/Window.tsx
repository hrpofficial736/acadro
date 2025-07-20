"use client";

import { useLogOutWindowStore } from "@/stores/useLogOutWindowStore";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { IoMdClose } from "react-icons/io";
import { PrimaryButton } from "../buttons/PrimaryButton";

const Window = () => {
  const { show, toggleShow } = useLogOutWindowStore();
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.3,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 0.3,
          }}
          transition={{
            ease: "easeInOut",
            duration: 0.3,
          }}
          className="w-[500px] rounded-lg bg-surface outline-2 outline-border px-3 py-2 flex flex-col gap-5 z-[9999] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          {/* Cross icon */}
          <div className="flex justify-between w-full">
            <p className="text-xs font-semibold text-secondaryText">Log out</p>
            <div
            onClick={() => toggleShow()}
            className="bg-error p-2 text-primaryText rounded-lg self-end cursor-pointer"
          >
            
            <IoMdClose />
          </div>
          </div>


          <h1 className="self-center text-primaryText/80">Are you sure you want to log out?</h1>

          <div className="flex gap-5 justify-center">
            <PrimaryButton text="Yes" onPressed={() => {toggleShow()}} className="px-10" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Window;
