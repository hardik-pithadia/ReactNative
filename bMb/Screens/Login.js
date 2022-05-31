import React, {useEffect} from 'react';
import {View, Text, Image, TextInput, Platform} from 'react-native';

const Login = () => {
  useEffect(() => {
    //Runs only on the first render
    console.log('useEffect CAlled');
  }, []);

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
          //backgroundColor: 'yellow',
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
            //  justifyContent: 'center',
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
      </View>
    </View>
  );
};

export default Login;
