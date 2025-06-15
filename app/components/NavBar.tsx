"use client";

import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import Logo from "@/components/Logo";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Link from "next/link";
import useIsMobile from "@/hooks/useIsMobile";
import { useSideBarStore } from "@/stores/useSideBarStore";
import { redirect } from "next/navigation";

export default function NavBar() {
  const { setSideBarOpen } = useSideBarStore();

  const { mounted, isMobile } = useIsMobile();

  if (!mounted) return null;

  return (
    <div className="navbar">
      <Logo />

      <div className="f-c-row gap-10">
        <Link className="nav-link" href={"/"}>
          Features
        </Link>
        <Link className="nav-link" href={"/"}>
          Pricing
        </Link>
        <Link className="nav-link" href={"/"}>
          How it works
        </Link>
      </div>
      <HiOutlineMenuAlt3
        onClick={() => {
          setSideBarOpen();
        }}
        className="md:hidden w-8 h-8 text-primaryText hover:bg-neutral-500"
      />
      {!isMobile && <PrimaryButton text="Get started" onPressed={() => {
        redirect("/sign-in");
      }} />}
    </div>
  );
}
