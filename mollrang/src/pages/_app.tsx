import type {AppContext, AppInitialProps, AppProps} from 'next/app';
import {queryClient} from '@libs/Tanstack';
import {useState} from 'react';
import {NextComponentType} from 'next';
import ErrorBoundary from '@utils/error/errorBoundary';
import {QueryClientProvider, Hydrate} from '@tanstack/react-query';
import {LayoutComponent} from '@components/layout/LayoutComponent';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {wrapper} from '@store/index';
import {GlobalStyle} from "@styles/global-style";
import { ThemeProvider } from 'styled-components';
import {theme} from "@styles/theme";

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
                                                                         Component,
                                                                         pageProps,
                                                                       }) => {
  const [queryState] = useState(() => queryClient);

  return (
    <>
      <ErrorBoundary>
        <QueryClientProvider client={queryState}>
          <Hydrate state={pageProps.dehydratedState}>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              <LayoutComponent>
                <Component {...pageProps} />
              </LayoutComponent>
            </ThemeProvider>
            <ReactQueryDevtools initialIsOpen={false} />
          </Hydrate>
        </QueryClientProvider>
      </ErrorBoundary>
    </>
  );
};
App.getInitialProps = async ({
                               Component,
                               ctx,
                             }: AppContext): Promise<AppInitialProps> => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return {pageProps};
};
export default wrapper.withRedux(App);
