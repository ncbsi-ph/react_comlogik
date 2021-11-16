import type { NextPage } from 'next';
import { Box } from '@chakra-ui/react';

import { Landing, Clients, CovidResponse } from './components/Home';

const Home: NextPage = () => {
  return (
    <>
      <Landing />
      <Clients />
      <Box my="96px">
        <CovidResponse />
      </Box>
    </>
  );
};

export default Home;
