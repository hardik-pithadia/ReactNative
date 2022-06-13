import React from 'react';
import {View, Text} from 'react-native';

const HomeView = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}
    >
      <Text>Welcome To Home View!</Text>
    </View>
  );
};

export default HomeView;
