import * as S from "@containers/home/style";
import {IntroBanner} from "@components/intro";
import {Button} from "@components/common/Button";
import {Typography} from "@components/common/Typography";
import {AttendanceCheck} from "@components/attendance/AttendanceCheck";
import {CorrectedAnswers} from "@components/statistics/CorrectedAnswers";
import {ContinuousAnswers} from "@components/statistics/ContinuousAnswers";
import {Footer} from "@components/layouts/footer/Footer";
import {useRouter} from "next/router";
import {TodayRandomQuiz} from "@components/quizzes/random/TodayRandomQuiz";
import {BsBook} from "react-icons/bs";
import {FunctionComponent} from "react";
import {useAuth} from "@providers/authProvider";

export const HomeContainer: FunctionComponent = () => {
  const {userInfo} = useAuth();
  const router = useRouter();

  const playQuizButton = async (): Promise<void> => {
    await router.push("/quizzes");
  };

  return (
    <S.HomeLayout>
      <S.HomeBox>
        <IntroBanner/>
        <S.PlayQuizBox>
          <hr/>
          <Button
            type={"button"}
            variant={"primary-rounded"}
            onClick={playQuizButton}
          >
            <BsBook color={"#fff"} size={20}/>
            <Typography as={"span"} $color={"textWhite"}>
              오늘의 퀴즈
            </Typography>
          </Button>
        </S.PlayQuizBox>
        <TodayRandomQuiz/>
        {
          <S.SubItemsLayout>
            <AttendanceCheck userId={userInfo?.id}/>
            <div className={"answers-container"}>
              <div className={"correct_answer_wrapper"}>
                <CorrectedAnswers userId={userInfo?.id}/>
              </div>
              <ContinuousAnswers userId={userInfo?.id}/>
            </div>
          </S.SubItemsLayout>
        }
      </S.HomeBox>
      <Footer/>
    </S.HomeLayout>
  );
};
