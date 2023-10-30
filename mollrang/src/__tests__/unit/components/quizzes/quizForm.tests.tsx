import { QuizForm } from "@components/quizzes/form/QuizForm";
import { Quiz } from "@interfaces/quizzes";
import { useTodayQuizzesQuery } from "@services/queries/quizzesQuery";
import { render, screen, act } from "@testing-library/react";
import { PropsWithChildren, ReactElement } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@libs/Tanstack";
import { Provider } from "react-redux";
import { store } from "@store/index";
import { useRouter } from "next/router";
import { ThemeProvider } from "styled-components";
import { theme } from "@styles/theme";
import userEvent from "@testing-library/user-event";
import toast from "@components/common/toast/ToastHandler";

/**
 * @description 퀴즈 폼 테스트
 * 테스트 케이스
 * @todo 퀴즈 폼이 렌더링 되는가?
 * @todo 퀴즈 폼에 제목이 렌더링 되는가?
 * @todo 정답이 입력되는가?
 * @todo 정답이 퀴즈의 정답 길이 만큼만 입력이 되는가?
 * @todo 정답이 입력되지 않으면 에러가 발생하는가?
 * @todo 정답의 길이만큼 입력되지 않으면 에러가 발생하는가?
 * @todo 정답 입력이 5번을 초과하는가?
 * @todo 정답 입력이 5번이 초과되거나 정답을 맞췄을 경우 제출 버튼이 disabled 처리가 되는가?
 * @todo 정답을 맞췄을 경우 통계 모달이 보여지는가?
 */
// query mocking
jest.mock("../../../../services/queries/quizzesQuery.ts");
const mockQuizQuery = useTodayQuizzesQuery as jest.Mock;

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));
// Toast mocking
jest.mock('../../../../components/common/toast/ToastHandler.tsx');
const toastMock = toast;

/**
 * @description form 에 사용된 svg icon mocking
 */
jest.mock("../../../../components/common/icons/HamburgerIcon.tsx");
jest.mock("../../../../components/common/icons/CheckCircleIcon.tsx");
jest.mock("../../../../components/common/icons/QuizIcon.tsx");

const ProviderWrapper = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
};

describe("QuizForm Component Test", () => {
  const userAction = userEvent.setup();
  const quizData: Quiz = {
    question: "개발자들이 다크 모드를 쓰는 이유는???",
    answerLength: 2,
    prefixWord: "",
    suffixWord: "꼬여서 :)",
  };

  let mockData = {
    isLoading: false,
    data: quizData,
  };

  beforeEach(() => {
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      query: {},
      push: pushMock,
    });

    mockQuizQuery.mockImplementation(jest.fn().mockReturnValue(mockData));
  });

  test("퀴즈가 렌더링이 되는가?", async () => {
    const component = render(<QuizForm />, { wrapper: ProviderWrapper });
    expect(component).toMatchSnapshot();

    const expectedQuestion = "개발자들이 다크 모드를 쓰는 이유는???";
    const findQuestion = component.getByText(expectedQuestion).innerHTML;
    expect(findQuestion).toEqual(expectedQuestion);
  });

  test("Input 에 정답이 입력이 되는가", async () => {
    render(<QuizForm />, { wrapper: ProviderWrapper });

    const input = screen.getByRole("textbox") as HTMLInputElement;
    expect(input).toBeInTheDocument(); // input 이 렌더링 되는가?

    const expectedAnswer = "정답";

    await act(async () => {
      await userEvent.clear(input);
      await userAction.click(input); // input 클릭
      await userAction.type(input, expectedAnswer); // input 에 정답 입력
      await expect(input).toHaveValue(expectedAnswer); // input 에 정답이 입력되는가?
    });
  });

  test("Input의 입력 길이가 정답 길이만큼만 입력되는가?", async () => {
    render(<QuizForm />, { wrapper: ProviderWrapper });
    const maxLength = mockData.data.answerLength;
    const input = screen.getByRole("textbox") as HTMLInputElement;

    const expectedAnswer = "다섯글자야";
    await act(async () => {
      await userEvent.clear(input);
      await userAction.click(input);
      // 3 글자를 입력 (maxLength는 2)
      await userAction.type(input, expectedAnswer);
      // 입력된 길이
      const size = input.value.length;
      await expect(size).toEqual(maxLength);
    });
  });

  test("정답을 입력하지 않고 제출을 했을 경우 에러가 발생되는가?", async () => {
    render(<QuizForm />, { wrapper: ProviderWrapper });
    const input = screen.getByRole("textbox") as HTMLInputElement;
    const submit = screen.getByRole("button", {name: '제출하기'}) as HTMLButtonElement;

    await act(async () => {
      await userEvent.clear(input);
      await userAction.click(input);
      await userAction.click(submit);

      const errorMsg = "정답을 입력해 주세요.";
      expect(toastMock.message).toBeCalledWith(errorMsg, 'error');
    });
  });

  test("정답의 길이만큼 입력하지 않고 제출을 했을 경우 에러가 발생되는가?", async () => {
    render(<QuizForm />, { wrapper: ProviderWrapper });
    const input = screen.getByRole("textbox") as HTMLInputElement;
    const submit = screen.getByRole("button", {name: '제출하기'}) as HTMLButtonElement;

    const expectedAnswer = "일";

    await act(async () => {
      await userEvent.clear(input);
      await userAction.click(input);

      await userAction.type(input, expectedAnswer);
      await userAction.click(submit);

      const errorMsg = "글자 수를 확인해 주세요.";
      expect(toastMock.message).toBeCalledWith(errorMsg, 'error');
    });
  });

  test("정답 입력 기회는 최대 5번까지만 주어지는가?", async () => {
    render(<QuizForm />, { wrapper: ProviderWrapper });

    const tryCount = 5;
    const expectedAnswer = '정답';

    let currentCount = 0;

    const input = screen.getByRole("textbox") as HTMLInputElement;
    const submit = screen.getByRole("button", {name: '제출하기'}) as HTMLButtonElement;

    await userEvent.clear(input);
    await userAction.click(input);

    await userAction.type(input, expectedAnswer);
    await userAction.click(submit);
    currentCount++;

    expect(currentCount).toEqual(tryCount);
  });

  test("정답 입력이 5번이 초과되거나 정답을 맞췄을 경우 제출 버튼이 disabled 처리가 되는가?", async () => {
    render(<QuizForm />, { wrapper: ProviderWrapper });
    expect(false).toEqual(true); // 임의 Red Test
  });

  test("정답을 맞췄을 경우 통계 모달이 보여지는가?", async () => {
    render(<QuizForm />, { wrapper: ProviderWrapper });
    expect(false).toEqual(true); // 임의 Red Test
  });
});
