import { create } from "zustand";

type StoreStateType = {
  userName: string;
  setUserName: (name: string) => void;
};

export const useStore = create<StoreStateType>((set) => ({
  userName: "",
  setUserName: (name) => set({ userName: name }),
}));
