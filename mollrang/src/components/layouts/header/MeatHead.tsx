import Head from "next/head";
import React, {ReactElement} from "react";

interface Props {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

const MetaHead = ({
                    title,
                    description,
                    url,
                    image,
                  }: Props): ReactElement => {
  return (
    <Head>
      <meta content="website" property="og:type"/>
      <meta content="몰랑" property="og:site_name"/>
      <meta content={title || "몰랑"} property="og:title"/>
      <meta
        name="og:description"
        content={description || "하루에 한 문제, 매일 매일 새로운 퀴즈를 풀고 퀴즈 결과를 친구들에게 자랑해 보아요~!"}
      />
      <meta
        name="og:image"
        content={
          image ||
          "https://d30ugctgtj8te2.cloudfront.net/assets/images/logo_light.svg"
        }
      />
      <meta content="ko_KR" property="og:locale"/>
      <meta content="en_US" property="og:locale:alternate"/>
      <meta content={url || "https://www.mollrang.com"} property="og:url"/>
      <meta property="og:type" content="website"/>
      <meta property="og:image:width" content="1280"/>
      <meta property="og:image:height" content="720"/>

      <meta property="twitter:title" content={title || "몰랑"}/>
      <meta property="twitter:card" content="하루에 한 문제, 퀴즈 몰랑"/>
      <meta
        property="twitter:description"
        content={description || "하루에 한 문제, 매일 매일 새로운 퀴즈를 풀고 퀴즈 결과를 친구들에게 자랑해 보아요~!"}
      />
      <meta
        property="twitter:image"
        content={
          image ||
          "https://d30ugctgtj8te2.cloudfront.net/assets/images/logo_light.svg"
        }
      />
      <meta
        property="twitter:url"
        content={url || "https://www.mollrang.com"}
      />
    </Head>
  );
};

export default MetaHead;
