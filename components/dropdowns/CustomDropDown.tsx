"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { IoIosArrowDown } from "react-icons/io";
import clsx from "clsx";

const CustomDropDown = ({
  placeholder,
  listOfOptions,
  className,
  label,
  callback
}: {
  placeholder: string;
  listOfOptions: string[];
  className?: string;
  label?: string;
  callback: (value: string) => void;
}) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [content, setContent] = useState<string>(placeholder);
  return (
    <div className={clsx("flex flex-col items-between gap-2 relative", className)}>
      <label className="text-sm font-medium text-primaryText/80" htmlFor={label}>{ label }</label>
      <div
        onClick={() => {
          setShowDropDown(!showDropDown);
        }}
        className="flex items-center bg-radial from-secondaryText/30 to-surface gap-2 rounded-lg px-3 py-2 text-sm font-semibold cursor-pointer active:scale-[0.98] transition-all duration-200"
      >
        {content}
        <IoIosArrowDown
          className={`${
            showDropDown && "rotate-180 transition-all duration-300"
          }`}
        />
      </div>

      {/* List */}

      <AnimatePresence>
        {showDropDown && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.2,
              type: "tween",
            }}
            className={`bg-surface absolute top-16 w-full z-[9999] flex flex-col gap-2 rounded-lg max-h-[200px] overflow-y-scroll `}
          >
            {listOfOptions.map((option, index) => {
              return (
                <div
                  onClick={() => {
                    setContent(option);
                    setShowDropDown(false);
                    callback(option);
                  }}
                  className="px-3 py-2 f-c-row font-bold text-primaryText/80 w-full cursor-pointer hover:bg-secondaryText/10 transition-colors duration-200"
                  key={index}
                >
                  {option}
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomDropDown;
