import Image from "next/image";
import { ReactElement } from "react";

interface Props {
  mode: boolean;
}

export const Logo = (props: Props): ReactElement => {
  const { mode } = props;
  const cdnPath = "https://d30ugctgtj8te2.cloudfront.net/assets";
  const url = mode ? "logo_dark.svg" : "logo_light.svg";

  return (
    <Image src={`${cdnPath}/${url}`} width={46} height={46} alt={"mollrang"} />
  );
};
