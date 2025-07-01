import React from "react";
import CountUp from "react-countup";

const StatsCard = ({
  header,
  count,
  update,
}: {
  header: string;
  count: number;
  update: string;
}) => {
  return (
    <div className="rounded-xl shadow-sm shadow-primary bg-gradient-to-b from-primaryText/15 via-surface/60 to-surface/20 px-5 items-start py-3 text-sm text-secondaryText font-semibold f-c-col gap-7 sm:w-[250px]">
      {header}
      <div className="font-medium text-sm flex flex-col gap-2">
        <CountUp
          end={count}
          useEasing={false}
          startOnMount
          className="text-primaryText text-3xl font-bold"
        />
        {update}
      </div>
    </div>
  );
};

export default StatsCard;
