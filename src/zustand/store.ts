import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type StoreStateType = {
  userName: string;
  setUserName: (name: string) => void;
};

const customSessionStorage = {
  getItem: (name: string) => {
    const item = sessionStorage.getItem(name);
    return item ? JSON.parse(item) : null;
  },
  setItem: (name: string, value: any) => {
    sessionStorage.setItem(name, JSON.stringify(value));
  },
  removeItem: (name: string) => {
    sessionStorage.removeItem(name);
  },
};

export const useStore = create<StoreStateType>()(
  persist(
    (set) => ({
      userName: "",
      setUserName: (name) => set({ userName: name }),
    }),
    {
      name: "userName-sessionStorage-key",
      //storage: customSessionStorage,
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
