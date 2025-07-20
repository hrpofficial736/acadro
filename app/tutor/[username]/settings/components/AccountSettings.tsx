"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import CustomTextField from "@/components/form-fields/CustomTextField";


type ChangeCredentialsProps = {
  email: string;
  oldPassword: string;
  newPassword: string;
}

const AccountSettings = () => {

  const [formData, setFormData] = useState<ChangeCredentialsProps>({
    email: "",
    oldPassword: "",
    newPassword: ""
  })

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }
  return (
    <motion.div
      initial={{ x: +100, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="flex flex-col gap-10 w-full"
    >
      {/* Currently Signed in as */}

      <div className="flex flex-col md:flex-row md:items-center max-md:gap-5 md:w-[80%] px-4 py-3 rounded-xl border border-border bg-surface">
        <div className="flex flex-col gap-2 w-full">
          <p className="text-sm font-normal text-primaryText/80">
            Currently signed in as 
          </p>
          <p className="text-primaryText/80 text-xl md:text-2xl font-bold">
            hrpofficial736@gmail.com
          </p>
        </div>
        <PrimaryButton
          text="Log out"
          className="from-error to-error/50 text-sm rounded-lg min-w-[120px] max-w-[120px]"
          onPressed={() => {}}
        />

      </div>

      {/* Change Role */}

      <div className="flex items-center gap-10 md:w-[80%] px-4 py-3 rounded-xl border border-border bg-surface">
        <div className="flex flex-col gap-2 w-full">
          <p className="text-sm font-normal text-primaryText/80">
            Your role is
          </p>
          <p className="text-primaryText/80 text-2xl font-bold">
            Tutor
          </p>
        </div>
        <PrimaryButton
          text="Change your role"
          className="from-error to-error/50 text-xs rounded-lg min-w-[120px]"
          onPressed={() => {}}
        />

      </div>

      {/* Change Credentials */}

      <div className="flex flex-col gap-5">
        <h1 className="text-lg font-semibold text-primaryText/80">
          Change Credentials
        </h1>

        <CustomTextField
          name="email"
          type="email"
          label="Email"
          value={formData.email}
          onChanged={handleFormChange}
          placeholder="Enter your new email"
        />

        <CustomTextField
          name="oldPassword"
          type="password"
          label="Old Password"
          value={formData.oldPassword}
          onChanged={handleFormChange}
          placeholder="Enter your old password"
        />

        <CustomTextField
          name="newPassword"
          type="password"
          label="New Password"
          value={formData.newPassword}
          onChanged={handleFormChange}
          placeholder="Enter your new password"
        />

        <PrimaryButton text="Update Credentials" onPressed={() => {}} className="max-w-[200px] text-sm rounded-lg mt-3" />
      </div>


      {/* Delete Account */}
      <div className="px-4 py-3 rounded-xl border border-border flex flex-col md:flex-row md:items-center md:justify-between gap-5 bg-surface md:w-[80%]">
          <h1 className="text-sm font-semibold text-primaryText/80">
            Delete Account
            <br />
            <p className="text-xs text-secondaryText font-normal">All your data will be lost as a Tutor from Acadro.</p>
          </h1>
          <PrimaryButton
          text="Delete my account"
          className="from-error to-error/50 text-xs md:text-sm rounded-lg w-[150px]"
          onPressed={() => {}}
        />
        </div>
    </motion.div>
  );
};

export default AccountSettings;
