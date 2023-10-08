import styled from 'styled-components';

export const QuizFormLayout = styled.form`
  width: 100%;
`;

export const QuizSolutionBox = styled.div`
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #FFC700;
  border-radius: 4px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);

  label {
    margin: 1em 0;

    input::placeholder {
      color: #A4A4A4;
    }
  }
`;


export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const InputContainer = styled.div`
  margin: 3em auto;
`;

export const InputLayout = styled.div`
  display: flex;
  justify-content: center;
  row-gap: 2em;
  column-gap: 2em;
  width: 100%;
  height: 100%;
  margin-top: 1em;
`;

export const QuizFormTitle = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 8px;
  }
`;
