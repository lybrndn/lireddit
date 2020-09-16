import { CSSReset, theme, ThemeProvider } from '@chakra-ui/core';
import React from 'react';

function MyApp({ Component, pageProps }: any) {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
