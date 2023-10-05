import {ReactElement} from "react";
import styled from "styled-components";
import {Typography} from "@components/common/typography/Typography";

const mockData = [
  { _id: '1', question: '문제 1', answer: '정답 1', prefix: '앞에', suffix: '뒤에', createdAt: 20230101 },
  { _id: '2', question: '문제 2', answer: '정답 2', prefix: '앞에', suffix: '뒤에', createdAt: 20230102 },
  { _id: '3', question: '문제 3', answer: '정답 3', prefix: '', suffix: '', createdAt: 20230103 },
  { _id: '4', question: '문제 4', answer: '정답 4', prefix: '', suffix: '뒤에', createdAt: 20230104 },
  { _id: '5', question: '문제 5', answer: '정답 5', prefix: '앞에', suffix: '뒤에', createdAt: 20230105 },
  { _id: '6', question: '문제 6', answer: '정답 6', prefix: '앞에', suffix: '', createdAt: 20230106 },
]

const QuizListsLayout = styled.article`
`;

const QuizTable = styled.table`
  border: 1px solid gray;
`;
const TableHeader = styled.thead`
  border: 1px solid gray;
  tr th { padding: 0.5em; }
`;
const TableBody = styled.tbody`
  border: 1px solid gray;
  
  tr td {
    padding: 0.5em;
  }
`;
//TODO: 페이지네이션
export const QuizLists = (): ReactElement => {
  return (
    <QuizListsLayout>
      <Typography className={'mb-2'} variant={'body1'} weight={'bold'}>퀴즈</Typography>
      <QuizTable>
        <TableHeader>
        <tr>
          <th>문제</th>
          <th>정답</th>
          <th>작성일</th>
          <th>비고</th>
        </tr>
        </TableHeader>
        <TableBody>
        {mockData.map(v => {
          return (
            <tr key={v._id}>
              <td>{v.question}</td>
              <td className={'flex'}>
                <div>{v.prefix}</div>
                <div>{v.answer}</div>
                <div>{v.suffix}</div>
              </td>
              <td>{v.createdAt}</td>
              <td>
                <button>수정</button>
                <button>삭제</button>
              </td>
            </tr>
          )
        })}
        </TableBody>

      </QuizTable>
    </QuizListsLayout>
  )
}