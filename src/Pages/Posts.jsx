import React from 'react';
import { Box, Flex, Text, Button, VStack, IconButton, HStack, Input, Textarea, Select, FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiImage, FiVideo, FiCalendar } from 'react-icons/fi';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const MotionBox = motion(Box);

const CreatePost = () => {
  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    content: Yup.string().required('Content is required'),
    platform: Yup.string().required('Please select a platform'),
  });

  const handleSubmit = (values) => {
    console.log('Form Submitted', values);
  };

  return (
    <Flex h='100vh' bg='gray.100' direction='column'>
      <HStack p={4} bg='white' shadow='sm'>
        <IconButton icon={<FiArrowLeft />} aria-label='Back' variant='ghost' />
        <Text fontSize='2xl' fontWeight='bold'>Create New Post</Text>
      </HStack>

      <Formik
        initialValues={{ title: '', content: '', platform: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, errors, touched }) => (
          <Form onSubmit={handleSubmit}>
            <VStack spacing={6} p={8} flex={1}>
              <Field name='title'>
                {({ field }) => (
                  <FormControl isInvalid={errors.title && touched.title}>
                    <FormLabel>Post Title</FormLabel>
                    <Input {...field} placeholder='Post Title' />
                    <FormErrorMessage>{errors.title}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name='content'>
                {({ field }) => (
                  <FormControl isInvalid={errors.content && touched.content}>
                    <FormLabel>Post Content</FormLabel>
                    <Textarea {...field} placeholder='Write your post content here...' />
                    <FormErrorMessage>{errors.content}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name='platform'>
                {({ field }) => (
                  <FormControl isInvalid={errors.platform && touched.platform}>
                    <FormLabel>Select Social Media Platform</FormLabel>
                    <Select {...field} placeholder='Select Social Media Platform'>
                      <option value='facebook'>Facebook</option>
                      <option value='twitter'>Twitter</option>
                      <option value='instagram'>Instagram</option>
                      <option value='linkedin'>LinkedIn</option>
                    </Select>
                    <FormErrorMessage>{errors.platform}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <HStack spacing={4} mb={4}>
                <Button leftIcon={<FiImage />} variant='outline'>Add Image</Button>
                <Button leftIcon={<FiVideo />} variant='outline'>Add Video</Button>
              </HStack>

              <Button leftIcon={<FiCalendar />} colorScheme='blue' mb={4} w='full'>Schedule Post</Button>

              <Button type='submit' colorScheme='green' w='full'>Publish Now</Button>
            </VStack>
          </Form>
        )}
      </Formik>
    </Flex>
  );
};

export default CreatePost;
