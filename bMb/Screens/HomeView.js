import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Linking,
} from 'react-native';

const HomeView = ({navigation}) => {
  const whatsAppButtonClicked = () => {
    console.log('whatsApp Button Clicked');

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
    <ScrollView>
      <View
        style={{
          flexDirection: 'column',
          flex: 1,
        }}>
        <View
          style={{
            alignItems: 'flex-end',
            marginRight: 10,
            marginTop: 10,
          }}>
          <TouchableOpacity
            onPress={() => whatsAppButtonClicked()}
            style={{
              height: 40,
              width: 40,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../Images/whatsApp.png')}
              style={{width: 30, height: 30}}
            />
          </TouchableOpacity>
        </View>

        <Text style={{color: 'black'}}> Welcome To HomePage!</Text>
      </View>
    </ScrollView>
  );
};

export default HomeView;
