"use client";
import React, { useState } from "react";

const Switch = () => {
  const [status, setStatus] = useState<boolean>(false);

  return (
    <div
      onClick={() => setStatus(!status)}
      className={`${
        !status ? "bg-secondaryText" : "bg-primary"
      } rounded-full w-[60px] h-8 p-1 cursor-pointer overflow-hidden`}
    >
      <div
        style={{
            transform: `translateX(${status ? 120 : 0}%)`
        }}
        className={`${
          !status ? "bg-neutral-300" : "bg-primaryText"
        } size-6 rounded-full transition-all duration-300`}
      />
    </div>
  );
};

export default Switch;
