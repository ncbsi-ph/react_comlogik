import React from 'react';
import {
  HStack,
  VStack,
  Box,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Image,
} from '@chakra-ui/react';

const products = [
  {
    image: 'https://dummyimage.com/256x256/000/fff',
  },
  {
    image: 'https://dummyimage.com/256x256/000/fff',
  },
  {
    image: 'https://dummyimage.com/256x256/000/fff',
  },
];

export const Products = () => {
  return (
    <Tabs px="20">
      <HStack>
        <VStack>
          <Box>
            <Text
              textTransform="uppercase"
              fontSize="18px"
              fontWeight="700"
              letterSpacing="2px"
              mb="4"
            >
              Products
            </Text>
            <Text fontSize="30px" fontWeight="700">
              Software that really gets the job done.
            </Text>
            <Text fontSize="18px" color="gray.600">
              Our well-thought-out software solutions give you the tools to get
              higher patient satisfaction and greater employee productivity, in
              a way that will keep drive profitability.
            </Text>
          </Box>
          <Box>
            <TabList>
              {products.map((product, i) => (
                <Tab key={i}>
                  <Image src={product.image} />
                </Tab>
              ))}
            </TabList>
          </Box>
        </VStack>
        <Box h="full" boxShadow="base" p="4">
          Test
        </Box>
      </HStack>
    </Tabs>
  );
};
