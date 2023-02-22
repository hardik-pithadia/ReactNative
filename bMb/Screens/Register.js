import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {StackActions} from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';

const Register = ({route, navigation}) => {
  const [bottomViewArray, setBottomView] = useState([]);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('Date Of Birth');

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
        </View>

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
