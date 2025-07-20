"use client";

import React, { useRef } from "react";
import { SecondaryButton } from "../../../../../../components/buttons/SecondaryButton";

const ProfilePhotoUploader = ({
  callback,
}: {
  callback: (file: File) => void;
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    callback(file);
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-lg font-semibold text-primaryText/80">
        Your profile photo
      </h1>
      <p className="text-xs text-secondaryText mt-[2px]">
        Select a clear and a professional photo for your profile.
      </p>
      <div className="flex max-md:justify-center items-center gap-20 mt-7">
        <div className="rounded-full w-20 h-20 bg-secondaryText" />
        <SecondaryButton
          text="Change Profile Photo"
          onPressed={() => {
            inputRef.current?.click();
          }}
          className="max-h-[30px]"
        />
      </div>
      <input
        className="hidden"
        onChange={handleUpload}
        ref={inputRef}
        type="file"
      />
    </div>
  );
};

export default ProfilePhotoUploader;
