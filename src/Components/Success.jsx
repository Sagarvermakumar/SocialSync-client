import React from 'react';
import { Box, VStack, Icon, Text, Heading, Button } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

const Success = () => {
    const navigate = useNavigate()
    const handleBackToHome = () => {
        // Navigate to the home page or any other page
        console.log("Back to Home");
        navigate('/')
    };

    return (
 
        <Box
            d="flex"
            alignItems="center"
            justifyContent="center"
            h="80vh"
            width={'100%'}
            bg="gray.50"
            p={8}
            // p={'50px'}
        >
            <VStack
                bg="white"
                boxShadow="lg"
                borderRadius="md"
                p={6}
                spacing={4}
                textAlign="center"
                maxW="md"
                w="100%"
            >
                {/* Success Icon */}
                <Icon as={CheckCircleIcon} boxSize={16} color="green.500" />

                {/* Heading */}
                <Heading size="lg" color="gray.800">
                    Payment Successful
                </Heading>

                {/* Description */}
                <Text color="gray.600" fontSize="md">
                    Thank you for your purchase! Your transaction was completed successfully.
                </Text>

                {/* Back to Home Button */}
                <Button
                    colorScheme="green"
                    variant="solid"
                    onClick={handleBackToHome}
                >
                    Back to Home
                </Button>
            </VStack>
        </Box>
    );
};

export default Success;
