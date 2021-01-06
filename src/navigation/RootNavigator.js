import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ListNotes from '../screens/ListNotes';
export default function RootNavigator() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="notes" headerMode="none">
        <Stack.Screen name="notes" component={ListNotes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}