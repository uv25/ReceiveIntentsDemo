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
import { useEffect } from 'react';

import ReceiveSharingIntent from 'react-native-receive-sharing-intent';

const Stack = createStackNavigator();


export const App = ()=> {

  //var externalFile;

  
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
