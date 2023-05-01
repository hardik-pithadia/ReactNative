import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Alert,
  Dimensions,
  Linking,
} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import {getData, removeData} from '../Utils/utility';
import * as Constants from '../Utils/constants';
import {Carousel} from 'react-native-auto-carousel';
import PageLoader from '../Utils/loader';
import {getDataFromServer} from '../Utils/WebRequestManager';

const ProfileView = ({navigation}) => {
  const [isLoading, setLoading] = useState(false);
  const [profileImage, setProfileImage] = useState(
    'https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg',
  );
  const [firstName, setFirstName] = useState('');
  const [lastName, setLirstName] = useState('');
  const [accountType, setAccountType] = useState('');
  const [qualification, setQualification] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [contact_number, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [idValue, setIdValue] = useState('');
  const [sponsorsResponseDataObj, setSponsorsResponseDataObj] = useState([]);
  const [authToken, setAuthToken] = useState('');
  const [profileImagePath, setProfileImagePath] = useState('');
  const [certificates, setCertificates] = useState([]);
  const [assignedCertificates, setAssignedCertificates] = useState([]);

  useEffect(() => {
    getData(Constants.IMAGE_NAME).then(resultStr => {
      setProfileImage(resultStr || '');
    });

    getData(Constants.SPONSORS).then(resultStr => {
      setSponsorsResponseDataObj(JSON.parse(resultStr));
    });

    getData(Constants.FIRST_NAME).then(resultStr => {
      setFirstName(resultStr || '');
    });

    getData(Constants.LAST_NAME).then(resultStr => {
      setLirstName(resultStr || '');
    });

    getData(Constants.ACC_TYPE).then(resultStr => {
      setAccountType(resultStr || '');
    });

    getData(Constants.QUALIFICATION).then(resultStr => {
      setQualification(resultStr || '');
    });

    getData(Constants.SPECIALITY).then(resultStr => {
      setSpeciality(resultStr || '');
    });

    getData(Constants.CONTACT_NUMBER).then(resultStr => {
      setContactNumber(resultStr || '');
    });

    getData(Constants.EMAIL).then(resultStr => {
      setEmail(resultStr || '');
    });

    getData(Constants.ID).then(resultStr => {
      setIdValue(resultStr || '');
    });

    getData(Constants.AUTH_TOKEN).then(resultStr => {
      console.log('TOKEN : ' + resultStr || '');
      setAuthToken(resultStr || '');
    });

    if (idValue.length > 0 && authToken.length > 0) {
      getAllDoctorResponse();
    }
  }, [idValue, authToken]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (idValue.length > 0 && authToken.length > 0) {
        getAllDoctorResponse();
      }
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  const getAllDoctorResponse = async () => {
    setLoading(true);

    var responseData = await getDataFromServer(
      Constants.base_URL + '/doctor/getdoctor/' + idValue,
      authToken,
    );

    if (responseData.response) {
      if (responseData.response.status) {
        console.log(
          'Profile Response Response101 : ' +
            JSON.stringify(responseData.response.data),
        );

        if (responseData.response.data !== undefined) {
          setFirstName(responseData.response.data.first_name);
          setLirstName(responseData.response.data.last_name);
          setAccountType(responseData.response.data.account_type);
          setQualification(responseData.response.data.qualification);
          setSpeciality(responseData.response.data.speciality);
          setContactNumber(responseData.response.data.contact_number);
          setEmail(responseData.response.data.email);
          setProfileImagePath(responseData.response.data.image);
          setCertificates([
            responseData.response.data.degree_certificate,
            responseData.response.data.mmc_certificate,
          ]);
          setAssignedCertificates(responseData.response.data.certificates);

          console.log(
            'Certification : ',
            JSON.stringify(responseData.response.data.certificates),
          );
        }
      } else {
        Alert.alert('Error', responseData.response.message, [
          {
            text: 'Ok',
            style: 'cancel',
          },
        ]);
      }
    }

    setLoading(false);
  };

  const profileImageButtonClicked = () => {
    console.log('profileImage Button Clicked');
  };

  const handleImageClickEvent = idValue => {
    console.log('handleImageClickEvent : ' + idValue);
  };

  const imagePickerButtonClicked = () => {
    console.log('imagePicker Button Clicked');
  };

  const locationButtonClicked = () => {
    console.log('Location Button Clicked');
  };

  const postButtonClicked = () => {
    console.log('Post Button Clicked');
  };

  const logoutButtonClicked = () => {
    console.log('Logout Button Clicked');

    Alert.alert('Logout', 'Are you sure? You want to logout?', [
      {
        text: 'Ok',
        style: 'default',
        onPress: () => {
          removeData(Constants.IS_LOGIN);
          navigation.navigate('Login');
          //navigation.navigate.popToTop();
          //
        },
      },
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ]);
  };

  return (
    <SafeAreaView>
      {isLoading && <PageLoader show={isLoading} />}
      <ScrollView style={{backgroundColor: '#F2F2F2'}}>
        <View style={{marginBottom: 100}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <Image
              style={{
                height: 130,
                width: 90,
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
              }}>
              <Text
                style={{
                  fontSize: 25.0,
                  color: 'black',
                }}>
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
            <TouchableOpacity
              onPress={() => logoutButtonClicked()}
              style={{
                width: 50,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{
                  height: 30,
                  width: 30,
                }}
                source={require('../Images/logout_icon.png')}
                resizeMethod="scale"
                resizeMode="stretch"
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              height: 125,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <View style={{width: '50%', height: 100}}>
              <Text
                style={{
                  fontSize: 16.0,
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                {'Dr. ' + firstName + ' ' + lastName}
              </Text>

              <Text
                style={{
                  textAlign: 'left',
                  top: 5.0,
                  color: 'black',
                }}>
                {accountType}
              </Text>
            </View>

            <View
              style={{
                height: 100,
                width: 100,
                alignItems: 'flex-end',
              }}>
              <Image
                style={{
                  width: 80,
                  height: 80,
                  backgroundColor: 'lightgray',
                  borderRadius: 45,
                  borderWidth: 3,
                  borderColor: '#3F60A0',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                resizeMode="cover"
                source={{uri: profileImagePath}}
              />
              {/* <TouchableOpacity
                onPress={() => profileImageButtonClicked()}
                style={{
                  backgroundColor: '#3F60A0',
                  width: 30.0,
                  height: 30.0,
                  top: -20,
                  borderRadius: 15,
                  alignItems: 'center',
                  justifyContent: 'center',
                  right: 5,
                }}>
                <Image
                  source={require('../Images/camera_icon.png')}
                  style={{
                    width: 20.0,
                    height: 20.0,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                />
              </TouchableOpacity> */}
            </View>
          </View>

          {/*<View
            style={{
              backgroundColor: 'white',
              height: 125.0,
              marginTop: 35,
              marginRight: 25,
              marginLeft: 25,
              borderRadius: 10.0,
              alignItems: 'flex-start',
              justifyContent: 'flex-end',
              flexDirection: 'column',
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
              }}>
              <TouchableOpacity
                onPress={() => imagePickerButtonClicked()}
                style={{
                  backgroundColor: '#F2F2F2',
                  width: 30,
                  height: 30,
                  marginLeft: 25,
                  marginBottom: 10,
                  borderRadius: 15,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../Images/camera_purple.png')}
                  style={{width: 25, height: 25}}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => locationButtonClicked()}
                style={{
                  backgroundColor: '#F2F2F2',
                  width: 30,
                  height: 30,
                  marginLeft: 25,
                  borderRadius: 15,
                  marginBottom: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../Images/location_purple.png')}
                  style={{width: 25, height: 25}}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => postButtonClicked()}
                style={{
                  backgroundColor: '#3F60A0',
                  width: 100,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: 100,
                  borderRadius: 5,
                  marginBottom: 5,
                }}>
                <Text style={{color: 'white', fontSize: 15}}>POST</Text>
              </TouchableOpacity>
            </View>

            <Text style={{fontSize: 15, color: 'lightgray', marginLeft: 25}}>
              What do you want to tell everyone?
            </Text>
          </View>*/}

          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginLeft: 20,
                color: 'black',
              }}>
              Assigned Certificates
            </Text>
            <FlatGrid
              itemDimension={80}
              data={certificates}
              style={styles.gridView}
              spacing={15}
              renderItem={({item}) => (
                <Image
                  source={{uri: item}}
                  resizeMode="cover"
                  style={{
                    borderRadius: 10,
                    height: 80,
                    overflow: 'hidden',
                  }}></Image>
              )}
            />
          </View>

          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginLeft: 20,
                color: 'black',
              }}>
              Certificates
            </Text>
            <FlatGrid
              itemDimension={75}
              data={assignedCertificates}
              style={styles.gridView}
              spacing={15}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => {
                    Linking.canOpenURL(item.url)
                      .then(supported => {
                        if (!supported) {
                          Alert.alert('Please Provide Valid URL');
                        } else {
                          return Linking.openURL(item.url);
                        }
                      })
                      .catch(err => console.log(err));
                  }}>
                  <Image
                    source={require('../Images/pdfImage.png')}
                    resizeMode="cover"
                    style={{
                      borderRadius: 10,
                      overflow: 'hidden',
                      width: 75,
                      height: 100,
                    }}
                  />
                </TouchableOpacity>
              )}
            />
          </View>

          <View
            style={{
              marginHorizontal: 20,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Details
            </Text>

            <View style={{flexDirection: 'row', marginTop: 20}}>
              <Text style={styles.detailTitle}>Qualification : </Text>
              <Text style={{color: 'gray'}}>{qualification}</Text>
            </View>

            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Text style={styles.detailTitle}>Speciality : </Text>
              <Text style={{color: 'gray'}}>{speciality}</Text>
            </View>

            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Text style={styles.detailTitle}>Contact No : </Text>
              <Text style={{color: 'gray'}}>{contact_number}</Text>
            </View>

            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Text style={styles.detailTitle}>Email : </Text>
              <Text style={{color: 'gray'}}>{email}</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {sponsorsResponseDataObj.length > 0 && (
        <View
          style={{
            height: 80,
            marginLeft: 20,
            marginRight: 20,
            marginBottom: 50,
            marginTop: 20,
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
                  height: '85%',
                  width: Dimensions.get('window').width,
                }}
              />
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  gridView: {
    marginTop: 5,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  detailTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: 'black',
  },
});

export default ProfileView;
