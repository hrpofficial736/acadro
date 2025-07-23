"use client";

import React, { ReactElement, useState } from "react";
import { SiGoogleclassroom } from "react-icons/si";
import { FaChartLine } from "react-icons/fa6";
import { TbPremiumRights } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { MdLeaderboard } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { RiLogoutBoxLine } from "react-icons/ri";
import { motion } from "motion/react";
import Link from "next/link";
import { useWindowStore } from "@/stores/useWindowStore";
import { usePathname } from "next/navigation";

type Option = {
  icon: ReactElement;
  text: string;
  path?: string;
};

const Sidebar = () => {
  const [collapse, setCollapse] = useState<boolean>(true);
  const path = usePathname().split("/")[3];

  const toggleShow = useWindowStore((state) => state.toggleShow);
  const options: Option[] = [
    {
      icon: <SiGoogleclassroom />,
      text: "Dashboard",
      path: `./dashboard`,
    },
    {
      icon: <SiGoogleclassroom />,
      text: "Classrooms",
      path: `./classrooms`,
    },
    {
      icon: <FaChartLine />,
      text: "Analytics",
      path: `./analytics`,
    },
    {
      icon: <TbPremiumRights />,
      text: "Subscriptions",
      path: `./subscription`,
    },
    {
      icon: <MdLeaderboard />,
      text: "Earnings",
      path: `./earnings`,
    },
    {
      icon: <CgProfile />,
      text: "Profile",
      path: `./profile`,
    },
    {
      icon: <IoSettings />,
      text: "Settings",
      path: `./settings`,
    },
    {
      icon: <RiLogoutBoxLine className="hover:font-bold hover:text-error" />,
      text: "Log out",
    },
  ];
  return (
    <motion.div
      onMouseLeave={() => setCollapse(true)}
      onMouseEnter={() => setCollapse(false)}
      whileHover={{
        width: 250,
        height: 560,
      }}
      transition={{
        type: "tween",
        duration: 0.2,
      }}
      className={`bg-surface/70 p-5 fixed top-1/2 -translate-y-1/2 inset-0 rounded-3xl max-md:hidden f-c-col ${
        collapse && "w-28"
      }`}
    >
      <ul className="list-none f-c-col items-start gap-5">
        {options.map((option, index) => {
          return (
            <Link
              key={index}
              href={option.path ?? "#"}
              onClick={() => {
                if (index === 7) toggleShow("logout");
              }}
              className={`flex items-center justify-start overflow-hidden ${
                !collapse && "w-52"
              } gap-6 px-5 py-3 font-bold rounded-3xl cursor-pointer transition-all ${
                path === option.path?.split("/")[1] && "shadow-md"
              } hover:shadow-xs duration-200 hover:bg-background/10 ${
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
            </Link>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default Sidebar;
