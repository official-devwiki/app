import { render, screen } from "@testing-library/react";
import { CorrectedAnswers } from "@components/statistics/CorrectedAnswers";
import { wrapper } from "@utils/test/QueryWrapper";
import {
  useGetMyAnswersQuery,
  useContinuousCorrectQuery, useMostContinuousCountQuery, useMyTotalChallengeQuery, useGetMyDistributionQuery,
} from "@services/queries/statisticsQuery";
import { ContinuousAnswers } from "@components/statistics/ContinuousAnswers";
import {MostCorrectedAnswers} from "@components/statistics/MostCorrectedAnswers";
import {TotalChallenge} from "@components/statistics/TotalChallenge";
import {DistributionRatio} from "@components/statistics/DistributionRatio";

jest.mock("../../../../services/queries/statisticsQuery.ts");
const mockStatisticsQuery = useGetMyAnswersQuery as jest.Mock;
const mockDistributionQuery = useGetMyDistributionQuery as jest.Mock;
const mockMostContinuousQuery = useMostContinuousCountQuery as jest.Mock;
const mockMyTotalChallengeQuery = useMyTotalChallengeQuery as jest.Mock;
const mockContinuousQuery = useContinuousCorrectQuery as jest.Mock;

/**
 * @description 정답률 조회 Test Case
 */
describe("CorrectedAnswers Component TestCase - 나의 정답률 구하기", () => {
  const mockData = {
    isLoading: false,
    data: {
      corrected: 30,
    },
  };

  beforeEach(() => {
    mockStatisticsQuery.mockImplementation(jest.fn().mockReturnValue(mockData));
  });

  
  test("렌더링 후 화면에 그려진 데이터가 Mock Data 와 일치하는지 확인", async () => {
    render(<CorrectedAnswers />, { wrapper: wrapper });
    expect(await screen.findByText("나의 정답률")).toBeInTheDocument();
    const textElement = await screen.findByText("30 %");
    expect(textElement).toHaveTextContent(mockData.data.corrected + " %");
  });
});

/**
 * @description 연속 정답 횟수 조회 Test Case
 */
describe("ContinuousAnswers Component TestCase - 연속 정답 횟수 구하기", () => {
  const mockData = {
    isLoading: false,
    data: {
      continuous: 10,
    },
  };
  beforeEach(() => {
    mockContinuousQuery.mockImplementation(jest.fn().mockReturnValue(mockData));
  });

  test("렌더링 후 화면에 그려진 데이터가 Mock Data 와 일치하는지 확인", async () => {
    render(<ContinuousAnswers />, { wrapper: wrapper });
    expect(await screen.findByText("연속 정답 횟수")).toBeInTheDocument();
  });
});

/**
 * @description 전체 도전 횟수 조회 Test Case
 */
describe("TotalChallenge Component TestCase - 전체 도전 횟수 구하기", () => {
  const mockData = {
    isLoading: false,
    data: {
      total: 10,
    },
  };
  beforeEach(() => {
    mockMyTotalChallengeQuery.mockImplementation(jest.fn().mockReturnValue(mockData));
  });

  test("렌더링 후 화면에 그려진 데이터가 Mock Data 와 일치하는지 확인", async () => {
    render(<TotalChallenge />, { wrapper: wrapper });
  });
});

/**
 * @description 최다 연속 정답 횟수 조회 Test Case
 */
describe("MostCorrectedAnswers Component TestCase - 최다 연속 정답 횟수 구하기", () => {
  const mockData = {
    isLoading: false,
    data: {
      most: 10,
    },
  };
  beforeEach(() => {
    mockMostContinuousQuery.mockImplementation(jest.fn().mockReturnValue(mockData));
  });

  test("렌더링 후 화면에 그려진 데이터가 Mock Data 와 일치하는지 확인", async () => {
    render(<MostCorrectedAnswers />, { wrapper: wrapper });
  });
});

/**
 * @description 도전 분포 조회 Test Case
 */
describe("DistributionRatio Component TestCase - 도전 분포 비율 구하기", () => {
  const mockData = {
    isLoading: false,
    data: {
      challenge1: 10,
      challenge2: 8,
      challenge3: 9,
      challenge4: 16,
      challenge5: 11,
    },
  };
  beforeEach(() => {
    mockDistributionQuery.mockImplementation(jest.fn().mockReturnValue(mockData));
  });

  test("렌더링 후 화면에 그려진 데이터가 Mock Data 와 일치하는지 확인", async () => {
    render(<DistributionRatio />, { wrapper: wrapper });
  });
});
export {};
