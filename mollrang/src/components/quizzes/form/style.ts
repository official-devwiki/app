import styled from "styled-components";

export const QuizFormLayout = styled.form`
  width: 100%;
  min-height: 500px;
`;

export const QuizSolutionBox = styled.div`
  margin-top: 20px;
  padding: 20px;
  border: 1px solid var(--textYellow);
  border-radius: 4px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);

  label {
    margin: 1em 0;

    input::placeholder {
      color: #a4a4a4;
    }
  }
`;
export const ButtonFlexBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  column-gap: 4em;
  margin-top: 50px;

  button:nth-child(1) {
    margin-right: 1em;
  }

  ${({ theme }) => theme.media.tablet} {
    justify-content: space-between;
    column-gap: 0;
  }
`;

export const CheckBoxContainer = styled.ul`
  margin-top: 20px;
  display: flex;

  li {
    margin-right: 0.2em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const QuizAnswerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const InputContainer = styled.div`
  margin: 3em auto;
`;

export const HintMessageBlock = styled.div`
  width: 100%;
  text-align: center;
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

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    margin: 0 4px;
  }
`;