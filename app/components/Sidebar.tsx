"use client";

import Logo from "@/components/Logo";
import { useSideBarStore } from "@/stores/useSideBarStore";
import { AnimatePresence, motion } from "motion/react";
import { IoMdClose } from "react-icons/io";
import React from "react";
import Link from "next/link";
import "@/app/globals.css";
import { FaAngleRight } from "react-icons/fa";
import { PrimaryButton } from "@/components/buttons/PrimaryButton";

export default function Sidebar () {
  const { sideBarOpen, setSideBarOpen } = useSideBarStore();
  return (
    <>
      <AnimatePresence>
        {sideBarOpen && (
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
            className="md:hidden w-full h-full bg-surface absolute flex flex-col justify-between px-7 py-6 pb-10"
          >
            <div>
              <div className="f-c-row justify-between">
                <Logo />
                <IoMdClose
                  onClick={() => setSideBarOpen()}
                  className="w-6 h-6 text-secondaryText"
                />
              </div>
              <div className="f-c-col items-start mt-20">
                <Link className="side-nav-link" href={"/"}>
                  Features
                  <FaAngleRight className="text-secondaryText" />
                </Link>
                <Link className="side-nav-link" href={"/"}>
                  Pricing
                  <FaAngleRight className="text-secondaryText" />
                </Link>
                <Link className="side-nav-link" href={"/"}>
                  How it works
                  <FaAngleRight className="text-secondaryText" />
                </Link>
              </div>
            </div>

            <PrimaryButton
              text="Get started"
              icon={<FaAngleRight />}
              textFirst
              onPressed={() => {}}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

