import {ReactElement} from 'react';
import * as S from './style';
import Image from 'next/image';
import {NoteIcon} from '@components/common/icons/NoteIcon';
import {Typography} from '@components/common/Typography';
import {QuestionIcon} from '@components/common/icons/QuestionIcon';
import BannerSvg from '@images/banner.svg';
import styled from 'styled-components';
import {ShareIcon} from '@components/common/icons/ShareIcon';
import {Button} from '@components/common/Button';

export const FlexBox = styled.div`
  button {
    width: 100%;
    display: flex;
    margin-top: 4em;
    justify-content: space-between;
    align-items: center;
  }
`;

export const IntroBanner = (): ReactElement => {

  const Banner = styled(BannerSvg)`width: 220px;
    height: 190px`;

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
          <FlexBox>
            <Button variant={'icon'}>
              <ShareIcon />
              <Typography weight={'medium'}>
                퀴즈 공유하기
              </Typography>
            </Button>

          </FlexBox>

        </div>
      </S.IntroTextBox>
    </S.IntroContainer>
  );
};
