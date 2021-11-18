import type { NextPage } from 'next';
import { Box } from '@chakra-ui/react';

import {
  Landing,
  Clients,
  CovidResponse,
  Advantages,
  Products,
} from './components/Home';

const Home: NextPage = () => {
  return (
    <>
      <Landing />
      <Clients />
      <Box my="96px">
        <CovidResponse />
      </Box>
      <Box mb="96px">
        <Advantages />
      </Box>
      <Products />
    </>
  );
};

export default Home;
