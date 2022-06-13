import React from 'react';
import {View, Text, TouchableOpacity, Linking} from 'react-native';

const WhatsApp = ({navigation}) => {
  const openWhatsApp = () => {
    console.log('openWhatsApp');

    let msg = 'Hello World';
    let mobile = 7666240144;
    if (mobile) {
      if (msg) {
        let url = 'whatsapp://send?text=' + msg + '&phone=91' + mobile;
        Linking.openURL(url)
          .then(data => {
            console.log('WhatsApp Opened successfully ' + data);
          })
          .catch(() => {
            alert('Make sure WhatsApp installed on your device');
          });
      } else {
        alert('Please enter message to send');
      }
    } else {
      alert('Please enter mobile no');
    }
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity onPress={() => openWhatsApp()}>
        <Text>Open WhatsApp!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WhatsApp;
