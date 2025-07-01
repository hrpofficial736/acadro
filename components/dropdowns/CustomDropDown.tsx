"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MdArrowDropDown } from "react-icons/md";

const CustomDropDown = ({
  placeholder,
  listOfOptions,
}: {
  placeholder: string;
  listOfOptions: string[];
}) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [content, setContent] = useState<string>(placeholder);
  return (
    <div className="flex flex-col items-between gap-2 relative">
      <div
        onClick={() => {
          setShowDropDown(!showDropDown);
        }}
        className="flex items-center bg-radial from-secondaryText/30 to-surface gap-2 rounded-lg px-3 py-2 text-sm font-semibold cursor-pointer active:scale-[0.98] transition-all duration-200"
      >
        {content}
        <MdArrowDropDown
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
            className={`bg-surface absolute top-10 w-full z-[9999] f-c-col gap-2 rounded-lg max-h-[200px] overflow-y-scroll `}
          >
            {listOfOptions.map((option, index) => {
              return (
                <div
                  onClick={() => {
                    setContent(option);
                    setShowDropDown(false);
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
