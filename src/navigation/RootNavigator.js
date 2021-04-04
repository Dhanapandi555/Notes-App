import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ListNotes from '../screens/ListNotes';
import Create from '../screens/Create';
import Show from '../screens/show';

export default function RootNavigator() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="notes">
        <Stack.Screen
          name="notes"
          component={ListNotes}
          options={{headerTitle: 'Notes', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="create"
          component={Create}
          options={{headerTitle: 'Create Notes', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="show"
          component={Show}
          options={{headerTitle: 'Notes', headerTitleAlign: 'center'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
