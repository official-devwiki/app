import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// Type for our state
export interface UtilState {
  sideBarIsOpen: boolean;
  isLoading: boolean;
}

// Initial state
const initialState: UtilState = {
  sideBarIsOpen: false,
  isLoading: false,
};
// Actual Slice
export const UtilSlice = createSlice({
  name: 'utilityStore',
  initialState,
  reducers: {
    setSideBarIsOpen(state: UtilState, action: PayloadAction<boolean>) {
      state.sideBarIsOpen = action.payload;
    },
    setIsLoading(state: UtilState, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const {setSideBarIsOpen, setIsLoading} = UtilSlice.actions;
