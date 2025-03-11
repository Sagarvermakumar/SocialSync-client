import { useState } from "react";
import { Box, Button, Input, FormControl, FormLabel, VStack, Heading, useToast, useDisclosure } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { changePassword } from "../../redux/auth/authActions";

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const toast = useToast();
    const dispatch = useDispatch();
    const handleChangePassword = async () => {
        if (!oldPassword || !newPassword) {
            toast.error("Please fill in both fields!")
            return;
        }
        const data = {
            oldPassword,
            newPassword
        }
        dispatch(changePassword(data))
    };

    return (
        <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            height={'90vh'}
        >


            <Box p={8} shadow="md" borderWidth="1px" borderRadius="lg" width="100%" maxW="380px"

            >
                <Heading fontSize="xl" mb={4}>🔐 Change Password</Heading>
                <VStack spacing={4}>
                    <FormControl>
                        <FormLabel>Old Password</FormLabel>
                        <Input
                            type="password"
                            placeholder="Enter Old Password"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel>New Password</FormLabel>
                        <Input
                            type="password"
                            placeholder="Enter New Password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </FormControl>

                    <Button
                        my={4}
                        bgGradient="linear(to-l, #ff0080, #f80)"
                        color="white"
                        _hover={{ bg: "red.600" }} width="full" onClick={handleChangePassword}>
                        Update Password
                    </Button>
                </VStack>
            </Box>
        </Box>
    );
};

export default ChangePassword;
