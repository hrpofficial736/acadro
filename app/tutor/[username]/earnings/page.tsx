"use client";

import PieChart from "@/components/charts/PieChart";
import useIsMobile from "@/hooks/useIsMobile";
import * as motion from "motion/react-client";
import EaningsFromClassrooms from "./components/EarningsFromClassrooms";
import RecentEnrollments from "./components/RecentEnrollments";

export default function EarningsPage() {
  const { isMobile } = useIsMobile(1024);
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
      className="px-4 py-3 f-c-col gap-10 overflow-y-scroll overflow-x-hidden max-lg:mx-auto ml-auto w-full lg:max-w-[90%]"
    >

      <h1 className="text-primaryText/80 text-xl font-bold self-start">
        My Earnings
        <br />
        <p className="font-normal text-secondaryText text-xs">
          View your earnings based on classrooms and recent enrollments.
        </p>
      </h1>

        {/* Piechart Representation */}
      <div className="f-c-row gap-10 md:gap-20">
        <PieChart
          size={isMobile ? 120 : 180}
          strokeWidth={isMobile ? 15 : 20}
          percentage={75}
          content={2587.59}
          isMoney={true}
        />
        <div className="f-c-col items-start gap-3 text-xs md:text-sm">
          <div className="f-c-row gap-3">
            <div className="bg-primary w-5 h-5 rounded" />
            <h6 className="text-secondaryText">My Earnings ($ 2587.58)</h6>
          </div>
          <div className="f-c-row gap-3">
            <div className="bg-secondaryText w-5 h-5 rounded" />
            <h6 className="text-secondaryText">Platform Charges ($ 765.46)</h6>
          </div>
        </div>
      </div>



      {/* Detailed Sections */}
      <div className="f-c-col justify-start lg:flex-row lg:items-start gap-10 lg:gap-40 p-4 w-full">
        <EaningsFromClassrooms />
        <RecentEnrollments />
      </div>
    </motion.div>
  );
}
