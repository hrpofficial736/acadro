"use client";

import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import CustomTextField from "@/components/form-fields/CustomTextField";
import { useAuthComponentSelectionStore } from "@/stores/useAuthComponentSelectionStore";
import React from "react";
import { motion } from "motion/react";

const RegisterComponent = () => {
  const setComponent = useAuthComponentSelectionStore(
    (state) => state.setComponent
  );
  return (
    <motion.div
      initial={{
        x: 30,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        type: "tween",
        duration: 0.3,
      }}
      className="rounded-2xl p-2 flex flex-col gap-5"
    >
      <h1 className="text-primaryText/80 font-semibold text-xl">Register</h1>
      <div className="flex flex-col gap-5 w-full">
        <CustomTextField
          name="name"
          label="Full Name"
          placeholder="Enter your full name"
          type="text"
        />
        <CustomTextField
          name="email"
          label="Email"
          placeholder="Enter your email"
          type="email"
        />
        <CustomTextField
          name="password"
          label="Password"
          placeholder="Enter your password"
          type="password"
        />
      </div>
      <PrimaryButton
        text="Register"
        onPressed={() => {}}
        className="w-full mt-5"
      />
      <p className="text-secondaryText f-c-row gap-1">
        Already have an account?{" "}
        <p
          onClick={() => {
            setComponent("login");
          }}
          className="text-primary cursor-pointer active:scale-95 transition-all duration-300"
        >
          Login{" "}
        </p>{" "}
        to continue
      </p>
    </motion.div>
  );
};

export default RegisterComponent;
