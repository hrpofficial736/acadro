"use client";

import useIsMobile from "@/hooks/useIsMobile";
import { useProgressStore } from "@/stores/useProgressStore";
import { motion, useAnimationFrame } from "motion/react";
import { RefObject, useRef } from "react";

const SegmentedProgress = ({ parentRef }: { parentRef: RefObject<HTMLDivElement | null>}) => {
  const { isMobile, mounted } = useIsMobile();
  const { setProgress } = useProgressStore();

  const startTime = useRef<number | null>(null);
  const duration: number = 6000;

  useAnimationFrame((t) => {
    if (startTime.current === null) startTime.current = t;
    const elapsedTime = t - startTime.current;
    const progress = Math.min(elapsedTime / duration, 1);
    setProgress(progress);
  })



  const style = {
    width: isMobile ? 2 : "100%",
    height: isMobile ? "100%" : 2,
  };
  if (!mounted) return null;
  
  return (
    <motion.div
    initial={isMobile ? { scaleY: 0 } : { scaleX: 0 }}
      whileInView={isMobile ? { scaleY: 1 } : { scaleX: 1 }}
      style={style}
      transition={{
        ease: "linear",
        duration: 6
      }}
      viewport={{once: true, root: parentRef}}
      className={`bg-primary absolute ${isMobile ? "origin-top" : "origin-left bg-gradient-to-r"}`}
    />
  );
};

export default SegmentedProgress;
