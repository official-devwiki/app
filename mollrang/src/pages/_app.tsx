import type {AppContext, AppInitialProps, AppProps} from "next/app";
import {queryClient} from "@libs/Tanstack";
import React, {useEffect, useState} from "react";
import {NextComponentType} from "next";
import ErrorBoundary from "@utils/error/errorBoundary";
import {QueryClientProvider, Hydrate} from "@tanstack/react-query";
import {BaseLayout} from "@components/layouts/BaseLayout";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {wrapper} from "@store/index";
import {GlobalStyle} from "@styles/global-style";
import {ThemeProvider} from "styled-components";
import {theme} from "@styles/theme";
import {v4 as uuid} from "uuid";
import {Provider} from "react-redux";
import {registUserIdApi} from "@services/apis/users";
import useLocalStorage from "@hooks/useLocalStorage";
import AuthProvider, {useAuth} from "../providers/authProvider";

export type User = {
  id: string;
};

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
                                                                         Component,
                                                                         pageProps,
                                                                       }) => {
  const [queryState] = useState(() => queryClient);
  const {store} = wrapper.useWrappedStore(pageProps);
  const {setStorageItems, getStorageItems} = useLocalStorage<User>();

  useEffect(() => {
    const userInfo = getStorageItems("user");
    if (!userInfo) {
      const id = uuid();
      setStorageItems("user", {id});
      registUserIdApi(id);
    }
  }, []);

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <QueryClientProvider client={queryState}>
          <Hydrate state={pageProps.dehydratedState}>
            <AuthProvider>
              <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <BaseLayout>
                  <Component {...pageProps} />
                </BaseLayout>
              </ThemeProvider>
            </AuthProvider>
            <ReactQueryDevtools initialIsOpen={false}/>
          </Hydrate>
        </QueryClientProvider>
      </Provider>
    </ErrorBoundary>
  );
};

App.getInitialProps = async ({
                               Component,
                               ctx,
                             }: AppContext): Promise<AppInitialProps> => {
  let pageProps = {} as any;

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return {pageProps};
};
export default App;
