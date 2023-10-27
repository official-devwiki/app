import { render, screen } from "@testing-library/react";
import { CorrectAnswers } from "@components/statistics/CorrectAnswers";
import { wrapper } from "@utils/test/QueryWrapper";
import {
  useGetMyAnswersQuery,
  useContinuousCorrectQuery,
} from "@services/queries/statisticsQuery";
import { ConsecutiveAnswers } from "@components/statistics/ConsecutiveAnswers";

jest.mock("../../../../services/queries/statisticsQuery.ts");
const mockStatisticsQuery = useGetMyAnswersQuery as jest.Mock;

describe("CorrectAnswers Component TestCase - 나의 정답률 구하기", () => {
  const mockData = {
    isLoading: false,
    data: {
      ratio: 30,
    },
  };

  beforeEach(() => {
    mockStatisticsQuery.mockImplementation(jest.fn().mockReturnValue(mockData));
  });

  test("렌더링 되는지 확인", async () => {
    const component = render(<CorrectAnswers />, { wrapper: wrapper });
    expect(component).toMatchSnapshot();
  });

  test("렌더링 후 화면에 그려진 데이터가 Mock Data 와 일치하는지 확인", async () => {
    render(<CorrectAnswers />, { wrapper: wrapper });
    expect(await screen.findByText("나의 정답률")).toBeInTheDocument();

    const textElement = await screen.findByText("30 %");
    expect(textElement).toHaveTextContent(mockData.data.ratio + " %");
  });
});

jest.mock("../../../../services/queries/statisticsQuery.ts");
const mockContinousQuery = useContinuousCorrectQuery as jest.Mock;

describe("ConsecutiveAnswers Component TestCase - 연속 정답 횟수 구하기", () => {
  const mockData = {
    isLoading: false,
    data: {
      day: 10,
    },
  };
  beforeEach(() => {
    mockContinousQuery.mockImplementation(jest.fn().mockReturnValue(mockData));
  });

  test("렌더링 후 화면에 그려진 데이터가 Mock Data 와 일치하는지 확인", async () => {
    render(<ConsecutiveAnswers />, { wrapper: wrapper });
    expect(await screen.findByText("연속 정답 횟수")).toBeInTheDocument();

    const textElement = await screen.findByText("10 일");
    expect(textElement).toHaveTextContent(mockData.data.day + " 일");
  });
});

export {};
