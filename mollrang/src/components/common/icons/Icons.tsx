import {ReactElement} from 'react';
import * as iconType from '@images/icons/index';
import Image from 'next/image';
import styled from 'styled-components';
import icon from '@images/icons/setting.svg';


type IconType = 'home' | 'setting' | 'guide' | 'open-book' | 'chart';

interface Props {
  type: IconType;
}

export const Icons = (props: Props): ReactElement => {
  const {type} = props;
  const icon = () => {
    switch (type) {
      case 'home':
        return iconType.Home;
      case 'setting':
        return iconType.Setting;
      case 'guide':
        return iconType.GuideBook;
      case 'open-book':
        return iconType.OpenBook;
      case 'chart':
        return iconType.Chart;
    }
  };

  const IconSpan = styled(icon())`
    
  `;

  return (
    <IconSpan />
  );
};
