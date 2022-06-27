import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Screens/Login';
import Register from './Screens/Register';
import HomeView from './Screens/HomeView';
import EventsView from './Screens/EventsView';
import ProfileView from './Screens/ProfileView';
import BaseView from './Screens/BaseView';
import WhatsApp from './Screens/WhatsApp';
import RegisterEvent from './Screens/RegisterEvent';
import RegisterSuccess from './Screens/RegisterSuccess';

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
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeView}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="WhatsApp"
          component={WhatsApp}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Events"
          component={EventsView}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Profile"
          component={ProfileView}
          options={{
            headerShown: false,
            //  headerBackTitleVisible: false,
            //  headerBackVisible: false,
            //  headerTitle: 'SaffronPAY',
          }}
        />

        <Stack.Screen
          name="Base"
          component={BaseView}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="RegisterEvent"
          component={RegisterEvent}
          options={{
            headerBackTitleVisible: false,
            headerBackVisible: true,
            headerTitleAlign: 'center',
            headerTintColor: 'black',
            headerTitle: 'Register Event',
          }}
        />

        <Stack.Screen
          name="RegisterEventSuccess"
          component={RegisterSuccess}
          options={{
            headerBackTitleVisible: false,
            headerBackVisible: true,
            headerTitleAlign: 'center',
            headerTintColor: 'black',
            headerTitle: 'Register for Event',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
