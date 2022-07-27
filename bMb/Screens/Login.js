import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Alert,
} from 'react-native';

const Login = ({navigation}) => {
  const [isLoading, setLoading] = useState(false);

  const [txtEmail, setEmail] = useState('');
  const [txtPassword, setPassword] = useState('');

  //  useEffect(() => {
  //    //Runs only on the first render
  //    console.log('useEffect CAlled');
  //  }, []);

  const displayGreetings = () => {
    var date = new Date();

    let hours = date.getHours();

    if (hours >= 0 && hours < 12) {
      return 'Good Morning';
    } else if (hours == 12) {
      return 'Good Noon';
    } else if (hours >= 12 && hours <= 17) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
  };

  const forgotPasswordButtonClicked = () => {
    console.log('forgotPasswordButtonClicked');
  };

  const signInButtonClicked = () => {
    console.log('signInButtonClicked');
    console.log('Email : ' + txtEmail);
    console.log('Password : ' + txtPassword);

    if (txtEmail.length > 0 && txtPassword.length > 0) {
      postLoginDataToServer();
    } else {
      Alert.alert('Error', 'Please Enter Username & Password');
    }
  };

  const postLoginDataToServer = async () => {
    setLoading(true);

    fetch('http://bmb.bestdoctorsinmumbai.com/api/userlogin.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: txtEmail.toString(),
        password: txtPassword.toString(),
      }),
    })
      .then(response => response.json())
      .then(responseData => {
        console.log('RESULTS HERE:', responseData);
        console.log('Status : ' + JSON.stringify(responseData['status']));
        console.log('Message : ' + JSON.stringify(responseData['message']));

        if (responseData['status'] == 200) {
          console.log('Login Successfull!');
          navigation.navigate('Base');
        }
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  };

  const registerButtonClicked = () => {
    console.log('registerButtonClicked');
    navigation.navigate('Register', {
      isHide: false,
    });
  };

  const setEmailTextValue = txtValue => {
    console.log('setEmailTextValue : ' + txtValue);
    setEmail(txtValue);
  };

  const setPasswordTextValue = txtValue => {
    console.log('setPasswordTextValue : ' + txtValue);
    setPassword(txtValue);
  };

  return (
    <ScrollView>
      {isLoading ? (
        <ActivityIndicator
          animating={true}
          size="large"
          color="yellow"
          hidesWhenStopped={true}
        />
      ) : (
        <View
          style={{
            backgroundColor: '#1B195B',
            alignItems: 'center',
            justifyContent: 'center',
            height: Dimensions.get('window').height + 100,
          }}>
          <Image
            source={require('../Images/logo.png')}
            style={{
              width: 175,
              height: 175,
              marginTop: 5,
            }}
          />
          <View
            style={{
              width: '85%',
              top: 30,
            }}>
            <Text style={{fontSize: 40, color: 'white'}}>Hello</Text>
            <Text style={{fontSize: 25, color: 'white', top: 10}}>
              {displayGreetings()}
            </Text>

            <View
              style={{
                marginTop: 30,
                //  top: 30,
                //  height: 40,
                borderColor: 'white',
                borderBottomWidth: 1,
                alignItems: 'flex-start',
                //  paddingLeft: 5,
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
                marginTop: 25,
                //  top: 15,
                //  height: 40,
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
                  marginTop: 5,
                }}
              />
              <TextInput
                style={{
                  //    height: Platform.OS == 'ios' ? 25 : 40,
                  width: '85%',
                  marginLeft: 20,
                  fontSize: 20,
                  justifyContent: 'center',
                  color: 'white',
                  padding: 5,
                }}
                placeholder="Password"
                placeholderTextColor="white"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                value={txtPassword}
                onChangeText={text => setPasswordTextValue(text)}
              />
            </View>

            <View
              style={{
                margin: 15,
                height: 25,
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                onPress={() => forgotPasswordButtonClicked()}
                style={{
                  height: 25,
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 13, color: 'white'}}>
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                top: 25,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                onPress={() => signInButtonClicked()}
                style={{
                  backgroundColor: '#D1AA70',
                  height: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 130,
                  borderRadius: 20,
                }}>
                <Text style={{color: 'white', fontSize: 15}}>SIGN IN</Text>
              </TouchableOpacity>
              <Text style={{color: 'white', top: 15}}>
                Don't have an account?
              </Text>
              <TouchableOpacity
                onPress={() => registerButtonClicked()}
                style={{
                  top: 15,
                  width: 150,
                  height: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  // marginBottom: 5,
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '700',
                    color: 'pink',
                  }}>
                  Register
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default Login;
