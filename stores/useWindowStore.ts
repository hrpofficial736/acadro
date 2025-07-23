import { create } from "zustand";

type WindowStateProps = {
    current: string;
    show: boolean;
    toggleShow: (name: string) => void;
}


export const useWindowStore = create<WindowStateProps>((set) => ({
    current: "",
    show: false,
    toggleShow: (name: string) => set((state) => ({ show: !state.show, current: name })),
}))