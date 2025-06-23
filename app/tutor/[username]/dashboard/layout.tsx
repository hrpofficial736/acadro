"use client";

import Logo from "@/components/Logo";
import { ReactNode, useState } from "react";
import DashboardSidebar from "./components/DashboardSidebar";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Image from "next/image";
import SearchField from "./components/SearchField";
import DashboardSmallSidebar from "./components/DashboardSmallSidebar";
import { useSession } from "next-auth/react";

export default function Layout({ children }: { children: ReactNode }) {
  const { data: session } = useSession();
  let userFullName, userEmail, userImage;
  if (session?.user) {
    userFullName = session.user.name;
    userEmail = session.user.email;
    userImage = session.user.image;
  }
  const dummyUrl =
    "https://img.freepik.com/free-vector/blank-book-white-background_1308-23052.jpg?ga=GA1.1.1167649640.1747117581&semt=ais_hybrid&w=740";
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  return (
    <div className="text-primaryText w-screen h-screen bg-background py-3 md:px-6 md:py-6 overflow-x-hidden">
      <DashboardSmallSidebar
        onClose={() => setShowSideBar(false)}
        display={showSideBar}
      />
      {!showSideBar && (
        <>
          <div className="flex flex-col md:flex-row max-md:gap-7 md:justify-between md:items-start m-3">
            <Logo />
            <div className="f-c-row gap-8 ">
              <SearchField />
              <div
                onClick={() => setShowSideBar(true)}
                className="f-c-row md:hidden rounded-full p-3 bg-surface"
              >
                <HiOutlineMenuAlt3 size={25} />
              </div>
            </div>

            <div className="f-c-row max-md:hidden justify-between gap-3 p-3 rounded-xl hover:bg-surface transition-colors duration-300 cursor-pointer">
              <Image
                alt="Your profile Photo"
                src={userImage || dummyUrl}
                width={50}
                height={50}
                className="rounded-full border-2 border-white"
              />
              <div className="f-c-col items-start">
                <h1 className="text-lg font-bold text-primaryText">
                  {userFullName}
                </h1>
                <h6 className="text-secondaryText text-sm">{userEmail}</h6>
              </div>
            </div>
          </div>
          <div className="flex items-center md:gap-10">
            <DashboardSidebar />
            {children}
          </div>
        </>
      )}
    </div>
  );
}
