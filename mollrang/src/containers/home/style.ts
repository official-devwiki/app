import styled from "styled-components";

export const HomeLayout = styled.div`
  width: 100%;
  display: grid;
  align-content: space-between;
  min-height: 100vh;
  height: auto;

  ${({ theme }) => theme.media.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const HomeBox = styled.div`
  max-width: 900px;
  width: 100%;
  //height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em auto auto auto;
  padding: 0 1.5em;
`;

export const PlayQuizBox = styled.div`
  width: 100%;

  svg {
    margin-right: 0.5em;
  }

  hr {
    background: var(--bg_line);
    height: 2px;
    border: 0;
    margin: 0;
    z-index: 0;
    position: relative;
    top: 25px;
  }

  button {
    position: relative;
    z-index: 2;
    margin: auto;
    top: 2px;
  }
`;

export const SubItemsLayout = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;

  .answers-container {
    width: 100%;
    margin: 3em auto;
    padding: 18px 0;

    .correct_answer_wrapper {
      margin-bottom: 1em;
    }
  }

  ${({ theme }) => theme.media.tablet} {
    flex-direction: column;

    .answers-container {
      border-top: 1px solid var(--correct_border);
      border-bottom: 1px solid var(--correct_border);
      margin-top: 1em;
    }
  }
`;
