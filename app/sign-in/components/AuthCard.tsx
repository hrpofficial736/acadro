"use client";

import React from "react";
import { motion } from "motion/react";
import RoleToggle from "./RoleToggle";
import RegisterComponent from "./RegisterComponent";
import Logo from "@/components/Logo";
import { useAuthComponentSelectionStore } from "@/stores/useAuthComponentSelectionStore";
import LoginComponent from "./LoginComponent";

const AuthCard = () => {
  const component = useAuthComponentSelectionStore((state) => state.component);
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
        duration: 0.5,
        type: "spring",
      }}
      className="bg-gradient-to-t text-primaryText flex flex-col gap-10 from-black/10 via-black/80 to-primary/15 shadow-lg shadow-primary/50 rounded-3xl px-5 py-7 w-[400px] h-[650px]"
    >
      <Logo />
      <RoleToggle />
      { component === "register" ? <RegisterComponent /> : <LoginComponent />}

      
    </motion.div>
  );
};

export default AuthCard;
