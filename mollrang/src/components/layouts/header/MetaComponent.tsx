import Head from "next/head";
import React, {ReactElement} from "react";

const MetaCommonHead = (): ReactElement => {
    return (
      <Head>
          <title>몰랑</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, user-scalable=0"
          />


          <meta httpEquiv="Subject" content="퀴즈"/>
          <meta httpEquiv="Title" content="몰랑"/>
          <meta httpEquiv="Author" content="데브위키"/>
          <meta httpEquiv="Other Agent" content="데브위키"/>
          <meta httpEquiv="Copyright" content="데브위키"/>
          <meta httpEquiv="Distribution" content="데브위키"/>
          <meta name="keywords" content="몰랑, 몰랑?, 퀴즈, 퀴즈 몰랑, 데브위키, 위키, mollrang, Mollrang, mollrang?, Mollrang?"/>
          <meta httpEquiv="Imagetoolbar" content="no"/>
          <meta
            httpEquiv="Page-Enter"
            content="revealtrans(Duration=1,Transition=12)"
          />
          <meta name="mobile-web-app-capable" content="yes"/>
          <meta name="apple-web-app-capable" content="yes"/>

          <meta name="color-scheme" content="dark light"/>
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
export default MetaCommonHead;
