import React from 'react';
import { VStack, Box, Text, SimpleGrid, Flex, Image } from '@chakra-ui/react';
import { Container } from 'react-grid-system';

const advantages = [
  {
    content: '20 years of quality healthcare software',
    image: 'https://dummyimage.com/64x64/000/fff',
  },
  {
    content:
      'Widely used by 5,000+ doctors, hospitals and healthcare facilities',
    image: 'https://dummyimage.com/64x64/000/fff',
  },
  {
    content: 'DOH & PhilHealth certified provider',
    image: 'https://dummyimage.com/64x64/000/fff',
  },
  {
    content: '24/7 live support',
    image: 'https://dummyimage.com/64x64/000/fff',
  },
  {
    content: 'Tailor-fitted implementation',
    image: 'https://dummyimage.com/64x64/000/fff',
  },
  {
    content: 'Fast transition',
    image: 'https://dummyimage.com/64x64/000/fff',
  },
  {
    content: 'Money back guarantee',
    image: 'https://dummyimage.com/64x64/000/fff',
  },
  {
    content: 'Lifetime software warranty',
    image: 'https://dummyimage.com/64x64/000/fff',
  },
  {
    content: 'Backwards compatibility',
    image: 'https://dummyimage.com/64x64/000/fff',
  },
];

export const Advantages = () => {
  return (
    <Container>
      <VStack spacing="48px" alignItems="start">
        <Box>
          <Text variant="subheader">Advantages</Text>
          <Text variant="header">
            Why we’re the right healthcare software provider for you.
          </Text>
          <Text color="gray.600">
            Unbeatable advantages and value over any other provider.
          </Text>
        </Box>
        <SimpleGrid columns={3} spacing="36px">
          {advantages.map((advantage, i) => (
            <Flex key={i} alignItems="center">
              <Box mr="4">
                <Image src={advantage.image} />
              </Box>
              <Text w="full" fontSize="20px">
                {advantage.content}
              </Text>
            </Flex>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};
