import React, {ReactElement} from 'react';
import {BsBook, BsQuestionLg} from "react-icons/bs";
import {Typography} from "@components/common/Typography";
import styled from "styled-components";
import {Button} from "@components/common/Button";
import {useRouter} from "next/router";
import {useAppDispatch} from "@hooks/useRedux";
import {setModalOpen, State} from "@store/slice/modalSlice";

const GuideLayout = styled.div``;
const GuideBody = styled.div`
  padding: 0 28px;

  .description_box1 > p {
    margin: 0.5em 0;
  }

  .description_box2 {
    .description_label {
      margin-top: 26px;
    }
  }

  .description_box3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;

    & > p {
      margin: 0.2em 0;
    }
  }

  .today_quiz_button_wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em 0;
    margin-bottom: 1em;

    svg {
      margin-right: 0.5em;
    }
  }
`;
const TableContainer = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 26px;

  table {
    border: 1px solid #ededed;
    border-radius: 4px;

    thead, tbody {
      border: 1px solid #ededed;
      border-collapse: collapse;
    }

    th {
      vertical-align: middle;
    }

    th, td {
      border: 1px solid #ededed;
      padding: 8px 16px;
    }
  }
`;

const MollRangLogo = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  bottom: 44px;
  left: 22px;
  width: fit-content;

  svg {
    position: relative;
    right: 6px;
    bottom: 2px;
    rotate: 14deg;
  }
`;

const HintBlock = styled.div`
  width: 58px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #DFDFDF;
  background-color: #fdfdfd;

  &.success {
    border-color: var(--primary);
    background-color: var(--primary);
  }

  &.hint {
    border-color: var(--secondary);
    background-color: var(--secondary);
  }

  &.wrong {
    border-color: var(--warning);
    background-color: var(--warning);
  }
`;

export const QuizGuide = (): ReactElement => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const playQuizButton = async (): Promise<void> => {
    const modalState: State = {
      type: "guide",
      modalType: "bottom-slide",
      isOpen: false,
    };
    await dispatch(setModalOpen(modalState));
    await router.push("/quizzes");
  };

  return (
    <GuideLayout>
      <MollRangLogo>
        <Typography $color={"Primary"} $variant={"body1"}>
          몰랑
        </Typography>
        <BsQuestionLg size={28} color={"#FFC700"}/>
      </MollRangLogo>
      <GuideBody>
        <div className={'description_box1'}>
          <Typography $variant={"body1"}>
            몰랑은 하루에 한 문제, 퀴즈에 도전할 수 있어요.
          </Typography>
          <Typography $variant={"body1"}>
            퀴즈에 도전할 수 있는 횟수는 5회입니다.
          </Typography>
          <Typography $color={"textGray200"} $variant={"caption"}>
            (정답을 맞추거나 5회 정답을 제출한다면 오늘의 퀴즈는 종료 됩니다.)
          </Typography>
        </div>

        <div className={'description_box2'}>
          <Typography $variant={"body1"} className={'description_label'}>
            힌트 블럭을 통해 정답을 유추할 수 있어요!
          </Typography>
          <TableContainer>
            <table>
              <thead>
              <tr>
                <th><Typography as={"span"}>힌트 블럭</Typography></th>
                <th><HintBlock className={'success'}/></th>
                <th><HintBlock className={'hint'}/></th>
                <th><HintBlock className={'wrong'}/></th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td><Typography as={"span"}>정답 글자</Typography></td>
                <td><Typography as={"span"}>일치</Typography></td>
                <td><Typography as={"span"}>일치</Typography></td>
                <td><Typography as={"span"}>불일치</Typography></td>
              </tr>
              <tr>
                <td><Typography as={"span"}>정답 위치</Typography></td>
                <td><Typography as={"span"}>일치</Typography></td>
                <td><Typography as={"span"}>불일치</Typography></td>
                <td><Typography as={"span"}>불일치</Typography></td>
              </tr>
              </tbody>
            </table>
            <div>
            </div>
          </TableContainer>
        </div>

        <div className={'description_box3'}>
          <Typography $variant={'body1'}>매일 한 문제씩 퀴즈를 풀고</Typography>
          <Typography $variant={'body1'}>퀴즈 결과를 친구들에게 공유해 보세요!</Typography>
        </div>

        <div className={'today_quiz_button_wrapper'}>
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
        </div>
      </GuideBody>
    </GuideLayout>
  );
};
