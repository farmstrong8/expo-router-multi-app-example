import React from "react";
import { Text } from "react-native";
import { Box } from "../../components/box";
import { Link } from "expo-router";

const Home: React.FC = () => {
    return (
        <Box>
            <Text>Home Screen</Text>
            <Text>
                This is a link to a stack example:{" "}
                <Link href="./stack">stack</Link>
            </Text>
        </Box>
    );
};

export default Home;
