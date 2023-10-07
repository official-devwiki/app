import styled from 'styled-components';
import {ReactElement} from 'react';

export const Block = styled.div`
  width: 20px;
  height: 20px;
  background-color: #D9D9D9;
  border-radius: 4px;
  margin-right: 6px;
`;

export const EmptyBlock = (): ReactElement => {
  return <Block />;
};
