import { create } from "zustand";

type ProgressState = {
    progress: number;
    setProgress: (progress: number) => void;
}


export const useProgressStore = create<ProgressState>((set) => ({
    progress: 0,
    setProgress: (value: number) => set({ progress: value })
}))