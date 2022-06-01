import React from 'react';
import {Image} from 'react-native';

import ProfileView from './ProfileView';
import HomeView from './HomeView';
import EventsView from './EventsView';
import FeedsView from './FeedsView';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const sampleTabNavigation = createBottomTabNavigator();

const BaseView = ({navigation}) => {
  return (
    <sampleTabNavigation.Navigator
      shifting="true"
      initialRouteName="Home"
      activeColor="#fff"
      tabBarOptions={{
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
        name="Feeds"
        options={{
          headerShown: false,
          tabBarLabel: 'Feeds',
          tabBarIcon: ({color}) => (
            <Image
              style={{width: 25, height: 25, tintColor: color}}
              source={require('../Images/feedsIcon.png')}
            />
          ),
        }}
        component={FeedsView}
      />
      <sampleTabNavigation.Screen
        name="Events"
        options={{
          headerShown: false,
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
    </sampleTabNavigation.Navigator>
  );
};

export default BaseView;
