import type { NextPage } from 'next';
import { VStack, Box } from '@chakra-ui/react';

import {
  Landing,
  Clients,
  CovidResponse,
  Advantages,
  Products,
  AboutTeam,
} from './components/Home';
import { CTA, Map } from './components';

const Home: NextPage = () => {
  return (
    <>
      <Landing />
      <VStack alignItems="start" spacing="192px">
        <Clients />
        <CovidResponse />
        <Advantages />
        <Products />
        <AboutTeam />
      </VStack>
      <Box mt="192px">
        <CTA />
        <Map />
      </Box>
    </>
  );
};

export default Home;
