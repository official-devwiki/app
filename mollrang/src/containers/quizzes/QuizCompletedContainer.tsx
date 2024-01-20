import { ReactElement } from "react";
import { Typography } from "@components/common/Typography";
import { Button } from "@components/common/Button";
import * as S from "./QuizCompletedContainer.style";
import { useAppDispatch, useAppSelector } from "@hooks/useRedux";
import { setModalOpen, State } from "@store/slice/modalSlice";
import { useAuth } from "@providers/authProvider";
import {
  useContinuousCorrectQuery,
  useGetMyAnswersQuery,
  useMostContinuousCountQuery,
  useMyTotalChallengeQuery,
} from "@services/queries/statisticsQuery";
import { SpinnerUi } from "@components/ui/spinner/SpinnerUi";
import { dateToString } from "@utils/days";
import toast from "react-hot-toast";

export const QuizCompletedContainer = (): ReactElement => {
  const { count, isCorrected } = useAppSelector((state) => state.quizStore);
  const { userInfo } = useAuth();

  const myAnswerRatioData = useGetMyAnswersQuery(userInfo?.id);
  const totalChallengeData = useMyTotalChallengeQuery(userInfo?.id);
  const continuousCorrectData = useContinuousCorrectQuery(userInfo?.id);
  const mostCorrectData = useMostContinuousCountQuery(userInfo?.id);

  const dispatch = useAppDispatch();

  if (
    mostCorrectData.isLoading &&
    continuousCorrectData.isLoading &&
    totalChallengeData.isLoading &&
    myAnswerRatioData.isLoading
  )
    return (
      <S.QuizCompletedLayout>
        <SpinnerUi />
      </S.QuizCompletedLayout>
    );

  const onClickShowMyStatistics = () => {
    const modalState: State = {
      type: "statistics",
      modalType: "bottom-slide",
      isOpen: true,
    };
    dispatch(setModalOpen(modalState));
  };

  const onClickClipBoard = async () => {
    const today = dateToString(new Date());
    const text = `몰랑? (${today})  📈 정답률 1/${totalChallengeData.data.total} (${myAnswerRatioData.data.corrected}) 🔥 ${continuousCorrectData.data.continuous} 일 연속 정답
create by https://www.mollrang.com`;
    await navigator.clipboard.writeText(text);

    toast.success(`클립보드에 저장되었습니다.`, {
      duration: 1500,
      style: {
        backgroundColor: "#e0ffde",
      },
      position: "top-right",
      ariaProps: {
        role: "status",
        "aria-live": "polite",
      },
    });
  };
  return (
    <S.QuizCompletedLayout>
      <S.QuizLabelGroup>
        <Typography
          className={"completed-description"}
          $color={"textBlack200"}
          $variant={"body2"}
        >
          오늘의 퀴즈가 종료되었습니다.
        </Typography>
        {isCorrected ? (
          <>
            <Typography
              className={"completed-description"}
              $color={"textBlack200"}
              $variant={"body2"}
            >
              <span className={"count"}>{count}</span> 번만에 정답을
              맞추었네요!!
            </Typography>
            <Typography
              className={"completed-description"}
              $color={"textBlack200"}
              $variant={"body2"}
            >
              퀴즈 결과를 자랑해 보세요!
            </Typography>
          </>
        ) : (
          <>
            <Typography
              className={"completed-description"}
              $color={"textBlack200"}
              $variant={"body2"}
            >
              아쉽지만 정답을 맞추지 못하셨네요.
            </Typography>
            <Typography
              className={"completed-description"}
              $color={"textBlack200"}
              $variant={"body2"}
            >
              내일 다시 도전해보세요!!
            </Typography>
          </>
        )}
      </S.QuizLabelGroup>
      <S.QuizButtonGroup>
        <Button variant={"secondary"} onClick={onClickShowMyStatistics}>
          <Typography as={"span"} $color={"textGray300"} $weight={"light"}>
            나의 통계 보기
          </Typography>
        </Button>
        <Button onClick={onClickClipBoard}>
          <Typography as={"span"} $color={"textWhite"} $weight={"light"}>
            자랑하기
          </Typography>
        </Button>
      </S.QuizButtonGroup>
    </S.QuizCompletedLayout>
  );
};
