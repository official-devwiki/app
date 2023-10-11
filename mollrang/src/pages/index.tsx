import { NextPage } from "next";
import { ReactElement } from "react";
import { Typography } from "@components/common/Typography";
import { Button } from "@components/common/Button";
import { OpenBookIcon } from "@components/common/icons/OpenBookIcon";
import * as S from "./style";
import { IntroBanner, IntroShorts } from "@components/intro";
import { AttendanceCheck } from "@components/attendance/AttendanceCheck";
import { CorrectAnswers } from "@components/statistics/CorrectAnswers";
import { useRouter } from "next/router";
import { Footer } from "@components/layout/footer/Footer";
import { ConsecutiveAnswers } from "@components/statistics/ConsecutiveAnswers";

const Home: NextPage = (): ReactElement => {
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
            <Typography as={"span"} color={"textWhite"}>
              오늘의 퀴즈
            </Typography>
          </Button>
        </S.PlayQuizBox>
        <IntroShorts />
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
  );
};

export default Home;
