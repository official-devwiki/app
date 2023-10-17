import {Button} from '@components/common/Button';
import {Typography} from '@components/common/Typography';
import {NextPage} from 'next';
import Image from 'next/image';
import {ReactElement} from 'react';
import {useRouter} from 'next/router';
import styled from 'styled-components';


const NotFoundPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2em;
  max-width: 400px;
  margin: auto;
  margin-top: 10rem;
`;


const ServerErrorPage: NextPage = (): ReactElement => {
  const router = useRouter();
  const redirectHome = async () => {
    await window.location.replace('/');
  };
  return (
    <NotFoundPageContainer>
      <picture>
        <Image
          loading='eager'
          src='/images/404.svg'
          alt='server-error-page'
          width={300}
          height={200}
        />
      </picture>
      <section>
        <Typography variant='h1' weight='bold' color='textBlack000'>
          잘못된 요청입니다.
        </Typography>
        <Typography
          variant='caption'
          weight='bold'
          color='textGray200'
        >
          잠시 후 다시 시도해주세요.
        </Typography>
      </section>
      <Button variant='primary' onClick={redirectHome}>
        <Typography as='span' weight='bold' color='textDefault'>
          돌아가기
        </Typography>
      </Button>
    </NotFoundPageContainer>
  );
};

export default ServerErrorPage;
