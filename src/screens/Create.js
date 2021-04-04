import React, {useState, useContext} from 'react';
import {View, Text} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {noteContext} from '../context/NotesContext';

export default function Create(props) {
  const {state, dispatch} = useContext(noteContext);
  const [title, settitle] = useState('');
  const [content, setcontent] = useState('');

  return (
    <View style={{flex: 1}}>
      <Text>Enter title</Text>
      <Input onChangeText={(text) => settitle(text)} />
      <Text>Enter content</Text>
      <Input onChangeText={(text) => setcontent(text)} />
      <Button
        title="Save"
        onPress={() => dispatch({type: 'ADD', payload: {title, content}})}
      />
    </View>
  );
}
