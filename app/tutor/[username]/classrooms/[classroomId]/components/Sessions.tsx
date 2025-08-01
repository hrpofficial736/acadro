"use client";

import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import React, { useState } from "react";
import { FaPlus, FaVideo } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { ImBin } from "react-icons/im";
import { motion } from "motion/react";
import { useWindowStore } from "@/stores/useWindowStore";
import SessionWindow from "./window/SessionWindow";
import { SessionInterface } from "@/interfaces/session";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";
import { deleteSessionAction } from "../actions/sessionActions";

const Sessions = ({ sessions }: { sessions: SessionInterface[] }) => {
  const { show, toggleShow, current } = useWindowStore();
  const { classroomId } = useParams();

  const [deleteState, setDeleteState] = useState<boolean>(false);

  const [sessionId, setSessionId] = useState<string>("");

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
      className="w-[90%] flex flex-col"
    >
      <div
        className={`flex w-[90%] justify-between mt-10 ${
          show && "blur-xl brightness-50"
        }`}
      >
        <div className="text-primaryText/80 text-xl font-bold self-start">
          Sessions
          <br />
          <p className="font-normal text-secondaryText text-xs">
            Manage your sessions from one centralized menu.
          </p>
        </div>
        <PrimaryButton
          text="Create new session"
          icon={<FaPlus />}
          className="rounded-lg text-sm"
          onPressed={() => toggleShow("create-session")}
        />
      </div>
      <table
        className={`w-[90%] overflow-hidden mt-10 ${
          show && "blur-xl brightness-50"
        }`}
      >
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
          {sessions.map((session, index) => (
            <tr key={index} className="cursor-pointer group">
              <td className="px-6 py-4 text-start rounded-xl transition-all duration-200">
                {session.name}
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
                    onPressed={() => {
                      toggleShow("update-session");
                      setSessionId(session.id!)
                    }}
                  />
                  <PrimaryButton
                    text="Cancel"
                    icon={<ImBin />}
                    showLoading={deleteState}
                    className="from-error to-error/70 text-xs rounded-lg"
                    onPressed={async () => {
                      setDeleteState(true)
                      const response = await deleteSessionAction(
                        classroomId as string,
                        session.id!
                      );
                      if (response.success) {
                        toast.success(
                          `Successfully delete session: ${session.name}`
                        );
                        setDeleteState(false);
                        return;
                      }
                      toast.error(`Error deleting the session`);
                      setDeleteState(false);
                    }}
                  />
                </div>
              </td>

              <td className="px-6 py-4 text-center">{`${session.date.getDate()}-${session.date.getMonth()}-${session.date.getFullYear()}`}</td>
              <td className="px-6 py-4 text-center rounded-xl">
                {session.time}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <SessionWindow sessionId={sessionId} header={current === "update-session" ? "Update Session" : "Create Session"} create={current === "create-session"} />
    </motion.section>
  );
};

export default Sessions;
