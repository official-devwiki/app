import Head from 'next/head';
import React, {ReactElement} from 'react';

export const MetaComponent = (): ReactElement => {
  return (
    <Head>
      <title>몰랑</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />

      <meta httpEquiv='Page-Enter' content='revealtrans(Duration=1,Transition=12)' />
      <meta httpEquiv='Subject' content='IT 퀴즈' />
      <meta httpEquiv='Title' content='몰랑' />
      <meta httpEquiv='Author' content='mollrang-dev' />
      <meta httpEquiv='Other Agent' content='mollrang-dev' />
      <meta httpEquiv='Copyright' content='mollrang-dev' />
      <meta httpEquiv='Distribution' content='mollrang-dev' />
      <meta httpEquiv='Imagetoolbar' content='no' />

      <meta name='theme-color' content='#00c7ae' />
      <meta name='description' content='간단한 O/X 퀴즈를 통해 내 지식이 쑥쑥' />
      <meta name='keywords' content='O/X 퀴즈, 퀴즈, IT퀴즈, 개발퀴즈, 개발' />
      <meta name='author' content='mollrang-dev' />

      <meta content='website' property='og:type' />
      <meta content='몰랑' property='og:site_name' />
      <meta content='몰랑' property='og:title' />
      <meta
        name='og:description'
        content='간단한 O/X 퀴즈를 통해 내 지식이 쑥쑥'
      />
      <meta
        name='og:image'
        content=''
      />
      <meta content='ko_KR' property='og:locale' />
      <meta content='en_US' property='og:locale:alternate' />
      <meta content='https://mollrang.netlify.app/' property='og:url' />

      <meta property='twitter:title' content='몰랑' />
      <meta property='twitter:card' content='간단한 O/X 퀴즈를 통해 내 지식이 쑥쑥' />
      <meta property='twitter:description' content='간단한 O/X 퀴즈를 통해 내 지식이 쑥쑥' />
      <meta property='twitter:image' content='' />
      <meta property='twitter:url' content='https://mollrang.netlify.app/' />

      <link rel='icon' href='/favicon.ico' />
      <link rel='manifest' href='/manifest.json' />
    </Head>
  );
};
