import styled from "styled-components";
import Guide from "@images/icons/guide.svg";

type IconVariant = 'white' | 'black'

interface Props {
  $variant?: IconVariant;
}

export const GuideIcon = styled(Guide)<Props>`
  
  path {
    fill: ${({$variant = 'white'}) => $variant}; 
  }
`;