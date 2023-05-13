import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Details: React.FC = () => {
    return (
        <View style={{ padding: 16 }}>
            <Text style={{ marginBottom: 16 }}>Stack Screen</Text>
            <Text style={{ marginBottom: 16 }}>
                Native Stack Navigator provides a way for your app to transition
                between screens where each new screen is placed on top of a
                stack.
            </Text>
            <Link href="./more-info">Link to more info screen</Link>
        </View>
    );
};

export default Details;
