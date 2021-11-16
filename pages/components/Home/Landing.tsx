import { Box, Flex, Button, Text, Image, HStack } from '@chakra-ui/react';

export const Landing = () => {
  return (
    <HStack px="20" minH="100vh" variant="contained">
      <Flex flexDir="column">
        <Text as="h1" fontSize="36px" fontWeight="700" mb="4">
          Beyond just information.
        </Text>
        <Box as="h2" mb="8">
          <Text d="inline" fontWeight="600">
            Comlogik
          </Text>{' '}
          <Text d="inline">
            is the single source solution provider to all your healthcare
            information technology needs.
          </Text>
        </Box>
        <HStack spacing="18px">
          <Button size="lg">Request a demo</Button>
          <Button size="lg" variant="outline">
            Comlogik Ecosystem
          </Button>
        </HStack>
      </Flex>
      <Box>
        <Image src="https://dummyimage.com/500x500/000/fff" objectFit="cover" />
      </Box>
    </HStack>
  );
};
