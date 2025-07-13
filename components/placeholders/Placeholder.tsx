import clsx from "clsx";
import * as motion from "motion/react-client";

import React from 'react';

const Placeholder = ({ width, height, className }: { width: number; height: number, className: string;}) => {
  return (
    <div style={{
        width,
        height
    }} className={clsx("relative overflow-hidden", className)}>
      <motion.div initial={{
        backgroundColor: "#1e1f26",
        opacity: 0
      }} animate={{
        backgroundColor: "#1e1f26",
        opacity: 1
      }} transition={{
        repeat: Infinity,
        repeatType: "mirror",
        duration: 0.6,
        type: "tween"
      }} className='absolute border-none w-full h-full'>

      </motion.div>
    </div>
  )
}

export default Placeholder;
