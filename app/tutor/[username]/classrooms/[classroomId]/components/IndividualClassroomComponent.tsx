"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import StatsCard from "../../../components/StatsCard";
import Students from "./Students";
import Sessions from "./Sessions";
import Tests from "./Tests";
import Notes from "./Notes";
import Assignments from "./Assignments";
import Analytics from "./Analytics";

const IndividualClassroomComponent = () => {
  const sections = [
    { name: "Students", component: <Students /> },
    { name: "Sessions", component: <Sessions /> },
    { name: "Tests", component: <Tests /> },
    { name: "Notes", component: <Notes /> },
    { name: "Assignments", component: <Assignments /> },
    { name: "Analytics", component: <Analytics /> },
  ];
  const [current, setCurrent] = useState<number>(0);
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
      className="w-full h-full mt-10"
    >
      <div
        className={`grid grid-cols-2 grid-rows-2 max-sm:gap-5 sm:flex justify-between w-[90%]`}
      >
        <StatsCard header="Active classrooms" count={7} update="+2 last week" />
        <StatsCard header="Active classrooms" count={7} update="+2 last week" />
        <StatsCard header="Active classrooms" count={7} update="+2 last week" />
        <StatsCard header="Active classrooms" count={7} update="+2 last week" />
      </div>

      <div className="w-full flex items-center max-md:hidden gap-10 relative mt-10">
        {sections.map((setting, index) => {
          return (
            <div
              onClick={() => setCurrent(index)}
              key={index}
              className={`px-3 py-2 font-semibold cursor-pointer text-primaryText/80 ${
                current !== index && "text-secondaryText/50"
              }`}
            >
              {setting.name}
              <motion.div
                initial={{
                  opacity: 0,
                  width: 0,
                }}
                animate={{
                  opacity: current === index ? 1 : 0,
                  width: current === index ? "100%" : 0,
                }}
                transition={{
                  duration: 0.2,
                  type: "tween",
                }}
                className="bg-primaryText/80 w-full h-[2px] rounded origin-left"
              />
            </div>
          );
        })}
      </div>

      {sections[current].component}
    </motion.div>
  );
};

export default IndividualClassroomComponent;
