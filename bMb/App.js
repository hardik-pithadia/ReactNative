import React, {useEffect, useState} from 'react';
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
import DirectoryList from './Screens/DirectoryList';
import Gallery from './Screens/Gallery';
import ContactUs from './Screens/ContactUs';
import AboutUs from './Screens/AboutUs';
import Notifications from './Screens/Notifications';
import {getData} from './Utils/utility';
import * as Constants from './Utils/constants';
import ForgotPassword from './Screens/ForgotPassword';
import OTPView from './Screens/OTPView';
import VerifyOTPView from './Screens/VerifyOTPView';
import ResetPassword from './Screens/ResetPassword';
import SponsorsList from './Screens/SponsorsList';
import GalleryImage from './Screens/GalleryImage';

const Stack = createNativeStackNavigator();

const App = () => {
  const [isLogin, setIsLogin] = useState('');

  useEffect(() => {
    console.log('App useEffect Called...');

    getData(Constants.IS_LOGIN).then(resultStr => {
      if (resultStr === '1') {
        console.log('Base');
        setIsLogin('Base');
      } else {
        console.log('Login');
        setIsLogin('Login');
      }
    });
  }, []);

  console.log('IS_LOGIN VALUE : ' + isLogin);

  return (
    <NavigationContainer>
      {isLogin === 'Base' && (
        <Stack.Navigator initialRouteName="Base">
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
            name="ForgotPassword"
            component={ForgotPassword}
            options={{
              headerShown: false,
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
              headerTitle: 'Register for Event',
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

          <Stack.Screen
            name="DorectoryList"
            component={DirectoryList}
            options={{
              headerBackTitleVisible: false,
              headerBackVisible: true,
              headerTitleAlign: 'center',
              headerTintColor: 'black',
              headerTitle: 'Directory',
            }}
          />

          <Stack.Screen
            name="Gallery"
            component={Gallery}
            options={{
              headerBackTitleVisible: false,
              headerBackVisible: true,
              headerTitleAlign: 'center',
              headerTintColor: 'black',
              headerTitle: 'Gallery',
            }}
          />

          <Stack.Screen
            name="GalleryImage"
            component={GalleryImage}
            options={{
              headerBackTitleVisible: false,
              headerBackVisible: true,
              headerTitleAlign: 'center',
              headerTintColor: 'black',
              headerTitle: 'Gallery',
            }}
          />

          <Stack.Screen
            name="ContactUs"
            component={ContactUs}
            options={{
              headerBackTitleVisible: false,
              headerBackVisible: true,
              headerTitleAlign: 'center',
              headerTintColor: 'black',
              headerTitle: 'Contact Us',
            }}
          />

          <Stack.Screen
            name="AboutUs"
            component={AboutUs}
            options={{
              headerBackTitleVisible: false,
              headerBackVisible: true,
              headerTitleAlign: 'center',
              headerTintColor: 'black',
              headerTitle: 'About Us',
            }}
          />

          <Stack.Screen
            name="Notifications"
            component={Notifications}
            options={{
              headerBackTitleVisible: false,
              headerBackVisible: true,
              headerTitleAlign: 'center',
              headerTintColor: 'black',
              headerTitle: 'Notifications',
            }}
          />
          <Stack.Screen
            name="OTPView"
            component={OTPView}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="VerifyOTPView"
            component={VerifyOTPView}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="ResetPassword"
            component={ResetPassword}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="SponsorsList"
            component={SponsorsList}
            options={{
              headerBackTitleVisible: false,
              headerBackVisible: true,
              headerTitleAlign: 'center',
              headerTintColor: 'black',
              headerTitle: 'Sponsors',
            }}
          />
        </Stack.Navigator>
      )}

      {isLogin === 'Login' && (
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
              headerTitle: 'Register for Event',
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

          <Stack.Screen
            name="DorectoryList"
            component={DirectoryList}
            options={{
              headerBackTitleVisible: false,
              headerBackVisible: true,
              headerTitleAlign: 'center',
              headerTintColor: 'black',
              headerTitle: 'Directory',
            }}
          />

          <Stack.Screen
            name="Gallery"
            component={Gallery}
            options={{
              headerBackTitleVisible: false,
              headerBackVisible: true,
              headerTitleAlign: 'center',
              headerTintColor: 'black',
              headerTitle: 'Gallery',
            }}
          />

          <Stack.Screen
            name="GalleryImage"
            component={GalleryImage}
            options={{
              headerBackTitleVisible: false,
              headerBackVisible: true,
              headerTitleAlign: 'center',
              headerTintColor: 'black',
              headerTitle: 'Gallery',
            }}
          />

          <Stack.Screen
            name="ContactUs"
            component={ContactUs}
            options={{
              headerBackTitleVisible: false,
              headerBackVisible: true,
              headerTitleAlign: 'center',
              headerTintColor: 'black',
              headerTitle: 'Contact Us',
            }}
          />

          <Stack.Screen
            name="AboutUs"
            component={AboutUs}
            options={{
              headerBackTitleVisible: false,
              headerBackVisible: true,
              headerTitleAlign: 'center',
              headerTintColor: 'black',
              headerTitle: 'About Us',
            }}
          />

          <Stack.Screen
            name="Notifications"
            component={Notifications}
            options={{
              headerBackTitleVisible: false,
              headerBackVisible: true,
              headerTitleAlign: 'center',
              headerTintColor: 'black',
              headerTitle: 'Notifications',
            }}
          />

          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="OTPView"
            component={OTPView}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="VerifyOTPView"
            component={VerifyOTPView}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="ResetPassword"
            component={ResetPassword}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="SponsorsList"
            component={SponsorsList}
            options={{
              headerBackTitleVisible: false,
              headerBackVisible: true,
              headerTitleAlign: 'center',
              headerTintColor: 'black',
              headerTitle: 'Sponsors',
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
