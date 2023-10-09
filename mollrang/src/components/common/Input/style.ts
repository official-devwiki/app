import styled from "styled-components";

export const BlockInputElement = styled.input`
  outline: none;
  width: 50px;
  height: 39px;
  border: 1px solid #DFDFDF;
  border-radius: 4px;
  background-color: #fdfdfd;

  &:focus {
    background-color: #fff;
    border-color: #00C7AE;
  }

  &:disabled {
    background-color: #d3d3d3;
  }

  &.success {
    &:disabled {
      border-color: #00C7AE;
      background-color: #00C7AE;
    }
  }

  &.hint {
    &:disabled {
      border-color: #FFC700;
      background-color: #FFC700;
    }
  }
`;
