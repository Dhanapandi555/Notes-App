import React from 'react';
import {View, Text} from 'react-native';

export default function Show({route}) {
  const id=route.params.id
  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
} 