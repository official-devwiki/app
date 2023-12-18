import React, {ReactElement} from 'react';
import * as iconType from '@images/icons/index';
import styled from 'styled-components';

type IconType = 'check-red';

interface Props {
  type: IconType;
  className?: string;
}

const StyledComponent = (element: any) => styled(element)<Props>``;
function baseElement(props: Props): ReactElement {
  const {type} = props;
  const icon = () => {
    switch (type) {
      case 'check-red':
        return iconType.CheckRed;
    }
  };
  return React.createElement(icon(), props);
}

const Icon = StyledComponent(baseElement)

export const Icons = (props: Props): ReactElement => {
  return React.createElement(Icon, props);
};
