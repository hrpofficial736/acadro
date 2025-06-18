import { getSession } from "@/lib/authSession";
import { redirect } from "next/navigation";
import DashboardSidebar from "./components/DashboardSidebar";
import Logo from "@/components/Logo";

export default async function Dashboard() {
  const session = await getSession();
  if (!session) redirect("/sign-in");
  console.log(session);
  return (
    <div className="text-primaryText w-screen h-screen bg-background p-6">
      <Logo />
      <div className="flex h-full items-center"><DashboardSidebar /></div>
    </div>
  );
}
