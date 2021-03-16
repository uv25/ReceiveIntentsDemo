import React from 'react';
import 'react-native-gesture-handler';

import { StyleSheet, ScrollView, View, Text } from 'react-native';

import { Header, Colors} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { create } from 'react-test-renderer';

import { Home } from "./src/screens/Home"
import { ImageIntentsScreen } from "./src/screens/ImageIntentsScreen";
import { FlashScreen } from "./src/screens/FlashScreen";
import {PdfScreen} from"./src/screens/PdfIntentsScreen"
import {ExternalFilesList  } from "./src/screens/ListExternalFilesScreen";
import { useEffect } from 'react';

import firebase from "firebase/app";

import ReceiveSharingIntent from 'react-native-receive-sharing-intent';

const Stack = createStackNavigator();


const App = ()=> {

  //var externalFile;
  useEffect(()=> {
    //var firebase = require("firebase/app");
    // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyC0OFyDRkEudcrFchAqZuT1B7aGoPIrU8I",
    authDomain: "file-upload-demo-4cff8.firebaseapp.com",
    databaseURL: "https://file-upload-demo-4cff8-default-rtdb.firebaseio.com",
    projectId: "file-upload-demo-4cff8",
    storageBucket: "file-upload-demo-4cff8.appspot.com",
    messagingSenderId: "725684852936",
    appId: "1:725684852936:web:7755cdc5e8eac1fec06dfd",
    measurementId: "G-5B2TNYG3WW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  }, []);
  
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Flash">
        <Stack.Screen 
          name = "Home" 
          component = {Home} 
          options = {{title: "Home Screen"}}/>
        <Stack.Screen 
          name = "Image" 
          component = {ImageIntentsScreen} 
          options= {{title: "Image Screen"}}/>

        <Stack.Screen 
          name = "Flash"
          component = {FlashScreen}
          />
        
        <Stack.Screen
          name = "PdfScreen"
          component = {PdfScreen}
          options = {{title: "PDF Screen"}}/>

        <Stack.Screen
          name = "ExternalFilesList"
          component = {ExternalFilesList}
          options = {{title: "List"}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
