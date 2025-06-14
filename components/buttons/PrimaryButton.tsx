"use client";

import { ButtonInterface } from "@/types/button";
import React from "react";

export const PrimaryButton: React.FC<ButtonInterface> = ({
  text,
  icon,
  onPressed,
  textFirst
}) => {
  return (
    <button
      onClick={() => {
        onPressed();
      }}
      className={`primary-btn ${textFirst ? "flex-row-reverse" : "flex-row"} gap-3`}
    >
      {icon}
      {text}
    </button>
  );
};
