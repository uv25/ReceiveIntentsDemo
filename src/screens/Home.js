import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { color } from "react-native-reanimated";

export const Home = ()=> {
    return(
        <View style = {styles.containerStyle}>
            <Text style = {{color: "black", fontSize: 20}}>Welcome to Home Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white"
    }
})