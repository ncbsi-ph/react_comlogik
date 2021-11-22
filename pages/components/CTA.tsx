import React from 'react';
import { Box, Text, Button, HStack } from '@chakra-ui/react';
import { Container } from 'react-grid-system';

export const CTA = () => {
  return (
    <Box bg="gray.200" py="10">
      <Container>
        <Box>
          <Text variant="header">We're here to help you.</Text>
          <Text mb="8">
            Whether you’re tired of looking for the right experts for the job or
            simply wanting to know more about our company and how we are helping
            companies like you grow.
          </Text>
          <HStack spacing="18px">
            <Button size="lg">Talk to us</Button>
            <Button size="lg" variant="outline">
              Request a demo
            </Button>
          </HStack>
        </Box>
      </Container>
    </Box>
  );
};
