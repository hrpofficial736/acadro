import { create } from "zustand";

type SideBarState = {
    sideBarOpen: boolean;
    setSideBarOpen: () => void;
}


export const useSideBarStore = create<SideBarState>((set) => ({
    sideBarOpen: false,
    setSideBarOpen: () => set((state) => ({sideBarOpen: !state.sideBarOpen}))
}))

