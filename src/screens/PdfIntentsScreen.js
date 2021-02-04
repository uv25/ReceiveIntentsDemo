import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Pdf from 'react-native-pdf';

export const PdfScreen = ({route, navigation})=> {
    return(
        <View style = {styles.constainerStyle}>
            <Pdf style = {{flex: 1}}
                    source={{uri: route.params.fileUri}}
                    onLoadComplete={(numberOfPages,filePath)=>{
                        console.log(`number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages)=>{
                        console.log(`current page: ${page}`);
                    }}
                    onError={(error)=>{
                        console.log(error);
                    }}
                    onPressLink={(uri)=>{
                        console.log(`Link presse: ${uri}`)
                    }}
                    style={styles.pdfStyle}/>
        </View>
    );
}

const styles = StyleSheet.create({
    constainerStyle: {
        flex: 1
    },
    pdfStyle: {
        flex: 1,
    }
})