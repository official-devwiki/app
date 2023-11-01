import {ReactElement} from "react";
import * as S from './style';
import {Typography} from "@components/common/Typography";
import {Variant, FontWeightType, FontColorType} from "@components/common/Typography/style";

interface Props {
  variantTitle?: Variant;
  variantContents?: Variant;
  titleWeight?: FontWeightType;
  contentsWeight?: FontWeightType;
  titleColor?: FontColorType;
  contentsColor?: FontColorType;
  title: string;
  contents: string;
}
export const LabelBox = (props: Props): ReactElement => {
  const {
    title,
    contents,
    variantTitle = 'body1',
    variantContents = 'body1',
    contentsWeight = 'regular',
    titleWeight = 'regular',
    titleColor = 'textDefault',
    contentsColor = 'textDefault',
  } = props;
  return (
    <S.FlexCenterLayout>
      <S.LabelContainer>
        <Typography $weight={titleWeight} $variant={variantTitle} $color={titleColor}>
          {title}
        </Typography>
        <S.LabelContentWrapper>
          <Typography
            as={"span"}
            $color={contentsColor}
            $weight={contentsWeight}
            $variant={variantContents}
          >
            {contents}
          </Typography>
        </S.LabelContentWrapper>
      </S.LabelContainer>
    </S.FlexCenterLayout>

  )
}