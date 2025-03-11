import {
  Avatar,
  Box,
  CloseButton,
  Drawer,
  DrawerContent,
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack
} from '@chakra-ui/react'
import {
  FiBell,
  FiMenu
} from 'react-icons/fi'




import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { logo, NAVBAR_ITEMS_DATA } from "../../assets/data"

const SidebarContent = ({ onClose, ...rest }) => {
  const location = useLocation();



  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      overflow={'hidden'}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"

      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        {/* <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text> */}
        <VStack width={'full'} >
          <Image src={logo} width={'70px'} borderRadius={'full'} textAlign={'center'} />
        </VStack>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {NAVBAR_ITEMS_DATA.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          path={link.path}
          isActive={location.pathname === link.path}  // Compare current path with link path
          onClick={onClose}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  )
}







const NavItem = ({ icon, children, isActive, path, ...rest }) => {
  return (
    <Link to={path}>
      <Box

        style={{ textDecoration: 'none' }}
        _focus={{ boxShadow: 'none' }}
        my={2}
      >
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          bg={isActive ? 'primary.400' : 'transparent'}
          color={isActive ? 'white' : 'inherit'}
          _hover={{
            bg: isActive ? 'primary.500' : 'primary.600',
            color: 'white',
          }}
          {...rest}>
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: 'white',
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </Box>
    </Link>
  )
}






















const MobileNav = ({ onOpen, ...rest }) => {

  return (
    <Flex
      ml={{ base: 0, md: 70 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      boxShadow={'lg'}
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        color={'#fff'}
        bgGradient="linear(to-l, #ff0080, #f80,)"
        fontWeight={700}
        icon={<FiMenu style={{
          fontWeight: 800,
          fontSize: "24px"
        }}
          _hover={{
            bgGradient: "linear(to-r, #ff0080, #f80,)"
          }}

        />}
      />
      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold">
        Logo
      </Text>
      <HStack spacing={{ base: '0', md: '6' }}     >
        <IconButton size="lg" variant="ghost" aria-label="open menu" icon={<FiBell />} />

        <Link to={'/profile-settings'} >
          <Avatar

            size="md"
            src={"avatar"}
            border="4px solid white"
            mx="auto"
            name={"name"}
            bgGradient="linear(to-l, #ff0080, #f80,)"
            color={'white'}
            boxShadow={'2xl'}


          />
        </Link>
        {/* </Flex> */}
      </HStack>
    </Flex>
  )
}

const SidebarWithHeader = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { isAuthenticated } = useSelector(state => state.auth);

  return (

    <Box minH="100vh" minW={'100vw'} bg={'#fff'}>
      {
        isAuthenticated && (
          <>
            <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
            <Drawer
              isOpen={isOpen}
              placement="left"
              onClose={onClose}
              returnFocusOnClose={false}
              onOverlayClick={onClose}
              size="full">
              <DrawerContent>
                <SidebarContent onClose={onClose} />
              </DrawerContent>
            </Drawer>
            <MobileNav onOpen={onOpen} />
          </>
        )
      }
      <Box ml={isAuthenticated ? { base: 0, md: 60 } : 0} p={isAuthenticated ? 4 : 0}  >
        {children}
      </Box>
    </Box>
  )
}

export default SidebarWithHeader
