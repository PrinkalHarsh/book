import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import SplashScreen from './app/screens/splash-screen';
import OnbordingScreen from './app/screens/onbording-screen';
import WelcomeScreen from './app/screens/welcome-screen';
import DiscoverScreen from './app/screens/discover-screen';
import LibraryScreen from './app/screens/library-screen';
import StoreScreen from './app/screens/store-screen';
import ProfileScreen from './app/screens/profile-screen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="onbording" component={OnbordingScreen} />
        <Stack.Screen name="welcome" component={WelcomeScreen} />
        <Stack.Screen name="discover" component={DiscoverScreen} />
        <Stack.Screen name="library" component={LibraryScreen} />
        <Stack.Screen name="store" component={StoreScreen} />
        <Stack.Screen name="profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
