import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Store} from "@interfaces/store";

const initialState: ModalStore = {
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
    setModalOpen(state: ModalStore, action: PayloadAction<State>) {
      state.modal = action.payload;
    },
  }
});

export type ModalStore = Store.Modal.SliceState;
export type State = Store.Modal.State;

export const {setModalOpen} = ModalSlice.actions;
