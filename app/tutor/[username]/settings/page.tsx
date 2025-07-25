"use client";

import { motion } from "motion/react";
import { ReactElement, useState } from "react";
import AccountSettings from "./components/AccountSettings";
import ProfileSettings from "./components/ProfileSettings";
import NotificationSettings from "./components/NotificationSettings";
import PaymentsSettings from "./components/PaymentsSettings";
import PrivacySettings from "./components/PrivacySettings";

type SettingsProp = {
  name: string;
  component: ReactElement
}

export default function SettingsPage() {
  const settingsList: SettingsProp[] = [
    {name: "Account", component: <AccountSettings />},
    {name: "Profile", component: <ProfileSettings />},
    {name: "Notifications", component: <NotificationSettings />},
    {name: "Payments and Subscriptions", component: <PaymentsSettings />},
    {name: "Privacy and Security", component: <PrivacySettings />},
  ];

  const [current, setCurrent] = useState<number>(0);


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
      className="px-4 py-3 f-c-col gap-10 overflow-y-scroll overflow-x-hidden w-full lg:max-w-[90%] ml-auto mt-[50px]"
    >
      <h1 className="text-primaryText/80 text-xl font-bold self-start">
        Settings
        <br />
        <p className="font-normal text-secondaryText text-xs">
          Configure your settings to ensure seamless experience of Acadro.
        </p>
      </h1>

      <div className="w-full flex items-center max-md:hidden gap-10 relative">
        {settingsList.map((setting, index) => {
            return (
                <div onClick={() => setCurrent(index)} key={index} className={`px-3 py-2 font-semibold cursor-pointer text-primaryText/80 ${current !== index && "text-secondaryText/50"}`}>
                    { setting.name }
                    <motion.div initial={{
                        opacity: 0,
                        width: 0
                    }} animate={{
                        opacity: current === index ? 1 : 0,
                        width: current === index ? "100%" : 0
                    }} transition={{
                        duration: 0.2,
                        type: "tween"
                    }} className="bg-primaryText/80 w-full h-[2px] rounded origin-left" />
                </div>
            )
        })}
      </div>


      {/* Components */}
      {settingsList[current].component}
    </motion.div>
  );
}
