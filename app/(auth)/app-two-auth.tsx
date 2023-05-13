import React from "react";
import { View, Pressable, Text } from "react-native";
import { AppTarget, UserType, useAuth } from "../../providers";

const AppTwoAuth: React.FC = () => {
    const { signIn } = useAuth();

    const onPress = () => {
        signIn({
            firstName: "Rubeus",
            lastName: "Hagrid",
            userType: UserType.Director,
            appTarget: AppTarget.AppTwo,
        });
    };

    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text style={{ marginBottom: 16 }}>App Two Auth</Text>
            <Pressable onPress={onPress}>
                <Text>Sign In</Text>
            </Pressable>
        </View>
    );
};

export default AppTwoAuth;
