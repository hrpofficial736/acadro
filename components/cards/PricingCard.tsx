"use client";

import React from "react";
import { Success } from "../icons/Success";
import { PrimaryButton } from "../buttons/PrimaryButton";
import { IoIosRocket } from "react-icons/io";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { redirect } from "next/navigation";

const PricingCard = ({
  amount,
  featuresList,
  isFree,
}: {
  amount: number;
  featuresList: string[];
  isFree: boolean;
}) => {
  return (
    <div
      className="relative group w-[350px] h-[580px] px-7 py-7 bg-gradient-to-tl from-black to-primary/30 overflow-hidden rounded-2xl flex flex-col justify-between gap-10"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        e.currentTarget.style.setProperty("--x", `${x}px`);
        e.currentTarget.style.setProperty("--y", `${y}px`);
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),#4f46e5,transparent_90%)] pointer-events-none transition-opacity duration-400 opacity-0 group-hover:opacity-100"></div>
      <div className="relative flex flex-col gap-2">
        <p className="text-sm text-secondaryText font-semibold">
          {isFree ? "Free" : "Premium"}
        </p>
        <h2 className="text-5xl text-primaryText font-bold">
          $ {amount} <sup className="text-sm">/ month</sup>
        </h2>
      </div>

      <div className="f-c-col items-start gap-3">
        {featuresList.map((feature, index) => {
          return (
            <div
              className="f-c-row justify-start text-primaryText/70 font-bold hover:text-white transition-colors duration-300 gap-3"
              key={index}
            >
              <Success className="text-accent" />
              {feature}
            </div>
          );
        })}
      </div>
      <PrimaryButton
        text={`${isFree ? "Get started for Free" : "Upgrade to Premium"}`}
        icon={isFree ? <IoIosRocket /> : <MdOutlineWorkspacePremium />}
        textFirst={false}
        className="hover:bg-primary/80"
        onPressed={() => {
          redirect("/sign-in")
        }}
      />
    </div>
  );
};

export default PricingCard;
