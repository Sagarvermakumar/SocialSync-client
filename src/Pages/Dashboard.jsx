import { Box, Button, Flex, Grid, HStack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import { FiBarChart2, FiCalendar, FiGrid, FiHash, FiLayers, FiPlus, FiUsers } from 'react-icons/fi';

const MotionBox = motion(Box);

const DashboardPage = () => {
  return (
    <Flex h='100vh' direction='column' bg='gray.100'>
      {/* Header */}
      <HStack p={4} bg='white' shadow='sm' justify='space-between'>
        <Text fontSize='2xl' fontWeight='bold'>Social Media Planner Dashboard</Text>
        <Button leftIcon={<FiPlus />} colorScheme='blue'>New Post</Button>
      </HStack>

      {/* Main Content */}
      <Grid templateColumns='repeat(auto-fill, minmax(300px, 1fr))' gap={6} p={4}>
        {/* Content Calendar */}
        <MotionBox p={4} bg='white' rounded='lg' shadow='sm' whileHover={{ scale: 1.05 }}>
          <HStack>
            <FiCalendar size={24} />
            <Text fontSize='lg' fontWeight='medium'>Content Calendar</Text>
          </HStack>
          <Text mt={2}>Plan and schedule your posts with drag-and-drop features.</Text>
        </MotionBox>

        {/* Analytics Dashboard */}
        <MotionBox p={4} bg='white' rounded='lg' shadow='sm' whileHover={{ scale: 1.05 }}>
          <HStack>
            <FiBarChart2 size={24} />
            <Text fontSize='lg' fontWeight='medium'>Analytics Dashboard</Text>
          </HStack>
          <Text mt={2}>Get insights on post engagement, reach, and performance.</Text>
        </MotionBox>

        {/* Team Collaboration */}
        <MotionBox p={4} bg='white' rounded='lg' shadow='sm' whileHover={{ scale: 1.05 }}>
          <HStack>
            <FiUsers size={24} />
            <Text fontSize='lg' fontWeight='medium'>Team Collaboration</Text>
          </HStack>
          <Text mt={2}>Invite team members and manage roles and permissions.</Text>
        </MotionBox>

        {/* Content Library */}
        <MotionBox p={4} bg='white' rounded='lg' shadow='sm' whileHover={{ scale: 1.05 }}>
          <HStack>
            <FiLayers size={24} />
            <Text fontSize='lg' fontWeight='medium'>Content Library</Text>
          </HStack>
          <Text mt={2}>Store and manage media assets for future posts.</Text>
        </MotionBox>

        {/* Hashtag Suggestions */}
        <MotionBox p={4} bg='white' rounded='lg' shadow='sm' whileHover={{ scale: 1.05 }}>
          <HStack>
            <FiHash size={24} />
            <Text fontSize='lg' fontWeight='medium'>Hashtag Suggestions</Text>
          </HStack>
          <Text mt={2}>Get trending hashtags or save custom sets.</Text>
        </MotionBox>

        {/* Multi-Account Management */}
        <MotionBox p={4} bg='white' rounded='lg' shadow='sm' whileHover={{ scale: 1.05 }}>
          <HStack>
            <FiGrid size={24} />
            <Text fontSize='lg' fontWeight='medium'>Multi-Account Management</Text>
          </HStack>
          <Text mt={2}>Manage multiple social media accounts from a single dashboard.</Text>
        </MotionBox>
      </Grid>
    </Flex>
  );
};

export default DashboardPage;
