import { Box, Flex, Button, Text, Image, HStack } from '@chakra-ui/react';
import { Row, Col } from 'react-grid-system';

export const Landing = () => {
  return (
    <Row
      style={{ minHeight: '100vh' }}
      align="center"
      justify="center"
      gutterWidth={36}
    >
      <Col xl={6}>
        <Flex flexDir="column">
          <Text variant="subheader">Contact us</Text>
          <Text variant="header">We're here to help you.</Text>
          <Text>
            Whether it's a question, inquiry or a suggestion, we're always happy
            to hear from you.
          </Text>
        </Flex>
      </Col>
      <Col xl={6}>
        <Box w="full" boxShadow="md" bg="white" p="20"></Box>
      </Col>
    </Row>
  );
};
