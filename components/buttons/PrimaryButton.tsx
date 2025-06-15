"use client";

import { ButtonInterface } from "@/types/button";
import clsx from "clsx";
import React from "react";

export const PrimaryButton: React.FC<ButtonInterface> = ({
  text,
  icon,
  className,
  onPressed,
  textFirst
}) => {
  return (
    <button
      onClick={() => {
        onPressed();
      }}
      className={clsx(`primary-btn ${textFirst ? "flex-row-reverse" : "flex-row"} gap-3 z-30`, className)}
    >
      {icon}
      {text}
    </button>
  );
};
