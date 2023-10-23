import styled from "styled-components";

/**
 * ===========================================
 * @description 기본 input Style
 * Component - Input.tsx
 * ===========================================
 */
export const Label = styled.label`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  .checkbox_label {
    height: 100%;
    display: flex;
    align-items: center;

    &:hover {
      cursor: pointer;
    }

    .pb-8 {
      padding-bottom: 8px;
    }
  }
`;

export const Input = styled.input`
  background: var(--bg_input);
  outline: none;
  border: 2px solid transparent;
  padding: 10px;
  font-family: 'Noto Sans KR', sans-serif;
  width: 100%;
  height: 40px;
  border-radius: 6px;

  &:disabled {
    background-color: rgba(122, 122, 122, 0.9);
    border-color: transparent !important;
  }

  &:focus {
    border-color: var(--primary);
  }

  &::placeholder {
    color: black;
  }

  &.default {
    border-color: var(--primary);
  }

  &.checkbox {
    display: none;
  }
`;

/**
 * ===========================================
 * @description block input Style
 * Component - BlockInput.tsx
 * ===========================================
 */
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
