import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Colors} from 'react-native-paper';

const ContactUs = ({navigation}) => {
  const submitButtonClicked = () => {
    console.log('submitButtonClicked');
  };
  return (
    <SafeAreaView>
      <ScrollView style={{backgroundColor: 'white', height: '100%'}}>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              marginHorizontal: 50,
              marginVertical: 50,
            }}
          >
            Let us know how can we help
          </Text>

          <TextInput
            placeholder="Your Name"
            autoCapitalize="none"
            autoCorrect={false}
            style={{
              fontSize: 20,
              marginLeft: 35,
              marginRight: 35,
              height: 45,
              color: Colors.black,
              borderRadius: 10,
              borderColor: 'lightgray',
              borderWidth: 1,
              paddingLeft: 15,
            }}
          />

          <TextInput
            placeholder="Your Email"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            style={{
              fontSize: 20,
              marginTop: 25,
              marginLeft: 35,
              marginRight: 35,
              height: 45,
              color: Colors.black,
              borderRadius: 10,
              borderColor: 'lightgray',
              borderWidth: 1,
              paddingLeft: 15,
            }}
          />

          <TextInput
            placeholder="Contact"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            style={{
              fontSize: 20,
              marginTop: 25,
              marginLeft: 35,
              marginRight: 35,
              height: 45,
              color: Colors.black,
              borderRadius: 10,
              borderColor: 'lightgray',
              borderWidth: 1,
              paddingLeft: 15,
            }}
          />

          <TextInput
            placeholder="Message"
            autoCapitalize="none"
            autoCorrect={false}
            style={{
              fontSize: 20,
              marginTop: 25,
              marginLeft: 35,
              marginRight: 35,
              height: 45,
              color: Colors.black,
              borderRadius: 10,
              borderColor: 'lightgray',
              borderWidth: 1,
              paddingLeft: 15,
            }}
          />

          <TouchableOpacity
            onPress={() => submitButtonClicked()}
            style={{
              margin: 50,
              backgroundColor: '#3F60A0',
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
            }}
          >
            <Text style={{fontSize: 25, color: 'white'}}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContactUs;
