import { Heading as ChakraHeading } from '@chakra-ui/react';

const Heading = ({ children, ...props }) => (
  <ChakraHeading color="purple.600" {...props}>
    {children}
  </ChakraHeading>
);

export default Heading;