"use client";

import { motion, useAnimation } from "motion/react";
import React, { useEffect, useState } from "react";

const RoleToggle = () => {
  const [selectedTab, setSelectedTab] = useState<"tutor" | "student">("tutor");
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: selectedTab === "student" ? "100%" : "0%",
    });
  }, [selectedTab]);
  return (
    <div className="flex justify-between relative rounded-3xl bg-surface p-2">
      <div
        onClick={() =>
          setSelectedTab(() => {
            return "tutor";
          })
        }
        className={`${
          selectedTab === "tutor" ? "text-primaryText" : "text-secondaryText/50"
        } rounded-3xl text-sm p-2 cursor-pointer w-1/2 f-c-row font-bold`}
      >
        I&apos; m a tutor
      </div>
      <div
        onClick={() =>
          setSelectedTab(() => {
            return "student";
          })
        }
        className={`${
          selectedTab === "student" ? "text-primaryText" : "text-secondaryText/50"
        } rounded-3xl text-sm p-2 cursor-pointer font-bold w-1/2 f-c-row`}
      >
        I&apos; m a student
      </div>
      <motion.div
        animate={controls}
        transition={{
          type: "tween",
          duration: 0.3,
        }}
        className="absolute top-0 left-0 h-full w-1/2 bg-black/10 shadow-md shadow-primary rounded-3xl"
      ></motion.div>
    </div>
  );
};

export default RoleToggle;
