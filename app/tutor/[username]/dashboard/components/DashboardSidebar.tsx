"use client";

import React, { ReactElement, useState } from "react";
import { SiGoogleclassroom } from "react-icons/si";
import { FaChartLine } from "react-icons/fa6";
import { TbPremiumRights } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { MdLeaderboard } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";

type Option = {
  icon: ReactElement;
  text: string;
  onPressed: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const Sidebar = () => {
  const router = useRouter();
  const [collapse, setCollapse] = useState<boolean>(true);
  const options: Option[] = [
    {
      icon: <SiGoogleclassroom />,
      text: "Dashboard",
      onPressed: () => router.push(`dashboard`),
    },
    {
      icon: <SiGoogleclassroom />,
      text: "Classrooms",
      onPressed: () => router.push(`classrooms`),
    },
    {
      icon: <FaChartLine />,
      text: "Analytics",
      onPressed: () => router.push(`classrooms`),
    },
    {
      icon: <TbPremiumRights />,
      text: "Subscriptions",
      onPressed: () => router.push(`classrooms`),
    },
    {
      icon: <MdLeaderboard />,
      text: "Leaderboard",
      onPressed: () => router.push(`classrooms`),
    },
    {
      icon: <CgProfile />,
      text: "Profile",
      onPressed: () => router.push(`classrooms`),
    },
    {
      icon: <IoSettings />,
      text: "Settings",
      onPressed: () => router.push(`classrooms`),
    },
    {
      icon: <RiLogoutBoxLine className="hover:font-bold hover:text-error" />,
      text: "Log out",
      onPressed: () => router.push(`classrooms`),
    },
  ];
  return (
    <motion.div
      onMouseLeave={() => setCollapse(true)}
      onMouseEnter={() => setCollapse(false)}
      whileHover={{
        width: 250,
        height: 550
      }}
      transition={{
        type: "tween",
        duration: 0.2,
      }}
      className={`bg-surface/70 p-5 fixed rounded-3xl max-md:hidden ${
        !collapse && "w-60"
      } f-c-col`}
    >
      <ul className="list-none f-c-col items-start gap-5">
        {options.map((option, index) => {
          return (
            <div
              key={index}
              className={`flex items-center justify-start overflow-hidden ${!collapse && "w-52"} gap-6 px-5 py-3 font-bold rounded-3xl cursor-pointer transition-all hover:shadow-xs duration-200 hover:bg-background/10 ${
                options.indexOf(option) === 7
                  ? "shadow-error  text-error font-bold"
                  : "shadow-primary "
              }`}
            >
              {option.icon}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{
                  opacity: !collapse ? 1 : 0,
                  x: !collapse ? 0 : -50,
                }}
                transition={{ duration: 0.3 }}
                className={`${collapse && "hidden"}`}
              >
                {option.text}
              </motion.span>
            </div>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default Sidebar;
