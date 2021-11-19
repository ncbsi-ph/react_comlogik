import { Box, Text, VStack, Button } from '@chakra-ui/react';

export const CovidResponse = () => {
  return (
    <Box bg="gray.200" px="20" py="10" w="full">
      <Text
        textTransform="uppercase"
        fontSize="20px"
        fontWeight="700"
        letterSpacing="2px"
        mb="4"
      >
        COVID-19 response
      </Text>
      <Text fontSize="20px" mb="6">
        We have the solutions to help you respond to COVID-19 and operate your
        healthcare facility safely and smartly.
      </Text>
      <Box>
        <Button size="lg">Learn more</Button>
      </Box>
    </Box>
  );
};
