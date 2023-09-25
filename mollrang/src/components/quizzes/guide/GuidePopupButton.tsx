import {ReactElement} from "react";
import styled from "styled-components";
import {Icons} from "@components/common/icons/Icons";
import {Typography} from "@components/common/Typography";
import {Button} from "@components/common/Button";
import {useAppDispatch} from "@hooks/useRedux";
import {setBottomModalShow} from "@store/slice/utilSlice";

const GuidePopupLayout = styled.div`
  position: absolute;
  right: 20px;
  bottom: 30%;
  display: inline-block;
  
  button {
    border: 1px solid gray;
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

export const GuidePopupButton = (): ReactElement => {
  const dispatch = useAppDispatch();
  const guideOpen = (): void => {
    dispatch(setBottomModalShow(true));
  };

  return (
    <GuidePopupLayout>
      <Button variant={'icon'} onClick={guideOpen}>
        <Icons variant={'black'} type={'guide'} />
        <Typography variant={'caption'} as={'span'} color={'default'}>가이드</Typography>
      </Button>
    </GuidePopupLayout>
  )
}