"use client";

import React from "react";
import StatsCard from "../../components/StatsCard";

const YourActivity = () => {
  const stats = [
    {
      header: "Total active classrooms",
      count: 7,
      update: "+2 last week",
    },
    {
      header: "Total active classrooms",
      count: 7,
      update: "+2 last week",
    },
    {
      header: "Total active classrooms",
      count: 7,
      update: "+2 last week",
    },
    {
      header: "Total active classrooms",
      count: 7,
      update: "+2 last week",
    },
    {
      header: "Total active classrooms",
      count: 7,
      update: "+2 last week",
    },
    {
      header: "Total active classrooms",
      count: 7,
      update: "+2 last week",
    },
  ];
  return (
    <div className="py-3">
        <h1 className="text-primaryText/80 text-xl font-bold self-start">
          My Analytics
          <br />
          <p className="font-normal text-secondaryText text-xs">
            View all the real time insights of your activity.
          </p>
        </h1>
      <div className="grid grid-rows-3 grid-cols-2 gap-5 justify-items-center lg:grid-cols-3 lg:grid-rows-2 xl:flex xl:gap-10 xl:justify-between mt-8">
        {stats.map((stat, index) => {
          return (
            <StatsCard
              key={index}
              header={stat.header}
              count={stat.count}
              update={stat.update}
            />
          );
        })}
      </div>
    </div>
  );
};

export default YourActivity;
