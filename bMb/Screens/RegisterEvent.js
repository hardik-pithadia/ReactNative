import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';

const RegisterEvent = ({navigation}) => {
  const payButtonClicked = () => {
    console.log('pay Button Clicked');
  };

  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'column',
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 25,
        }}>
        <Image
          resizeMode="stretch"
          source={require('../Images/register_event_banner.png')}
          style={{width: '90%', height: 200, borderRadius: 10}}
        />
      </View>
      <Text
        style={{
          marginTop: 40,
          marginLeft: 25,
          fontSize: 30,
          fontWeight: '600',
        }}>
        Sponsors
      </Text>

      <View
        style={{
          height: 150,
          backgroundColor: 'lightgray',
          marginLeft: 25,
          marginRight: 25,
          marginTop: 15,
          borderRadius: 10,
        }}></View>

      <TextInput
        style={{
          //height: Platform.OS == 'ios' ? 25 : 40,
          height: 45,
          fontSize: 15,
          fontWeight: '500',
          color: 'black',
          borderColor: 'lightgray',
          borderWidth: 1,
          padding: 10,
          marginLeft: 25,
          marginRight: 25,
          marginTop: 20,
          borderRadius: 10,
        }}
        placeholder="Number of Family Members for Payes Entry"
        placeholderTextColor="black"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <View
        style={{
          height: 50,
          marginTop: 20,
          marginLeft: 25,
          marginRight: 25,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{textAlign: 'center', fontSize: 15}}>
          By Continuing, you agree with our Terms & Conditions and Privacy
          Policy
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => payButtonClicked()}
        style={{
          backgroundColor: '#D1AA70',
          height: 45,
          margin: 25,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 12,
        }}>
        <Text
          style={{
            fontSize: 18,
            color: 'white',
            fontWeight: '700',
          }}>
          Pay and Register of Event Now
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterEvent;
