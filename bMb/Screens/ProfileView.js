import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Platform,
} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';

const ProfileView = ({navigation}) => {
  const [items, setItems] = useState([
    {id: 0, name: require('../Images/demoImage1.png')},
    {id: 1, name: require('../Images/demoImage1.png')},
    {id: 2, name: require('../Images/demoImage1.png')},
    {id: 3, name: require('../Images/demoImage1.png')},
    {id: 4, name: require('../Images/demoImage1.png')},
    {id: 5, name: require('../Images/demoImage1.png')},
    {id: 6, name: require('../Images/demoImage1.png')},
    {id: 7, name: require('../Images/demoImage1.png')},
    {id: 8, name: require('../Images/demoImage1.png')},
    {id: 9, name: require('../Images/demoImage1.png')},
    {id: 10, name: require('../Images/demoImage1.png')},
    {id: 11, name: require('../Images/demoImage1.png')},
  ]);

  const profileImageButtonClicked = () => {
    console.log('profileImage Button Clicked');
  };

  return (
    <SafeAreaView>
      <ScrollView style={{backgroundColor: '#F2F2F2'}}>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
              }}
            >
              <Text
                style={{
                  fontSize: 25.0,
                }}
              >
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
          </View>

          <View
            style={{
              height: 125,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}
          >
            <View style={{width: '50%', height: 100}}>
              <Text
                style={{
                  fontSize: 23.0,
                }}
              >
                Dr. Hardik Pithadia
              </Text>

              <Text
                style={{
                  textAlign: 'left',
                  top: 5.0,
                }}
              >
                @hardik-pithadia
              </Text>

              <Text style={{top: 20.0}}>
                Hello, I'm Dr. Hardik Pithadia, Welcome To My Profile
              </Text>
            </View>

            <View
              style={{
                height: 100,
                alignItems: 'flex-end',
              }}
            >
              <Image
                style={{
                  width: 95,
                  height: 95,
                  backgroundColor: 'lightgray',
                  borderRadius: 45,
                  borderWidth: 3,
                  borderColor: '#3F60A0',
                }}
                source={require('../Images/ProfileIcon.png')}
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
                }}
              >
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

          <View
            style={{
              backgroundColor: 'pink',
              height: 125.0,
              marginTop: 25,
              marginRight: 25,
              marginLeft: 25,
              borderRadius: 10.0,
              alignItems: 'flex-start',
              justifyContent: 'flex-end',
              flexDirection: 'row',
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: '#F2F2F2',
                width: 30,
                height: 30,
                marginLeft: 50,
                borderRadius: 15,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                source={require('../Images/camera_purple.png')}
                style={{width: 25, height: 25}}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: '#F2F2F2',
                width: 30,
                height: 30,
                marginLeft: 50,
                borderRadius: 15,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                source={require('../Images/camera_purple.png')}
                style={{width: 25, height: 25}}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              height: Platform.OS == 'ios' ? 300 : 180,
              marginTop: 15,
              marginLeft: 25,
              marginRight: 25,
            }}
          >
            <FlatGrid
              itemDimension={80}
              data={items}
              style={styles.gridView}
              spacing={15}
              renderItem={({item}) => (
                <ImageBackground
                  source={item.name}
                  resizeMode="stretch"
                  style={{
                    borderRadius: 10,
                    height: 80,
                    overflow: 'hidden',
                  }}
                >
                  <TouchableOpacity
                    style={{width: '100%', height: '100%'}}
                    onPress={value => handleImageClickEvent(value.id)}
                  />
                </ImageBackground>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    marginBottom: 20,
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
});

export default ProfileView;
