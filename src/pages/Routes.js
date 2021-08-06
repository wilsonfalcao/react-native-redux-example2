import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Pages registered
import Main from "./main/Main";

export default function Routes() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>

        <Stack.Navigator initialRouteName="main"
        screenOptions={{
          headerShown:false,
        }}
        >
          <Stack.Screen name="main" component={Main}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}