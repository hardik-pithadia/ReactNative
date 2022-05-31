import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';

const Login = () => {
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
  };

  const registerButtonClicked = () => {
    console.log('registerButtonClicked');
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#1B195B',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={require('../Images/logo.png')}
        style={{
          width: 175,
          height: 175,
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
            margin: 15,
            top: 30,
            height: 40,
            borderColor: 'white',
            borderBottomWidth: 1,
            alignItems: 'flex-start',
            paddingLeft: 5,
            flexDirection: 'row',
          }}>
          <Image
            source={require('../Images/envelope.png')}
            style={{
              width: 25,
              height: 25,
            }}
          />
          <TextInput
            style={{
              height: Platform.OS == 'ios' ? 25 : 40,
              width: '85%',
              left: 20,
              fontSize: 20,
              justifyContent: 'center',
              color: 'white',
            }}
            placeholder="Email*"
            placeholderTextColor="white"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        <View
          style={{
            margin: 15,
            top: 15,
            height: 40,
            borderColor: 'white',
            borderBottomWidth: 1,
            alignItems: 'flex-start',
            paddingLeft: 5,
            flexDirection: 'row',
          }}>
          <Image
            source={require('../Images/password.png')}
            style={{
              width: 25,
              height: 25,
            }}
          />
          <TextInput
            style={{
              height: Platform.OS == 'ios' ? 25 : 40,
              width: '85%',
              left: 20,
              fontSize: 20,
              justifyContent: 'center',
              color: 'white',
            }}
            placeholder="Password"
            placeholderTextColor="white"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
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
            <Text style={{fontSize: 13, color: 'white'}}>Forgot Password?</Text>
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
          <Text style={{color: 'white', top: 15}}>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => registerButtonClicked()}
            style={{
              top: 15,
              width: 150,
              height: 30,
              alignItems: 'center',
              justifyContent: 'center',
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
  );
};

export default Login;
