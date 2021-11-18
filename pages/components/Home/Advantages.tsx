import React from 'react';
import { VStack, Box, Text, SimpleGrid, Flex, Image } from '@chakra-ui/react';

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
    <VStack px="20" spacing="72px" alignItems="start">
      <Box>
        <Text
          textTransform="uppercase"
          fontSize="18px"
          fontWeight="700"
          letterSpacing="2px"
          mb="4"
        >
          Advantages
        </Text>
        <Text fontSize="30px" fontWeight="700">
          Why we’re the right healthcare software provider for you.
        </Text>
        <Text fontSize="18px" color="gray.600">
          Unbeatable advantages and value over any other provider.
        </Text>
      </Box>
      <SimpleGrid columns={3} spacing="36px">
        {advantages.map((advantage, i) => (
          <Flex key={i}>
            <Box mr="4">
              <Image src={advantage.image} />
            </Box>
            <Text w="full">{advantage.content}</Text>
          </Flex>
        ))}
      </SimpleGrid>
    </VStack>
  );
};
