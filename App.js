import React from 'react';
import {View, Text} from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';
import {NotesProvider} from './src/context/NotesContext';
export default function App() {
  return (
    <NotesProvider>
      <RootNavigator />
    </NotesProvider>
  );
}
