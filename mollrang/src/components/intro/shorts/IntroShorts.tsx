import {Typography} from '@components/common/Typography';
import {EmoticonIcon} from '@components/common/icons/EmoticonIcon';
import {SkeletonUi} from '@components/ui/skeleton/SkeletonUi';
import * as S from './style';
import {useTodayShortsQuery} from '../../../services/queries/shortsQuery';

export const IntroShorts = () => {
  const {data, isLoading} = useTodayShortsQuery();

  const removeSolution = (): void => {
    const {answer, solution} = data[0];
  };

  return (
    <S.ShortsLayout>
      <S.FlexBox>
        <Typography variant={'body2'} weight={'medium'} color={'default'} className={'shorts-title'}>
          피식
        </Typography>
        <EmoticonIcon />
      </S.FlexBox>
      <S.ShortsBlockContainer>
        {isLoading ? (<SkeletonUi theme={{height: 40, borderRadius: 4}} />) : (
          <S.ShortsBlock>
            {data && data[0].question}
          </S.ShortsBlock>)}
        <S.AnswerBox>
          {isLoading ? (<SkeletonUi theme={{height: 20, width: 80, borderRadius: 4}} />) : (
            <>
              <S.EmptyBox />
              <Typography>{data && data[0].answer}</Typography>
            </>
          )}
        </S.AnswerBox>
      </S.ShortsBlockContainer>
    </S.ShortsLayout>
  );
};
