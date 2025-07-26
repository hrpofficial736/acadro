"use client";

import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import React from "react";
import { FaPlus, FaVideo } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { ImBin } from "react-icons/im";
import { motion } from "motion/react";
import { useWindowStore } from "@/stores/useWindowStore";
import SessionWindow from "./window/SessionWindow";


const Sessions = () => {
  const { show, toggleShow } = useWindowStore();
  return (
    <motion.section
      initial={{ x: +100, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="w-full flex flex-col"
    >
      <div className={`flex w-[90%] justify-between mt-10 ${show && "blur-xl brightness-50"}`}>
        <div className="text-primaryText/80 text-xl font-bold self-start">
          Sessions
        <br />
        <p className="font-normal text-secondaryText text-xs">
          Manage your sessions from one centralized menu.
        </p>
        </div>
        <PrimaryButton text="Create new session" icon={<FaPlus />} className="rounded-lg text-sm" onPressed={() => toggleShow("create-session")} />
      </div>
      <table className={`w-[90%] overflow-hidden mt-10 ${show && "blur-xl brightness-50"}`}>
        <thead className="w-full text-xs text-secondaryText/90">
          <tr>
            <th scope="col" className="px-6 py-4 text-start">
              Sessions
            </th>
            <th scope="col" className="px-6 py-4 text-center">
              Options
            </th>
            <th scope="col" className="px-6 py-4 text-center">
              Date
            </th>
            <th scope="col" className="px-6 py-4 text-center">
              Time
            </th>
          </tr>
        </thead>

        <tbody className="uppercase text-primaryText/80 font-semibold text-sm">
          <tr className="cursor-pointer group">
            <td className="px-6 py-4 text-start rounded-xl transition-all duration-200">
              Physics Lecture-1
            </td>
            <td className="px-6 py-4 text-center">
              <div className="f-c-row gap-2 max-2xl:hidden">
                <PrimaryButton
                  text="Join"
                  icon={<FaVideo />}
                  className="text-xs rounded-lg"
                  onPressed={() => {}}
                />
                <PrimaryButton
                  text="Edit"
                  icon={<FaPencil />}
                  className="text-xs rounded-lg"
                  onPressed={() => {}}
                />
                <PrimaryButton
                  text="Cancel"
                  icon={<ImBin />}
                  className="from-error to-error/70 text-xs rounded-lg"
                  onPressed={() => {}}
                />
              </div>
            </td>

            <td className="px-6 py-4 text-center">29-07-2024</td>
            <td className="px-6 py-4 text-center rounded-xl">09:00 AM</td>
          </tr>

          <tr className="cursor-pointer group">
            <td className="px-6 py-4 text-start rounded-xl transition-all duration-200">
              CS Lecture-1
            </td>
            <td className="px-6 py-4 text-center">
              <div className="f-c-row gap-2 max-2xl:hidden">
                <PrimaryButton
                  text="Join"
                  icon={<FaVideo />}
                  className="text-xs rounded-lg"
                  onPressed={() => {}}
                />
                <PrimaryButton
                  text="Edit"
                  icon={<FaPencil />}
                  className="text-xs rounded-lg"
                  onPressed={() => {}}
                />
                <PrimaryButton
                  text="Cancel"
                  icon={<ImBin />}
                  className="from-error to-error/70 text-xs rounded-lg"
                  onPressed={() => {}}
                />
              </div>
            </td>

            <td className="px-6 py-4 text-center">29-07-2024</td>
            <td className="px-6 py-4 text-center rounded-xl">09:00 AM</td>
          </tr>
        </tbody>
      </table>
      <SessionWindow />
    </motion.section>
  );
};

export default Sessions;
