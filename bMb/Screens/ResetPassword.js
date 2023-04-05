import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  Keyboard,
} from 'react-native';
import PageLoader from '../Utils/loader';
import {postDataToServer} from '../Utils/WebRequestManager';
import * as Constants from '../Utils/constants';
import {getData, storeData} from '../Utils/utility';
import NetInfo from '@react-native-community/netinfo';

const ResetPassword = ({navigation}) => {
  const [isLoading, setLoading] = useState(false);

  const [txtEmail, setEmail] = useState('');
  const [txtPassword, setPassword] = useState('');

  useEffect(() => {
    NetInfo.fetch().then(state => {
      if (!state.isConnected) {
        Alert.alert('Network', 'Please Check Internet Connection');
      }
    });
  }, []);

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
      username: txtEmail.toString(),
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
              //    setEmail('');
              navigation.navigate('OTPView', {
                email: txtEmail,
              });
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
            onPress: () => {
              setEmail('');
            },
          },
        ]);
      }
    }

    setLoading(false);
  };

  const setEmailTextValue = txtValue => {
    setEmail(txtValue);
  };

  const backButtonClicked = () => {
    navigation.navigate('Login');
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
            Forgot Password
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
                borderBottomWidth: 1,
                alignItems: 'flex-start',
                padding: 5,
                flexDirection: 'row',
              }}>
              <Image
                source={require('../Images/envelope.png')}
                style={{
                  width: 25,
                  height: 25,
                  marginTop: 8,
                }}
              />
              <TextInput
                style={{
                  width: '85%',
                  marginLeft: 20,
                  fontSize: 20,
                  justifyContent: 'center',
                  color: 'white',
                  padding: 5,
                }}
                placeholder="Email"
                placeholderTextColor="white"
                autoCapitalize="none"
                autoCorrect={false}
                value={txtEmail}
                onChangeText={text => setEmailTextValue(text)}
              />
            </View>

            <View
              style={{
                top: 50,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                onPress={() => submitButtonClicked()}
                style={{
                  backgroundColor: '#D1AA70',
                  height: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 130,
                  borderRadius: 20,
                }}>
                <Text style={{color: 'white', fontSize: 15}}>SUBMIT</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ResetPassword;
