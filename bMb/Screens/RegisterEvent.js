import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  Modal,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';

const RegisterEvent = ({navigation}) => {
  const [txtName, setName] = useState('');
  const [txtAge, setAge] = useState('');

  const [arrayList, setArrayList] = useState([]);

  const [isDialogVisible, setDialogVisibleValue] = useState(false);

  var nameArray = [];

  //  useEffect(() => {}, []);

  const closeDialog = () => {
    setDialogVisibleValue(false);
  };

  const payButtonClicked = () => {
    console.log('pay Button Clicked');

    var options = {
      description: 'KP World Wide',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_WXfTPTwgnQufLh', // Your api key
      amount: '10000',
      name: 'BMB MediMeet 2022',
      prefill: {
        email: 'hardik.pithadia@tejora.com',
        contact: '7666240144',
        name: 'Razorpay Software',
      },
      theme: {color: '#3F60A0'},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        // handle success
        alert(`Success: ${data.razorpay_payment_id}`);
        navigation.navigate('RegisterEventSuccess');
      })
      .catch(error => {
        // handle failure
        alert(`Error: ${error.code} | ${error.description}`);
      });
  };

  const submitButtonClicked = () => {
    console.log('submitButtonClicked');

    nameArray.push(
      <View
        style={{
          backgroundColor: 'lightgray',
          height: 170,
          marginTop: 25,
          marginLeft: 25,
          marginRight: 25,
          borderRadius: 10,
        }}>
        <View style={{width: '100%', height: 35, alignItems: 'flex-end'}}>
          <TouchableOpacity
            style={{marginRight: 10, marginTop: 5}}
            onPress={() => crossButtonClicked()}>
            <Image
              source={require('../Images/cross_icon.png')}
              style={{width: 35, height: 35}}
            />
          </TouchableOpacity>
        </View>

        <Text
          style={{
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 10,
            marginLeft: 25,
            marginRight: 25,
            marginTop: 10,
            padding: 10,
            fontSize: 20,
          }}>
          {txtName}
        </Text>

        <Text
          style={{
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 10,
            marginTop: 10,
            marginLeft: 25,
            marginRight: 25,
            padding: 10,
            fontSize: 20,
          }}>
          {txtAge}
        </Text>
      </View>,
    );

    setArrayList([...arrayList, nameArray]);

    setDialogVisibleValue(false);
  };

  const addNewButtonClicked = () => {
    console.log('addNewButtonClicked');

    setDialogVisibleValue(true);
  };

  const crossButtonClicked = () => {
    console.log('crossButtonClicked');
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
          flexDirection: 'column',
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 25,
          }}>
          <Image
            resizeMode="stretch"
            source={require('../Images/register_event_banner.png')}
            style={{width: '90%', height: 200, borderRadius: 10}}
          />
        </View>
        <Text
          style={{
            marginTop: 40,
            marginLeft: 25,
            fontSize: 30,
            fontWeight: '600',
            color: 'black',
          }}>
          Sponsors
        </Text>

        <View
          style={{
            height: 150,
            backgroundColor: 'lightgray',
            marginLeft: 25,
            marginRight: 25,
            marginTop: 15,
            borderRadius: 10,
          }}></View>

        <View
          style={{
            height: 40,
            marginLeft: 25,
            marginRight: 25,
            marginTop: 10,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: 18,
              marginLeft: 5,
              fontWeight: '600',
              color: 'black',
            }}>
            No.of Family Members
          </Text>
          <TouchableOpacity
            style={{flexDirection: 'row'}}
            onPress={() => addNewButtonClicked()}>
            <Image
              style={{width: 25, height: 25, marginRight: 5}}
              source={require('../Images/add_icon.png')}
            />
            <Text
              style={{
                // backgroundColor: 'gray',
                marginRight: 15,
                fontSize: 18,
                fontWeight: '600',
                color: 'black',
              }}>
              Add New
            </Text>
          </TouchableOpacity>
        </View>

        {arrayList}
        <View
          style={{
            height: 50,
            marginTop: 20,
            marginLeft: 25,
            marginRight: 25,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{textAlign: 'center', fontSize: 15, color: 'black'}}>
            By Continuing, you agree with our Terms & Conditions and Privacy
            Policy
          </Text>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={isDialogVisible}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              height: 200,
            }}>
            <View
              style={{
                width: '80%',
                height: 250,
                backgroundColor: '#1B195B',
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: '#D1AA70', fontSize: 20, fontWeight: '700'}}>
                No.of Family Details for Entry
              </Text>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Enter Name"
                placeholderTextColor={'#D1AA70'}
                onChangeText={newText => setName(newText)}
                onChange={newText => setName(newText)}
                style={{
                  borderColor: '#D1AA70',
                  borderWidth: 1,
                  height: 45,
                  width: '80%',
                  paddingLeft: 15,
                  borderRadius: 10,
                  fontSize: 20,
                  color: '#D1AA70',
                  marginTop: 15,
                }}
              />

              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="numeric"
                placeholder="Enter Age"
                placeholderTextColor={'#D1AA70'}
                onChangeText={newText => setAge(newText)}
                onChange={newText => setAge(newText)}
                style={{
                  borderColor: '#D1AA70',
                  borderWidth: 1,
                  height: 45,
                  width: '80%',
                  paddingLeft: 15,
                  borderRadius: 10,
                  fontSize: 20,
                  marginTop: 20,
                  color: '#D1AA70',
                }}
              />

              <View
                style={{
                  flexDirection: 'row',
                  width: '80%',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  marginTop: 25,
                }}>
                <TouchableOpacity
                  onPress={() => submitButtonClicked()}
                  style={{
                    backgroundColor: '#D1AA70',
                    height: 40,
                    width: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                    }}>
                    {' '}
                    Submit
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => closeDialog()}
                  style={{
                    backgroundColor: '#D1AA70',
                    height: 40,
                    width: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                  }}>
                  <Text style={{fontSize: 20}}> Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <TouchableOpacity
          onPress={() => payButtonClicked()}
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
            Pay and Register of Event Now
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RegisterEvent;
