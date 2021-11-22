import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ChakraProvider, extendTheme, ThemeComponents } from '@chakra-ui/react';
import { ScreenClassProvider, setConfiguration } from 'react-grid-system';

import { Footer } from './components';

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
        lineHeight: '1.1',
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

setConfiguration({
  containerWidths: [540, 740, 960, 1250, 1540],
  gutterWidth: 72,
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
          <Footer />
        </ScreenClassProvider>
      </ChakraProvider>
    </>
  );
};

export default MyApp;
