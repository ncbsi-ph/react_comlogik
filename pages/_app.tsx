import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ChakraProvider, extendTheme, ThemeComponents } from '@chakra-ui/react';
import { ScreenClassProvider, setConfiguration } from 'react-grid-system';

import { Navbar, Footer } from './components';

import '../styles/globals.css';

const colors = {
  brandBlue: {
    50: '#e4edff',
    100: '#becff4',
    200: '#98b2e8',
    300: '#7098db',
    400: '#497fd0',
    500: '#2f6ab6',
    600: '#234b8f',
    700: '#163067',
    800: '#091841',
    900: '#00051c',
  },
};

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
        color: 'brandBlue.500',
        fontSize: '48px',
        fontWeight: '700',
        lineHeight: '1.1',
        mb: '4',
      },
    },
  },
  Button: {
    defaultProps: {
      colorScheme: 'brandBlue',
    },
  },
};

const theme = extendTheme({
  colors,
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

const App = ({ Component, pageProps }: AppProps) => {
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
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </ScreenClassProvider>
      </ChakraProvider>
    </>
  );
};

export default App;
