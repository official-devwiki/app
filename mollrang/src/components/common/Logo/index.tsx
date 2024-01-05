import Image from "next/image";
import { ReactElement } from "react";

interface Props {
  mode: boolean;
}

export const Logo = (props: Props): ReactElement => {
  const { mode } = props;
  const url = mode ? "/images/logo_dark.svg" : "/images/logo_light.svg";

  return <Image src={url} width={46} height={46} alt={"mollrang"} />;
};
