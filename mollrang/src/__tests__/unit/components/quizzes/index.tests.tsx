import {render, screen} from "@testing-library/react";
import {wrapper} from "@utils/test/QueryWrapper";
import {useTodayRandomQuizzesQuery} from "@services/queries/quizzesQuery";
import {TodayRandomQuiz} from "@components/quizzes/random/TodayRandomQuiz";

// 모킹화
jest.mock('../../../../services/queries/quizzesQuery.ts');
const mockShortsQuery = useTodayRandomQuizzesQuery as jest.Mock;

const mockData = {
  isLoading: false,
  quiz: {
    "question": "개발자들이 다크 모드를 쓰는 이유는???",
    "answerLength": 2,
    "prefixWord": "",
    "suffixWord": "꼬여서 :)"
  }
}

describe('TodayRandomQuiz Test Case', () => {
  beforeEach(() => {
    mockShortsQuery.mockImplementation(jest.fn().mockReturnValue(mockData));
  }); // beforeEach
  test('rendering test', async () => {
    const component = render(<TodayRandomQuiz />, { wrapper: wrapper });
    expect(component).toMatchSnapshot();
  });

  test('렌더링 후 화면에 그려진 데이터가 Mock Data 와 일치하는지 확인', async () => {
    render(<TodayRandomQuiz />, { wrapper: wrapper });

    expect(await screen.findByTestId("random-quiz-question")).toBeInTheDocument();
    const findQuestionByTestId = await screen.findByTestId("random-quiz-question");
    expect(findQuestionByTestId).toBeInTheDocument();
    expect(findQuestionByTestId.innerHTML).toBe(mockData.quiz.question);
  });
}); // describe

export {}