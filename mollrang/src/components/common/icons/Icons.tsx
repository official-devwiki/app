import React, {ReactElement} from 'react';
import * as iconType from '@images/icons/index';
import styled from 'styled-components';

type IconType = 'home' | 'setting' | 'guide' | 'open-book' | 'chart' | 'check-red';

interface Props {
  type: IconType;
}

const StyledComponent = (element: any) => styled(element)<Props>``;
function baseElement(props: Props): ReactElement {
  const {type} = props;
  const icon = () => {
    switch (type) {
      case 'home':
        return iconType.Home;
      case 'setting':
        return iconType.Setting;
      case 'open-book':
        return iconType.OpenBook;
      case 'chart':
        return iconType.Chart;
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
