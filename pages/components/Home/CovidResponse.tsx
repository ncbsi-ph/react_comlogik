import { Box, Text, Button } from '@chakra-ui/react';
import { Container } from 'react-grid-system';

export const CovidResponse = () => {
  return (
    <Box bg="gray.200" py="10" w="full">
      <Container>
        <Text variant="subheader">COVID-19 response</Text>
        <Text variant="header">Here for you amidst the pandemic.</Text>
        <Text mb="6">
          We have the solutions to help you respond to COVID-19 and operate your
          healthcare facility safely and smartly.
        </Text>
        <Box>
          <Button size="lg">Learn more</Button>
        </Box>
      </Container>
    </Box>
  );
};
