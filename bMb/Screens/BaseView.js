import React from 'react';
import {Image} from 'react-native';
import ProfileView from './ProfileView';
import HomeView from './HomeView';
import EventsView from './EventsView';
import WhatsApp from './WhatsApp';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Notifications from './Notifications';

const sampleTabNavigation = createBottomTabNavigator();

const BaseView = ({navigation}) => {
  return (
    <sampleTabNavigation.Navigator
      shifting="true"
      initialRouteName="Home"
      activeColor="#fff"
      screenOptions={{
        activeTintColor: '#3F60A0',
        inactiveTintColor: 'black',
        style: {backgroundColor: 'white'},
      }}>
      <sampleTabNavigation.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Image
              style={{width: 25, height: 25, tintColor: color}}
              source={require('../Images/homeIcon.png')}
            />
          ),
        }}
        component={HomeView}
      />

      <sampleTabNavigation.Screen
        name="Events"
        options={{
          headerShown: true,
          tabBarLabel: 'Events',
          tabBarIcon: ({color}) => (
            <Image
              style={{width: 25, height: 25, tintColor: color}}
              source={require('../Images/Notification.png')}
            />
          ),
        }}
        component={EventsView}
      />

      {/*<sampleTabNavigation.Screen
        name="WhatsApp"
        options={{
          headerShown: false,
          tabBarLabel: 'WhatsApp',
          tabBarIcon: ({color}) => (
            <Image
              style={{width: 25, height: 25, tintColor: color}}
              source={require('../Images/ProfileIcon.png')}
            />
          ),
        }}
        component={WhatsApp}
      />*/}

      <sampleTabNavigation.Screen
        name="Profile"
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Image
              style={{width: 25, height: 25, tintColor: color}}
              source={require('../Images/ProfileIcon.png')}
            />
          ),
        }}
        component={ProfileView}
      />

      <sampleTabNavigation.Screen
        name="Notifications"
        options={{
          headerShown: false,
          tabBarLabel: 'Notifications',
          tabBarIcon: ({color}) => (
            <Image
              style={{width: 25, height: 25, tintColor: color}}
              source={require('../Images/Notification.png')}
            />
          ),
        }}
        component={Notifications}
      />
    </sampleTabNavigation.Navigator>
  );
};

export default BaseView;
