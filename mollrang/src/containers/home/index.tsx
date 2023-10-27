import * as S from "@containers/home/style";
import {IntroBanner} from "@components/intro";
import {Button} from "@components/common/Button";
import {OpenBookIcon} from "@components/common/icons/OpenBookIcon";
import {Typography} from "@components/common/Typography";
import {AttendanceCheck} from "@components/attendance/AttendanceCheck";
import {CorrectAnswers} from "@components/statistics/CorrectAnswers";
import {ConsecutiveAnswers} from "@components/statistics/ConsecutiveAnswers";
import {Footer} from "@components/layouts/footer/Footer";
import {useRouter} from "next/router";
import {TodayRandomQuiz} from "@components/quizzes/random/TodayRandomQuiz";

export const HomeContainer = () => {
  const router = useRouter();

  const playQuizButton = async (): Promise<void> => {
    await router.push("/quizzes");
  };

  return (
    <S.HomeLayout>
      <S.HomeBox>
        <IntroBanner />
        <S.PlayQuizBox>
          <hr />
          <Button
            type={"button"}
            variant={"primary-rounded"}
            onClick={playQuizButton}
          >
            <OpenBookIcon />
            <Typography as={"span"} $color={"textWhite"}>
              오늘의 퀴즈
            </Typography>
          </Button>
        </S.PlayQuizBox>
        <TodayRandomQuiz />
        <S.SubItemsLayout>
          <AttendanceCheck />
          <div className={"answers-container"}>
            <CorrectAnswers />
            <ConsecutiveAnswers />
          </div>
        </S.SubItemsLayout>
      </S.HomeBox>
      <Footer />
    </S.HomeLayout>
  )
}