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
  Flex,
  Button,
} from '@chakra-ui/react';

const products = [
  {
    title: 'Hospital Information & Management System',
    description:
      'HIMS™ is a comprehensive, fully integrated, yet easy to use hospital information system for all hospital levels. HIMS™ is the first DOH Validated System and PhilHealth Certified that can be customized and can adapt to various hospital setup.',
    image: 'https://dummyimage.com/256x256/000/fff',
  },
  {
    title: 'Clinic Information & Management System',
    description:
      'CIMS™ is an all-in-one clinic information system that is both a turnkey and customizable solution for your clinic or diagnostic center. CIMS™ guarantees billing efficiency while storing real- time patient data resulting to a more improved patient and users experience.',
    image: 'https://dummyimage.com/256x256/000/fff',
  },
  {
    title: 'Claims Assure',
    description:
      'Claims Assure™ is a PhilHealth certified electronic claims transmittal software that enables any healthcare accredited institution to send paperless patient claims. It allows users to manage and track receivables while monitoring status of claims all in a single window.',
    image: 'https://dummyimage.com/256x256/000/fff',
  },
  {
    title: 'Comlogik EMR',
    description:
      'Comlogik EMR™ is the industry leading solution that meets the stringent requirements of the Department of Health and likewise holds the distinction of being the FIRST DOH VALIDATED SOFTWARE. Be compliant and get expert advice from our team of experts.',
    image: 'https://dummyimage.com/256x256/000/fff',
  },
  {
    title: 'WorkBenchMD',
    description:
      'WorkBenchMD™ is a revolutionary way of managing your clinic and gets you ready before your patient enters your door. From reception, it allows you to view patients records, history, medical images and results, appointments, create billing, SOAP and more.',
    image: 'https://dummyimage.com/256x256/000/fff',
  },
  {
    title: 'Connect',
    description:
      'Comlogik Connect™ is designed to run on a mobile device which remotely access key information from HIMS™. If you are a patient, doctor or owner of the hospital, Connect™ allows each one to do specific task without the hassle.',
    image: 'https://dummyimage.com/256x256/000/fff',
  },
  {
    title: 'Paymanager',
    description:
      'Paymanager™ is your go to application when you want an end to end payroll system. Paymanager™ lets you manage unlimited schedules with multi- scheduling function, accommodate leave requests or generate needed reports in compliance with all government requirements.',
    image: 'https://dummyimage.com/256x256/000/fff',
  },
  {
    title: 'HRIS WorkForce',
    description:
      'HRIS WorkForce™ provides you a modern way of managing your people, from the way you recruit, onboard and develop talent to the way you retain them. Be the employer you want to stay and grow with and foster a culture of high performance and career mobility through ongoing, consistent feedback, reviews, rewards and recognition.',
    image: 'https://dummyimage.com/256x256/000/fff',
  },
  {
    title: 'AnywhereMed Telemedicine',
    description:
      'AnywhereMed is a fast and convenient way for patients to call and get in touch with a network of doctors affiliated to a hospital, explain your symptoms and get immediate medical advice before actually going to the hospital. This Telemedicine web-based application is developed to ensure that patient concerns are met especially in difficult situations such as inability to go to the hospital due to scheduling, distance, or critical conditions like the COVID-19 epidemic.',
    image: 'https://dummyimage.com/256x256/000/fff',
  },
];

export const Products = () => {
  return (
    <Tabs px="20" variant="unstyled">
      <HStack spacing="72px">
        <VStack spacing="48px" alignItems="start">
          <Box>
            <Text
              textTransform="uppercase"
              fontSize="20px"
              fontWeight="700"
              letterSpacing="2px"
              mb="4"
            >
              Products
            </Text>
            <Text fontSize="30px" fontWeight="700">
              Software that really gets the job done.
            </Text>
            <Text color="gray.600">
              Our well-thought-out software solutions give you the tools to get
              higher patient satisfaction and greater employee productivity, in
              a way that will drive profitability.
            </Text>
          </Box>
          <TabList d="grid" gridTemplateColumns="repeat(3, 1fr)" gridGap="24px">
            {products.map((product, i) => (
              <Tab p="0" key={i}>
                <Image objectFit="cover" src={product.image} />
              </Tab>
            ))}
          </TabList>
        </VStack>
        <TabPanels boxShadow="base">
          {products.map((product, i) => (
            <TabPanel key={i} p="0">
              <Box w="full" h="72">
                <Image
                  w="full"
                  h="full"
                  objectFit="cover"
                  src={product.image}
                />
              </Box>
              <Flex flexDir="column" p="12">
                <Text fontSize="24px" mb="4">
                  {product.title}
                </Text>
                <Text color="gray.600" mb="8">
                  {product.description}
                </Text>
                <HStack spacing="18px">
                  <Button>Learn more</Button>
                  <Button variant="outline">Request a demo</Button>
                </HStack>
              </Flex>
            </TabPanel>
          ))}
        </TabPanels>
      </HStack>
    </Tabs>
  );
};
