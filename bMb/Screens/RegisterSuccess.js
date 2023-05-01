import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import {Carousel} from 'react-native-auto-carousel';
import * as Constants from '../Utils/constants';
import {getData} from '../Utils/utility';

const RegisterSuccess = ({navigation}) => {
  const [sponsorsResponseDataObj, setSponsorsResponseDataObj] = useState([]);

  useEffect(() => {
    getData(Constants.SPONSORS).then(resultStr => {
      setSponsorsResponseDataObj(JSON.parse(resultStr));
    });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-evenly',
      }}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image
          source={require('../Images/leftArrowBlack.png')}
          style={{
            width: 40,
            height: 40,
            marginTop: 30,
          }}
        />
      </TouchableOpacity>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 40,
          fontWeight: '600',
          marginTop: 40,
          color: 'black',
        }}>
        Thank You For Registration
      </Text>

      <Text
        style={{
          textAlign: 'center',
          fontSize: 25,
          marginTop: 30,
          marginLeft: 30,
          marginRight: 30,
          color: 'black',
        }}>
        You will receive confirmation on registered email
      </Text>

      <View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 35,
            fontWeight: '600',
            marginLeft: 75,
            marginRight: 75,
            color: 'black',
          }}>
          Event Sponsers
        </Text>

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
        )}
        {/* <ScrollView
          horizontal={true}
          style={{
            marginTop: 15,
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
        </ScrollView> */}
      </View>
    </View>
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
    height: 75,
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

export default RegisterSuccess;
