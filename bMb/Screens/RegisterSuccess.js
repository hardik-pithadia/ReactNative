import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';

const RegisterSuccess = ({navigation}) => {
  //  const [items, setItems] = useState([
  //    {id: 0, name: require('../Images/demoImage1.png')},
  //    {id: 1, name: require('../Images/demoImage1.png')},
  //    {id: 2, name: require('../Images/demoImage1.png')},
  //    {id: 3, name: require('../Images/demoImage1.png')},
  //    {id: 4, name: require('../Images/demoImage1.png')},
  //    {id: 5, name: require('../Images/demoImage1.png')},
  //    {id: 6, name: require('../Images/demoImage1.png')},
  //    {id: 7, name: require('../Images/demoImage1.png')},
  //    {id: 8, name: require('../Images/demoImage1.png')},
  //    {id: 9, name: require('../Images/demoImage1.png')},
  //    {id: 10, name: require('../Images/demoImage1.png')},
  //    {id: 11, name: require('../Images/demoImage1.png')},
  //  ]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-evenly',
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 40,
          fontWeight: '600',
          marginTop: 40,
          color: 'black',
        }}
      >
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
        }}
      >
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
          }}
        >
          Event Sponsers
        </Text>

        <ScrollView
          horizontal={true}
          style={{
            marginTop: 15,
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

        {/*<View
          style={{
            marginTop: 15,
            marginLeft: 25,
            marginRight: 25,
            marginBottom: 25,
            height: 125,
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
                  onPress={() => handleImageClickEvent(item.id)}
                />
              </ImageBackground>
            )}
          />
        </View>*/}
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
