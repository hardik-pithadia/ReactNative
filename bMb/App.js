import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Screens/Login';
import Register from './Screens/Register';
import HomeView from './Screens/HomeView';
import FeedsView from './Screens/FeedsView';
import EventsView from './Screens/EventsView';
import ProfileView from './Screens/ProfileView';
import BaseView from './Screens/BaseView';

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
        <Stack.Screen
          name="Home"
          component={HomeView}
          options={{
            headerShown: false,
            //  headerBackTitleVisible: false,
            //  headerBackVisible: false,
            //  headerTitle: 'SaffronPAY',
          }}
        />

        <Stack.Screen
          name="Feeds"
          component={FeedsView}
          options={{
            headerShown: false,
            //  headerBackTitleVisible: false,
            //  headerBackVisible: false,
            //  headerTitle: 'SaffronPAY',
          }}
        />

        <Stack.Screen
          name="Events"
          component={EventsView}
          options={{
            headerShown: false,
            //  headerBackTitleVisible: false,
            //  headerBackVisible: false,
            //  headerTitle: 'SaffronPAY',
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
            //  headerBackTitleVisible: false,
            //  headerBackVisible: false,
            //  headerTitle: 'SaffronPAY',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
