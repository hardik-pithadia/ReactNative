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

const ResetPassword = ({route, navigation}) => {
  var enteredEmail = route.params.email;

  const [isLoading, setLoading] = useState(false);
  const [txtNewPassword, setNewPassword] = useState('');
  const [txtConfirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    NetInfo.fetch().then(state => {
      if (!state.isConnected) {
        Alert.alert('Network', 'Please Check Internet Connection');
      }
    });
  }, []);

  const submitButtonClicked = () => {
    Keyboard.dismiss();

    if (txtNewPassword.length === 0) {
      Alert.alert('Error', 'Please Enter New Password');
    } else if (txtConfirmPassword.length === 0) {
      Alert.alert('Error', 'Please Enter Confirm Password');
    } else {
      if (txtNewPassword !== txtConfirmPassword) {
        Alert.alert('Error', 'New Password & Confirm Password Must be Same');
      } else {
        resetPasswordResponse();
      }
    }
  };

  const resetPasswordResponse = async () => {
    setLoading(true);

    var mobValue = {
      username: enteredEmail,
      password: txtConfirmPassword,
    };

    console.log('-------------------------------------');
    console.log('Reset Password Request Object : ' + JSON.stringify(mobValue));

    var responseData = await postDataToServer(
      Constants.base_URL + '/doctor/reset_password',
      JSON.stringify(mobValue),
    );

    if (responseData.response) {
      if (responseData.response.status) {
        console.log(
          'Reset Password Response : ' +
            JSON.stringify(responseData.response.data),
        );

        Alert.alert('Success', responseData.response.message, [
          {
            text: 'Ok',
            style: 'cancel',
            onPress: () => {
              navigation.navigate('Login');
            },
          },
        ]);
        setLoading(false);
      } else {
        Alert.alert('Error', responseData.response.message, [
          {
            text: 'Ok',
            style: 'cancel',
            onPress: () => {
              setNewPassword('');
              setConfirmPassword('');
            },
          },
        ]);
      }
    }

    setLoading(false);
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
            Reset Password
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
                source={require('../Images/password.png')}
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
                placeholder="New Password"
                placeholderTextColor="white"
                autoCapitalize="none"
                autoCorrect={false}
                value={txtNewPassword}
                secureTextEntry={true}
                onChangeText={text => setNewPassword(text)}
              />
            </View>

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
                source={require('../Images/password.png')}
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
                placeholder="Confirm Password"
                placeholderTextColor="white"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                value={txtConfirmPassword}
                onChangeText={text => setConfirmPassword(text)}
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
