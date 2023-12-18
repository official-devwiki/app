import styled from 'styled-components';
import CheckCircle from '@images/icons/check_circle.svg';
import {CSSProperties} from "react";

interface Props {
  className?: CSSProperties
}

export const CheckCircleIcon = styled(CheckCircle)`
  g > path {
    stroke: var(--check_circle_icon);
  }

  &.active {
    g > path {
      stroke: var(--primary);
    }
  }
`;
