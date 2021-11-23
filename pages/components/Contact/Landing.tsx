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
        <Col xl="content">
          <Image src="https:dummyimage.com/400x400/000/fff" />
        </Col>
        <Col xl={6}>
          <Flex flexDir="column">
            <Text variant="subheader">Contact us</Text>
            <Text variant="header">We're here to help you.</Text>
            <Text>
              If you have any questions or inquiries, don't hesitate to send us
              a message.
            </Text>
          </Flex>
        </Col>
      </Row>
    </Container>
  );
};
