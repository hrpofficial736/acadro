"use client";

import useIsMobile from "@/hooks/useIsMobile";
import React from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const ClassroomsPerformance = ({
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
      <h1 className="text-primaryText/80 lg:text-xl font-bold ">
        {header}
        <br />
        <p className="font-normal text-secondaryText max-w-xs text-xs">{subheader}</p>
      </h1>

      <ResponsiveContainer
        width={"90%"}
        height={"80%"}
        className={`mt-5 self-center`}
      >
        <BarChart
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
          <Bar
            dataKey="score"
            fill="#4f46e5"
            barSize={isMobile ? 30 : 50}
            radius={5}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ClassroomsPerformance;
