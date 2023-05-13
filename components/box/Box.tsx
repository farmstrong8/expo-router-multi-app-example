import { View } from "react-native";

export const Box: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {children}
        </View>
    );
};
