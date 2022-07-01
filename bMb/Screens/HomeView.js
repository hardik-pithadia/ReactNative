import React, {useState} from 'react';
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

const HomeView = ({navigation}) => {
  const [items, setItems] = useState([
    {id: 0, name: require('../Images/demoImage1.png'), title: 'Directory'},
    {id: 1, name: require('../Images/demoImage1.png'), title: 'Calendar'},
    {id: 2, name: require('../Images/demoImage1.png'), title: 'Events'},
    {id: 3, name: require('../Images/demoImage1.png'), title: 'About Us'},
    {id: 4, name: require('../Images/demoImage1.png'), title: 'Gallery'},
    {id: 5, name: require('../Images/demoImage1.png'), title: 'Join Us'},
    //    {id: 6, name: require('../Images/demoImage1.png'), title: 'Member Feeds'},
    {id: 7, name: require('../Images/demoImage1.png'), title: 'Sponsers'},
    {id: 8, name: require('../Images/demoImage1.png'), title: 'Contact Us'},
  ]);

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

    if (menuItem == 'Directory') {
      navigation.navigate('DorectoryList');
      console.log('Navigate to Directory List');
    } else if (menuItem == 'Calendar') {
      console.log('Navigate to Calendar');
    } else if (menuItem == 'Events') {
      console.log('Navigate to Events');
      navigation.navigate('Events');
    } else if (menuItem == 'About Us') {
      console.log('Navigate to About Us');
    } else if (menuItem == 'Gallery') {
      navigation.navigate('Gallery');
      console.log('Navigate to Gallery');
    } else if (menuItem == 'Join Us') {
      console.log('Navigate to Join Us');
    } else if (menuItem == 'Sponsers') {
      console.log('Navigate to Sponsers');
    } else if (menuItem == 'Contact Us') {
      console.log('Navigate to Contact Us');
      navigation.navigate('ContactUs');
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
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
                color: '#3F60A0',
              }}
            >
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
          }}
        >
          <ScrollView
            horizontal={true}
            style={{
              height: 175,
              backgroundColor: '#3F60A0',
              marginLeft: 25,
              marginRight: 25,
              borderRadius: 10,
            }}
          >
            <Image
              source={require('../Images/demoImage1.png')}
              style={{
                height: 175,
                width: 360,
                borderRadius: 10,
              }}
            />

            <Image
              source={require('../Images/demoImage1.png')}
              style={{
                marginLeft: 15,
                height: 175,
                width: 360,
                borderRadius: 10,
              }}
            />

            <Image
              source={require('../Images/demoImage1.png')}
              style={{
                marginLeft: 15,
                height: 175,
                width: 360,
                borderRadius: 10,
              }}
            />
          </ScrollView>

          <Text
            style={{
              marginTop: 10,
              marginLeft: 25,
              color: '#1B195B',
              fontSize: 16,
              fontWeight: '600',
            }}
          >
            Latest Updates
          </Text>

          <Text
            style={{
              marginTop: 10,
              marginLeft: 25,
              marginRight: 25,
              color: '#D1AA70',
              fontSize: 12,
              fontWeight: '500',
            }}
          >
            BMB Medimeet 2022 | March 2022 | Gujarat
          </Text>

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
            }}
          >
            Quick Links
          </Text>

          <View
            style={{
              marginTop: 15,
              marginLeft: 15,
              marginRight: 15,
              marginBottom: 25,
            }}
          >
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
                      height: 80,
                      overflow: 'hidden',
                    }}
                  >
                    <TouchableOpacity
                      style={{width: '100%', height: '100%'}}
                      onPress={() => handleQuickLinksClickEvent(item.title)}
                    />
                  </ImageBackground>
                  <Text style={{color: '#3F60A0'}}>{item.title}</Text>
                </View>
              )}
            />
          </View>

          <ScrollView
            horizontal={true}
            style={{
              marginBottom: 25,
              height: 110,
              backgroundColor: '#3F60A0',
            }}
          >
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
          </ScrollView>
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
