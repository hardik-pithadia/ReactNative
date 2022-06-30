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
    {id: 0, name: require('../Images/demoImage1.png'), title: 'Directory'},
    {id: 1, name: require('../Images/demoImage1.png'), title: 'Calendar'},
    {id: 2, name: require('../Images/demoImage1.png'), title: 'Events'},
    {id: 3, name: require('../Images/demoImage1.png'), title: 'About Us'},
    {id: 4, name: require('../Images/demoImage1.png'), title: 'Gallery'},
    {id: 5, name: require('../Images/demoImage1.png'), title: 'Join Us'},
    {id: 6, name: require('../Images/demoImage1.png'), title: 'Member Feeds'},
    {id: 7, name: require('../Images/demoImage1.png'), title: 'Sponsers'},
    {id: 8, name: require('../Images/demoImage1.png'), title: 'Contact Us'},
    {id: 9, name: require('../Images/demoImage1.png'), title: 'Directory'},
    {id: 10, name: require('../Images/demoImage1.png'), title: 'Calendar'},
    {id: 11, name: require('../Images/demoImage1.png'), title: 'Events'},
    {id: 12, name: require('../Images/demoImage1.png'), title: 'About Us'},
    {id: 13, name: require('../Images/demoImage1.png'), title: 'Gallery'},
    {id: 14, name: require('../Images/demoImage1.png'), title: 'Join Us'},
    {id: 15, name: require('../Images/demoImage1.png'), title: 'Member Feeds'},
    {id: 16, name: require('../Images/demoImage1.png'), title: 'Sponsers'},
    {id: 17, name: require('../Images/demoImage1.png'), title: 'Contact Us'},
    {id: 18, name: require('../Images/demoImage1.png'), title: 'Directory'},
    {id: 19, name: require('../Images/demoImage1.png'), title: 'Calendar'},
    {id: 20, name: require('../Images/demoImage1.png'), title: 'Events'},
    {id: 21, name: require('../Images/demoImage1.png'), title: 'About Us'},
    {id: 22, name: require('../Images/demoImage1.png'), title: 'Gallery'},
    {id: 23, name: require('../Images/demoImage1.png'), title: 'Join Us'},
    {id: 24, name: require('../Images/demoImage1.png'), title: 'Member Feeds'},
    {id: 25, name: require('../Images/demoImage1.png'), title: 'Sponsers'},
    {id: 26, name: require('../Images/demoImage1.png'), title: 'Contact Us'},
    {id: 27, name: require('../Images/demoImage1.png'), title: 'Directory'},
    {id: 28, name: require('../Images/demoImage1.png'), title: 'Calendar'},
    {id: 29, name: require('../Images/demoImage1.png'), title: 'Events'},
    {id: 30, name: require('../Images/demoImage1.png'), title: 'About Us'},
    {id: 31, name: require('../Images/demoImage1.png'), title: 'Gallery'},
    {id: 32, name: require('../Images/demoImage1.png'), title: 'Join Us'},
    {id: 33, name: require('../Images/demoImage1.png'), title: 'Member Feeds'},
    {id: 34, name: require('../Images/demoImage1.png'), title: 'Sponsers'},
    {id: 35, name: require('../Images/demoImage1.png'), title: 'Contact Us'},
  ]);
  return (
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
