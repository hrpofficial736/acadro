"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ImSpinner3 } from "react-icons/im";

export default function CallbackPage() {
  const { data: session, status} = useSession();
  const router = useRouter();
  useEffect (() => {
      console.log(session?.user.username, status);
      
        if (status === "authenticated" && session.user.username) {

            router.push(`/dashboard/${session.user.role}/${session.user.username}`)
        }
    }, [session?.user.username, status])

  return (
    <div className="w-screen h-screen f-c-row bg-background">
      <div className="f-c-row gap-2 text-secondaryText">
        <ImSpinner3 className="animate-spin" />
        Please wait...
      </div>
    </div>
  );
}
