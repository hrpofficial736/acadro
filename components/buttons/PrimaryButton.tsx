"use client";

import { ButtonInterface } from "@/interfaces/button";
import clsx from "clsx";
import React, { useState } from "react";
import { ImSpinner3 } from "react-icons/im";

export const PrimaryButton: React.FC<ButtonInterface> = ({
  text,
  icon,
  className,
  onPressed,
  showLoading,
  textFirst
}) => {
  const [showLoader, setShowLoader] = useState<boolean>(showLoading ?? false);
  return (
    <button
      onClick={() => {
        onPressed();
        setShowLoader(true);
      }}
      className={clsx(`primary-btn ${textFirst ? "flex-row-reverse" : "flex-row"} gap-3 z-30 ${(showLoader && showLoading) && "bg-radial from-white/10 to-surface"}`, className)}
    >
      { !(showLoader && showLoading) ? <>{ icon } { text }</>
       : <div className="f-c-row gap-2 text-secondaryText">
        <ImSpinner3 className="animate-spin" />Please wait...</div>}
    </button>
  );
};
