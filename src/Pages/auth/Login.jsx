'use client'

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { useState } from 'react'
import { MdPerson } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginUser } from "../../redux/auth/authActions"; // Import action

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const { loading, } = useSelector((state) => state.auth)
  // const { } = useContext(MyContext)
  const handleLogin = (e) => {
    e.preventDefault();
   dispatch(loginUser({email,password}))
  }
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <HStack>
            <MdPerson size={'35px'} />
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign In
            </Heading>
          </HStack>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4} as={'form'} onSubmit={handleLogin} >

            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button

                type='submit'
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                {loading ? "Loading.." : "Login"}
              </Button>
            </Stack>
            <Text textAlign={'center'}>
              New User? <Link to={'/register'} style={{ color: 'blue' }}>Register</Link>
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}