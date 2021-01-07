import React, {useReducer, createContext} from 'react';
import {View, Text} from 'react-native';
import {initialState, reducer as NotesReducer} from '../Reducer/NotesReducer';
export const noteContext = createContext();

export const NotesProvider = ({children}) => {
  const [state, dispatch] = useReducer(NotesReducer, initialState);
  return (
    <noteContext.Provider value={{state, dispatch}}>
      {children}
    </noteContext.Provider>
  );
};
