import React from "react";
import { View,Text, StyleSheet,Image } from "react-native";

export const ImageIntentsScreen = ({route, navigation})=> {
    return(
        <View style = {styles.constainerStyle}>
            <Image
                style = {{width: 200, height: 300}}
                source = {{uri: route.params.fileUri}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    constainerStyle: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
})