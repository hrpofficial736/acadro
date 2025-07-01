"use client";

import React, { useState } from "react";
import CustomDropDown from "@/components/dropdowns/CustomDropDown";
import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import { ImSpinner3 } from "react-icons/im";
import ClassroomsPerformance from "./ClassroomsPerformance";
import AttendanceRate from "./AttendanceRate";
import AssignmentCompletionRate from "./AssignmentCompletionRate";

const StudentsProgress = () => {
  const [showAdvice, setShowAdvice] = useState<boolean>(true);
  return (
    <div className="mt-20 min-h-[400px] relative px-4 py-2">
      <h1 className="text-primaryText/80 text-xl font-bold self-start">
        Students Progress
        <br />
        <p className="font-normal text-secondaryText text-xs">
          View all the real time insights of your students.
        </p>
      </h1>

      {/* Dropdowns */}
      <div className="mt-5 flex flex-col justify-center items-center lg:flex-row lg:items-start gap-4 lg:gap-7">
        <CustomDropDown
          placeholder="Select a classroom"
          listOfOptions={[
            "Classroom 1",
            "Classroom 2",
            "Classroom 3",
            "Classroom 4",
          ]}
        />
        <CustomDropDown
          placeholder="Select a student"
          listOfOptions={["Student 1", "Student 2", "Student 3", "Student 4"]}
        />
        <PrimaryButton
          className="text-sm rounded-md"
          text="Analyze Student"
          onPressed={() => {
            setShowAdvice(false);
          }}
        />
      </div>

      <div
        className={`${
          !showAdvice && "hidden"
        } absolute left-1/2 -translate-x-1/2 bottom-1/2 mt-10 text-xs text-secondaryText`}
      >
        Select a classroom and then a student from that classroom to view each
        student progress
      </div>

      <div
        className={`hidden absolute left-1/2 -translate-x-1/2 bottom-1/2 f-c-row gap-2 text-secondaryText`}
      >
        <ImSpinner3 className="animate-spin" />
        Please wait...
      </div>

      {/* Classrooms performance in recent tests */}
      <div className="f-c-col md:max-lg:grid lg:flex-row grid-cols-4 grid-rows-4 gap-10 mt-10 px-5">
        <ClassroomsPerformance
          header="Performance in recent tests"
          subheader="Analyze the performance of your classrooms to improve them for upcomings."
        />
        <AttendanceRate
          header="Attendance Rate"
          subheader="Analyze the avg. attendance of your classrooms."
        />
        <AssignmentCompletionRate
          header="Assignment Completion Rate"
          subheader="Analyze the avg. assignment completion of your classrooms."
        />
      </div>
    </div>
  );
};

export default StudentsProgress;
