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

  const value = {
    userId: pageProps.userId,
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
  // req 존재 -> ssr
  let userId = uuid();
  if (req) {
    const cookies = new Cookies(req, res);
    const user = cookies.get("user");

    if (!user) {
      const result = await registUserIdApi(userId);
      if (result) {
        cookies.set("user", userId, {
          httpOnly: true,
        });
      }
    } else {
      userId = user;
    }
  }

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.userId = userId;
  return { pageProps };
};
export default App;
