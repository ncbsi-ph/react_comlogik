import { Box, Text, VStack, SimpleGrid, Image, Button } from '@chakra-ui/react';
import { Container } from 'react-grid-system';

export const Clients = () => {
  return (
    <VStack w="full" spacing="60px" justifyContent="start">
      <Box w="full" py="10" bg="gray.200">
        <Container>
          <Text variant="subheader">Our clients</Text>
          <Text variant="header">Clients who trust Comlogik day-to-day.</Text>
          <Text>
            We’ve helped hundreds of healthcare institutions, thousands of
            physicians and medical workers accelerate their growth by providing
            them with the right tools and knowledge.
          </Text>
        </Container>
      </Box>
      <Container>
        <SimpleGrid columns={4} spacing="48px">
          <Image src="https://dummyimage.com/128x128/000/fff" />
          <Image src="https://dummyimage.com/128x128/000/fff" />
          <Image src="https://dummyimage.com/128x128/000/fff" />
          <Image src="https://dummyimage.com/128x128/000/fff" />
          <Image src="https://dummyimage.com/128x128/000/fff" />
          <Image src="https://dummyimage.com/128x128/000/fff" />
          <Image src="https://dummyimage.com/128x128/000/fff" />
          <Image src="https://dummyimage.com/128x128/000/fff" />
        </SimpleGrid>
      </Container>
      <Container>
        <Button>Request for list of clients</Button>
      </Container>
    </VStack>
  );
};
