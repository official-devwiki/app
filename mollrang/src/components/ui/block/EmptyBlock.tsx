import styled from "styled-components";
import { ReactElement } from "react";

export const Block = styled.div`
  width: 20px;
  height: 20px;
  background-color: #d9d9d9;
  border-radius: 4px;
  margin: 0 1px;
`;

export const EmptyBlock = (): ReactElement => {
  return <Block />;
};
