import React, { useEffect } from 'react';
import {
  HStack,
  VStack,
  Box,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  RadioGroup,
  Radio,
  Input,
  Button,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  useEffect(() => {
    register('purpose', { required: 'This field is required' });
  }, []);

  return (
    <VStack alignItems="start" w="full" spacing="60px">
      <Box>
        <Text variant="subheader">Contact form</Text>
        <Text>
          Send us a message and we'll get back to you as soon as possible.
        </Text>
      </Box>
      <Box
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        w="full"
        boxShadow="md"
        bg="white"
        p="20"
      >
        <Grid templateColumns="repeat(6, 1fr)" gap={8}>
          <GridItem colSpan={6}>
            <FormControl isInvalid={errors.purpose}>
              <FormLabel>Purpose</FormLabel>
              <RadioGroup
                name="purpose"
                onChange={(value) =>
                  setValue('purpose', value, { shouldValidate: true })
                }
              >
                <HStack spacing="36px" alignItems="start">
                  <Radio value="Request quote">Request quote</Radio>
                  <Radio value="Request demo">Request demo</Radio>
                  <Radio value="Request brochure">Request brochure</Radio>
                  <Radio value="Request clients list">
                    Request clients list
                  </Radio>
                </HStack>
              </RadioGroup>
              <FormErrorMessage>
                {errors.purpose && errors.purpose.message}
              </FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl isInvalid={errors.company_name}>
              <FormLabel>Company name</FormLabel>
              <Input
                {...register('company_name', {
                  required: 'This field is required',
                })}
              />
              <FormErrorMessage>
                {errors.company_name && errors.company_name.message}
              </FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl isInvalid={errors.company_address}>
              <FormLabel>Company address</FormLabel>
              <Input
                {...register('company_address', {
                  required: 'This field is required',
                })}
              />
              <FormErrorMessage>
                {errors.company_address && errors.company_address.message}
              </FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl isInvalid={errors.contact_person}>
              <FormLabel>Contact person</FormLabel>
              <Input
                {...register('contact_person', {
                  required: 'This field is required',
                })}
              />
              <FormErrorMessage>
                {errors.contact_person && errors.contact_person.message}
              </FormErrorMessage>
            </FormControl>
          </GridItem>
        </Grid>
      </Box>
    </VStack>
  );
};
