import { Box, Text, VStack, SimpleGrid, Image, Button } from '@chakra-ui/react';

export const Clients = () => {
  return (
    <VStack spacing="72px" justifyContent="start">
      <Box bg="gray.200" px="20" py="10">
        <Text
          textTransform="uppercase"
          fontSize="18px"
          fontWeight="700"
          letterSpacing="2px"
          mb="4"
        >
          Our clients
        </Text>
        <Text fontSize="22px">
          We’ve helped hundreds of healthcare institutions, thousands of
          physicians and medical workers accelerate their growth by providing
          them with the right tools and knowledge.
        </Text>
      </Box>
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
      <Box>
        <Button>Request for list of clients</Button>
      </Box>
    </VStack>
  );
};
