import React from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";
import { AuthProvider } from "../providers";
import { SplashScreen, Slot } from "expo-router";

const Layout = () => {
    const animation = React.useRef(null);
    const [isReady, setReady] = React.useState(false);

    React.useEffect(() => {
        // Perform some sort of async data or asset fetching.
        setTimeout(() => {
            setReady(true);
            SplashScreen.hideAsync();
        }, 5000);
    }, []);

    if (!isReady) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <LottieView
                    autoPlay
                    ref={animation}
                    style={{
                        width: 200,
                        height: 200,
                        backgroundColor: "#FAFAFA",
                    }}
                    source={require("../assets/waiting-dashboard.json")}
                />
            </View>
        );
    }

    return (
        <AuthProvider>
            <Slot />
        </AuthProvider>
    );
};

export default Layout;
