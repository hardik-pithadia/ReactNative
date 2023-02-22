import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';
import {StackActions} from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';
import {SelectCountry} from 'react-native-element-dropdown';
import PageLoader from '../Utils/loader';
import {postDataToServer} from '../Utils/WebRequestManager';
import * as Constants from '../Utils/constants';

const statesObj = [
  {
    value: 'Andhra Pradesh',
    lable: 'Andhra Pradesh',
  },
  {
    value: 'Arunachal Pradesh',
    lable: 'Arunachal Pradesh',
  },
  {
    value: 'Assam',
    lable: 'Assam',
  },
  {
    value: 'Bihar',
    lable: 'Bihar',
  },
  {
    value: 'Chhattisgarh',
    lable: 'Chhattisgarh',
  },
  {
    value: 'Goa',
    lable: 'Goa',
  },
  {
    value: 'Gujarat',
    lable: 'Gujarat',
  },
  {
    value: 'Haryana',
    lable: 'Haryana',
  },
  {
    value: 'Himachal Pradesh',
    lable: 'Himachal Pradesh',
  },
  {
    value: 'Jammu and Kashmir',
    lable: 'Jammu and Kashmir',
  },
  {
    value: 'Jharkhand',
    lable: 'Jharkhand',
  },
  {
    value: 'Karnataka',
    lable: 'Karnataka',
  },
  {
    value: 'Madhya Pradesh',
    lable: 'Madhya Pradesh',
  },
  {
    value: 'Maharashtra',
    lable: 'Maharashtra',
  },
  {
    value: 'Manipur',
    lable: 'Manipur',
  },
  {
    value: 'Meghalaya',
    lable: 'Meghalaya',
  },
  {
    value: 'Mizoram',
    lable: 'Mizoram',
  },
  {
    value: 'Nagaland',
    lable: 'Nagaland',
  },
  {
    value: 'Odisha',
    lable: 'Odisha',
  },
  {
    value: 'Punjab',
    lable: 'Punjab',
  },
  {
    value: 'Rajasthan',
    lable: 'Rajasthan',
  },
  {
    value: 'Sikkim',
    lable: 'Sikkim',
  },
  {
    value: 'Tamil Nadu',
    lable: 'Tamil Nadu',
  },
  {
    value: 'Telangana',
    lable: 'Telangana',
  },
  {
    value: 'Tripura',
    lable: 'Tripura',
  },
  {
    value: 'Uttarakhand',
    lable: 'Uttarakhand',
  },
  {
    value: 'West Bengal',
    lable: 'West Bengal',
  },
  {
    value: 'Andaman and Nicobar Islands',
    lable: 'Andaman and Nicobar Islands',
  },
  {
    value: 'Chandigarh',
    lable: 'Chandigarh',
  },
  {
    value: 'Dadra and Nagar Haveli',
    lable: 'Dadra and Nagar Haveli',
  },
  {
    value: 'Daman and Diu',
    lable: 'Daman and Diu',
  },
  {
    value: 'Delhi',
    lable: 'Delhi',
  },
  {
    value: 'Lakshadweep',
    lable: 'Lakshadweep',
  },
  {
    value: 'Puducherry',
    lable: 'Puducherry',
  },
];

const bloodGroupObj = [
  {
    value: 'A+',
    lable: 'A+',
  },
  {
    value: 'A-',
    lable: 'A-',
  },
  {
    value: 'B+',
    lable: 'B+',
  },
  {
    value: 'B-',
    lable: 'B-',
  },
  {
    value: 'O+',
    lable: 'O+',
  },
  {
    value: 'O-',
    lable: 'O-',
  },
  {
    value: 'AB+',
    lable: 'AB+',
  },
  {
    value: 'AB-',
    lable: 'AB-',
  },
];

