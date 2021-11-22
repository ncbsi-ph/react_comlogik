import React from 'react';
import { Box, VStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import { Container, Row, Col } from 'react-grid-system';
import { format } from 'date-fns';

export const Footer = () => {
  return (
    <>
      <Box bg="gray.200" py="20">
        <Container>
          <VStack spacing="72px">
            <Image src="https://dummyimage.com/128x128/000/fff" />
            <Box>
              <Row justify="center">
                <Col xl={4}>
                  <Text variant="subheader">About</Text>
                  <List spacing={4}>
                    <ListItem>
                      2/F F & L Centre 2211 Commonwealth Avenue Brgy. Holy
                      Spirit, Quezon City Philippines 1127
                    </ListItem>
                    <ListItem>8952-2589</ListItem>
                    <ListItem>8932-9421</ListItem>
                  </List>
                </Col>
                <Col xl="content">
                  <Text variant="subheader">Quick links</Text>
                  <List spacing={4}>
                    <ListItem>About us</ListItem>
                    <ListItem>Solutions</ListItem>
                    <ListItem>Clients</ListItem>
                    <ListItem>News</ListItem>
                    <ListItem>Support</ListItem>
                    <ListItem>Talk to us</ListItem>
                  </List>
                </Col>
                <Col xl="content">
                  <Text variant="subheader">Solutions</Text>
                  <List spacing={4}>
                    <ListItem>Hospital Information Management System</ListItem>
                    <ListItem>Clinic Information Management System</ListItem>
                    <ListItem>ClaimsAssure</ListItem>
                    <ListItem>Comlogik EMR</ListItem>
                    <ListItem>WorkbenchMD</ListItem>
                    <ListItem>Comlogik Connect</ListItem>
                    <ListItem>PayManager</ListItem>
                    <ListItem>Workforce</ListItem>
                  </List>
                </Col>
              </Row>
            </Box>
          </VStack>
        </Container>
      </Box>
      <Box bg="white" py="4">
        <Container>
          <Box>
            <Text
              textAlign="center"
              textTransform="uppercase"
              fontSize="14px"
              letterSpacing="1.5px"
              color="gray.600"
            >
              Copyright © {format(new Date(), 'yyyy')}, New Comlogik Business
              Systems Inc.
            </Text>
          </Box>
        </Container>
      </Box>
    </>
  );
};
