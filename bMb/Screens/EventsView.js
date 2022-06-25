import React from 'react';
import {View, Text} from 'react-native';

const EventsView = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: 'black'}}>Welcome To EventsView!</Text>
    </View>
  );
};

export default EventsView;
