import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// Type for our state
export interface UtilState {
  sideBarIsOpen: boolean;
  bottomModalShow: boolean;
  isLoading: boolean;
}

// Initial state
const initialState: UtilState = {
  sideBarIsOpen: false,
  bottomModalShow: false,
  isLoading: false,
};
// Actual Slice
export const UtilSlice = createSlice({
  name: 'utils',
  initialState,
  reducers: {
    // Action to set the authentication status
    setSideBarIsOpen(state: UtilState, action: PayloadAction<boolean>) {
      state.sideBarIsOpen = action.payload;
    },
    setBottomModalShow(state: UtilState, action: PayloadAction<boolean>) {
      state.bottomModalShow = action.payload;
    },
    setIsLoading(state: UtilState, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const {setSideBarIsOpen, setBottomModalShow, setIsLoading} = UtilSlice.actions;
