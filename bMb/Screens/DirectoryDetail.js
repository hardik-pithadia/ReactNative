import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import {getDataFromServer} from '../Utils/WebRequestManager';
import NetInfo from '@react-native-community/netinfo';
import * as Constants from '../Utils/constants';
import {getData} from '../Utils/utility';
import {Carousel} from 'react-native-auto-carousel';

const DirectoryDetail = ({route, navigation}) => {
  var selectedObject = route.params.selectedObject;
  const [sponsorsResponseDataObj, setSponsorsResponseDataObj] = useState([]);

  useEffect(() => {
    console.log('HARDIK Selected Object : ', JSON.stringify(selectedObject));
    getData(Constants.SPONSORS).then(resultStr => {
      setSponsorsResponseDataObj(JSON.parse(resultStr));
    });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView style={{backgroundColor: '#F2F2F2'}}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
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
                justifyContent: 'space-evenly',
              }}>
              <Text
                style={{
                  fontSize: 25.0,
                  color: 'black',
                }}>
                Directory
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
              height: 100,
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'white',
              marginHorizontal: 10,
              marginVertical: 25,
              borderRadius: 10,
            }}>
            <View
              style={{
                height: 100,
                width: 100,
                alignItems: 'flex-end',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 10,
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
                resizeMode="contain"
                source={{uri: selectedObject.image}}
              />
            </View>
            <View
              style={{
                width: '50%',
                height: 100,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 16.0,
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                {selectedObject.title}
              </Text>

              <Text
                style={{
                  textAlign: 'left',
                  top: 5.0,
                  color: 'black',
                }}>
                {selectedObject.qualification}
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'column',
              marginHorizontal: 10,
              borderRadius: 10,
              backgroundColor: 'white',
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginTop: 15,
                marginHorizontal: 15,
              }}>
              <Text
                style={{
                  fontSize: 16.0,
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                {'Clinic Address : '}
              </Text>

              <Text
                style={{
                  paddingLeft: 25,
                  color: 'black',
                  width: '65%',
                }}>
                {selectedObject.address}
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginTop: 15,
                marginHorizontal: 15,
              }}>
              <Text
                style={{
                  fontSize: 16.0,
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                {'Speciality : '}
              </Text>

              <Text
                style={{
                  paddingLeft: 25,
                  color: 'black',
                  width: '65%',
                }}>
                {selectedObject.speciality}
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginTop: 15,
                marginHorizontal: 15,
              }}>
              <Text
                style={{
                  fontSize: 16.0,
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                {'Qualification : '}
              </Text>

              <Text
                style={{
                  paddingLeft: 25,
                  color: 'black',
                  width: '65%',
                }}>
                {selectedObject.qualification}
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginTop: 15,
                marginHorizontal: 15,
              }}>
              <Text
                style={{
                  fontSize: 16.0,
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                {'Email : '}
              </Text>

              <Text
                style={{
                  paddingLeft: 25,
                  color: 'black',
                  width: '65%',
                }}>
                {selectedObject.email}
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginTop: 15,
                marginHorizontal: 15,
                marginBottom: 15,
              }}>
              <Text
                style={{
                  fontSize: 16.0,
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                {'Contact No. : '}
              </Text>

              <Text
                style={{
                  paddingLeft: 25,
                  color: 'black',
                  width: '65%',
                }}>
                {selectedObject.contact_number}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {sponsorsResponseDataObj.length > 0 && (
        <View
          style={{
            height: 150,
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
              marginTop: 45,
              borderRadius: 5,
              backgroundColor: '#000',
            }}
            renderItem={item => (
              <Image
                resizeMethod="resize"
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

      {/* {sponsorsResponseDataObj.length > 0 && (
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
                resizeMode="contain"
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
      )} */}
    </SafeAreaView>
  );
};

export default DirectoryDetail;
