import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import * as Constants from '../Utils/constants';
import {getData} from '../Utils/utility';
import {Carousel} from 'react-native-auto-carousel';

const Gallery = () => {
  const [sponsorsResponseDataObj, setSponsorsResponseDataObj] = useState([]);

  const [items, setItems] = useState([
    {id: 0, name: require('../Images/Gallery101.jpeg'), title: 'Directory'},
    {id: 1, name: require('../Images/Gallery102.jpeg'), title: 'Calendar'},
    {id: 2, name: require('../Images/Gallery103.jpeg'), title: 'Events'},
    {id: 3, name: require('../Images/Gallery104.jpeg'), title: 'About Us'},
    {id: 4, name: require('../Images/Gallery105.jpeg'), title: 'Gallery'},
    {id: 5, name: require('../Images/Gallery106.jpeg'), title: 'Join Us'},
    {id: 6, name: require('../Images/Gallery107.jpeg'), title: 'Member Feeds'},
    {id: 7, name: require('../Images/Gallery108.jpeg'), title: 'Sponsers'},
    {id: 8, name: require('../Images/Gallery109.jpeg'), title: 'Contact Us'},
    {id: 9, name: require('../Images/Gallery110.jpeg'), title: 'Directory'},
    {id: 10, name: require('../Images/Gallery111.jpeg'), title: 'Calendar'},
    {id: 11, name: require('../Images/Gallery112.jpeg'), title: 'Events'},
    {id: 12, name: require('../Images/Gallery113.jpeg'), title: 'About Us'},
    {id: 13, name: require('../Images/Gallery114.jpeg'), title: 'Gallery'},
    {id: 14, name: require('../Images/Gallery115.jpeg'), title: 'Join Us'},
    {id: 15, name: require('../Images/Gallery116.jpeg'), title: 'Member Feeds'},
    {id: 16, name: require('../Images/Gallery117.jpeg'), title: 'Sponsers'},
    {id: 17, name: require('../Images/Gallery118.jpeg'), title: 'Contact Us'},
    {id: 18, name: require('../Images/Gallery119.jpeg'), title: 'Directory'},
    {id: 19, name: require('../Images/Gallery120.jpeg'), title: 'Calendar'},
    {id: 20, name: require('../Images/Gallery121.jpeg'), title: 'Events'},
  ]);

  useEffect(() => {
    getData(Constants.SPONSORS).then(resultStr => {
      setSponsorsResponseDataObj(JSON.parse(resultStr));
    });
  }, []);

  return (
    <View
      style={{
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 125,
      }}>
      <FlatGrid
        itemDimension={120}
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
                height: 120,
                overflow: 'hidden',
              }}>
              <TouchableOpacity
                style={{width: '100%', height: '100%'}}
                // onPress={() => handleQuickLinksClickEvent(item.title)}
              />
            </ImageBackground>
          </View>
        )}
      />
      {sponsorsResponseDataObj.length > 0 && (
        <View
          style={{
            height: 80,
            marginLeft: 20,
            marginRight: 20,
            //  marginBottom: 50,
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

export default Gallery;
