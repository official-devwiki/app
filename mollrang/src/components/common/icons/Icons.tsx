import React, {ReactElement} from 'react';
import * as iconType from '@images/icons/index';
import styled from 'styled-components';

type IconType = 'home' | 'setting' | 'guide' | 'open-book' | 'chart' | 'check-red' | 'exit';

interface Props {
  type: IconType;
  className?: string;
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
      case 'exit':
        return iconType.Exit;
    }
  };
  return React.createElement(icon(), props);
}

const Icon = StyledComponent(baseElement)

export const Icons = (props: Props): ReactElement => {
  return React.createElement(Icon, props);
};
