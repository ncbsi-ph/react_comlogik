import React from 'react';
import { Box, Image, Text, Button } from '@chakra-ui/react';
import { Container, Row, Col } from 'react-grid-system';

export const AboutTeam = () => {
  return (
    <Container>
      <Row align="center">
        <Col xl={5}>
          <Image src="https://dummyimage.com/500x500/000/fff" />
        </Col>
        <Col xl={7}>
          <Box>
            <Text variant="subheader">Our team</Text>
            <Text variant="header">Meet our awesome team.</Text>
            <Text mb="8">
              Some say skill is the most important quality one has when joining
              a company, but in Comlogik, we consider character to be just as
              important. Put together superb talent and outstanding character
              and you’ve got a winner! <br />
              <br />
              Our values is the heart of Comlogik. From here stems the quality
              of our performance and work today, and in the future.
            </Text>
            <Button size="lg">Learn more</Button>
          </Box>
        </Col>
      </Row>
    </Container>
  );
};