const Register = ({route, navigation}) => {
  const [bottomViewArray, setBottomView] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('Date Of Birth');

  const [anniversaryDate, setAnniversaryDate] = useState(new Date());
  const [anniversaryDateOpen, setAnniversaryDateOpen] = useState(false);
  const [selectedAnniversaryDate, setSelectedAnniversaryDate] =
    useState('Anniversary Date');

  const [state, setStates] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');

  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [qualification, setQualification] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [regNumber, setRegNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  var bottomView = [];

  useEffect(() => {
    if (!route.params['isHide']) {
      getBottomView();
    } else {
      return null;
    }
  }, [bottomView.length]);

  const sendRequestButtonClicked = () => {
    console.log('=======================');

    //    console.log('First Name : ' + firstName);
    //    console.log('Middle Name : ' + middleName);
    //    console.log('Last Name : ' + lastName);
    //    console.log('Email : ' + email);
    //    console.log('Contact Number : ' + contactNumber);
    //    console.log('Qualification : ' + qualification);
    //    console.log('Speciality : ' + speciality);
    //    console.log('Reg Number : ' + regNumber);
    //    console.log('Date Of Birth : ' + selectedDate);
    //    console.log('Anniversary Date : ' + selectedAnniversaryDate);
    //    console.log('State : ' + state);
    //    console.log('Blood Group : ' + bloodGroup);
    //    console.log('Password : ' + password);
    //    console.log('Confirm Password : ' + confirmPassword);

    if (firstName.length === 0) {
      Alert.alert('Error', 'Please Enter First Name');
    } else if (middleName.length === 0) {
      Alert.alert('Error', 'Please Enter Middle Name');
    } else if (lastName.length === 0) {
      Alert.alert('Error', 'Please Enter Last Name');
    } else if (email.length === 0) {
      Alert.alert('Error', 'Please Enter Email');
    } else if (contactNumber.length === 0) {
      Alert.alert('Error', 'Please Enter Contact Number');
    } else if (qualification.length === 0) {
      Alert.alert('Error', 'Please Enter Qualification');
    } else if (speciality.length === 0) {
      Alert.alert('Error', 'Please Enter Speciality');
    } else if (regNumber.length === 0) {
      Alert.alert('Error', 'Please Enter Registered Number');
    } else if (selectedDate === 'Date Of Birth') {
      Alert.alert('Error', 'Please Select Date Of Birth');
    } else if (selectedAnniversaryDate === 'Anniversary Date') {
      Alert.alert('Error', 'Please Select Anniversary Date');
    } else if (state.length === 0) {
      Alert.alert('Error', 'Please Select State');
    } else if (bloodGroup.length === 0) {
      Alert.alert('Error', 'Please Select Blood Group');
    } else if (password.length === 0) {
      Alert.alert('Error', 'Please Enter Password');
    } else if (confirmPassword.length === 0) {
      Alert.alert('Error', 'Please Enter Confirm Password');
    } else {
      if (password !== confirmPassword) {
        Alert.alert(
          'Error',
          'Please Enter Correct Password & Confirm Password',
        );
      } else {
        //Call API
        setLoading(true);
        postRegisterDataToServer();
      }
    }

    //    navigation.navigate('RegisterEvent');
    //    navigation.navigate('Login');
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

  const postRegisterDataToServer = async () => {
    var mobValue = {
      first_name: firstName,
      middle_name: middleName,
      last_name: lastName,
      email: email,
      contact_number: contactNumber,
      password: confirmPassword,
      qualification: qualification,
      speciality: speciality,
      reg_number: regNumber,
      dob: selectedDate,
      blood_group: bloodGroup,
      state: state,
      marriage_date: selectedAnniversaryDate,
    };

    console.log('-------------------------------------');
    console.log('Register Object : ' + JSON.stringify(mobValue));

    var responseData = await postDataToServer(
      Constants.base_URL + '/doctor/signup',
      JSON.stringify(mobValue),
    );

    console.log('RESPONSE : ' + JSON.stringify(responseData));

    if (responseData.response) {
      if (responseData.response.status) {
        console.log('Register Response : ' + JSON.stringify(responseData));
        //   navigation.navigate('Base');
      } else {
        Alert.alert('Error', responseData.response.message, [
          {
            text: 'Ok',
            style: 'cancel',
            onPress: () => {
              setEmail('');
              setPassword('');
            },
          },
        ]);
      }
    }

    setLoading(false);
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={{backgroundColor: 'white', flex: 1}}>
        {isLoading && <PageLoader show={isLoading} />}
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
            value={firstName}
            onChangeText={text => setFirstName(text)}
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
            value={middleName}
            onChangeText={text => setMiddleName(text)}
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
            value={lastName}
            onChangeText={text => setLastName(text)}
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
            value={email}
            onChangeText={text => setEmail(text)}
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
            value={contactNumber}
            onChangeText={text => setContactNumber(text)}
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
            value={qualification}
            onChangeText={text => setQualification(text)}
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
            value={speciality}
            onChangeText={text => setSpeciality(text)}
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
            value={regNumber}
            onChangeText={text => setRegNumber(text)}
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
            value={password}
            onChangeText={text => setPassword(text)}
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
            value={confirmPassword}
            onChangeText={text => setConfirmPassword(text)}
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
