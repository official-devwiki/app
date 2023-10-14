import {ReactElement} from "react";
import styled from "styled-components";
import {Typography} from "@components/common/typography/Typography";

interface ResponseData<T> {
  success: boolean;
  result: {
    data: T
  }
}

interface QuizLists {
  question: string;
  answer: string;
  prefix: string;
  suffix: string;
  id: number;
  askedYn: string;
}

const mockData: ResponseData<QuizLists[]> = {
  success: true,
  result: {
    data: [
      {question: '문제 1', answer: '정답 1', prefix: '앞 단어 1', suffix: '뒷 단어 1', id: 1, askedYn: 'N'},
      {question: '문제 2', answer: '정답 2', prefix: '앞 단어 2', suffix: '뒷 단어 2', id: 2, askedYn: 'N'},
      {question: '문제 3', answer: '정답 3', prefix: '앞 단어 3', suffix: '뒷 단어 3', id: 3, askedYn: 'N'},
      {question: '문제 4', answer: '정답 4', prefix: '앞 단어 4', suffix: '뒷 단어 4', id: 4, askedYn: 'N'},
      {question: '문제 5', answer: '정답 5', prefix: '앞 단어 5', suffix: '뒷 단어 5', id: 5, askedYn: 'N'},
    ]
  }
}

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
          <th>비고</th>
        </tr>
        </TableHeader>
        <TableBody>
        {mockData.result.data.map(v => {
          return (
            <tr key={v.id}>
              <td>{v.question}</td>
              <td className={'flex'}>
                <div>{v.prefix}</div>
                <div>{v.answer}</div>
                <div>{v.suffix}</div>
              </td>
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