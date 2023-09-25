import styled from 'styled-components';

export const IntroContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1.5em 0 2.25em 0;
  max-width: 426px;
  margin: auto;
`;

export const IntroTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-width: 125px;
`;

export const IntroTextIconWrapper1 = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  transform: rotate(-10deg);
  gap: 0;
`;

export const IntroTextIconWrapper2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  transform: rotate(10deg);
  gap: 0;
`;

export const IntroTextIcon2 = styled.div`
  transform: rotate(40deg);
`;
