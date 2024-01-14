import {ReactElement} from "react";
import {Typography} from "@components/common/Typography";
import {Button} from "@components/common/Button";
import * as S from "./QuizCompletedContainer.style";
import {useAppDispatch, useAppSelector} from "@hooks/useRedux";
import {setModalOpen, State} from "@store/slice/modalSlice";


export const QuizCompletedContainer = (): ReactElement => {
  const {count, isCorrected} = useAppSelector((state) => state.quizStore);
  const dispatch = useAppDispatch();

  const onClickShowMyStatistics = () => {
    const modalState: State = {
      type: 'statistics',
      modalType: "bottom-slide",
      isOpen: true,
    };
    dispatch(setModalOpen(modalState));
  }

  const onClickClipBoard = () => {
    alert('복사')
  }
  return (
    <S.QuizCompletedLayout>
      <S.QuizLabelGroup>
        <Typography className={'completed-description'} $color={'textBlack200'} $variant={'body1'} $weight={'bold'}>
          오늘의 퀴즈가 종료되었습니다.
        </Typography>
        {isCorrected ? (<>
            <Typography className={'completed-description'} $color={'textBlack200'} $variant={'body1'} $weight={'bold'}>
              <span className={'count'}>{count}</span> 번만에 정답을 맞추었네요!!
            </Typography>
            <Typography className={'completed-description'} $color={'textBlack200'} $variant={'body1'} $weight={'bold'}>
              퀴즈 결과를 자랑해 보세요!
            </Typography></>
        ) : (
          <>
            <Typography className={'completed-description'} $color={'textBlack200'} $variant={'body1'} $weight={'bold'}>
              아쉽지만 정답을 맞추지 못하셨네요.
            </Typography>
            <Typography className={'completed-description'} $color={'textBlack200'} $variant={'body1'} $weight={'bold'}>
              내일 다시 도전해보세요!!
            </Typography>
          </>
        )}
      </S.QuizLabelGroup>
      <S.QuizButtonGroup>
        <Button variant={'secondary'} onClick={onClickShowMyStatistics}>
          <Typography as={"span"} $color={'textGray300'}>
            나의 통계 보기
          </Typography>
        </Button>
        <Button onClick={onClickClipBoard}>
          <Typography as={"span"} $color={'textWhite'}>자랑하기</Typography>
        </Button>
      </S.QuizButtonGroup>

    </S.QuizCompletedLayout>
  );
};
