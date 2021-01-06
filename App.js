import React from 'react';
import {View, Text} from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';
import {noteContext} from './src/context/NotesContext';
export default function App() {
  return (
    <noteContext.Provider>
      <RootNavigator />
    </noteContext.Provider>
  );
}
