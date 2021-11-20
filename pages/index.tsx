import type { NextPage } from 'next';
import { Box, VStack } from '@chakra-ui/react';

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
      <VStack alignItems="start" spacing="256px">
        <Clients />
        <CovidResponse />
        <Advantages />
        <Products />
      </VStack>
    </>
  );
};

export default Home;
