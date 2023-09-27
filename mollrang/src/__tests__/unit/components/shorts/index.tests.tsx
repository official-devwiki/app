
export interface MockData {
  question: string;
  answer: string;
  solution: string;
}



describe('피식 :) 오늘의 퀴즈 한줄 Unit Test Case', () => {

  const mockData: MockData = {
    question: '개발자가 다크 모드를 좋아하는 이유는?',
    answer: '밝으면 버그가 꼬여서',
    solution: '버그'
  }

  test('퀴즈의 정답을 제거한 문구를 사용자에게 보여준다.', async () => {
    const solution = '밝으면 가 꼬여서';

    const removeSolution = jest.fn(() => {
      const {answer, solution} = mockData;
      return answer.replace(solution, '');
    }).mockName('removeSolution');

    removeSolution();
    expect(removeSolution).toHaveBeenCalled()

    expect(removeSolution()).toBe(solution);
  })
})

export {}