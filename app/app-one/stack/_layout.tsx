import { Stack } from "expo-router";

const Layout: React.FC = () => {
    return (
        <Stack>
            <Stack.Screen name="home" />
        </Stack>
    );
};

export default Layout;
