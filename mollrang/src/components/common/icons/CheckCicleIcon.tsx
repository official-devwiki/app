import styled from 'styled-components';
import CheckCircle from '@images/icons/check_circle.svg';

export const CheckCircleIcon = styled(CheckCircle)`
  g > path {
    stroke: var(--check_circle_icon);

    &.active {
      stroke: var(--primary);
    }
  }
`;
