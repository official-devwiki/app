import styled from "styled-components";

export const IntegratedStatisticsLayout = styled.div`
  width: 100%;
  padding: 0 1.25em;
  height: auto;
  max-height: 500px;
  overflow-y: auto;

  ${({theme}) => theme.scroll.theme()}
`;

export const StatisticsItemContainer = styled.div`
  border-radius: 10px;
  width: 100%;
  height: auto;
  margin: 1em 0;
`;

export const StatisticsItemLists = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  height: 70%;
`;

export const StatisticsItems = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 6px 0;

  div {
    display: flex;

    .word {
      margin-left: 0.5em;
      margin-right: 0.5em;
    }
  }
`;
export const StatisticsSection1 = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 86px;
`;
export const StatisticsSection2 = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2.25em auto;

  .answer_ratio:nth-child(1) {
    font-size: 1.4em;
  }

  .answer_ratio:nth-child(2) {
    font-size: 1.8em;
  }
`;
export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  margin: 1em 0;

  .mr-10 {
    margin-right: 10px;
  }
`;
