"use client";

import React from "react";
import { motion } from "motion/react";
import RoleToggle from "./RoleToggle";
import RegisterComponent from "./RegisterComponent";
import Logo from "@/components/Logo";
import { signIn } from "next-auth/react";
import { useAuthComponentSelectionStore } from "@/stores/useAuthComponentSelectionStore";
import LoginComponent from "./LoginComponent";
import { useRoleStore } from "@/stores/useRoleStore";

const AuthCard = () => {
  const component = useAuthComponentSelectionStore((state) => state.component);
  const role = useRoleStore((state) => state.role);
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
        type: "spring",
      }}
      className="bg-gradient-to-t text-primaryText flex flex-col gap-7 from-black/10 via-black/80 to-primary/15 shadow-lg shadow-primary/50 rounded-3xl px-5 py-7 w-[350px] md:w-[400px]"
    >
      <Logo />
      <RoleToggle />
      {component === "register" ? <RegisterComponent /> : <LoginComponent />}

      <div className="f-c-row gap-2 w-[90%] mx-auto">
        <div className="h-[1px] w-20 bg-secondaryText/80"></div>
        <p className="text-white/80 font-light text-xs">or continue with</p>
        <div className="h-[1px] w-20 bg-secondaryText/80"></div>
      </div>

      <div className="f-c-row gap-3">
        <div onClick={() => {
          document.cookie = `role=${role}; path=/`;
          signIn("google", { callbackUrl: "/auth/callback/google"});
          
        }} className="rounded-full p-3 border border-white/30 f-c-row hover:bg-white/10 duration-300 cursor-pointer">
          <div className="google-logo" />
        </div>
      </div>
    </motion.div>
  );
};

export default AuthCard;
