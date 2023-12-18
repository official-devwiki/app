import {ReactElement} from "react";
import styled from "styled-components";
import {Typography} from "@components/common/Typography";
import {Button} from "@components/common/Button";
import {useAppDispatch} from "@hooks/useRedux";
import {setModalOpen} from "@store/slice/modalSlice";
import { IoBook } from "react-icons/io5";

const GuidePopupLayout = styled.div`
  position: absolute;
  right: 20px;
  bottom: 30%;
  display: inline-block;
  
  button {
    background-color: var(--primary);
    border: 1px solid var(--correct_border);
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    flex-direction: column;
  }

  ${({theme}) => theme.media.tablet} {
    display: none;
  }
`;

export const FloatingActionButton = (): ReactElement => {
  const dispatch = useAppDispatch();
  const guideOpen = (): void => {
    const payload = {
      type: 'guide',
      modalType: 'fade',
      isOpen: true,
    }
    dispatch(setModalOpen(payload));
  };

  return (
    <GuidePopupLayout>
      <Button variant={'icon'} onClick={guideOpen}>
        <IoBook color={'#fff'} size={26} />
        <Typography $variant={'caption'} as={'span'} $color={'textWhite'}>가이드</Typography>
      </Button>
    </GuidePopupLayout>
  )
}