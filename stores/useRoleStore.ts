import { create } from "zustand";


type RoleState = {
    role: "student" | "tutor";
    setRole: (role: RoleState["role"]) => void;
}


export const useRoleStore = create<RoleState>((set) => ({
   role: "tutor",
   setRole: (newRole) => set(() => ({ role: newRole})) 
}))