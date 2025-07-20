import { create } from "zustand";

type LogOutWindowStateProps = {
    show: boolean;
    toggleShow: () => void;
}


export const useLogOutWindowStore = create<LogOutWindowStateProps>((set) => ({
    show: false,
    toggleShow: () => set((state) => ({ show: !state.show}))
}))