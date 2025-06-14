"use client";

import useIsMobile from "@/hooks/useIsMobile";
import { motion } from "motion/react";

const SegmentedProgress = ({ dimension }: { dimension: number }) => {
  const { isMobile, mounted } = useIsMobile();
  const style = {
    width: isMobile ? 5 : dimension,
    height: isMobile ? dimension : 5,
  };
  if (!mounted) return null;
  console.log(mounted, isMobile);
  
  return (
    <motion.div
    initial={isMobile ? { scaleY: 0 } : { scaleX: 0 }}
      animate={isMobile ? { scaleY: 1 } : { scaleX: 1 }}
      style={style}
      transition={{
        ease: "linear",
        delay: 2,
        duration: 6
      }}
      className={`bg-primary absolute ${isMobile ? "origin-top" : "origin-left"}`}
    />
  );
};

export default SegmentedProgress;
