import {render, screen} from "@testing-library/react";
import {CorrectAnswers} from "@components/statistics/CorrectAnswers";
import {wrapper} from "@utils/test/QueryWrapper";
import {useGetMyAnswersQuery} from "@services/queries/statisticsQuery";

jest.mock('../../../../services/queries/statisticsQuery.ts');
const mockStatisticsQuery = useGetMyAnswersQuery as jest.Mock;

describe('CorrectAnswers Component Test Case', () => {
  const mockData = {
    isLoading: false,
    data: {
      ratio: 30
    }
  }

  beforeEach(() => {
    mockStatisticsQuery.mockImplementation(jest.fn().mockReturnValue(mockData));
  })

  test("렌더링 되는지 확인", async () => {
    const component = render(<CorrectAnswers />, { wrapper: wrapper });
    expect(component).toMatchSnapshot();
  });

  test('렌더링 후 화면에 그려진 데이터가 Mock Data 와 일치하는지 확인', async () => {
    render(<CorrectAnswers />, { wrapper: wrapper });
    expect(await screen.findByText('나의 정답률')).toBeInTheDocument();

    const textElement = await screen.findByText('30 %');
    expect(textElement).toHaveTextContent(mockData.data.ratio + " %") ;
  });
})

export {}