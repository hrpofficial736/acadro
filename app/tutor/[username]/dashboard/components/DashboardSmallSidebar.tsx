"use client";

import Logo from "@/components/Logo";
import { AnimatePresence, motion } from "motion/react";
import { IoMdClose } from "react-icons/io";
import React from "react";
import Link from "next/link";
import "@/app/globals.css";
import { FaAngleRight } from "react-icons/fa";


export default function DashboardSmallSidebar ({ display, onClose }: { display: boolean; onClose: () => void; }) {
  
  return (
    <>
      <AnimatePresence>
        {display && (
          <motion.div
            initial={{
              x: 100,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
            exit={{
              x: 100,
              opacity: 0,
            }}
            className="md:hidden inset-0 bg-background fixed z-[9999] flex flex-col p-3"
          >
            <div>
              <div className="f-c-row justify-between">
                <Logo />
                <IoMdClose
                  onClick={onClose}
                  className="w-6 h-6 text-secondaryText"
                />
              </div>
              <div className="f-c-col items-start mt-20">
                <Link className="f-c-row justify-between w-full p-3 border-b border-b-secondaryText/20 active:scale-[0.98] transition-transform duration-200" href={"/"}>
                  Dashboard
                  <FaAngleRight className="text-secondaryText" />
                </Link>
                <Link className="f-c-row justify-between w-full p-3 border-b border-b-secondaryText/20 active:scale-[0.98] transition-transform duration-200" href={"/"}>
                  Classrooms
                  <FaAngleRight className="text-secondaryText" />
                </Link>
                <Link className="f-c-row justify-between w-full p-3 border-b border-b-secondaryText/20 active:scale-[0.98] transition-transform duration-200" href={"/"}>
                  Analytics
                  <FaAngleRight className="text-secondaryText" />
                </Link>
                 <Link className="f-c-row justify-between w-full p-3 border-b border-b-secondaryText/20 active:scale-[0.98] transition-transform duration-200" href={"/"}>
                  Subscriptions
                  <FaAngleRight className="text-secondaryText" />
                </Link>
                 <Link className="f-c-row justify-between w-full p-3 border-b border-b-secondaryText/20 active:scale-[0.98] transition-transform duration-200" href={"/"}>
                  Earnings
                  <FaAngleRight className="text-secondaryText" />
                </Link>
                 <Link className="f-c-row justify-between w-full p-3 border-b border-b-secondaryText/20 active:scale-[0.98] transition-transform duration-200" href={"/"}>
                  Settings
                  <FaAngleRight className="text-secondaryText" />
                </Link>
                <Link className="f-c-row justify-between w-full p-3 border-b border-b-secondaryText/20 active:scale-[0.98] transition-transform duration-200 text-error" href={"/"}>
                  Log out
                  <FaAngleRight className="text-error" />
                </Link>
              </div>
            </div>

            
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

