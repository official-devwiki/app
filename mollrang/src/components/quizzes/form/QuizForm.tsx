import React, {ReactElement, useEffect, useRef, useState} from "react";
import {Typography} from "@components/common/Typography";
import {QuizIcon} from "@components/common/icons/QuizIcon";
import * as S from "./style";
import {EmptyBlock} from "@components/ui/block/EmptyBlock";
import {SkeletonUi} from "@components/ui/skeleton/SkeletonUi";
import {useTodayQuizzesQuery} from "@services/queries/quizzesQuery";
import {Button} from "@components/common/Button";
import {Input} from "@components/common/input/Input";
import {CheckCircleIcon} from "@components/common/icons/CheckCircleIcon";
import {HintBlock} from "@components/ui/block/HintBlock";
import {useRouter} from "next/router";
import {Block, Chance} from "@interfaces/quizzes";
import {useQuizAnswerSubmitMutate} from "@services/mutations/quizzesMutation";
import {useAppDispatch} from "@hooks/useRedux";
import {State, setModalOpen} from "@store/slice/modalSlice";
import {QuizFormState} from "@containers/quizzes/QuizFormContainer";
import {MODAL_TYPE} from "@interfaces/store";
import toast, {Toaster} from 'react-hot-toast';
import ToastOptions from "react-hot-toast";
import {setCompleteCount} from "@store/slice/quizSlice";

const initialStepState: Chance[] = [
  {step: 1, answer: false, hint: [], userId: "", todayAnswer: ""},
  {step: 2, answer: false, hint: [], userId: "", todayAnswer: ""},
  {step: 3, answer: false, hint: [], userId: "", todayAnswer: ""},
  {step: 4, answer: false, hint: [], userId: "", todayAnswer: ""},
  {step: 5, answer: false, hint: [], userId: "", todayAnswer: ""},
];

interface Props {
  quizFormState: QuizFormState[];
}

