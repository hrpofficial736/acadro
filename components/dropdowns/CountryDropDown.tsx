"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { IoIosArrowDown } from "react-icons/io";
import countries from "@/utils/countries.json";

const CountryDropDown = () => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  const [content, setContent] = useState<string>("Select your country");
  
  return (
    <div className="flex flex-col items-between gap-2 relative">
      <div
        onClick={() => {
          setShowDropDown(!showDropDown);
        }}
        className="f-c-row justify-between bg-radial from-secondaryText/30 to-surface gap-4 rounded-lg px-3 py-2 min-w-[200px] text-sm font-semibold cursor-pointer active:scale-[0.98] transition-all duration-200"
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
                    setContent(`${country.flag}\u00A0${country.name}`);
                    setShowDropDown(false);
                  }}
                  className="px-3 py-2 flex gap-4 text-sm font-bold text-primaryText/80 w-full cursor-pointer hover:bg-secondaryText/10 transition-colors duration-200"
                  key={index}
                >
                  {country.flag}
                  <span>{country.name}</span>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CountryDropDown;
