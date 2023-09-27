import {render, screen, within} from "@testing-library/react";
import {IntroShorts} from "@components/intro";
import {wrapper} from "@utils/test/QueryWrapper";
import {useTodayShortsQuery} from "@services/queries/shortsQuery";
import {MockData} from "@tests/unit/components/shorts/index.tests";

jest.mock('../../../../services/queries/shortsQuery.ts');
const mockShortsQuery = useTodayShortsQuery;


describe('피식 :) 오늘의 퀴즈 한줄 E2E Test Case', () => {
  const mockData: MockData = {
    question: '개발자가 다크 모드를 좋아하는 이유는?',
    answer: '밝으면 버그가 꼬여서',
    solution: '버그'
  }

  beforeEach(() => {
    mockShortsQuery.mockImplementation(() => ({
      status: 'success',
      data: [mockData]
    }));
  })

  test('오늘의 퀴즈를 불러온다.', async () => {
    render(<IntroShorts />, {wrapper});
  });

  test ('오늘의 퀴즈가 화면에 보여진다.', async () => {
    render(<IntroShorts />, {wrapper});

    const findQuestionByTestId = await screen.findByTestId("shorts-question");
    const findAnswerByTestId = await screen.findByTestId(
      "shorts-answer",
    );
    const { data } = mockShortsQuery();

    const expectedQuestion = within(findQuestionByTestId).getByText(mockData.question);

    const removeSolution = jest.fn(() => data[0].answer.replace(mockData.solution, ''));

    expect(expectedQuestion).toBeInTheDocument();

    removeSolution(); // 함수 실행되는지 확인
    expect(removeSolution).toHaveBeenCalled();

    const expectedAnswer = within(findAnswerByTestId).getByText(removeSolution());
    expect(expectedAnswer).toBeInTheDocument();
  })
});

export {}