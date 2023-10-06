import {useAppDispatch, useAppSelector} from "@hooks/useRedux";
import {setModalOpen} from "@store/slice/modalSlice";
import React from "react";

export default function useModalHook(ele: any) {
  const dispatch = useAppDispatch();
  const {modal} = useAppSelector(
    (state) => state.modalStore,
  );
  const {type, modalType} = modal;
  const onRequestClose = () => {
    const action = {
      type,
      modalType,
      isOpen: false,
    }
    dispatch(setModalOpen(action))
  }

  const outerClickEvent = (e: React.MouseEvent) => {
    const {target} = e;
    if (ele && ele.current) {
      const elements = ele.current.contains(target as Node);
      if (!elements) onRequestClose();
    }
  }

  return { onRequestClose, outerClickEvent }
}