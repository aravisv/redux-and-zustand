import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type StoreStateType = {
  userName: string;
  setUserName: (name: string) => void;
};

export const useStore = create<StoreStateType>()(
  devtools(
    persist(
      (set) => ({
        userName: "",
        setUserName: (name) => set({ userName: name }),
      }),
      { name: "userName-localStorage-key" }
    )
  )
);
