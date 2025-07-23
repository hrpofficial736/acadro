"use client";


import { motion } from "motion/react";
import Switch from "@/components/switch/Switch";
import React from "react";

const NotificationSettings = () => {
  const notifications = [
    {
      title: "Session reminders",
      subtitle: "Enable reminders 10 minutes before a session",
    },
    {
      title: "Assignment submissions",
      subtitle: "Enable reminders 1on assignment submission",
    },
    {
      title: "Payment updates",
      subtitle: "Enable updates on payments by students",
    },
    { title: "Platform news", subtitle: "Enable platform updates." },
  ];
  return (
    <motion.div initial={{ x: 100, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }} className="flex flex-col gap-5 w-full lg:w-[50%]">
      {notifications.map((setting, index) => (
        <div
          key={index}
          className="bg-surface flex items-center justify-between px-4 py-3 rounded-xl outline-2 outline-border"
        >
          <div className="text-sm font-semibold text-primaryText/80">
            {setting.title}
            <br />
            <p className="text-xs text-secondaryText font-normal">
              {setting.subtitle}
            </p>
          </div>
          <Switch />
        </div>
      ))}
    </motion.div>
  );
};

export default NotificationSettings;
