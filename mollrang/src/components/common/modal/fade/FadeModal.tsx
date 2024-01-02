import {AnimatePresence} from 'framer-motion';
import React, {ReactElement} from 'react';
import {Button} from "@components/common/Button";
import * as S from '@components/common/modal/style';
import * as F from '@components/common/modal/fade/style';
import {ModalProps} from "@components/common/modal/ModalHandler";
import useModalHook from "@hooks/useModalHook";
import { IoClose } from "react-icons/io5";

export const FadeModal = (props: ModalProps): ReactElement => {
  const {isOpen, children, ele} = props;
  const {onRequestClose, outerClickEvent} = useModalHook(ele);

  return (
    <AnimatePresence>
      {isOpen && (
        <S.ModalLayout
          key={"fade-modal-key"}
          onClick={outerClickEvent}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <F.ModalContainer>
            <F.ModalBody ref={ele}>
              <S.ModalCloseButtonWrapper>
                <Button variant={'icon'} onClick={onRequestClose}>
                  <IoClose color={'#222'} size={24} />
                </Button>
              </S.ModalCloseButtonWrapper>
              <S.ModalContentsBox ref={ele}>
                {children}
              </S.ModalContentsBox>
            </F.ModalBody>
          </F.ModalContainer>
        </S.ModalLayout>
      )}
    </AnimatePresence>
  );
}