"use client";

import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import { redirect } from "next/navigation";
import React from "react";
import { IoIosRocket } from "react-icons/io";

const CalltoAction = () => {
  return (
    <div className="cta">
      <div className="flex flex-col gap-2">
        <h3 className="text-primaryText font-bold text-2xl">
          Get started with Acadro today!
        </h3>
        <p className="text-secondaryText">
          Empower your knowledge — create or join a classroom today.
        </p>
      </div>

      <PrimaryButton
        text={"Get started for free"}
        icon={<IoIosRocket />}
        textFirst={true}
        onPressed={() => {
          redirect("/sign-in")
        }}
      />
    </div>
  );
};

export default CalltoAction;
