import styled from "styled-components";

export const RandomQuizLayout = styled.div`
  width: 100%;
  margin-top: 2em;
`;
export const RandomQuizContainer = styled.div`
  width: 100%;
  margin-top: 1em;
`;
export const RandomQuizTitleBlock = styled.div`
  background-color: var(--blockquote);
  color: var(--major-text);
  width: 100%;
  min-height: 40px;
  padding: 0.4em 0.8em;
  border-radius: 4px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const AnswerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 1em;

  .prefix_word {
    margin-right: 0.3em;
  }

  .suffix_word {
    margin-left: 0.3em;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;

  .shorts-title {
    margin-right: 8px;
  }
`;
