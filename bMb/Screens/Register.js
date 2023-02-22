import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';
import {StackActions} from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';
import {SelectCountry} from 'react-native-element-dropdown';

const statesObj = [
  {
    value: '1',
    lable: 'Andhra Pradesh',
  },
  {
    value: '2',
    lable: 'Arunachal Pradesh',
  },
  {
    value: '3',
    lable: 'Assam',
  },
  {
    value: '4',
    lable: 'Bihar',
  },
  {
    value: '5',
    lable: 'Chhattisgarh',
  },
  {
    value: '6',
    lable: 'Goa',
  },
  {
    value: '7',
    lable: 'Gujarat',
  },
  {
    value: '8',
    lable: 'Haryana',
  },
  {
    value: '9',
    lable: 'Himachal Pradesh',
  },
  {
    value: '10',
    lable: 'Jammu and Kashmir',
  },
  {
    value: '11',
    lable: 'Jharkhand',
  },
  {
    value: '12',
    lable: 'Karnataka',
  },
  {
    value: '13',
    lable: 'Madhya Pradesh',
  },
  {
    value: '14',
    lable: 'Maharashtra',
  },
  {
    value: '15',
    lable: 'Manipur',
  },
  {
    value: '16',
    lable: 'Meghalaya',
  },
  {
    value: '17',
    lable: 'Mizoram',
  },
  {
    value: '18',
    lable: 'Nagaland',
  },
  {
    value: '19',
    lable: 'Odisha',
  },
  {
    value: '20',
    lable: 'Punjab',
  },
  {
    value: '21',
    lable: 'Rajasthan',
  },
  {
    value: '22',
    lable: 'Sikkim',
  },
  {
    value: '23',
    lable: 'Tamil Nadu',
  },
  {
    value: '24',
    lable: 'Telangana',
  },
  {
    value: '25',
    lable: 'Tripura',
  },
  {
    value: '26',
    lable: 'Uttarakhand',
  },
  {
    value: '27',
    lable: 'West Bengal',
  },
  {
    value: '28',
    lable: 'Andaman and Nicobar Islands',
  },
  {
    value: '29',
    lable: 'Chandigarh',
  },
  {
    value: '30',
    lable: 'Dadra and Nagar Haveli',
  },
  {
    value: '31',
    lable: 'Daman and Diu',
  },
  {
    value: '32',
    lable: 'Delhi',
  },
  {
    value: '33',
    lable: 'Lakshadweep',
  },
  {
    value: '34',
    lable: 'Puducherry',
  },
];

const bloodGroupObj = [
  {
    value: '1',
    lable: 'A+',
  },
  {
    value: '2',
    lable: 'A-',
  },
  {
    value: '3',
    lable: 'B+',
  },
  {
    value: '4',
    lable: 'B-',
  },
  {
    value: '5',
    lable: 'O+',
  },
  {
    value: '6',
    lable: 'O-',
  },
  {
    value: '7',
    lable: 'AB+',
  },
  {
    value: '8',
    lable: 'AB-',
  },
];

