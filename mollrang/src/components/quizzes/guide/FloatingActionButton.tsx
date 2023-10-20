import {ReactElement} from "react";
import styled from "styled-components";
import {Icons} from "@components/common/icons/Icons";
import {Typography} from "@components/common/Typography";
import {Button} from "@components/common/Button";
import {useAppDispatch} from "@hooks/useRedux";
import {setModalOpen} from "@store/slice/modalSlice";
import {GuideIcon} from "@components/common/icons/GuideIcon";

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
  
  @media screen and (max-width: 767px) {
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
        <GuideIcon />
        <Typography $variant={'caption'} as={'span'} $color={'textWhite'}>가이드</Typography>
      </Button>
    </GuidePopupLayout>
  )
}