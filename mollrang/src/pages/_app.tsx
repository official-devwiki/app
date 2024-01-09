import type { AppContext, AppInitialProps, AppProps } from "next/app";
import { queryClient } from "@libs/Tanstack";
import React, { useEffect, useState } from "react";
import { NextComponentType } from "next";
import ErrorBoundary from "@utils/error/errorBoundary";
import { QueryClientProvider, Hydrate } from "@tanstack/react-query";
import { BaseLayout } from "@components/layouts/BaseLayout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { wrapper } from "@store/index";
import { GlobalStyle } from "@styles/global-style";
import { ThemeProvider } from "styled-components";
import { theme } from "@styles/theme";
import { v4 as uuid } from "uuid";
import Cookies from "cookies";
import { Provider } from "react-redux";
import { registUserIdApi } from "@services/apis/users";
import { AuthContext } from "providers/authProvider";

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}) => {
  const [queryState] = useState(() => queryClient);
  const { store, props } = wrapper.useWrappedStore(pageProps);

  useEffect(() => {
    const user = window.localStorage.getItem("user");
    if (pageProps.userId !== user)
      window.localStorage.setItem("user", pageProps.userId);
  }, []);

  const value = {
    userId: pageProps.userId || window.localStorage.getItem("user"),
  };

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <QueryClientProvider client={queryState}>
          <AuthContext.Provider value={value}>
            <Hydrate state={pageProps.dehydratedState}>
              <ThemeProvider theme={theme}>
                <GlobalStyle />
                <BaseLayout>
                  <Component {...pageProps} />
                </BaseLayout>
              </ThemeProvider>
              <ReactQueryDevtools initialIsOpen={false} />
            </Hydrate>
          </AuthContext.Provider>
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
  const { req, res } = ctx;
  let userId = "";
  const id = uuid();

  // req 존재 -> ssr
  if (req) {
    const cookies = new Cookies(req, res);
    const user = cookies.get("user");

    if (!user) {
      const result = await registUserIdApi(id);
      if (result) {
        cookies.set("user", id, {
          httpOnly: true,
        });
        userId = id;
      }
    } else {
      userId = user;
    }
  } else {
    userId = window.localStorage.getItem("user");
  }

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.userId = userId;
  return { pageProps };
};
export default App;