const Register = ({route, navigation}) => {
  const [bottomViewArray, setBottomView] = useState([]);

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('Date Of Birth');

  const [anniversaryDate, setAnniversaryDate] = useState(new Date());
  const [anniversaryDateOpen, setAnniversaryDateOpen] = useState(false);
  const [selectedAnniversaryDate, setSelectedAnniversaryDate] =
    useState('Anniversary Date');

  const [state, setStates] = useState('1');
  const [bloodGroup, setBloodGroup] = useState('1');

  var bottomView = [];

  useEffect(() => {
    if (!route.params['isHide']) {
      getBottomView();
    } else {
      return null;
    }
  }, [bottomView.length]);

  const sendRequestButtonClicked = () => {
    console.log('sendRequestButtonClicked');

    navigation.navigate('RegisterEvent');
  };

  const loginButtonClicked = () => {
    console.log('loginButtonClicked');

    const popAction = StackActions.pop(1);
    navigation.dispatch(popAction);
  };

  const getBottomView = () => {
    bottomView.push(
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: 35,
          marginLeft: 25,
          marginRight: 25,
          marginTop: 15,
        }}>
        <Text style={{color: 'black'}}>Already have an account ?</Text>
      </View>,
    );

    bottomView.push(
      <TouchableOpacity
        onPress={() => loginButtonClicked()}
        style={{
          height: 30,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 18, color: '#D1AA70'}}>Login here</Text>
      </TouchableOpacity>,
    );

    setBottomView(bottomView);
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={{backgroundColor: 'white', flex: 1}}>
        <View
          style={{
            borderColor: 'lightgrey',
            borderWidth: 1,
            marginLeft: 25,
            marginRight: 25,
            marginTop: 25,
            borderRadius: 10,
          }}>
          <TextInput
            style={{
              height: 40,
              width: '85%',
              paddingLeft: 10,
              fontSize: 18,
              justifyContent: 'center',
              color: 'black',
            }}
            placeholder="First Name"
            placeholderTextColor="grey"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        <View
          style={{
            borderColor: 'lightgrey',
            borderWidth: 1,
            marginLeft: 25,
            marginRight: 25,
            marginTop: 25,
            borderRadius: 10,
          }}>
          <TextInput
            style={{
              height: 40,
              width: '85%',
              paddingLeft: 10,
              fontSize: 18,
              justifyContent: 'center',
              color: 'black',
            }}
            placeholder="Middle Name"
            placeholderTextColor="grey"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        <View
          style={{
            borderColor: 'lightgrey',
            borderWidth: 1,
            marginLeft: 25,
            marginRight: 25,
            marginTop: 25,
            borderRadius: 10,
          }}>
          <TextInput
            style={{
              height: 40,
              width: '85%',
              paddingLeft: 10,
              fontSize: 18,
              justifyContent: 'center',
              color: 'black',
            }}
            placeholder="Last Name"
            placeholderTextColor="grey"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        <View
          style={{
            borderColor: 'lightgrey',
            borderWidth: 1,
            marginLeft: 25,
            marginRight: 25,
            marginTop: 25,
            borderRadius: 10,
          }}>
          <TextInput
            style={{
              height: 40,
              width: '85%',
              paddingLeft: 10,
              fontSize: 18,
              justifyContent: 'center',
              color: 'black',
            }}
            placeholder="Email"
            placeholderTextColor="grey"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        <View
          style={{
            borderColor: 'lightgrey',
            borderWidth: 1,
            marginLeft: 25,
            marginRight: 25,
            marginTop: 25,
            borderRadius: 10,
          }}>
          <TextInput
            style={{
              height: 40,
              width: '85%',
              paddingLeft: 10,
              fontSize: 18,
              justifyContent: 'center',
              color: 'black',
            }}
            placeholder="Contact Number"
            placeholderTextColor="grey"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>

        <View
          style={{
            borderColor: 'lightgrey',
            borderWidth: 1,
            marginLeft: 25,
            marginRight: 25,
            borderRadius: 10,
            marginTop: 20,
          }}>
          <TextInput
            style={{
              height: 40,
              width: '85%',
              paddingLeft: 10,
              fontSize: 18,
              justifyContent: 'center',
              color: 'black',
            }}
            placeholder="Qualification"
            placeholderTextColor="grey"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
          />
        </View>

        <View
          style={{
            borderColor: 'lightgrey',
            borderWidth: 1,
            marginLeft: 25,
            marginRight: 25,
            borderRadius: 10,
            marginTop: 20,
          }}>
          <TextInput
            style={{
              height: 40,
              width: '85%',
              paddingLeft: 10,
              fontSize: 18,
              justifyContent: 'center',
              color: 'black',
            }}
            placeholder="Speciality"
            placeholderTextColor="grey"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
          />
        </View>

        <View
          style={{
            borderColor: 'lightgrey',
            borderWidth: 1,
            marginLeft: 25,
            marginRight: 25,
            borderRadius: 10,
            marginTop: 20,
          }}>
          <TextInput
            style={{
              height: 40,
              width: '85%',
              paddingLeft: 10,
              fontSize: 18,
              justifyContent: 'center',
              color: 'black',
            }}
            placeholder="Reg Number"
            placeholderTextColor="grey"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
          />
        </View>

        <View
          style={{
            borderColor: 'lightgrey',
            borderWidth: 1,
            marginLeft: 25,
            marginRight: 25,
            borderRadius: 10,
            marginTop: 20,
            height: 40,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              flex: 1,
              height: '100%',
              justifyContent: 'center',
            }}
            onPress={() => setOpen(true)}>
            <Text style={{paddingLeft: 10, fontSize: 18, color: 'grey'}}>
              {selectedDate}
            </Text>
          </TouchableOpacity>
          <Image
            style={{width: 25, height: 25, marginRight: 10}}
            source={require('../Images/calendarIcon.png')}
          />
          <DatePicker
            modal
            title={'Date Of Birth'}
            mode="date"
            open={open}
            date={date}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
              setSelectedDate(
                date.getDate() +
                  '/' +
                  (date.getMonth() + 1) +
                  '/' +
                  date.getFullYear(),
              );
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </View>

        <View
          style={{
            borderColor: 'lightgrey',
            borderWidth: 1,
            marginLeft: 25,
            marginRight: 25,
            borderRadius: 10,
            marginTop: 20,
            height: 40,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              flex: 1,
              height: '100%',
              justifyContent: 'center',
            }}
            onPress={() => setAnniversaryDateOpen(true)}>
            <Text style={{paddingLeft: 10, fontSize: 18, color: 'grey'}}>
              {selectedAnniversaryDate}
            </Text>
          </TouchableOpacity>
          <Image
            style={{width: 25, height: 25, marginRight: 10}}
            source={require('../Images/calendarIcon.png')}
          />
          <DatePicker
            modal
            title={'Anniversary'}
            mode="date"
            open={anniversaryDateOpen}
            date={anniversaryDate}
            onConfirm={date => {
              setAnniversaryDateOpen(false);
              setAnniversaryDate(date);
              setSelectedAnniversaryDate(
                date.getDate() +
                  '/' +
                  (date.getMonth() + 1) +
                  '/' +
                  date.getFullYear(),
              );
            }}
            onCancel={() => {
              setAnniversaryDateOpen(false);
            }}
          />
        </View>

        <View
          style={{
            borderColor: 'lightgrey',
            borderWidth: 1,
            marginLeft: 25,
            marginRight: 25,
            borderRadius: 10,
            marginTop: 20,
            height: 40,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <SelectCountry
            style={styles.dropdown}
            selectedTextStyle={styles.selectedTextStyle}
            placeholderStyle={styles.placeholderStyle}
            maxHeight={200}
            value={state}
            data={statesObj}
            valueField="value"
            labelField="lable"
            placeholder="Select State"
            onChange={e => {
              setStates(e.value);
            }}
          />
        </View>

        <View
          style={{
            borderColor: 'lightgrey',
            borderWidth: 1,
            marginLeft: 25,
            marginRight: 25,
            borderRadius: 10,
            marginTop: 20,
            height: 40,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <SelectCountry
            style={styles.dropdown}
            selectedTextStyle={styles.selectedTextStyle}
            placeholderStyle={styles.placeholderStyle}
            maxHeight={200}
            value={bloodGroup}
            data={bloodGroupObj}
            valueField="value"
            labelField="lable"
            placeholder="Select Blood Group"
            onChange={e => {
              setBloodGroup(e.value);
            }}
          />
        </View>

        <View
          style={{
            borderColor: 'lightgrey',
            borderWidth: 1,
            marginLeft: 25,
            marginRight: 25,
            borderRadius: 10,
            marginTop: 20,
          }}>
          <TextInput
            style={{
              height: 40,
              width: '85%',
              paddingLeft: 10,
              fontSize: 18,
              justifyContent: 'center',
              color: 'black',
            }}
            placeholder="Password"
            placeholderTextColor="grey"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
          />
        </View>

        <View
          style={{
            borderColor: 'lightgrey',
            borderWidth: 1,
            marginLeft: 25,
            marginRight: 25,
            borderRadius: 10,
            marginTop: 20,
          }}>
          <TextInput
            style={{
              height: 40,
              width: '85%',
              paddingLeft: 10,
              fontSize: 18,
              justifyContent: 'center',
              color: 'black',
            }}
            placeholder="Confirm Password"
            placeholderTextColor="grey"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
          />
        </View>

        <Text
          style={{
            margin: 25,
            fontSize: 14,
            textAlign: 'center',
            color: 'grey',
          }}>
          By Continuing you agree with our Terms & Conditiones & Privacy Policy
        </Text>

        <TouchableOpacity
          onPress={() => sendRequestButtonClicked()}
          style={{
            backgroundColor: '#D1AA70',
            height: 45,
            margin: 25,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 12,
          }}>
          <Text
            style={{
              fontSize: 18,
              color: 'white',
              fontWeight: '700',
            }}>
            Send Request
          </Text>
        </TouchableOpacity>

        {bottomViewArray}
      </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  dropdown: {
    marginRight: 10,
    marginLeft: 5,
    height: '100%',
    flex: 1,
  },
  imageStyle: {
    width: 24,
    height: 24,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 8,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
