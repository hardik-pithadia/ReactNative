import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';

const Gallery = () => {
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
  return (
    <View
      style={{
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 25,
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
