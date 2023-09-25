import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// Type for our state
export interface UtilState {
  modal: ModalState;
  sideBarIsOpen: boolean;
  bottomModalShow: boolean;
  isLoading: boolean;
}

type ModalState = {
  type: string;
  isOpen: boolean;
}

// Initial state
const initialState: UtilState = {
  modal: {
    type: '',
    isOpen: false,
  },
  sideBarIsOpen: false,
  bottomModalShow: false,
  isLoading: false,
};
// Actual Slice
export const UtilSlice = createSlice({
  name: 'utils',
  initialState,
  reducers: {
    setSideBarIsOpen(state: UtilState, action: PayloadAction<boolean>) {
      state.sideBarIsOpen = action.payload;
    },
    setBottomModalShow(state: UtilState, action: PayloadAction<boolean>) {
      state.bottomModalShow = action.payload;
    },
    setIsLoading(state: UtilState, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setModalType(state: UtilState, action: PayloadAction<ModalState>) {
      state.modal = action.payload;
    }
  },
});

export const {setSideBarIsOpen, setBottomModalShow, setIsLoading} = UtilSlice.actions;
