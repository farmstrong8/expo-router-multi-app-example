import React from "react";
import { Pressable, Text } from "react-native";
import { Box } from "../../components/box";
import { useAuth } from "../../providers";

const Profile: React.FC = () => {
    const { user, signOut } = useAuth();
    const welcomeMessage = `Welcome ${user?.firstName}!`;

    return (
        <Box>
            <Text>Profile Screen</Text>
            <Text>{welcomeMessage}</Text>
            <Pressable onPress={signOut}>
                <Text>Sign Out</Text>
            </Pressable>
        </Box>
    );
};

export default Profile;
