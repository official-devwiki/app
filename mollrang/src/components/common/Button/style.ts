import styled from "styled-components";

export const Button = styled.button`
  width: 15em;
  height: 3.5em;
  padding: 0.40625rem 0;
  border-radius: 4px;
  border: 1px solid transparent;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(95%);
  }

  &.primary {
    background-color: var(--primary);

    span {
      color: var(--white);
    }
  }

  &.secondary {
    border-color: #ededed;
    background-color: #F0F0F0;

    span {
      color: #A4A4A4;
    }
  }

  &.primary-rounded {
    background-color: var(--primary);
    border-radius: 50px;

    span {
      color: var(--white);
    }
  }

  &.icon {
    background-color: transparent;
    width: fit-content;
    height: auto;
    box-shadow: inherit;
    padding: 0;
  }
`;