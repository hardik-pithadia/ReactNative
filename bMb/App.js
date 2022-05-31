import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Screens/Login';
import Register from './Screens/Register';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerBackTitleVisible: false,
            headerBackVisible: true,
            headerTitleAlign: 'center',
            headerTintColor: 'black',
            headerTitle: 'Join Us',
            //  headerStyle: {
            //    backgroundColor: 'red',
            //  },
          }}
        />
        {/*<Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerShown: false,
            //  headerBackTitleVisible: false,
            //  headerBackVisible: false,
            //  headerTitle: 'SaffronPAY',
          }}
        />*/}
        {/*<Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            headerBackTitleVisible: false,
            headerBackVisible: true,
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerTitle: 'Forgot Password',
            headerStyle: {
              backgroundColor: 'red',
            },
          }}
        />*/}

        {/*<Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerBackTitleVisible: false,
            headerBackVisible: true,
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerTitle: 'SIGN UP',
            headerShadowVisible: true,
            headerStyle: {
              backgroundColor: 'red',
            },
          }}
        />*/}

        {/*<Stack.Screen
          name="MerchantLogin"
          component={MerchantLogin}
          options={{
            headerBackTitleVisible: false,
            headerBackVisible: true,
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerTitle: 'Merchant Login',
            headerStyle: {
              backgroundColor: 'red',
            },
          }}
        />*/}

        {/*<Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerBackTitleVisible: false,
            headerBackVisible: true,
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerTitle: 'Profile',
            headerStyle: {
              backgroundColor: 'red',
            },
          }}
        />*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
