import Image from 'next/image';
import {ReactElement} from 'react';
import Dark from '@images/logo_dark.svg';
import Light from '@images/logo_light.svg';
import styled from "styled-components";

interface Props {
  mode: boolean;
}

export const Logo = (props: Props): ReactElement => {
  const {mode} = props;
  const url =
    mode ? Dark : Light;

  const LogoIcon = styled(url)`
    width: 49px;
    height: 49px;
  `;

  return <LogoIcon />;
};
