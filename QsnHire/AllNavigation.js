import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './Pages/WelcomeScreen';
import HomeScreen from './Pages/HomeScreen';
import Hire from './Pages/Hire';
import Vendor from './Pages/Vendor'; // Your home screen component

const Stack = createStackNavigator();

export default function NavigatingPage (){
  return (
    <NavigationContainer>
      {/* Set status bar to auto */}
      
      <Stack.Navigator>
            <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }} // Set header to none for the HomeScreen
          />
        <Stack.Screen
            name="Vendor"
            component={Vendor}
            options={{ headerShown: false }} // Set header to none for the HomeScreen
          />
          <Stack.Screen
            name="Hire"
            component={Hire}
            options={{ headerShown: false }} // Set header to none for the HomeScreen
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

