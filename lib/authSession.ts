import { authOptions } from "./authOptions";
import { getServerSession, Session } from "next-auth"


export const getSession = async (): Promise<Session | false> => {
    const session = await getServerSession(authOptions);
    if (session) return session;
    return false;
}