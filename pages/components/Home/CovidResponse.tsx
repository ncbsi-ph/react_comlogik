import { Box, Text, VStack, Button } from '@chakra-ui/react';

export const CovidResponse = () => {
  return (
    <Box bg="gray.200" px="20" py="10">
      <Text
        textTransform="uppercase"
        fontSize="18px"
        fontWeight="700"
        letterSpacing="2px"
        mb="4"
      >
        COVID-19 response
      </Text>
      <Text fontSize="24" mb="4">
        Comlogik has the solutions to help you respond to COVID-19 and operate
        your healthcare facility safely and smartly.
      </Text>
      <Box>
        <Button size="lg">Learn more</Button>
      </Box>
    </Box>
  );
};
