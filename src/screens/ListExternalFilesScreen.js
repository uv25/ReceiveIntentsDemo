import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import {  } from "react-native-gesture-handler";

export const ExternalFilesList = ({route, navigation})=> {
    const [selectedId, setSelectedId] = useState(null);

    const onItemSelected = (params) => {
        console.log("Button click event working" + params.item.contentUri);
        if(params.item.mimeType == 'application/pdf')
        {
          navigation.push("PdfScreen", {fileUri: params.item.contentUri});
        }
        else{
          navigation.push("Image", {fileUri: params.item.contentUri});
        }
    }
    
    const renderItem = ({item}) => (
        //<ListItem fileName = {item.fileName}/>
        <View style = {styles.listItemStyle}>
            <TouchableOpacity
                onPress = {() => onItemSelected({item})}>
                <Text>{item.fileName}</Text>
            </TouchableOpacity>
        </View>
    )
    return(
        <View style = {styles.containerStyle}>
            <FlatList
                data = {route.params.filesList}
                renderItem = {renderItem}
                keyExtractor = {(item) => item.contentUri} />
        </View>
    );
}

const ListItem = ({fileName}) => {
    // return(
    //     // <View style = {styles.listItemStyle}>
    //     //     <TouchableOpacity>
    //     //         <Text>{fileName}</Text>
    //     //     </TouchableOpacity>
    //     // </View>
    // );
}

const styles= StyleSheet.create({
    containerStyle: {
        flex: 1,
        padding: 10,
    },
    listItemStyle: {
        padding: 10,
    }
})