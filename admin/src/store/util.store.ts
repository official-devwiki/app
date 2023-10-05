import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

interface Action {
  setIsOpen: (payload: boolean) => void;
}

interface State {
  isOpen: boolean;
}
const initialState: State = {
  isOpen: false,
}

const useUtilsStore = create<State & Action>(
  (set,get) => ({
      ...initialState,
      setIsOpen: (payload: boolean) => set({isOpen: payload}),
    }),

);

export default useUtilsStore;
