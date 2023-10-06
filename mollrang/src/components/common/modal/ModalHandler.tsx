import {useAppDispatch, useAppSelector} from "@hooks/useRedux";
import React, {ReactElement, ReactNode} from "react";
import {BottomSlideModal} from "@components/common/modal/slide/BottomSlide";
import {FadeModal} from "@components/common/modal/fade/FadeModal";
import {setModalOpen} from "@store/slice/modalSlice";

interface Props {
  children: ReactNode;
}

export const ModalHandler: React.FunctionComponent<Props> = (props): ReactElement => {
  const {children} = props;
  const {modal} = useAppSelector(
    (state) => state.modalStore,
  );
  const {isOpen, type, modalType} = modal;
  const dispatch = useAppDispatch();

  const modalClose = (payload: boolean) => {
    const action = {
      type,
      modalType: 'fade',
      isOpen: payload,
    }
    dispatch(setModalOpen(action))
  };

  const modalHandler = (children: ReactNode) => {
    switch (modalType) {
      case 'bottom-slide':
        return (
          <BottomSlideModal isOpen={isOpen} onRequestClose={modalClose}>
            {children}
          </BottomSlideModal>
        );
      default:
        return (
          <FadeModal isOpen={isOpen} onRequestClose={modalClose}>
            {children}
          </FadeModal>
        );
    }
  }
  return modalHandler(children);
}