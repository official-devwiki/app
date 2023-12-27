export type QueryKeyType = {
  Quizzes: Record<string, string>,
  Statistics: Record<string, string>,
  Users: Record<string, string>
}

export const QueryKeys = {
  Quizzes: {
    submitAnswer: "SUBMIT_ANSWER_KEY",
    getTodayQuizzes: "get_today_quiz",
    getRandomQuizzes: "get_random_quiz"
  },
  Statistics: {
    getMyAnswers: "get_my_answers", // 나의 정답
    getChallengeDistribution: "get_challenge_distribution", // 도전 분포
    getChallengeCount: "get_challenge_count", // 전체 도전
    getContinuousCorrectCount: "get_continuous_correct_count", // 연속 정답
    getMostContinuousCorrectCount: "get_most_continuous_correct_count", // 최다 연속 정답
  },
  Users: {
    getAttendance: "get_attendance",
  }
} as const;
