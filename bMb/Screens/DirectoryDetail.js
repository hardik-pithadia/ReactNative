import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

const DirectoryDetail = ({route, navigation}) => {
  var selectedObject = route.params.selectedObject;

  return (
    <SafeAreaView>
      <ScrollView style={{backgroundColor: '#F2F2F2'}}>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
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

          {/*<View
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
              <TouchableOpacity
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
              </TouchableOpacity>
            </View>
          </View>

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
          </View>*/}
        </View>
      </ScrollView>

      {/*{sponsorsResponseDataObj.length > 0 && (
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
      )}*/}
    </SafeAreaView>
  );
};

export default DirectoryDetail;
