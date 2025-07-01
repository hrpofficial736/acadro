"use client";

import useIsMobile from "@/hooks/useIsMobile";
import React from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const AttendanceRate = ({
  header,
  subheader,
}: {
  header: string;
  subheader: string;
}) => {
  const { isMobile } = useIsMobile(1536);
  const data = [
    {
      classroom: "classroom 1",
      score: 80,
    },
    {
      classroom: "classroom 2",
      score: 60,
    },
    {
      classroom: "classroom 3",
      score: 91,
    },
    {
      classroom: "classroom 4",
      score: 78,
    },
  ];
  return (
    <div
      className={"analytics-card"}
    >
      <h1 className="text-primaryText/80 lg:text-xl font-bold">
        {header}
        <br />
        <p className="font-normal text-secondaryText text-xs">{subheader}</p>
      </h1>

      <ResponsiveContainer width={"90%"}
        height={"80%"} className={`mt-5 self-center`}>
        <LineChart
          width={isMobile ? 300 : 500}
          height={isMobile ? 200 : 300}
          data={data}
          margin={{
            top: 5,
            right: 20,
            left: 0,
            bottom: 5,
          }}
        >
          <XAxis dataKey="classroom" />
          <YAxis />
          <Tooltip />
          <Line type={"monotone"} stroke="#4f46e5" startOffset={10} dataKey={"score"} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceRate;
