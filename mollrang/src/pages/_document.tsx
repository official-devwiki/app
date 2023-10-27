import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import type { DocumentContext, DocumentInitialProps } from 'next/document'
import {ServerStyleSheet} from 'styled-components';
import React from "react";

const themeInitializerScript = `
      (function () {
        document.body.dataset.theme = window.localStorage.getItem("theme") || (window.matchMedia?.('(prefers-color-scheme: dark)').matches ? "dark" : "light");
      })();
  `;

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  };

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
            rel="stylesheet"
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

          <meta name="theme-color" content="#00c7ae" />
          <meta
            name="description"
            content="간단한 O/X 퀴즈를 통해 내 지식이 쑥쑥"
          />
          <meta name="keywords" content="O/X 퀴즈, 퀴즈, IT퀴즈, 개발 퀴즈, 개발" />
          <meta name="author" content="mollrang-dev" />

          <meta content="website" property="og:type" />
          <meta content="몰랑" property="og:site_name" />
          <meta content="몰랑" property="og:title" />
          <meta
            name="og:description"
            content="간단한 O/X 퀴즈를 통해 내 지식이 쑥쑥"
          />
          <meta name="og:image" content="" />
          <meta content="ko_KR" property="og:locale" />
          <meta content="en_US" property="og:locale:alternate" />
          <meta content="https://mollrang.netlify.app/" property="og:url" />

          <meta property="twitter:title" content="몰랑" />
          <meta
            property="twitter:card"
            content="간단한 O/X 퀴즈를 통해 내 지식이 쑥쑥"
          />
          <meta
            property="twitter:description"
            content="간단한 O/X 퀴즈를 통해 내 지식이 쑥쑥"
          />
          <meta property="twitter:image" content="" />
          <meta property="twitter:url" content="https://mollrang.netlify.app/" />

          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body className={'scroll'}>
        <script dangerouslySetInnerHTML={{ __html: themeInitializerScript }} />
        <Main />
        <div id="modal" />
        <div id="toast" />
        <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
