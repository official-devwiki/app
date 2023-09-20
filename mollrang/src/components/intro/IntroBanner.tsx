import {ReactElement} from 'react';
import * as S from './style';
import Image from 'next/image';
import {NoteIcon} from '@components/common/icons/NoteIcon';
import {Typography} from '@components/common/Typography';
import {QuestionIcon} from '@components/common/icons/QuestionIcon';
import BannerSvg from '@images/banner.svg';
import styled from "styled-components";

export const IntroBanner = (): ReactElement => {

  const Banner = styled(BannerSvg)`width: 220px; height: 190px`;

  return (
    <S.IntroContainer>
      <div>
        <Banner
        />
      </div>
      <S.IntroTextBox>
        <div>
          <S.IntroTextIconWrapper1>
            <NoteIcon />
            <Typography>
              너 그거 알아?
            </Typography>
          </S.IntroTextIconWrapper1>
          <S.IntroTextIconWrapper2>
            <Typography color={'primary'} weight={'bold'}>
              몰랑
            </Typography>
            <S.IntroTextIcon2>
              <QuestionIcon />
            </S.IntroTextIcon2>
          </S.IntroTextIconWrapper2>
        </div>
      </S.IntroTextBox>
    </S.IntroContainer>
  );
};
