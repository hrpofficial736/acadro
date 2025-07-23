"use client";

import { useWindowStore } from "@/stores/useWindowStore";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { IoMdClose } from "react-icons/io";
import clsx from "clsx";

const Window = ({
  className,
  children,
  header,
  index
}: {
  className?: string;
  children: React.ReactNode;
  header: string;
  index: string;
}) => {
  const { show, toggleShow } = useWindowStore();
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
          className={clsx("window", className)}
        >
          {/* Cross icon */}
          <div className="flex justify-between w-full">
            <p className="text-xs font-semibold text-secondaryText">{header}</p>
            <div
              onClick={() => toggleShow(index)}
              className="bg-error p-2 text-primaryText rounded-md self-end cursor-pointer font-bold"
            >
              <IoMdClose />
            </div>
          </div>

          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Window;
