"use client";

import React from "react";
import { motion } from "motion/react";
import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import PersonalInfo from "./profile/PersonalInfo";
import ContactInfo from "./profile/ContactInfo";
import EducationalBackground from "./profile/EducationalBackground";
import ProfilePhotoUploader from "./profile/ProfilePhotoUploader";
import { useProfileInfoStore } from "@/stores/useProfileInfoStore";
import { SecondaryButton } from "@/components/buttons/SecondaryButton";

const ProfileSettings = () => {
  const {
    name,
    username,
    about,
    phone,
    education,
    location,
    image,
    setProfileFormData,
  } = useProfileInfoStore();

  const formData = { name, username, about, phone, education, location, image };

  const handleCallback = (file: File) => {
    setProfileFormData({ image: file });
  };
  return (
    <div className="flex flex-col w-full">
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
        className="flex flex-col custom900:grid grid-cols-2 custom900:gap-x-[10px] w-full lg:gap-x-[30px] xl:gap-x-[100px] gap-y-10 self-center"
      >
        {/* Change Profile Photo */}
        <ProfilePhotoUploader callback={handleCallback} />

        {/* Personal Info */}
        <PersonalInfo />

        {/* Contact Info */}
        <ContactInfo />

        {/* Educational Background */}
        <EducationalBackground />
      </motion.div>
      <div className="w-full lg:w-[90%] flex custom580:flex-row gap-5 justify-center lg:justify-end items-center mt-20">
        <SecondaryButton
          text="Reset Changes"
          onPressed={() => {}}
        />
        <PrimaryButton
          text="Update Profile"
          onPressed={() => {}}
        />
      </div>
    </div>
  );
};

export default ProfileSettings;
