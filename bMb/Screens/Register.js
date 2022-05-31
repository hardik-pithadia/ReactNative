import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {StackActions} from '@react-navigation/native';

const Register = ({navigation}) => {
  const sendRequestButtonClicked = () => {
    console.log('sendRequestButtonClicked');
  };

  const loginButtonClicked = () => {
    console.log('loginButtonClicked');

    const popAction = StackActions.pop(1);
    navigation.dispatch(popAction);
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View
        style={{
          borderColor: 'lightgrey',
          borderWidth: 1,
          marginLeft: 25,
          marginRight: 25,
          marginTop: 25,
          borderRadius: 10,
        }}>
        <TextInput
          style={{
            height: 40,
            width: '85%',
            paddingLeft: 10,
            fontSize: 18,
            justifyContent: 'center',
            color: 'black',
          }}
          placeholder="Email"
          placeholderTextColor="grey"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>

      <View
        style={{
          borderColor: 'lightgrey',
          borderWidth: 1,
          marginLeft: 25,
          marginRight: 25,
          borderRadius: 10,
          marginTop: 20,
        }}>
        <TextInput
          style={{
            height: 40,
            width: '85%',
            paddingLeft: 10,
            fontSize: 18,
            justifyContent: 'center',
            color: 'black',
          }}
          placeholder="Fullname"
          placeholderTextColor="grey"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>

      <View
        style={{
          borderColor: 'lightgrey',
          borderWidth: 1,
          marginLeft: 25,
          marginRight: 25,
          borderRadius: 10,
          marginTop: 20,
        }}>
        <TextInput
          style={{
            height: 40,
            width: '85%',
            paddingLeft: 10,
            fontSize: 18,
            justifyContent: 'center',
            color: 'black',
          }}
          placeholder="Password"
          placeholderTextColor="grey"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />
      </View>

      <View
        style={{
          borderColor: 'lightgrey',
          borderWidth: 1,
          marginLeft: 25,
          marginRight: 25,
          borderRadius: 10,
          marginTop: 20,
        }}>
        <TextInput
          style={{
            height: 40,
            width: '85%',
            paddingLeft: 10,
            fontSize: 18,
            justifyContent: 'center',
            color: 'black',
          }}
          placeholder="Confirm Password"
          placeholderTextColor="grey"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />
      </View>

      <Text
        style={{
          margin: 25,
          fontSize: 14,
          textAlign: 'center',
          color: 'grey',
        }}>
        By Continuing you agree with our Terms & Conditiones & Privacy Policy
      </Text>

      <TouchableOpacity
        onPress={() => sendRequestButtonClicked()}
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
          Send Request
        </Text>
      </TouchableOpacity>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: 35,
          marginLeft: 25,
          marginRight: 25,
          marginTop: 150,
        }}>
        <Text>Already have an account ?</Text>
      </View>

      <TouchableOpacity
        onPress={() => loginButtonClicked()}
        style={{
          height: 30,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 18, color: '#D1AA70'}}>Login here</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
