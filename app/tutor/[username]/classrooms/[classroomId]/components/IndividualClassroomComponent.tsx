"use client";

import React from 'react';
import { motion } from 'motion/react';
import StatsCard from '../../../components/StatsCard';

const IndividualClassroomComponent = () => {
  return (
    <motion.div initial={{
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
      className="border w-full h-full mt-10">
      <div
        className={`grid grid-cols-2 grid-rows-2 max-sm:gap-5 sm:flex justify-between w-[90%]`}
      >
        <StatsCard header="Active classrooms" count={7} update="+2 last week" />
        <StatsCard header="Active classrooms" count={7} update="+2 last week" />
        <StatsCard header="Active classrooms" count={7} update="+2 last week" />
        <StatsCard header="Active classrooms" count={7} update="+2 last week" />
      </div>


      
    </motion.div>
  )
}

export default IndividualClassroomComponent
