import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import React from "react";

const LogOut = () => {
  return (
    <div className="f-c-col gap-5">
      <h1 className="self-center text-primaryText/80">
        Are you sure you want to log out?
      </h1>

      <div className="flex gap-5 justify-center">
        <PrimaryButton text="Yes" onPressed={() => {}} className="px-10" />
      </div>
    </div>
  );
};

export default LogOut;
