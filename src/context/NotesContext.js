import React, {createContext} from 'react';
import {View, Text} from 'react-native';

export const noteContext = createContext();
export default function NotesContext() {
  return (
    <View>
      <Text></Text>
    </View>
  );
}
