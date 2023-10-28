export const Domain = {
  Quiz: "quizzes",
  Statistics: "statistic",
  Users: "users"
} as const;

export const Url = {
  Quizzes: {
    RandomQuiz: "random",
  },
  Statistics: {
    myAnswerCorrectRatio: "corrected", // 나의 정답률
    quizChallengeCount: "distribution", // 도전 분포
    challengeCount: "total", // 전체 도전 횟수
    continuousCount: "continuous", // 연속 정답 횟수
    mostContinuousCount: "most", // 최다 연속 정답 횟수
  },
  Users: {
    attendance: "attendance", // 출석
  }
} as const;
