import React from "react";
import { useEffect } from "react";
import { View, Text, Alert } from "react-native";

import ReceiveSharingIntent from 'react-native-receive-sharing-intent';
import { externalFile } from "../../App";
import { Home } from "./Home";

export const FlashScreen = ({navigation})=> {
    var externalFile;
    var externalFileMimetype;
    ReceiveSharingIntent.getReceivedFiles(files => {
        // files returns as JSON Array example
        //[{ filePath: null, text: null, weblink: null, mimeType: null, contentUri: null, fileName: null, extension: null }]
        console.log(files);
        externalFile = files[0].contentUri;
        externalFileMimetype = files[0].mimeType;
        // if(externalFileMimetype == 'application/pdf')
        // {
        //   navigation.push("PdfScreen", {fileUri: externalFile});
        // }
        // else{
        //   navigation.push("Image", {fileUri: externalFile});
        // }
        navigation.navigate("ExternalFilesList", {filesList: files});
      },
      (error) =>{
        Alert.alert('Something went wrong!', 'Unable to import files. Please try again.');
      }, 
      'ShareMedia' // share url protocol (must be unique to your app, suggest using your apple bundle id)
    );

    useEffect(() => {
        console.log("using hooks");
        if(externalFile === undefined)
        {
            navigation.push("Home");
        }
        
        return () => {
            ReceiveSharingIntent.clearReceivedFiles();
            externalFile = undefined;
            externalFileMimetype = undefined;
        };
      },[]);
    return(
        <View>
            <Text>Flash</Text>
        </View>
    );
}