import Head from "next/head";
import React, { ReactElement } from "react";

export const MetaComponent = (): ReactElement => {
  return (
    <Head>
      <title>몰랑</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, user-scalable=0"
      />

      <meta
        httpEquiv="Page-Enter"
        content="revealtrans(Duration=1,Transition=12)"
      />
      <meta httpEquiv="Subject" content="퀴즈" />
      <meta httpEquiv="Title" content="몰랑" />
      <meta httpEquiv="Author" content="mollrang-dev" />
      <meta httpEquiv="Other Agent" content="mollrang-dev" />
      <meta httpEquiv="Copyright" content="mollrang-dev" />
      <meta httpEquiv="Distribution" content="mollrang-dev" />
      <meta httpEquiv="Imagetoolbar" content="no" />

      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-web-app-capable" content="yes" />

      <meta name="color-scheme" content="dark light" />
      <meta
        name={"theme-color"}
        content={"#fff"}
        media={"(prefers-color-scheme: light)"}
      />
      <meta
        name={"theme-color"}
        content={"#383838"}
        media={"(prefers-color-scheme: dark)"}
      />

      <meta name="description" content="하루에 한 문제, 퀴즈 몰랑" />
      <meta name="keywords" content="퀴즈, 몰랑" />
      <meta name="author" content="mollrang-dev" />

      <meta content="website" property="og:type" />
      <meta content="몰랑" property="og:site_name" />
      <meta content="몰랑" property="og:title" />
      <meta name="og:description" content="하루에 한 문제, 퀴즈 몰랑" />
      <meta
        name="og:image"
        content={
          "https://d30ugctgtj8te2.cloudfront.net/assets/images/logo_light.svg"
        }
      />
      <meta content="ko_KR" property="og:locale" />
      <meta content="en_US" property="og:locale:alternate" />
      <meta content="https://www.mollrang.com" property="og:url" />

      <meta property="twitter:title" content="몰랑" />
      <meta property="twitter:card" content="하루에 한 문제, 퀴즈 몰랑" />
      <meta
        property="twitter:description"
        content="하루에 한 문제, 퀴즈 몰랑"
      />
      <meta
        property="twitter:image"
        content={
          "https://d30ugctgtj8te2.cloudfront.net/assets/images/logo_light.svg"
        }
      />
      <meta property="twitter:url" content="https://www.mollrang.com" />
      <meta
        name="google-site-verification"
        content="NSe76UdRbPJ799HbDpCDvw0uFQXmL0QEOStdbHC1yZ8"
      />
      <meta
        name="naver-site-verification"
        content="ce63a9fa5800bacd81780d1b3d6e2ea5e09d764a"
      />
    </Head>
  );
};
