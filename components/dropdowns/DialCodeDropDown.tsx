"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { IoIosArrowDown } from "react-icons/io";
import countries from "@/utils/countries.json";

const DialCodeDropDown = () => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  const [content, setContent] = useState<string>(`${countries[0].flag} ${countries[0].code} ${countries[0].dial_code}`);
  
  return (
    <div className="flex flex-col items-between gap-2 relative">
      <div
        onClick={() => {
          setShowDropDown(!showDropDown);
        }}
        className="f-c-row lg:min-w-[150px] justify-between bg-radial from-secondaryText/30 to-surface gap-4 rounded-lg px-3 py-2 text-sm font-semibold cursor-pointer active:scale-[0.98] transition-all duration-200"
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
            className={`bg-surface absolute top-10 w-full z-[9999] flex flex-col gap-2 rounded-lg h-[150px] overflow-y-scroll`}
          >
            {countries.map((country, index) => {
              return (
                <div
                  onClick={() => {
                    setContent(`${country.flag}(${country.dial_code})`);
                    setShowDropDown(false);
                  }}
                  className="px-3 py-2 flex gap-2 text-sm font-bold text-primaryText/80 w-full cursor-pointer hover:bg-secondaryText/10 transition-colors duration-200"
                  key={index}
                >
                  {country.flag}
                  <span>{country.code}</span>
                  <span>{country.dial_code}</span>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DialCodeDropDown;
