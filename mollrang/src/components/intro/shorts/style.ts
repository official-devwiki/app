import styled from 'styled-components';

export const ShortsLayout = styled.div`
  width: 100%;
`;
export const ShortsBlockContainer = styled.div`
  width: 100%;
  margin-top: 1em;
`;
export const ShortsBlock = styled.div`
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
`;

export const EmptyBox = styled.div`
  background-color: #D9D9D9;
  border-radius: 4px;
  width: 38px;
  height: 20px;
  margin-right: 8px;
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;

  .shorts-title {
    margin-right: 8px;
  }
`;
