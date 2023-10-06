import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Store} from "@interfaces/store";

// Initial state
const initialState: UtilityStore = {
  sideBarIsOpen: false,
  isLoading: false,
};

export const UtilSlice = createSlice({
  name: 'utilityStore',
  initialState,
  reducers: {
    setSideBarIsOpen(state: UtilityStore, action: PayloadAction<boolean>) {
      state.sideBarIsOpen = action.payload;
    },
    setIsLoading(state: UtilityStore, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export type UtilityStore = Store.Utility.State;

export const {setSideBarIsOpen, setIsLoading} = UtilSlice.actions;
