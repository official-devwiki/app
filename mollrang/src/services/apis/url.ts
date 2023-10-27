export const Domain = {
  Quiz: "quizzes",
  Statistics: "statistic",
} as const;

export const Url = {
  Shorts: {
    findOneShorts: "/shorts",
  },
  Statistics: {
    myAnswerCorrectRatio: "corrected", // 나의 정답률
    quizChanllengeCount: "distibution", // 도전 분포
    chanllengeCount: "total", // 전체 도전 횟수
    continuousCount: "continuous", // 연속 정답 횟수
    mostContinuousCount: "most", // 최다 연속 정답 횟수
  },
} as const;
