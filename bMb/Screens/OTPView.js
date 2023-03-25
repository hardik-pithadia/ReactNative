import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  Keyboard,
} from 'react-native';
import PageLoader from '../Utils/loader';
import {postDataToServer} from '../Utils/WebRequestManager';
import * as Constants from '../Utils/constants';
import NetInfo from '@react-native-community/netinfo';
import OTPTextView from 'react-native-otp-textinput';

const OTPView = ({navigation}) => {
  const [isLoading, setLoading] = useState(false);

  const [txtEmail, setEmail] = useState('');

  useEffect(() => {
    NetInfo.fetch().then(state => {
      if (!state.isConnected) {
        Alert.alert('Network', 'Please Check Internet Connection');
      }
    });
  }, []);

  const backButtonClicked = () => {
    navigation.navigate('Login');
  };

  const submitButtonClicked = () => {
    Keyboard.dismiss();
    if (txtEmail.length > 0) {
      postForgotPasswordDataToServer();
      console.log('CALL API.. : ' + txtEmail);
    } else {
      Alert.alert('Error', 'Please Enter Username');
    }
  };

  const postForgotPasswordDataToServer = async () => {
    setLoading(true);
    var mobValue = {
      email: txtEmail.toString(),
    };

    console.log('-------------------------------------');
    console.log('Forgot Password Request Object : ' + JSON.stringify(mobValue));

    var responseData = await postDataToServer(
      Constants.base_URL + '/doctor/forget_password',
      JSON.stringify(mobValue),
    );

    if (responseData.response) {
      if (responseData.response.status) {
        console.log(
          'Forgot Password Response : ' +
            JSON.stringify(responseData.response.data),
        );

        Alert.alert('Success', responseData.response.message, [
          {
            text: 'Ok',
            style: 'cancel',
            onPress: () => {
              navigation.navigate('Base');
            },
          },
        ]);
        //   navigation.navigate.pop();
        setLoading(false);
      } else {
        Alert.alert('Error', responseData.response.message, [
          {
            text: 'Ok',
            style: 'cancel',
            onPress: () => {},
          },
        ]);
      }
    }

    setLoading(false);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#1B195B'}}>
      {isLoading && <PageLoader show={isLoading} />}
      <View>
        <TouchableOpacity onPress={() => backButtonClicked()}>
          <Image
            source={require('../Images/leftArrow.png')}
            style={{
              width: 40,
              height: 40,
              marginTop: 30,
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../Images/logo.png')}
            style={{
              width: 175,
              height: 175,
              marginTop: 30,
            }}
          />

          <Text
            style={{
              color: 'white',
              fontSize: 22,
              fontWeight: 'bold',
              marginTop: 20,
            }}>
            Verify OTP
          </Text>
          <View
            style={{
              width: '85%',
              top: 30,
            }}>
            <View
              style={{
                marginTop: 30,
                borderColor: 'white',
                alignItems: 'flex-start',
                padding: 5,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <OTPTextView
                containerStyle={{marginBottom: 20}}
                textInputStyle={{color: 'white'}}
                tintColor={'#D1AA70'}
                handleTextChange={text => {
                  if (text.length === 4) {
                    Keyboard.dismiss();
                    console.log('Final OTP : ' + text);
                    navigation.navigate('VerifyOTPView', {otp: text});
                  }
                }}
                inputCount={4}
                keyboardType="numeric"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OTPView;
