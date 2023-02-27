import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Linking,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import Carousel from './Carousel';
import PageLoader from '../Utils/loader';
import {getDataFromServer} from '../Utils/WebRequestManager';
import * as Constants from '../Utils/constants';

const HomeView = ({navigation}) => {
  const [items, setItems] = useState([
    {id: 1, name: require('../Images/Sponsors.png'), title: ''},
    {id: 2, name: require('../Images/Directory.png'), title: ''},
    {id: 3, name: require('../Images/Events.png'), title: ''},
    {id: 4, name: require('../Images/Aboutus.png'), title: ''},
    {id: 5, name: require('../Images/Gallery.png'), title: ''},
    {id: 6, name: require('../Images/JoinBMB.png'), title: ''},
    {id: 7, name: require('../Images/Contactus.png'), title: ''},
  ]);

  const [isLoading, setLoading] = useState(false);
  const [responseDataObj, setResponseData] = useState([]);

  useEffect(() => {
    getHomeResponse();
  }, []);

  const getHomeResponse = async () => {
    setResponseData([]);
    setLoading(true);
    var responseData = await getDataFromServer(
      Constants.base_URL + '/announcement/getall',
    );

    if (responseData.response) {
      if (responseData.response.status) {
        console.log(
          'Home Response : ' + JSON.stringify(responseData.response.data),
        );
        setResponseData(responseData.response.data);
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

  const whatsAppButtonClicked = () => {
    console.log('whatsApp Button Clicked');

    let msg = 'Hello World';
    let mobile = 7666240144;
    if (mobile) {
      if (msg) {
        let url = 'whatsapp://send?text=' + msg + '&phone=91' + mobile;
        Linking.openURL(url)
          .then(data => {
            console.log('WhatsApp Opened successfully ' + data);
          })
          .catch(() => {
            alert('Make sure WhatsApp installed on your device');
          });
      } else {
        alert('Please enter message to send');
      }
    } else {
      alert('Please enter mobile no');
    }
  };

  const handleQuickLinksClickEvent = menuItem => {
    console.log('handleImageClickEvent : ' + menuItem);

    if (menuItem === 1) {
      console.log('Sponcers');
    } else if (menuItem === 2) {
      console.log('Navigate to Directory List');
      navigation.navigate('DorectoryList');
    } else if (menuItem === 3) {
      console.log('Navigate to Events');
      navigation.navigate('Events');
    } else if (menuItem === 4) {
      console.log('Navigate to About Us');
      navigation.navigate('AboutUs');
    } else if (menuItem === 5) {
      console.log('Navigate to Gallery');
      navigation.navigate('Gallery');
    } else if (menuItem === 6) {
      console.log('Navigate to Join Us');
      navigation.navigate('Register', {
        isHide: true,
      });
    } else if (menuItem === 7) {
      console.log('Navigate to Contact Us');
      navigation.navigate('ContactUs');
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        {isLoading && <PageLoader show={isLoading} />}
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
            }}>
            <Text
              style={{
                fontSize: 25.0,
                color: '#3F60A0',
              }}>
              Dashboard
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
            flexDirection: 'column',
            flex: 1,
          }}>
          <Text
            style={{
              marginTop: 10,
              marginLeft: 25,
              color: '#1B195B',
              fontSize: 18,
              fontWeight: '600',
              marginBottom: 10,
            }}>
            Latest Updates
          </Text>
          <Carousel data={responseDataObj} />

          <View
            style={{
              height: 2,
              backgroundColor: '#3F60A0',
              marginLeft: 25,
              marginRight: 25,
              marginTop: 10,
            }}
          />

          <Text
            style={{
              marginTop: 15,
              marginLeft: 25,
              color: '#3F60A0',
              fontSize: 22,
            }}>
            Quick Links
          </Text>

          <View
            style={{
              marginTop: 15,
              marginLeft: 15,
              marginRight: 15,
              marginBottom: 25,
            }}>
            <FlatGrid
              itemDimension={80}
              data={items}
              style={styles.gridView}
              spacing={15}
              renderItem={({item}) => (
                <View>
                  <ImageBackground
                    source={item.name}
                    resizeMode="stretch"
                    style={{
                      borderRadius: 10,
                      height: 140,
                      overflow: 'hidden',
                    }}>
                    <TouchableOpacity
                      style={{width: '100%', height: '100%'}}
                      onPress={() => handleQuickLinksClickEvent(item.id)}
                    />
                  </ImageBackground>
                  <Text style={{color: '#3F60A0'}}>{item.title}</Text>
                </View>
              )}
            />
          </View>

          {/*<ScrollView
            horizontal={true}
            style={{
              marginBottom: 25,
              height: 110,
              backgroundColor: '#3F60A0',
            }}>
            <Image
              source={require('../Images/demoImage1.png')}
              style={{
                height: 80,
                width: 175,
                marginTop: 15,
                marginRight: 15,
                marginLeft: 25,
                borderRadius: 10,
              }}
            />
            <Image
              source={require('../Images/demoImage1.png')}
              style={{
                height: 80,
                width: 175,
                marginTop: 15,
                marginRight: 10,
                borderRadius: 10,
              }}
            />

            <Image
              source={require('../Images/demoImage1.png')}
              style={{
                height: 80,
                width: 175,
                marginTop: 15,
                marginRight: 10,
                borderRadius: 10,
              }}
            />

            <Image
              source={require('../Images/demoImage1.png')}
              style={{
                height: 80,
                width: 175,
                marginTop: 15,
                marginRight: 10,
                borderRadius: 10,
              }}
            />

            <Image
              source={require('../Images/demoImage1.png')}
              style={{
                height: 80,
                width: 175,
                marginTop: 15,
                marginRight: 10,
                borderRadius: 10,
              }}
            />
          </ScrollView>*/}
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

export default HomeView;
