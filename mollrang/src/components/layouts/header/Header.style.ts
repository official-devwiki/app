import styled from "styled-components";

export const BulbButton = styled.button``;
export const MenuItemsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .toggle_menu {
    position: absolute;
    flex-direction: column;
    justify-content: center;
    border: 1px solid transparent;
    top: 53px;
    width: 184px;
    height: 78px;
    right: 14px;
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    border-radius: 8px;
    justify-content: space-evenly;

    li {
      padding: 2px 16px;

      &:hover {
        cursor: pointer;
      }

      button {
        display: flex;
        width: 100%;
        justify-content: flex-start;
        align-items: center;

        svg {
          margin-right: 4px;
        }
      }
    }
  }

  .show {
    display: flex;
  }

  .hide {
    display: none;
  }

  ${({ theme }) => theme.media.tablet} {
    display: none;
  }
`;
export const HamburgerButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.media.tablet} {
    display: none;
  }
`;

export const FlexBox = styled.div`
  display: flex;
`;

export const HeaderContainer = styled.header`
  width: 100%;
  min-width: 300px;
  height: 76px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: var(--bg);
`;

export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.25em;
  height: 100%;
`;
