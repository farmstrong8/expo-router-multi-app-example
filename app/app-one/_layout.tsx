import React from "react";
import { Tabs } from "expo-router";

const Layout: React.FC = () => {
    return (
        <Tabs
            screenOptions={{
                headerTitle: "App One",
            }}
        >
            <Tabs.Screen name="home" options={{}} />
            <Tabs.Screen name="profile" options={{}} />
            <Tabs.Screen
                // Name of the route to hide.
                name="stack"
                options={{
                    // This tab will no longer show up in the tab bar.
                    href: null,
                }}
            />
        </Tabs>
    );
};

export default Layout;
