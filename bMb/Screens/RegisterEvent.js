import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  Modal,
  TouchableOpacity,
  TextInput,
  FlatList,
  Dimensions,
} from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';
import PageLoader from '../Utils/loader';
import {getDataFromServer} from '../Utils/WebRequestManager';
import * as Constants from '../Utils/constants';
import {getData} from '../Utils/utility';
import {Carousel} from 'react-native-auto-carousel';

const RegisterEvent = ({route, navigation}) => {
  var currentObj = route.params.selectedObj;

  const [txtName, setName] = useState('');
  const [txtAge, setAge] = useState('');
  const [memberCount, setMemberCount] = useState();

  const [arrayList, setArrayList] = useState([]);

  const [isDialogVisible, setDialogVisibleValue] = useState(false);

  const [isLoading, setLoading] = useState(false);
  const [sponsorsResponseDataObj, setSponsorsResponseDataObj] = useState([]);

  var nameArray = [];

  useEffect(() => {
    getData(Constants.SPONSORS).then(resultStr => {
      setSponsorsResponseDataObj(JSON.parse(resultStr));
    });
  }, []);

  const closeDialog = () => {
    setDialogVisibleValue(false);
  };

  const payButtonClicked = () => {
    var bookingAmt = currentObj.bookingAmount;
    if (arrayList.length === 0) {
      bookingAmt = parseInt(bookingAmt) * 100;
    } else {
      bookingAmt = parseInt(bookingAmt + bookingAmt * arrayList.length) * 100;
    }

    var options = {
      description: currentObj.organiser,
      image: currentObj.image,
      currency: 'INR',
      // key: 'rzp_test_WXfTPTwgnQufLh', // Your api key
      key: 'rzp_test_QFN6160kezfj4v', // Your api key
      amount: bookingAmt.toString(),
      name: currentObj.title,
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
    nameArray.push({
      id: (Math.floor(Math.random() * 100) + 1).toString(),
      name: txtName,
      age: txtAge,
    });

    setArrayList([...arrayList, nameArray]);

    setDialogVisibleValue(false);
  };

  const addNewButtonClicked = () => {
    console.log('addNewButtonClicked');

    setDialogVisibleValue(true);
  };

  const crossButtonClicked = id => {
    var data = arrayList.filter(item => item[0].id !== id);
    console.log('Final Array : ', JSON.stringify(data));
    setArrayList(data);
  };

  const renderItem = ({item}) => (
    <Item id={item[0].id} name={item[0].name} age={item[0].age} />
  );

  const Item = ({id, name, age}) => (
    <View
      style={{
        backgroundColor: '#1B195B',
        padding: 5,
        marginVertical: 8,
        marginTop: 5,
        borderRadius: 10,
        flexDirection: 'row',
        height: 80,
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          paddingLeft: 15,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontWeight: '800',
            width: 100,
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}>
          Name
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: 'white',
            numberOfLines: 10,
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            justifyContent: 'center',
            width: 100,
            marginTop: 10,
          }}>
          {name}
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontWeight: '800',
            width: 100,
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}>
          Age
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: 'white',
            numberOfLines: 10,
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            justifyContent: 'center',
            width: 100,
            marginTop: 10,
          }}>
          {age}
        </Text>
      </View>

      <TouchableOpacity
        key={id}
        onPress={() => crossButtonClicked(id)}
        style={{
          width: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          resizeMode="stretch"
          source={require('../Images/whiteCrossIcon.png')}
          style={{width: 25, height: 25}}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1, marginBottom: 45}}>
      {isLoading && <PageLoader show={isLoading} />}
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
          flexDirection: 'column',
          marginBottom: 65,
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 25,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '700',
              marginBottom: 20,
              color: 'black',
            }}>
            {currentObj.title}
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '700',
              marginBottom: 20,
              color: 'black',
            }}>
            Registration
          </Text>
          <View style={{width: '90%', marginBottom: 10}}>
            <Text style={{fontSize: 20, marginBottom: 10, color: 'black'}}>
              {currentObj.content}
            </Text>
            <Text style={{fontSize: 20, marginBottom: 10, color: 'black'}}>
              {'Organiser : ' + currentObj.organiser}
            </Text>
            <Text style={{fontSize: 20, marginBottom: 10, color: 'black'}}>
              {'Date : ' + currentObj.date.split('T')[0]}
            </Text>
            <Text style={{fontSize: 20, marginBottom: 15, color: 'black'}}>
              {'Address : ' + currentObj.address}
            </Text>

            <Text
              style={{
                fontSize: 20,
                color: '#D1AA70',
                fontWeight: '700',
              }}>
              {currentObj.bookingAmount + ' Per Person'}
            </Text>
          </View>
          <Image
            resizeMode="stretch"
            source={{
              uri: currentObj.image,
            }}
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
            marginLeft: 25,
            marginRight: 25,
            marginTop: 15,
            borderRadius: 10,
          }}>
          {sponsorsResponseDataObj.length > 0 && (
            <View
              style={{
                height: 150,
              }}>
              <Carousel
                autoPlayTime={3000}
                autoPlay={true}
                data={sponsorsResponseDataObj}
                dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: '#000',
                }}
                renderItem={item => (
                  <Image
                    resizeMode="cover"
                    key={item._id}
                    source={{uri: item.image}}
                    style={{
                      height: 150,
                      width: Dimensions.get('window').width,
                    }}
                  />
                )}
              />
            </View>
          )}
        </View>

        <View
          style={{
            height: 40,
            marginLeft: 25,
            marginRight: 25,
            marginTop: 20,
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

        {arrayList.length > 0 && (
          <View style={{marginLeft: 25, marginRight: 25}}>
            <FlatList
              data={arrayList}
              renderItem={renderItem}
              keyExtractor={item => item[0].id}
            />
          </View>
        )}
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
