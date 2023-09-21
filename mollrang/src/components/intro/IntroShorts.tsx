import {Typography} from '@components/common/Typography';
import {EmoticonIcon} from '@components/common/icons/EmoticonIcon';
import styled from 'styled-components';
import {SkeletonUi} from '@components/ui/skeleton/SkeletonUi';

const ShortsLayout = styled.div`
  width: 100%;
`;
const ShortsBlockContainer = styled.div`
  width: 100%;
  margin-top: 1em;
`;
const ShortsBlock = styled.div`
  background-color: var(--blockquote);
  width: 100%;
  min-height: 40px;
  padding: 0.4em 0.8em;
  border-radius: 4px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const AnswerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 1em;
`;

const EmptyBox = styled.div`
  background-color: #D9D9D9;
  border-radius: 4px;
  width: 38px;
  height: 20px;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;

  .shorts-title {
    margin-right: 8px;
  }
`;

export const IntroShorts = () => {
  const isLoading = true;
  return (
    <ShortsLayout>
      <FlexBox>
        <Typography variant={'body2'} weight={'medium'} color={'default'} className={'shorts-title'}>
          피식
        </Typography>
        <EmoticonIcon />
      </FlexBox>
      <ShortsBlockContainer>
        {isLoading ? (<SkeletonUi theme={{height: 40, borderRadius: 4}} />) : (<ShortsBlock>
          개발자들이 다크 모드를 쓰는 이유는??? (스켈레톤 적용)
        </ShortsBlock>)}
        <AnswerBox>
          {isLoading ? (<SkeletonUi theme={{height: 20, width: 80, borderRadius: 4}} />) : (
            <>
              <EmptyBox />
              <Typography>꼬여서 :)</Typography>
            </>
          )}
        </AnswerBox>
      </ShortsBlockContainer>
    </ShortsLayout>
  );
};
