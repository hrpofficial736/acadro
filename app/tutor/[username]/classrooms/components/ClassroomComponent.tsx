"use client";

import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import { FaPlusCircle } from "react-icons/fa";
import { motion } from "motion/react";
import StatsCard from "../../components/StatsCard";
import { useWindowStore } from "@/stores/useWindowStore";
import Window from "@/components/window/Window";
import CreateClassroomForm from "./CreateClassroomForm";
import { Classroom } from "@/interfaces/classroom";

export default function ClassroomComponent({
  classrooms,
}: {
  classrooms: Classroom[];
}) {
  const { toggleShow, current, show } = useWindowStore();
  return (
    <motion.div
      initial={{
        scale: 0.8,
        opacity: 0,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      transition={{
        duration: 0.2,
        type: "tween",
      }}
      className="p-4 sm:m-5 sm:px-12 sm:py-3 w-full sm:w-[90%] sm:ml-32 f-c-col gap-2"
    >
      {/* 4 Analytics boxes */}
      <div
        className={`grid grid-cols-2 grid-rows-2 max-sm:gap-5 sm:flex justify-between sm:w-full ${
          show && current === "create-classroom" && "brightness-50 blur-lg"
        }`}
      >
        <StatsCard header="Active classrooms" count={7} update="+2 last week" />
        <StatsCard header="Active classrooms" count={7} update="+2 last week" />
        <StatsCard header="Active classrooms" count={7} update="+2 last week" />
        <StatsCard header="Active classrooms" count={7} update="+2 last week" />
      </div>

      <div
        className={`f-c-row justify-between w-full mt-10 ${
          show && current === "create-classroom" && "brightness-50 blur-lg"
        }`}
      >
        <h1 className="text-primaryText/80 text-xl font-bold self-start">
          My Classrooms
          <br />
          <p className="font-normal text-secondaryText text-xs">
            Click on any classroom below to manage it.
          </p>
        </h1>
        <PrimaryButton
          icon={<FaPlusCircle />}
          text="Create"
          className="text-xs"
          onPressed={() => toggleShow("create-classroom")}
        />
      </div>
      <div
        className={`f-c-col gap-5 w-full mt-5 ${
          show && current === "create-classroom" && "brightness-50 blur-lg"
        }`}
      >
        <div className="grid grid-cols-5 max-sm:hidden mr-auto gap-10 px-5 text-xs w-full font-semibold text-secondaryText">
          <p className="">Classrooms</p>
          <p className=" text-center">sessions taken</p>
          <p className=" text-center">notes uploaded</p>
          <p className=" text-center">assignments given</p>
          <p className=" text-center">avg. marks</p>
        </div>





        <div className="f-c-col items-start gap-3 w-full">
              {classrooms.map((classroom, index) => (
          <div key={index} className="hover:scale-[1.01] w-full group hover:bg-gradient-to-b from-surface/20 via-surface/60 to-secondaryText/10 transition-all duration-300 px-2 sm:px-5 py-3 cursor-pointer rounded-2xl">
            
            
            <div className="sm:grid grid-cols-5 gap-10 f-c-row justify-start max-sm:px-3">
                  <span className="group-hover:text-primary font-bold">
                    {classroom.name}
                    <br />
                    <p className="text-sm text-secondaryText font-medium group-hover:text-primary">
                      {`${classroom.noOfStudents} students`}
                    </p>
                  </span>
                  <div className="text-xs text-secondaryText font-bold max-sm:hidden f-c-row ">
                    {classroom.sessionsTaken}
                  </div>
                  <div className="text-xs text-secondaryText font-bold max-sm:hidden f-c-row">
                    {classroom.notesUploaded}
                  </div>
                  <div className="text-xs text-secondaryText font-bold max-sm:hidden f-c-row">
                    {classroom.assignmentsGiven}
                  </div>
                  <div className="text-xs text-secondaryText font-bold max-sm:hidden f-c-row">
                    {classroom.avgMarks}
                  </div>
            </div>


          </div>
              ))}
        </div>
      </div>
      {current === "create-classroom" && (
        <Window index="create-classroom" header={"Create a classroom"}>
          <CreateClassroomForm />
        </Window>
      )}
    </motion.div>
  );
}
