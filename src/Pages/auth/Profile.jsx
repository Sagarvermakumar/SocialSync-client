import React, { useEffect, useState } from "react";
import {
  Box,
  Avatar,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Switch,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useToast,
  Text,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { EditIcon, SettingsIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/auth/authActions";

const ProfileSettingsPage = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, error } = useSelector((state => state.auth));
  console.log(user)
  const name = user?.user?.name || "";
  const email = user?.user?.email || "";
  const age = user?.user?.age || "";
  const gender = user?.user?.gender || "";
  const avatar = user?.user?.avatar || "";




  const [profile, setProfile] = useState({
    name: "",
    email: "",
    profilePicture: "",
    age: "",
    gender: "",
  });

  console.log(user);
  
  useEffect(() => {
    if (user) {
      setProfile({
        name: name || "",
        email: email || "",
        profilePicture: avatar || "",
        age: age || "",
        gender: gender || "",
      });
    }
  }, [age, avatar,name,email,gender,user]);



  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSettingsChange = (key) => {
    setSettings({ ...settings, [key]: !settings[key] });
  };

  const handleSaveProfile = () => {
    console.log("Profile Data was changed")
  };

  const handleSaveSettings = () => {
    console.log("Settings Saved")
  };

  // Logout Function
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
    // navigate("/login");
  };

  return (
    <Box maxW="900px" mx="auto" my={8} p={4}>
      {/* Profile Header with Gradient */}
      <Box
        bgGradient="linear(to-r, #ff0080, #f80)"
        borderRadius="lg"
        p={6}
        textAlign="center"
        boxShadow="xl"
        color="white"
        position="relative"
      >
        <Avatar
          size="2xl"
          src={profile.profilePicture}
          border="4px solid white"
          mt={-16}
          mx="auto"
          name={name}
          bgGradient="linear(to-l, #ff0080, #f80,)"
          color={'white'}
          boxShadow={'2xl'}

        />
        <Heading fontSize="2xl" mt={4}>{profile.name}</Heading>
        <Text fontSize="md">{profile.email}</Text>
      </Box>

      {/* Tabs for Profile and Settings */}
      <Tabs isFitted gap={4} mt={6} variant="soft-rounded" colorScheme="pink">
        <TabList>
          <Tab boxShadow={"lg"} _selected={{ bgGradient: "linear(to-r, #ff0080, #f80)", color: "white" }}>
            <EditIcon mr={2} /> Profile
          </Tab>
          <Tab ml={4} boxShadow={'lg'} _selected={{ bgGradient: "linear(to-l, #ff0080, #f80)", color: "white" }}>
            <SettingsIcon mr={2} /> Settings
          </Tab>
        </TabList>

        <TabPanels>
          {/* Profile Tab */}
          <TabPanel>
            <VStack
              spacing={5}
              p={6}
              bg="white"
              borderRadius="lg"
              boxShadow="lg"
              border={'1px solid lightgray'}
              mt={4}
            >
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  name="name"
                  value={profile.name}
                  onChange={handleProfileChange}
                  placeholder="Enter your name"
                  type="text"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  name="email"
                  value={profile.email}
                  onChange={handleProfileChange}
                  placeholder="Enter your email"
                  type="email"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Gender</FormLabel>
                <Input
                  name="gender"
                  value={profile.gender}
                  onChange={handleProfileChange}
                  placeholder="Enter your Genter"
                  type="text"
                  textTransform={'capitalize'}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Gender</FormLabel>
                <Input
                  name="age"
                  value={profile.age}
                  onChange={handleProfileChange}
                  placeholder="Enter your age"
                  type="number"
                />
              </FormControl>
              <Button bgGradient="linear(to-r, #ff0080, #f80)" color="white" w="full" _hover={{ bg: "#e60073" }} onClick={handleSaveProfile}>
                Save Profile
              </Button>
            </VStack>
          </TabPanel>

          {/* Settings Tab */}
          <TabPanel>
            <VStack
              spacing={5}
              p={6}
              bg="white"
              borderRadius="lg"
              boxShadow="md"
              align="start"
            >
              <FormControl display="flex" alignItems="center" justifyContent="space-between">
                <FormLabel mb="0">Enable Notifications</FormLabel>
                <Switch
                  isChecked={settings.notifications}
                  onChange={() => handleSettingsChange("notifications")}
                  colorScheme="pink"
                  size="lg"
                />
              </FormControl>
              <FormControl display="flex" alignItems="center" justifyContent="space-between">
                <FormLabel mb="0">Dark Mode</FormLabel>
                <Switch
                  isChecked={settings.darkMode}
                  onChange={() => handleSettingsChange("darkMode")}
                  colorScheme="orange"
                  size="lg"
                />
              </FormControl>
          
              <Button bg="#f80" color="white" w="full" _hover={{ bg: "#e67000" }} 
              onClick={() => navigate('/change-password')}
              >
                Change Password
              </Button>
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>

      {/* Logout Button */}
      <Flex justify="center" mt={6}>
        <Button
          bgGradient="linear(to-l, #ff0080, #f80)"
          color="white"
          _hover={{ bg: "red.600" }}
          w="200px"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Flex>
    </Box>
  );
};

export default ProfileSettingsPage;
