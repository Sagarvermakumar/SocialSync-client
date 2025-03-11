import React from 'react';
import { Box, VStack, Icon, Text, Heading, Button } from '@chakra-ui/react';
import { WarningTwoIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
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
            bg="gray.50"
            p={8}
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
                {/* Warning Icon */}
                <Icon as={WarningTwoIcon} boxSize={16} color="red.500" />

                {/* Heading */}
                <Heading size="lg" color="gray.800">
                    Page Not Found
                </Heading>

                {/* Description */}
                <Text color="gray.600" fontSize="md">
                    Sorry, the page you are looking for does not exist or has been moved.
                </Text>

                {/* Go to Home Button */}
                <Button
                    colorScheme="red"
                    variant="solid"
                    onClick={handleBackToHome}
                >
                    Go to Home
                </Button>
            </VStack>
        </Box>
    );
};

export default NotFoundPage;
