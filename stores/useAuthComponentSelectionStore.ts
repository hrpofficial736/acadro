import { create } from "zustand";

type AuthComponentSelectionState = {
  component: "register" | "login";
  setComponent: (component: AuthComponentSelectionState["component"]) => void;
};

export const useAuthComponentSelectionStore =
  create<AuthComponentSelectionState>((set) => ({
    component: "register",
    setComponent: (newComponent: AuthComponentSelectionState["component"]) =>
      set(() => ({ component: newComponent })),
  }));
