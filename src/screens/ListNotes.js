import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {noteContext} from '../context/NotesContext';
import {Icon} from 'react-native-elements';

export default function ListNotes() {
  const {state, dispatch} = useContext(noteContext);
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={{
          // position: 'absolute',
          // right: 8,

          width: 50,
          height: 50,
          backgroundColor: 'blue',
          borderRadius: 100,
          alignSelf: 'center',
        }}
        onPress={() => dispatch({type: 'ADD'})}>
        <Icon name="fingerprint" />
      </TouchableOpacity>
      <FlatList
        data={state}
        keyExtractor={(item) => item.title}
        renderItem={({item}) => (
          <View
            style={{
              marginHorizontal: 10,
              marginVertical: 20,
              borderWidth: 0.5,
              borderColor: 'gray',
              borderRadius: 10,
              height: 60,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text>{item.title}</Text>
            <Text>{item.id}</Text>
            <Icon
              name="delete"
              onPress={() => dispatch({type: 'REMOVE', payload: item.id})}
            />
          </View>
        )}
      />
    </View>
  );
}
// const styles=StyleSheet.create({

// });
