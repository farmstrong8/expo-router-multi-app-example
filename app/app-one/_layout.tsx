import React from "react";
import { Tabs } from "expo-router";

const Layout = () => {
    return (
        <Tabs
            screenOptions={{
                headerTitle: "App One",
            }}
        >
            <Tabs.Screen name="home" options={{}} />
            <Tabs.Screen name="profile" options={{}} />
        </Tabs>
    );
};

export default Layout;