export const QuizForm = (props: Props): ReactElement => {
  const {quizFormState} = props; // 퀴즈 히스토리 체크
  const [currentStep, setCurrentStep] = useState(initQuizStep()); // 처음에 히스토리 길이 만큼 늘린다.
  const [checkBox, setCheckBox] = useState<Chance[]>(initQuizFormState());
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");
  const [messageStyling, setMessageStyling] = useState("default");
  const [todayCompleted, setTodayCompleted] = useState(
    initQuizCompletedState(),
  );

  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const {data, isLoading} = useTodayQuizzesQuery();
  const answerSubmitMutate = useQuizAnswerSubmitMutate();

  function initQuizStep(): number {
    return quizFormState[quizFormState.length - 1].count; // 최종 제출의 순서 (0은 처음 시작)
  }

  function initQuizCompletedState(): boolean {
    let result = false;
    quizFormState.forEach((value) => {
      const {isCorrected} = value;
      result = isCorrected || quizFormState.length >= 5;
    });
    return result;
  }

  function initQuizFormState() {
    quizFormState.forEach((value, index) => {
      const {hint = [], count, userId} = value;
      if (initialStepState[index].step === count && count < 5) {
        initialStepState[index].userId = userId;
        initialStepState[index].hint = hint;
        initialStepState[index].answer = hint.length > 0 || true;
      } else if (initialStepState[index].step === count && count === 5) {
        initialStepState[index].hint = [];
        initialStepState[index].userId = userId;
        initialStepState[index].answer = true;
      }
    });
    return initialStepState;
  }

  const EmptyBlockElementGenerator = (): ReactElement[] => {
    const block = [];
    if (data) {
      for (let i = 0; i < data.answerLength; i++) {
        block.push(<EmptyBlock key={`empty-box-${i}`}/>);
      }
    }
    return block;
  };

  const inputValidation = (): boolean => {
    const toastOption: ToastOptions = {
      duration: 1500,
      style: {
        backgroundColor: '#ffc2c2'
      },
      position: 'top-right',
      ariaProps: {
        role: 'status',
        'aria-live': 'polite',
      },
    }
    if (answer.length <= 0) {
      toast.error("정답을 입력해 주세요.", toastOption);
      if (inputRef.current !== null) inputRef.current.focus();
      return false;
    } else if (answer.length < data.answerLength) {
      toast.error("글자 수를 확인해 주세요.", toastOption);
      if (inputRef.current !== null) inputRef.current.focus();
      return false;
    }
    if (currentStep > 5) {
      toast.error("더 이상 정답을 제출할 수 없습니다.", toastOption);
      return false;
    }
    return true;
  };

  const todayQuizAnswerSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
    if (!inputValidation()) return;
    const userId = quizFormState[0].userId; // 맨 앞에는 항상 아이디가 존재한다.
    const sendData: { userId: string; count: number; answer: string } = {
      count: currentStep + 1,
      answer,
      userId,
    };
    // 정답 제출
    answerSubmitMutate.mutate(sendData);
  };

  useEffect(() => {
    if (answerSubmitMutate.isSuccess && answerSubmitMutate.data) {
      // 최종 답안이 존재할 경우 퀴즈 종료로 간주한다.
      const toastOption: ToastOptions = {
        duration: 1500,
        style: {
          backgroundColor: '#e0ffde'
        },
        position: 'bottom-center',
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      }
      if (
        answerSubmitMutate.data.todayAnswer &&
        answerSubmitMutate.data.todayAnswer.length > 0
      ) {
        setAnswer("");
        toast.success("정답입니다~!", toastOption);
        completedSystemMessage();
        checkBoxUpdate([]);
        completedModalOpen();
      } else if (answerSubmitMutate.data.isCorrected) {
        // 정답 여부 체크 후 정답일 경우 퀴즈 종료로 간주
        setAnswer("");
        toast.success("정답입니다~!", toastOption);
        completedSystemMessage();
        checkBoxUpdate([]);
        completedModalOpen();
      } else {
        checkBoxUpdate(answerSubmitMutate.data.hint);
      }
      setAnswer("");
      setCurrentStep(currentStep + 1);
    }
  }, [answerSubmitMutate.isSuccess]);

  /**@description 완료 모달 열기*/
  const completedModalOpen = () => {
    const modalState: State = {
      type: "quiz-completed",
      modalType: MODAL_TYPE.FADE,
      isOpen: true,
    };
    dispatch(setCompleteCount(currentStep));
    dispatch(setModalOpen(modalState));
  };
  /**@description 완료 메세지 출력*/
  const completedSystemMessage = () => {
    setTodayCompleted(true);
    setMessage("퀴즈가 종료되었습니다. 내일 다시 도전 해주세요!");
    setMessageStyling("default");
  };

  const checkBoxUpdate = (hintData: Block[]): void => {
    const step = currentStep === 0 ? 1 : currentStep + 1;
    const findIndex = checkBox.findIndex((v) => v.step === step);
    const newCheckBox = [...checkBox];
    newCheckBox[findIndex].answer = true;
    newCheckBox[findIndex].hint = hintData;
    setCheckBox(newCheckBox);
  };

  /**
   * @param v
   * @param key
   */
  const hintBlockGenerator = (v: Block, key: string) => {
    const hintBlock = [];
    if (answerSubmitMutate.isSuccess) {
      for (let i = 1; i <= data.answerLength; i++) {
        if (!!v[i]) {
          const styling = v[i] === "O" ? "success" : "wrong";
          hintBlock.push(
            <HintBlock className={styling} key={`hint-box-${i}-${key}`}/>,
          );
        }
      }
    }
    return hintBlock;
  };

  /** @description: Hint Block Element 생성 */
  const HintBlocks = (): ReactElement[] => {
    return checkBox.map((v, index) => {
      return (
        <li key={index}>
          <CheckCircleIcon className={v.answer && "active"}/>
          {v.hint?.length >= 0 &&
          v.hint.map((block, blockIndex) => {
            return (
              <S.FlexBox key={`key-${blockIndex}`}>
                {hintBlockGenerator(block, `key-${blockIndex}`)}
              </S.FlexBox>
            );
          })}
        </li>
      );
    });
  };

  useEffect(() => {
    resultMessage();
  }, [checkBox]);

  const resultMessage = (): void => {
    let step = 0;
    if (currentStep !== 0) step = currentStep;
    if (step > 0 && !todayCompleted) {
      const currentStepIndex = checkBox.findIndex(
        (v) => v.step === step,
      );
      const currentStepAnswer = checkBox[currentStepIndex].hint;
      if (currentStepAnswer.length === 0) return;

      const hintExist = currentStepAnswer.filter(
        (value, index) => value[index + 1] === "O",
      );
      if (hintExist.length > 0) {
        setMessage("정답인 글자가 포함되어있어요!");
        setMessageStyling("default");
      } else {
        setMessage("글자가 포함되어있지 않아요!");
        setMessageStyling("wrong");
      }
    }
  };

  useEffect(() => {
    if (todayCompleted) {
      setMessage("퀴즈가 종료되었습니다. 내일 다시 도전 해주세요!");
      setMessageStyling("default");
      completedModalOpen();
    }
  }, [todayCompleted]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (data) {
      const {answerLength} = data;
      if (e.target.value.length > answerLength) {
        e.target.value = e.target.value.slice(0, answerLength);
      }
      setAnswer(e.target.value);
    }
  };

  const goToHome = async (): Promise<void> => {
    await router.push("/");
  };

  return (
    <S.QuizFormLayout onSubmit={todayQuizAnswerSubmit}>
      <S.CheckBoxContainer>
        <HintBlocks/>
      </S.CheckBoxContainer>

      <S.QuizSolutionBox>
        <S.QuizFormTitle>
          <QuizIcon/>
          {isLoading ? (
            <SkeletonUi theme={{width: 300, height: 20, borderRadius: 4}}/>
          ) : (
            <>
              <Typography
                $variant={"body1"}
                $weight={"bold"}
                $color={"textDefault"}
              >
                {data && data.question}
              </Typography>
            </>
          )}
        </S.QuizFormTitle>
        {!isLoading && (
          <S.QuizAnswerContainer>
            {data && data.prefix && (
              <Typography
                className="prefix_word"
                $variant={"body2"}
                $color={"textPrimary"}
                $weight={"bold"}
              >
                {data.prefix}
              </Typography>
            )}
            <EmptyBlockElementGenerator/>
            {data && data.suffix && (
              <Typography
                className={"suffix_word"}
                $variant={"body2"}
                $color={"textPrimary"}
                $weight={"bold"}
              >
                {data.suffix}
              </Typography>
            )}
          </S.QuizAnswerContainer>
        )}
      </S.QuizSolutionBox>

      <S.InputContainer>
        {isLoading ? (
          <SkeletonUi theme={{width: 300, height: 20, borderRadius: 4}}/>
        ) : (
          <Input
            ref={inputRef}
            placeholder={`${data.answerLength} 자`}
            name={"quizAnswer"}
            disabled={todayCompleted}
            value={answer}
            onChange={(e) => onChangeHandler(e)}
          />
        )}
      </S.InputContainer>

      <S.HintMessageBlock>
        <Typography
          $weight={"bold"}
          $variant={"body1"}
          $color={
            messageStyling === "default"
              ? "textPrimary"
              : messageStyling === "hint"
                ? "textYellow"
                : "textRed000"
          }
        >
          {message}
        </Typography>
      </S.HintMessageBlock>

      <S.ButtonFlexBox>
        <Button variant={"secondary"} type={"button"} onClick={goToHome}>
          <Typography as={"span"} $weight={"bold"}>
            그만하기
          </Typography>
        </Button>
        <Button variant={"primary"} type={"submit"} disabled={todayCompleted}>
          <Typography as={"span"} $weight={"bold"}>
            제출하기
          </Typography>
        </Button>
      </S.ButtonFlexBox>
      <Toaster/>
    </S.QuizFormLayout>
  );
};
