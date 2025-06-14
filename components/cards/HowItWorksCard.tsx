"use client";

import React, { ReactElement, useEffect, useState } from "react";
import clsx from "clsx";

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
  const [displayShadow, setDisplayShadow] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setDisplayShadow(true);
    }, delay * 1000);
  }, [delay, displayShadow]);

  const styledIcon = React.cloneElement(icon, {
    className: clsx(
      icon.props.className,
      `${displayShadow ? "text-primary" : "text-secondaryText"}`
    ),
  });

  return (
    <div
      className={`how-it-works-card ${
        displayShadow && "shadow-lg shadow-primary bg-radial from-primary to-black md:bg-gradient-to-b md:from-primary/40 via-black md:to-black"
      } transition-all duration-800 f-c-col gap-5`}
    >
        {styledIcon}
        <div className="f-c-col max-md:py-1 ">
          <h1
            className={`font-bold text-lg md:text-2xl ${
              displayShadow ? "text-primaryText" : "text-secondaryText"
            } transition-colors duration-300`}
          >
            {title}
          </h1>
          <p
            className={`text-center text-sm md:text-base font-semibold ${
              displayShadow ? "text-secondaryText" : "text-secondaryText/50"
            } transition-colors duration-300`}
          >
            {description}
          </p>
        </div>
    </div>
  );
};

export default HowItWorksCard;
