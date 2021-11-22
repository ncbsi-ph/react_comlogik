import { Box, Flex, Button, Text, Image, HStack } from '@chakra-ui/react';
import { Container, Row, Col } from 'react-grid-system';

export const Landing = () => {
  return (
    <Container>
      <Row
        style={{ minHeight: '100vh' }}
        align="center"
        justify="center"
        gutterWidth={36}
      >
        <Col xl={7} xxl={6}>
          <Flex flexDir="column">
            <Text variant="header">Beyond just information.</Text>
            <Box as="h2" mb="8">
              <Text d="inline" fontWeight="700">
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
        </Col>
        <Col xl={5} xxl="content">
          <Image src="https:dummyimage.com/500x500/000/fff" />
        </Col>
      </Row>
    </Container>
  );
};
