import styled from "styled-components";
import {ReactElement} from "react";

const MessageContainer = styled.div``;

interface Props {
  messages: string[];
}

export const MessageBox = (): ReactElement => {
  return (
    <MessageContainer>
      <div>메세지 박스</div>
    </MessageContainer>
  )
}