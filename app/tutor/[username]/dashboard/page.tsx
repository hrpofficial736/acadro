import { getSession } from "@/lib/authSession";
import { redirect } from "next/navigation";
import MyClassrooms from "./components/MyClassrooms";
import MyEarnings from "./components/MyEarnings";
import MySubscription from "./components/MySubscription";
import UpcomingEvents from "./components/UpcomingEvents";
import StudentEngagement from "./components/StudentEngagement";



export default async function Dashboard() {
  const session = await getSession();
  if (!session) redirect("/sign-in");
  return (
    <div className="text-primaryText 2xl:w-[1600px] mt-10 md:mx-auto bg-background p-3 md:p-6 flex flex-col gap-10 w-full">
      <h1 className="text-primaryText text-xl font-semibold">Dashboard</h1>
      <div className="flex flex-col sm:grid grid-cols-6 grid-rows-6 gap-5">
        <MyClassrooms />
        <MyEarnings />
        <MySubscription />
        <UpcomingEvents />
        <StudentEngagement />
      </div>
    </div>
  );
}
