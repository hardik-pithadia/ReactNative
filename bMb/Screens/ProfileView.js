import React from 'react';
import {View, Text, Image, SafeAreaView, ScrollView} from 'react-native';

const ProfileView = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Image
              style={{
                height: 150,
                width: 150,
              }}
              source={require('../Images/headerPatch.png')}
              resizeMethod="scale"
              resizeMode="stretch"
            />
            <View
              style={{
                margin: '10%',
                width: 175.0,
                alignItems: 'flex-end',
                justifyContent: 'space-between',
              }}
            >
              <Text
                style={{
                  fontSize: 25.0,
                }}
              >
                My Profile
              </Text>
              <View
                style={{
                  height: 2,
                  width: '100%',
                  backgroundColor: '#3F60A0',
                }}
              />
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'pink',
              height: 125,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <View>
              <Text style={{fontSize: 20.0}}>Hardik Pithadia</Text>
              <Text>@hardik-pithadia</Text>
              <Text>Hello I'm Hardik Pithadia. Welcome To My Profile</Text>
            </View>

            <View
              style={{
                width: 100,
                height: 100,
                borderColor: 'red',
                borderWidth: 2,
                marginRight: 25,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileView;
