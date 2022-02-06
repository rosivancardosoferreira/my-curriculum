import React from "react";
import type { AppProps } from "next/app";

import GlobalStyle from "../presentation/styles/global";
import { ThemeProvider } from "styled-components";
import theme from "../presentation/styles/themes/light";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} key={router.route} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
