import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer } from "react-navigation";
import InfoScreen from './src/InfoScreen';
import IntroScreen from './src/IntroScreen';
import TabScreen from './src/TabScreen';
import PdfView from './src/PdfView'
import React, {Component} from 'react';

const Stack = createStackNavigator()

function RootStack() {
    return (
    <Stack.Navigator
      initialRouteName="Intro"
      screenOptions={{ gestureEnabled: false }}
      options={{ headerShown: false }}
    >
      <Stack.Screen
        name="Intro"
        component={IntroScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Info"
        component={InfoScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Tabs"
        component={TabScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Pdf"
        component={PdfView}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
    return (
        <NavigationContainer>
            <RootStack />
        </NavigationContainer>
    );
}

