"use client";

import React from "react";
import ClassroomsPerformance from "./ClassroomsPerformance";
import AttendanceRate from "./AttendanceRate";
import AssignmentCompletionRate from "./AssignmentCompletionRate";

const ClassroomsAnalytics = () => {
  return (
    <div className="mt-20 px-3 py-2">
      <h1 className="text-primaryText/80 lg:text-xl font-bold">
        Classrooms Analytics
        <br />
        <p className="font-normal text-secondaryText text-xs">
          View all the real time insights of your classrooms.
        </p>
      </h1>

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

export default ClassroomsAnalytics;
