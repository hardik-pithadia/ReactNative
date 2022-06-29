import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';

const Login = ({navigation}) => {
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

    navigation.navigate('Base');
  };

  const registerButtonClicked = () => {
    console.log('registerButtonClicked');
    navigation.navigate('Register');
  };

  return (
    <ScrollView>
      <View
        style={{
          //flex: 1,
          backgroundColor: '#1B195B',
          alignItems: 'center',
          justifyContent: 'center',
          height: Dimensions.get('window').height + 100,
        }}
      >
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
          }}
        >
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
            }}
          >
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
                //    height: Platform.OS == 'ios' ? 25 : 40,
                width: '85%',
                //    left: 20,
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
            }}
          >
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
            />
          </View>

          <View
            style={{
              margin: 15,
              height: 25,
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}
          >
            <TouchableOpacity
              onPress={() => forgotPasswordButtonClicked()}
              style={{
                height: 25,
                justifyContent: 'center',
              }}
            >
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
            }}
          >
            <TouchableOpacity
              onPress={() => signInButtonClicked()}
              style={{
                backgroundColor: '#D1AA70',
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                width: 130,
                borderRadius: 20,
              }}
            >
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
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '700',
                  color: 'pink',
                }}
              >
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
