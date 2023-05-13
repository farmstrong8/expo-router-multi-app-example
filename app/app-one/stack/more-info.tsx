import React from "react";
import { Text, View } from "react-native";

const MoreInfo: React.FC = () => {
    return (
        <View style={{ padding: 16 }}>
            <Text style={{ marginBottom: 16 }}>More Info Screen</Text>
            <Text style={{ marginBottom: 16 }}>
                Product Name: iPhone 13 Pro
            </Text>
            <Text>
                Product Description: The iPhone 13 Pro is the most advanced
                iPhone yet. It features a powerful A15 Bionic chip, a stunning
                Super Retina XDR display, and a triple-lens rear camera system
                that takes stunning photos and videos. The iPhone 13 Pro is also
                available in a variety of colors and storage capacities. Order
                yours today! This paragraph is tailored to the specific product,
                the iPhone 13 Pro. It includes all of the essential information
                that a customer needs to know about the product, as well as a
                call to action that encourages customers to buy it.
            </Text>
        </View>
    );
};

export default MoreInfo;
