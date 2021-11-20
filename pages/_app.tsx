import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ChakraProvider, extendTheme, ThemeComponents } from '@chakra-ui/react';
import { ScreenClassProvider } from 'react-grid-system';

import '../styles/globals.css';

const components: ThemeComponents = {
  Text: {
    baseStyle: {
      fontSize: '18px',
    },
    variants: {
      subheader: {
        textTransform: 'uppercase',
        fontSize: '20px',
        fontWeight: '700',
        letterSpacing: '2px',
        mb: '4',
      },
      header: {
        fontSize: '48px',
        fontWeight: '700',
        lineHeight: '1.2',
        mb: '4',
      },
    },
  },
};

const theme = extendTheme({
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  components,
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>
          Comlogik Business Systems - The leading healthcare system provider in
          the Philippines
        </title>
      </Head>
      <ChakraProvider theme={theme}>
        <ScreenClassProvider>
          <Component {...pageProps} />
        </ScreenClassProvider>
      </ChakraProvider>
    </>
  );
};

export default MyApp;
