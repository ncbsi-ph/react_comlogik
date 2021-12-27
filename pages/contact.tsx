import React from 'react';
import { VStack } from '@chakra-ui/react';
import { Container } from 'react-grid-system';

import { Landing, ContactForm } from './components/Contact';
import { Map } from './components';

const Contact = () => {
  return (
    <>
      <Container>
        <Landing />
        <VStack alignItems="start" spacing="192px" mb="192px">
          <ContactForm />
        </VStack>
      </Container>
      <Map />
    </>
  );
};

export default Contact;
