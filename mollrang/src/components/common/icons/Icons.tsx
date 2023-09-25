import {ReactElement} from 'react';
import * as iconType from '@images/icons/index';
import styled from 'styled-components';
import Guide from '@images/icons/guide.svg';



type IconType = 'home' | 'setting' | 'guide' | 'open-book' | 'chart' | 'check-red';
type IconVariant = 'white' | 'black'

interface Props {
  type: IconType;
  variant?: IconVariant;
}

export const Icons = (props: Props): ReactElement => {
  const {type, variant = 'white'} = props;


  const GuideIcon = styled(Guide)`
  path {
    fill: ${variant}; 
  }
`;

  const icon = () => {
    switch (type) {
      case 'home':
        return iconType.Home;
      case 'setting':
        return iconType.Setting;
      case 'guide':
        return GuideIcon;
      case 'open-book':
        return iconType.OpenBook;
      case 'chart':
        return iconType.Chart;
      case 'check-red':
        return iconType.CheckRed;
    }
  };

  const Icon = styled(icon())``;

  return (
    <Icon />
  );
};
