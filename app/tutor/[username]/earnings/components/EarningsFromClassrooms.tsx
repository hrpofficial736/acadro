import React from "react";

const EarningsFromClassrooms = () => {
  return (
    <div className="f-c-col justify-start gap-6 w-full lg:w-1/2 px-5 py-4 bg-gradient-to-b from-surface/40 via-surface/60 to-white/10 rounded-2xl">
      <h1 className="text-primaryText/80 text-xl font-bold self-start">
        Earnings from Classrooms
        <br />
        <p className="font-normal text-secondaryText text-xs">
          Get details of your earnings from specific classrooms.
        </p>
      </h1>

      <div className="f-c-col gap-3 w-full rounded-2xl text-secondaryText">
        <div className="my-list-item">
          <span>Classroom 1 ($ 250)</span>
          <span className="text-accent">$ 1000</span>
        </div>

         <div className="my-list-item">
          <span>Classroom 1 ($ 250)</span>
          <span className="text-accent">$ 1000</span>
        </div>

         <div className="my-list-item">
          <span>Classroom 1 ($ 250)</span>
          <span className="text-accent">$ 1000</span>
        </div>


         <div className="my-list-item">
          <span>Classroom 1 ($ 250)</span>
          <span className="text-accent">$ 1000</span>
        </div>
      </div>
    </div>
  );
};

export default EarningsFromClassrooms;
