import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Store} from "@interfaces/store";

const initialState: Store.Modal.SliceState = {
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
    setModalOpen(state: Store.Modal.SliceState, action: PayloadAction<Store.Modal.State>) {
      state.modal = action.payload;
    },
  }
});

export const {setModalOpen} = ModalSlice.actions;

export type State = Store.Modal.State;