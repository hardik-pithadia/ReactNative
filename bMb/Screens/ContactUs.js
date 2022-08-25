import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Alert,
} from 'react-native';
import {Colors} from 'react-native-paper';

const ContactUs = ({navigation}) => {
  const phoneNumberButtonClicked = phone => {
    console.log('Phone Number Button Clicked : ' + phone);

    let phoneNumber = phone;
    if (Platform.OS !== 'android') {
      phoneNumber = `telprompt:${phone}`;
    } else {
      phoneNumber = `tel:${phone}`;
    }
    Linking.canOpenURL(phoneNumber)
      .then(supported => {
        if (!supported) {
          Alert.alert('Phone number is not available');
        } else {
          return Linking.openURL(phoneNumber);
        }
      })
      .catch(err => console.log(err));
  };

  const emailButtonClicked = emailId => {
    console.log('Email Button Clicked : ' + emailId);

    Linking.openURL('mailto:support@example.com');
  };

  const websiteButtonClicked = () => {
    console.log('Website Button Clicked');

    Linking.canOpenURL('www.bmbmumbai.org')
      .then(supported => {
        if (!supported) {
          Alert.alert('Website is not available');
        } else {
          return Linking.openURL('www.bmbmumbai.org');
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <Text style={styles.headerText}>Address</Text>
      <Text style={styles.subText}>
        Borivali Medical Brotherhood
        {'\n'}
        Doctor House, Borivali Road,
        {'\n'}
        Borivali West,
        {'\n'}
        Mumbai,400092
      </Text>

      <Text style={styles.headerText}>Contact No.</Text>
      <TouchableOpacity
        style={styles.subText}
        onPress={() => phoneNumberButtonClicked('+912228984887')}>
        <Text style={{color: 'blue', fontWeight: '700'}}>+91-22-28984887</Text>
      </TouchableOpacity>

      <Text style={styles.headerText}>Email</Text>
      <TouchableOpacity
        style={styles.subText}
        onPress={() => emailButtonClicked('info@bmbmumbai.org')}>
        <Text style={{color: 'blue', fontWeight: '700'}}>
          info@bmbmumbai.org
        </Text>
      </TouchableOpacity>

      <Text style={styles.headerText}>Website</Text>
      <TouchableOpacity
        style={styles.subText}
        onPress={() => websiteButtonClicked()}>
        <Text style={{color: 'blue', fontWeight: '700'}}>
          www.bmbmumbai.org
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },

  headerText: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 25,
    fontWeight: 'bold',
    fontSize: 20,
  },

  subText: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 10,
    fontSize: 17,
  },
});

//const ContactUs = ({navigation}) => {
//  const submitButtonClicked = () => {
//    console.log('submitButtonClicked');
//  };
//  return (
//    <SafeAreaView>
//      <ScrollView style={{backgroundColor: 'white', height: '100%'}}>
//        <View style={{flex: 1, backgroundColor: 'white'}}>
//          <Text
//            style={{
//              fontSize: 20,
//              textAlign: 'center',
//              marginHorizontal: 50,
//              marginVertical: 50,
//            }}
//          >
//            Let us know how can we help
//          </Text>
//
//          <TextInput
//            placeholder="Your Name"
//            autoCapitalize="none"
//            autoCorrect={false}
//            style={{
//              fontSize: 20,
//              marginLeft: 35,
//              marginRight: 35,
//              height: 45,
//              color: Colors.black,
//              borderRadius: 10,
//              borderColor: 'lightgray',
//              borderWidth: 1,
//              paddingLeft: 15,
//            }}
//          />
//
//          <TextInput
//            placeholder="Your Email"
//            autoCapitalize="none"
//            autoCorrect={false}
//            keyboardType="email-address"
//            style={{
//              fontSize: 20,
//              marginTop: 25,
//              marginLeft: 35,
//              marginRight: 35,
//              height: 45,
//              color: Colors.black,
//              borderRadius: 10,
//              borderColor: 'lightgray',
//              borderWidth: 1,
//              paddingLeft: 15,
//            }}
//          />
//
//          <TextInput
//            placeholder="Contact"
//            autoCapitalize="none"
//            autoCorrect={false}
//            keyboardType="number-pad"
//            style={{
//              fontSize: 20,
//              marginTop: 25,
//              marginLeft: 35,
//              marginRight: 35,
//              height: 45,
//              color: Colors.black,
//              borderRadius: 10,
//              borderColor: 'lightgray',
//              borderWidth: 1,
//              paddingLeft: 15,
//            }}
//          />
//
//          <TextInput
//            placeholder="Message"
//            autoCapitalize="none"
//            autoCorrect={false}
//            style={{
//              fontSize: 20,
//              marginTop: 25,
//              marginLeft: 35,
//              marginRight: 35,
//              height: 45,
//              color: Colors.black,
//              borderRadius: 10,
//              borderColor: 'lightgray',
//              borderWidth: 1,
//              paddingLeft: 15,
//            }}
//          />
//
//          <TouchableOpacity
//            onPress={() => submitButtonClicked()}
//            style={{
//              margin: 50,
//              backgroundColor: '#3F60A0',
//              height: 50,
//              alignItems: 'center',
//              justifyContent: 'center',
//              borderRadius: 10,
//            }}
//          >
//            <Text style={{fontSize: 25, color: 'white'}}>Submit</Text>
//          </TouchableOpacity>
//        </View>
//      </ScrollView>
//    </SafeAreaView>
//  );
//};

export default ContactUs;
