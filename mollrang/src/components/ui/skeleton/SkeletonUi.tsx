import React, {CSSProperties, PropsWithChildren, ReactElement} from 'react';
import Skeleton, {SkeletonTheme, SkeletonStyleProps} from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface SkeletonProps {
  count?: number;
  wrapper?: React.FunctionComponent<PropsWithChildren<unknown>>;
  className?: string;
  containerClassName?: string;
  containerTestId?: string;
  circle?: boolean;
  style?: CSSProperties;
}

interface Props {
  skeleton?: SkeletonProps,
  theme?: SkeletonStyleProps
}

export const SkeletonUi = (props: Props): ReactElement => {
  const {skeleton, theme} = props;
  return (
    <SkeletonTheme {...theme}>
      <Skeleton {...skeleton} />
    </SkeletonTheme>
  );
};
