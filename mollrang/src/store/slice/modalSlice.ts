import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type ModalType = 'fade' | 'bottom-slide';
type State = {
  type: string;
  modalType: string;
  isOpen: boolean;
}

export interface ModalState {
  modal: State;
}

const initialState: ModalState = {
  modal: {
    type: '',
    modalType: 'fade',
    isOpen: false,
  },
};

export const ModalSlice = createSlice({
  name: 'modalStore',
  initialState,
  reducers: {
    setModalOpen(state: ModalState, action: PayloadAction<State>) {
      state.modal = action.payload;
    },
  }
});

export const {setModalOpen} = ModalSlice.actions;