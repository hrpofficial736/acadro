"use client";

import Logo from "@/components/Logo";
import { ReactNode, useState } from "react";
import DashboardSidebar from "./components/DashboardSidebar";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Image from "next/image";
import SearchField from "./components/SearchField";
import DashboardSmallSidebar from "./components/DashboardSmallSidebar";
import { useSession } from "next-auth/react";
import { dummyUrl } from "@/utils/constants";
import Placeholder from "@/components/placeholders/Placeholder";
import Window from "@/components/window/Window";
import { useWindowStore } from "@/stores/useWindowStore";
import LogOut from "@/app/tutor/[username]/components/LogOut";

export default function Layout({ children }: { children: ReactNode }) {
  const { data: session } = useSession();
  let userFullName, userEmail, userImage;
  if (session?.user) {
    userFullName = session.user.name;
    userEmail = session.user.email;
    userImage = session.user.image;
  }

  const [showSideBar, setShowSideBar] = useState<boolean>(false);
  const { show, current } = useWindowStore();

  return (
    <div className="text-primaryText w-screen h-screen bg-background py-3 md:px-6 md:py-6 overflow-x-hidden relative">
      <DashboardSmallSidebar
        onClose={() => setShowSideBar(false)}
        display={showSideBar}
      />
      <>
        <div
          className={`flex flex-col md:flex-row max-md:gap-7 md:justify-between md:items-start m-3 ${
            show && current === "logout" && "brightness-50 blur-lg"
          }`}
        >
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

          {userImage?.trim() !== "" && userFullName && userEmail ? (
            <div className="f-c-row max-md:hidden justify-between gap-3 p-3 rounded-xl hover:bg-surface transition-colors duration-300 cursor-pointer">
              <Image
                alt="Your profile Photo"
                src={userImage || dummyUrl!}
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
          ) : (
            <div className="f-c-row gap-2 max-md:hidden">
              <Placeholder
                width={50}
                height={50}
                className="rounded-full bg-surface"
              />
              <span className="f-c-col gap-2">
                <Placeholder
                  width={200}
                  height={18}
                  className="rounded bg-surface"
                />
                <Placeholder
                  width={200}
                  height={18}
                  className="rounded bg-surface"
                />
              </span>
            </div>
          )}
        </div>
        <div className={`flex ${show && current === "logout" && "brightness-50 blur-lg"} items-center h-full gap-[100px]`}>
          <DashboardSidebar />
          {children}
        </div>
      </>
      {current === "logout" && (
        <Window index="logout" header="Log out">
          <LogOut />
        </Window>
      )}
    </div>
  );
}
