import {ReactElement} from "react";
import styled from "styled-components";
import classNames from "classnames";

export const BlockElement = styled.div`
  width: 20px;
  height: 16px;
  border: 1px solid #DFDFDF;
  border-radius: 4px;
  background-color: #fdfdfd;

  &.success {
    border-color: var(--primary);
    background-color: var(--primary);
  }

  &.hint {
    border-color: var(--secondary);
    background-color: var(--secondary);
  }

  &.wrong {
    border-color: var(--warning);
    background-color: var(--warning);
  }
`;

interface Props {
  className?: string;
}

export const HintBlock = (props: Props): ReactElement => {
  const {className} = props;
  return <BlockElement className={classNames(className)}/>
}
