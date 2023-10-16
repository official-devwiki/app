import React, {ReactElement} from 'react';
import * as iconType from '@images/icons/index';
import styled from 'styled-components';
import Guide from '@images/icons/guide.svg';

type IconType = 'home' | 'setting' | 'guide' | 'open-book' | 'chart' | 'check-red';
type IconVariant = 'white' | 'black'

interface Props {
  type: IconType;
  variant?: IconVariant;
}

const GuideIcon = (variant: IconVariant) => styled(Guide)`
  path {
    fill: ${variant}; 
  }
`;
const StyledComponent = (element: any) => styled(element)<Props>``;
function baseElement(props: Props) {
  const {type, variant = 'white'} = props;
  const icon = () => {
    switch (type) {
      case 'home':
        return iconType.Home;
      case 'setting':
        return iconType.Setting;
      case 'guide':
        return GuideIcon(variant);
      case 'open-book':
        return iconType.OpenBook;
      case 'chart':
        return iconType.Chart;
      case 'check-red':
        return iconType.CheckRed;
    }
  };
  return (icon());
}

const styledElement = StyledComponent(baseElement);

export const Icons = (props: Props): ReactElement => {
  // const Icon = styled(baseElement(props))``;
  const Icon = StyledComponent(baseElement(props))

  return (
    <Icon />
  );
  // return React.createElement(styledElement, props);
};
