import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type State = {
  isDark: boolean;
};
type Action = {
  setDarkMode: (darkMode: boolean) => void;
};

export type StoreType = State & Action;

export const useStore = create<StoreType>()(
  devtools(
    immer((set) => ({
      isDark: false,
      setDarkMode: (darkMode) => {
        set((state) => {
          state.isDark = darkMode;
        });
      },
    }))
  )
);
