"use client";

import Placeholder from "@/components/placeholders/Placeholder";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { MdOutlineContentCopy } from "react-icons/md";

const MyInfo = () => {
  const { data: session } = useSession();
  let userFullName, userEmail, userImage, userRole;
  if (session?.user) {
    userFullName = session.user.name;
    userEmail = session.user.email;
    userImage = session.user.image;
    userRole = session.user.role;
  }

  const [text, setText] = useState<string>("Copy");


  return (
    <div className="flex flex-col lg:flex-row justify-start gap-10 w-full">
      {typeof userImage === "string" && userImage?.trim() !== "" ? <Image
        src={userImage!}
        alt="Your profile photo"
        width={200}
        height={200}
        quality={100}
        className="rounded-full border-4 border-primary object-cover"
      /> : <Placeholder width={200} height={200} className="rounded-full" />}

      <div className="text-3xl lg:text-5xl font-semibold text-primaryText flex flex-col items-start justify-center">
        <div className="f-c-row gap-7">
          {userFullName ? <h1 className="">{userFullName}</h1> : <Placeholder width={500} height={50} className="rounded-xl" />}
          <div className="bg-yellow-50 border border-yellow-500 f-c-row gap-2 rounded-3xl p-2 text-amber text-xs">
            <FaStar />
            {userRole}
          </div>
        </div>
        <div className="text-xl text-secondaryText font-normal mt-4 f-c-row gap-5 justify-start">
          Username: {session?.user.username}
          <div
            className="outline-2 outline-secondaryText/20 p-1 rounded text-primaryText/80 text-sm f-c-row gap-1 cursor-pointer hover:bg-surface"
            onClick={() => {
              setText("Copied");
              navigator.clipboard.writeText(session?.user.username!);
              setTimeout(() => {
                setText("Copy");
              }, 3000);
            }}
          >
            <MdOutlineContentCopy />
            {text}
          </div>
        </div>
        <p className="text-sm text-secondaryText font-normal mt-2">
          Email: {userEmail}
        </p>
      </div>
    </div>
  );
};

export default MyInfo;
