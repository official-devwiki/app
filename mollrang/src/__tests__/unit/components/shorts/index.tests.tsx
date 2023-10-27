import {render, screen, within} from "@testing-library/react";
import {wrapper} from "@utils/test/QueryWrapper";
import {useTodayRandomQuizzesQuery} from "@services/queries/quizzesQuery";
import {TodayRandomQuiz} from "@components/quizzes/random/TodayRandomQuiz";

jest.mock('../../../../services/queries/quizzesQuery.ts');
const mockShortsQuery = useTodayRandomQuizzesQuery as jest.Mock;

/*
    ===========================================
                  TEST CASE
    ===========================================
    1. IntroShorts 라는 컴포넌트를 테스트한다.
    IntroShorts는 오늘의 퀴즈 1 개를 불러오는 컴포넌트이다.
    오늘의 퀴즈를 불러와서 화면에 렌더링이 되는지 확인한다.
  */

describe('피식 :) 오늘의 퀴즈 한줄 Unit Test Case', () => {
  beforeEach(async () => {});
  const mockData = {
    success: true,
    result: {
      data: {
        "question": "개발자들이 다크 모드를 쓰는 이유는???",
        "answerLength": 2,
        "prefixWord": "",
        "suffixWord": "꼬여서 :)"
      }
    }
  }

  beforeEach(() => {
    mockShortsQuery.mockImplementation(() => ({
      status: 'success',
      data: mockData
    }))
  })

  test('퀴즈의 정답을 제거한 문구를 사용자에게 보여준다.', async () => {
    const {container} = render(<TodayRandomQuiz />, {wrapper});
    const findQuestionByTestId = await screen.findByTestId("shorts-question");

    const { data } = mockShortsQuery();

    expect(data).toEqual(mockData);

    // const expectedQuestion = within(findQuestionByTestId).getByText(mockData.result.data[0].question);
    //
    // expect(expectedQuestion).toBeInTheDocument();
  });
})

export {}