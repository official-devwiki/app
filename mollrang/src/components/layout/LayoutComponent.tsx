import {ReactElement, ReactNode} from 'react';
import styled from 'styled-components';
import {MetaComponent} from '@components/layout/header/MetaComponent';

interface Props {
  children: ReactNode;
}

export const LayoutComponent = (props: Props): ReactElement => {
  const {children} = props;

  return (
    <>
      <MetaComponent />
      <Main>
        {children}
      </Main>
    </>
  );
};


const Main = styled.main`
`;
