import React from "react";
import { SafeAreaView } from "react-native";
import { Slot, Link } from "expo-router";

const Header = () => {
    return (
        <SafeAreaView
            style={{
                flexDirection: "row",
                justifyContent: "space-around",
            }}
        >
            <Link href="/app-one-auth">App One</Link>
            <Link href="/app-two-auth">App Two</Link>
        </SafeAreaView>
    );
};

const Layout = () => {
    return (
        <>
            <Header />
            <Slot />
        </>
    );
};

export default Layout;
