import styled from "styled-components";

export const HomeLayout = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  align-content: space-between;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    min-height: 1000px;
  }
`;

export const HomeBox = styled.div`
  max-width: 900px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
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
    top: 24px;
  }
  button {
    position: relative;
    z-index: 2;
    margin: auto;
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
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;

    .answers-container {
      border-top: 1px solid var(--correct_border);
      border-bottom: 1px solid var(--correct_border);
      margin-top: 1em;
    }
  }
`;
