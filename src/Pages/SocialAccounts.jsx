import React, { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  VStack,
  IconButton,
  HStack,
  useBreakpointValue,
  Wrap,

} from '@chakra-ui/react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiArrowLeft } from 'react-icons/fi';
import {Link} from 'react-router-dom'
import { useDispatch, } from 'react-redux'
import { connectSocialAccount } from '../redux/connection/actions';
const ConnectSocialMedia = () => {
  const buttonSize = useBreakpointValue({ base: 'sm', md: 'md' });
  const dispatch = useDispatch()

  const handleConnect = platrom => {
    console.log(`Trying to connect ${platrom}`);
    dispatch(connectSocialAccount(platrom))
  }
  // const handleConnect = (platform) => {
  //   let url = '';
  //   switch (platform) {
  //     case 'facebook':
  //       url = `https://www.facebook.com/v3.2/dialog/oauth?response_type=code&redirect_uri=http://localhost:5173/api/auth/facebook/callback&client_id=2434590090219696`;
  //       break;
  //     case 'twitter':
  //       url = 'https://api.twitter.com/oauth/authenticate';
  //       break;
  //     case 'instagram':
  //       url = 'https://api.instagram.com/oauth/authorize';
  //       break;
  //     case 'linkedin':
  //       url = 'https://www.linkedin.com/oauth/v2/authorization';
  //       break;
  //     default:
  //       return;
  //   }
  //   // Open the URL in a new popup window
  //   window.open(url, '_blank', 'width=600,height=600');
  // };

  return (
    <Flex h='100vh' bg='gray.100' direction='column'>
      <HStack p={4} bg='white' shadow='sm'>
        <IconButton icon={<FiArrowLeft />} aria-label='Back' variant='ghost' />
        <Text fontSize='2xl' fontWeight='bold'>Connect Social Media Accounts</Text>
      </HStack>

      <VStack spacing={6} p={8} flex={1}>
        <Text fontSize='lg'>Choose a platform to connect:</Text>
        <Wrap spacing={4} justify='center'>
          <Link to={'http://localhost:4000/api/v1/social-accounts/connect/facebook'} size={buttonSize} leftIcon={<FiFacebook />} colorScheme='facebook'>Connect Facebook</Link>
          <a size={buttonSize} leftIcon={<FiTwitter />} colorScheme='twitter' onClick={() => handleConnect('twitter')}>Connect Twitter</a>
          <a size={buttonSize} leftIcon={<FiInstagram />} bg='#E4405F' color='white' onClick={() => handleConnect('instagram')}>Connect Instagram</a>
          <a size={buttonSize} leftIcon={<FiLinkedin />} colorScheme='linkedin' onClick={() => handleConnect('linkedin')}>Connect LinkedIn</a>
        </Wrap>
      </VStack>


    </Flex>
  );
};

export default ConnectSocialMedia;
