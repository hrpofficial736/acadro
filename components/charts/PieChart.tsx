"use client";

import React, { useEffect, useState } from "react";
import CountUp from "react-countup";


type PieChartProps = {
    size: number;
    strokeWidth: number;
    percentage: number;
    content: number;
    subContent?: string;
    isMoney: boolean;
}

const PieChart = ({ size, strokeWidth, percentage, content, subContent, isMoney }: PieChartProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const newOffset = circumference - (percentage / 100) * circumference;
      setOffset(newOffset);
    }, 100);

    return () => clearTimeout(timeout);
  }, [percentage]);
  return (
    <div className="self-center relative">
      <svg width={size} height={size}>
        <circle
          r={radius}
          className="stroke-secondaryText"
          cx={size / 2}
          cy={size / 2}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="none"
        />
        <circle
          r={radius}
          stroke="#4F46E5"
          cx={size / 2}
          cy={size / 2}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 1.5s ease" }}
          fill="none"
        />
      </svg>
      <div className="flex justify-center gap-1 font-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        { isMoney && <p className="text-secondaryText text-[calc(200%/2.5)]">$</p>}
        <h1 className="text-primaryText text-[calc(200%/2)] text-center">
          <CountUp start={0} end={content} decimals={ !isMoney ? 0 : 2} duration={1.5} />
          <p className="text-secondaryText text-xs font-semibold text-center">{ subContent }</p>
        </h1>
      </div>
    </div>
  );
};

export default PieChart;
