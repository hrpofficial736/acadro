"use client";

import React, { ReactElement, useRef } from "react";
import clsx from "clsx";
import { useProgressStore } from "@/stores/useProgressStore";

const HowItWorksCard = ({
  delay,
  title,
  description,
  icon,
}: {
  delay: number;
  title: string;
  description: string;
  icon: ReactElement<{ className: string }>;
}) => {
  const progress = useProgressStore((state) => state.progress);

  const ref = useRef<HTMLDivElement | null>(null);

  

  
  const cardProgress = progress;

  

  const styledIcon = React.cloneElement(icon, {
    className: clsx(
      icon.props.className,
      `${cardProgress >= (delay * 0.1) ? "text-primary" : "text-secondaryText"}`
    ),
  });

  return (
    <div
      ref={ref}
      className={`how-it-works-card ${cardProgress >= (delay * 0.1) ? "bg-black md:bg-gradient-to-b from-primary/20 via-black to-black shadow-lg shadow-primary/50" : "bg-surface"} transition-all duration-300 f-c-col gap-5`}
    >
      {styledIcon}
      <div className="f-c-col max-md:py-1 ">
        <h1
          className={`font-bold text-lg md:text-2xl ${
            cardProgress >= (delay * 0.1) ? "text-primaryText" : "text-secondaryText"
          } transition-all duration-300`}
        >
          {title}
        </h1>
        <p
          className={`text-center text-sm md:text-base font-semibold ${
            cardProgress >= (delay * 0.1) ? "text-secondaryText" : "text-secondaryText/50"
          } transition-all duration-300`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default HowItWorksCard;
