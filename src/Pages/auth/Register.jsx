'use client'

import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
    HStack,
    Avatar,
    AvatarBadge,
    IconButton,
    Center,
    Text,
    Select,
    Box,
    Image,
    FormHelperText,
    Tooltip,
    Icon,
} from '@chakra-ui/react';
import { FiCamera } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { rl } from '../../assets/data'
import { useDispatch, useSelector } from 'react-redux'
import { createUser } from '../../redux/auth/authActions';
export default function RegisterUser() {

    const dispatch = useDispatch();
    const { loading, error } = useSelector(state => state.auth);
    console.log(loading, error)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        age: '',
        gender: '',
        avatar: '',
    });

    const [errors, setErrors] = useState({});

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({ ...formData, avatar: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!emailPattern.test(formData.email)) {
            newErrors.email = 'Email is not valid';
        }
        if (!formData.password) newErrors.password = 'Password is required';
        if (!formData.age) newErrors.age = 'Age is required';
        if (!formData.gender) newErrors.gender = 'Gender is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            console.log('Form submitted:', formData);
            dispatch(createUser(formData))
        }
    };

    return (
        <Flex minH={'80vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.900')} p={8}>
            <Flex maxW={'7xl'} w={'full'} bg={useColorModeValue('white', 'gray.700')} rounded={'xl'} boxShadow={'2xl'} overflow={'hidden'}>
                {/* Left side image */}
                <Box flex={2.5} display={{ base: 'none', md: 'block' }}>
                    <Image src={rl} alt="Habit Tracker" objectFit="cover" w={'full'} />
                </Box>
                {/* Right side form */}
                <Box flex={1} p={8}>
                    <Heading
                        fontSize={'20px'}
                        textAlign={'center'}
                        color={'transparent'}
                        backgroundImage="linear-gradient(to right, #ff0080,#ff0080,rgb(8, 132, 240), #ff0080, #ff0080)"
                        backgroundClip="text"
                    >
                        Register to AI-Powered Habit Tracker
                    </Heading>
                    <Stack spacing={4} mt={4}>
                        <FormControl id="avatar">
                            <Center>
                                <Avatar size="xl" src={formData.avatar || "https://bit.ly/sage-adebayo"}>
                                    <AvatarBadge as={IconButton} size="sm" rounded="full" icon={<FiCamera />} onClick={() => document.getElementById('fileInput').click()} />
                                </Avatar>
                                <Input type="file" id="fileInput" hidden onChange={handleImageChange} />
                            </Center>
                        </FormControl>
                        <FormControl id="name" isRequired isInvalid={errors.name}>
                            <FormLabel>Name</FormLabel>
                            <Input placeholder="Enter your name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                            <FormHelperText color={'rebeccapurple'}>{errors.name}</FormHelperText>
                        </FormControl>
                        <FormControl id="email" isRequired isInvalid={errors.email}>
                            <FormLabel>Email address</FormLabel>
                            <Input placeholder="your-email@example.com" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                            <FormHelperText color={'rebeccapurple'}>{errors.email}</FormHelperText>

                        </FormControl>
                        <FormControl id="password" isRequired isInvalid={errors.password}>
                            <FormLabel>Password</FormLabel>
                            <Input placeholder="Enter your password" type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                            <FormHelperText color={'rebeccapurple'}>{errors.password}</FormHelperText>

                        </FormControl>
                        <FormControl id="age" isRequired isInvalid={errors.age}>
                            <FormLabel>Age</FormLabel>
                            <Input placeholder="Enter your age" type="number" value={formData.age} onChange={(e) => setFormData({ ...formData, age: e.target.value })} />
                            {
                                errors.age && <HStack ml={2} align={'center'}  >
                                    <FormHelperText color={'rebeccapurple'}>{errors.age}</FormHelperText>
                                    <Tooltip label="Welcome home" placement="bottom">
                                        <Icon name="phone" mt={2} />
                                    </Tooltip>
                                </HStack>
                            }
                        </FormControl>
                        <FormControl id="gender" isRequired isInvalid={errors.gender}>
                            <FormLabel>Gender</FormLabel>
                            <Select placeholder="Select gender" value={formData.gender} onChange={(e) => setFormData({ ...formData, gender: e.target.value })}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </Select>
                            {
                                errors.gender && <HStack ml={2} align={'center'}  >
                                    <FormHelperText color={'rebeccapurple'}>{errors.gender}</FormHelperText>
                                    <Tooltip label="Welcome home" placement="bottom">
                                        <Icon name="phone" mt={2} />
                                    </Tooltip>
                                </HStack>
                            }

                        </FormControl>
                        <Button bg={'blue.400'} color={'white'} w="full" _hover={{ bg: 'blue.500' }} onClick={handleSubmit}>
                            Register
                        </Button>
                        <Text textAlign={'center'}>
                            Already a user? <Link to={'/login'} style={{ color: 'blue' }}>Login</Link>
                        </Text>
                    </Stack>
                </Box>
            </Flex>
        </Flex>
    );
}
