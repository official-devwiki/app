import styled from "styled-components";

export const QuizCompletedLayout = styled.div`
  padding: 0 1em 1em;
`;

export const QuizLabelGroup = styled.div`
  margin-bottom: 1em;

  .count {
    color: ${({theme}) => theme.colors.primary};
    font-size: 1.3em;
    font-weight: bold;
  }

  .completed-description:nth-child(1) {
    margin-top: 0;
  }

  .completed-description {
    margin: 0.625em auto;
  }
`;
export const QuizButtonGroup = styled.div`
  button {
    width: 100%
  }

  button:nth-child(1) {
    margin-bottom: 1em;
  }
`;
