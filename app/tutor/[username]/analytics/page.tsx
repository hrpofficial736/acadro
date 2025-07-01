"use client";

import ClassroomsAnalytics from "./components/ClassroomsAnalytics";
import StudentsProgress from "./components/StudentsProgress";
import YourActivity from "./components/YourActivity";
import * as motion from "motion/react-client";

export default function Analytics() {
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
      className="px-4 py-3 overflow-y-scroll overflow-x-hidden border max-lg:mx-auto ml-auto max-w-[90%]"
    >
      <YourActivity />
      <ClassroomsAnalytics />
      <StudentsProgress />
    </motion.div>
  );
}
