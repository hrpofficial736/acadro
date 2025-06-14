"use client";

import { motion } from "motion/react";
import { PrimaryButton } from "@/components/buttons/PrimaryButton";

export default function Header() {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        type: "tween",
        duration: 0.5,
      }}
      className="header"
    >
      <h1 className="font-black uppercase text-4xl md:text-6xl md:leading-20 text-center text-primaryText">
        Run live, engaging classrooms. <br /> Share, teach, and grow — all in
        one space.
      </h1>
      <h6 className="text-secondaryText text-center text-xl">
        Create sessions, share notes, hold video calls, and manage students with
        ease.
      </h6>
      <PrimaryButton text="Get started" onPressed={() => {}} />
      <div className="mockup"></div>
      
    </motion.section>
  );
}
