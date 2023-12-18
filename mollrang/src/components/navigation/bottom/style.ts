import styled from "styled-components";

export const BottomNavigationLayout = styled.nav`
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: var(--primary);
  width: 100%;
  min-width: 300px;
  height: 80px;
  border-radius: 10px 10px 0 0;
  display: none;
  z-index: 10;

  ${({theme}) => theme.media.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const NavList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const NavItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  &:hover {
    filter: brightness(90%);
    cursor: pointer;
  }
`;