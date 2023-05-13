import React from "react";
import { View, Pressable, Text } from "react-native";
import { AppTarget, UserType, useAuth } from "../../providers";

const AppOneAuth: React.FC = () => {
    const { signIn } = useAuth();

    const onPress = () => {
        signIn({
            firstName: "Harry",
            lastName: "Potter",
            userType: UserType.Customer,
            appTarget: AppTarget.AppOne,
        });
    };

    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text style={{ marginBottom: 16 }}>App One Auth</Text>
            <Pressable onPress={onPress}>
                <Text>Sign In</Text>
            </Pressable>
        </View>
    );
};

export default AppOneAuth;
