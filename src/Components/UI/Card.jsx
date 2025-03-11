import { Box } from '@chakra-ui/react';

const Card = ({ children, ...props }) => (
  <Box bg="purple.50" p={4} borderRadius="2xl" shadow="md" {...props}>
    {children}
  </Box>
);

export default Card;