import {ReactElement} from 'react';
import * as S from './style';
import Image from 'next/image';
import {NoteIcon} from '@components/common/icons/NoteIcon';
import {Typography} from '@components/common/Typography';
import {QuestionIcon} from '@components/common/icons/QuestionIcon';

export const IntroBanner = (): ReactElement => {
  return (
    <S.IntroContainer>
      <div>
        <Image
          priority={true}
          src={'/images/banner.svg'}
          alt={'banner'}
          width={216}
          height={190}
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
