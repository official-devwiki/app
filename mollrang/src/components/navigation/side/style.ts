import styled from "styled-components";
import {motion} from "framer-motion";

export const SideMenuContainer = styled(motion.aside)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
  display: flex;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const SideMenuBody = styled(motion.div)`
  background: var(--primary);
  height: 100%;
  width: 300px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 1em;
`;

export const MenuLists = styled.ul``;
export const MenuItems = styled.li`
  padding: 1em;
  display: flex;
  align-items: center;
  width: 90%;
  border-radius: 10px;
  margin: auto;
  
  .icon {
    margin-right: 0.5em;
  }
  
  
  &:hover {
    background-color: white;
    cursor: pointer;
    
    svg > path {
      fill: var(--primary);
    }
    
    svg > g > path {
      fill: var(--primary);
    }
    
    span {
      color: var(--textPrimary);
      font-weight: bold;
    }
  }
`;
