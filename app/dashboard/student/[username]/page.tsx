import { getSession } from "@/lib/authSession"
import { redirect } from "next/navigation";


export default async function Dashboard () {
    const session = await getSession();
    if (!session) redirect("/sign-in");
    console.log(session);
    
    return (
        <div className="text-primaryText w-screen h-screen bg-background">hello world</div>
    )
}