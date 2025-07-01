"use client";

import React from 'react';
import { motion } from 'motion/react';

type SubscriptionLimitsCardProps = {
    header: string;
    start: number;
    end: number;
    suffix: string
}

const SubscriptionLimitsCard = (props: SubscriptionLimitsCardProps) => {
  const usedResourceInString = `${props.start}${props.suffix as string}/${props.end} ${props.suffix as string}`;
  const fill = (props.start / props.end) * 100;
  return (
    <div className="rounded-xl shadow-sm shadow-primary bg-gradient-to-b from-primaryText/15 via-surface/60 to-surface/20 px-5 items-start py-3 text-sm text-secondaryText font-semibold f-c-col gap-7 max-w-[250px]">
      { props.header }

      <div className="f-c-col gap-2 w-full">
        <p className="self-end text-primaryText text-xl">{ usedResourceInString }</p>


        <div className="rounded-full bg-secondaryText relative w-full px-2 py-1">
            <motion.div initial={{
                width: 0,
            }} animate={{
                width: `${fill}%`
            }} transition={{
                type: "tween",
                duration: 0.5
            }} style={{
                width: `${fill}%`
            }} className={`bg-primary absolute z-30 inset-0 origin-left rounded-full` } />
                
        </div>


      </div>


    </div>
  )
}

export default SubscriptionLimitsCard
