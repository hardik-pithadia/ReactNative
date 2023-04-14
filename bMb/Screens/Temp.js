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
import {FlatGrid, SectionGrid} from 'react-native-super-grid';
import * as Constants from '../Utils/constants';
import {getData} from '../Utils/utility';
import {Carousel} from 'react-native-auto-carousel';

import PageLoader from '../Utils/loader';
import {getDataFromServer} from '../Utils/WebRequestManager';
import NetInfo from '@react-native-community/netinfo';

const Gallery = () => {
  //  const [items, setItems] = React.useState([
  //    {name: 'TURQUOISE', code: '#1abc9c'},
  //    {name: 'EMERALD', code: '#2ecc71'},
  //    {name: 'PETER RIVER', code: '#3498db'},
  //    {name: 'AMETHYST', code: '#9b59b6'},
  //    {name: 'WET ASPHALT', code: '#34495e'},
  //    {name: 'GREEN SEA', code: '#16a085'},
  //    {name: 'NEPHRITIS', code: '#27ae60'},
  //    {name: 'BELIZE HOLE', code: '#2980b9'},
  //    {name: 'WISTERIA', code: '#8e44ad'},
  //    {name: 'MIDNIGHT BLUE', code: '#2c3e50'},
  //    {name: 'SUN FLOWER', code: '#f1c40f'},
  //    {name: 'CARROT', code: '#e67e22'},
  //    {name: 'ALIZARIN', code: '#e74c3c'},
  //    {name: 'CLOUDS', code: '#ecf0f1'},
  //    {name: 'CONCRETE', code: '#95a5a6'},
  //    {name: 'ORANGE', code: '#f39c12'},
  //    {name: 'PUMPKIN', code: '#d35400'},
  //    {name: 'POMEGRANATE', code: '#c0392b'},
  //    {name: 'SILVER', code: '#bdc3c7'},
  //    {name: 'ASBESTOS', code: '#7f8c8d'},
  //  ]);

  const [itemsData, setItemsData] = React.useState([
    {
      _id: '642ac0dbc22ac609d23d2b2f',
      name: 'test 1',
      isActive: true,
      date: '2023-04-03',
      created_at: '2023-04-03T12:04:43.553Z',
      updated_at: '2023-04-03T12:04:43.553Z',
      __v: 0,
      files: [
        {
          _id: '642ac0dbc22ac609d23d2b31',
          url: 'https://bmb.fra1.digitaloceanspaces.com/bmb.GALLERY/image_1680523475302.jpg',
          isActive: true,
        },
        {
          _id: '642ac0dbc22ac609d23d2b32',
          url: 'https://bmb.fra1.digitaloceanspaces.com/bmb.GALLERY/image_1680523474715.jpg',
          isActive: true,
        },
        {
          _id: '642ac0dbc22ac609d23d2b33',
          url: 'https://bmb.fra1.digitaloceanspaces.com/bmb.GALLERY/image_1680523475453.jpg',
          isActive: true,
        },
      ],
    },
    {
      _id: '642e5459b48585d87b04b316',
      name: 'Festive Flavours ',
      isActive: true,
      date: '2023-04-27',
      created_at: '2023-04-06T05:10:49.881Z',
      updated_at: '2023-04-06T05:10:49.881Z',
      __v: 0,
      files: [
        {
          _id: '642e5459b48585d87b04b318',
          url: 'https://bmb.fra1.digitaloceanspaces.com/bmb.GALLERY/CleverTap-people3.png_1680757840025.png',
          isActive: true,
        },
        {
          _id: '642e5459b48585d87b04b319',
          url: 'https://bmb.fra1.digitaloceanspaces.com/bmb.GALLERY/CleverTap-people2.png_1680757840246.png',
          isActive: true,
        },
      ],
    },
  ]);

  const [sponsorsResponseDataObj, setSponsorsResponseDataObj] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [responseDataObj, setResponseData] = useState([]);

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

    NetInfo.fetch().then(state => {
      if (!state.isConnected) {
        Alert.alert('Network', 'Please Check Internet Connection');
      }
    });
    getGalleryResponse();
  }, []);

  const getGalleryResponse = async () => {
    setResponseData([]);

    setLoading(true);

    var responseData = await getDataFromServer(
      Constants.base_URL + '/gallery/getall',
    );

    if (responseData.response) {
      if (responseData.response.status) {
        console.log(
          'Gallery Response101 : ' + JSON.stringify(responseData.response.data),
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

  const drawGrid = () => {
    return (
      <SectionGrid
        sections={[
          {
            title: 'Numbers',
            data: [
              {
                _id: '642ac0dbc22ac609d23d2b31',
                url: 'https://bmb.fra1.digitaloceanspaces.com/bmb.GALLERY/image_1680523475302.jpg',
                isActive: true,
              },
              {
                _id: '642ac0dbc22ac609d23d2b32',
                url: 'https://bmb.fra1.digitaloceanspaces.com/bmb.GALLERY/image_1680523474715.jpg',
                isActive: true,
              },
              {
                _id: '642ac0dbc22ac609d23d2b33',
                url: 'https://bmb.fra1.digitaloceanspaces.com/bmb.GALLERY/image_1680523475453.jpg',
                isActive: true,
              },
            ],
          },
          {
            title: 'Alphabets',
            data: [
              {
                _id: '642e5459b48585d87b04b318',
                url: 'https://bmb.fra1.digitaloceanspaces.com/bmb.GALLERY/CleverTap-people3.png_1680757840025.png',
                isActive: true,
              },
              {
                _id: '642e5459b48585d87b04b319',
                url: 'https://bmb.fra1.digitaloceanspaces.com/bmb.GALLERY/CleverTap-people2.png_1680757840246.png',
                isActive: true,
              },
            ],
          },
        ]}
        style={styles.gridView}
        renderItem={({item}) => (
          <View>
            <Image
              resizeMode="contain"
              key={item._id}
              source={{uri: item.url}}
              style={{
                justifyContent: 'flex-end',
                borderRadius: 5,
                padding: 10,
                height: 150,
                backgroundColor: 'red',
              }}
            />
          </View>
        )}
        renderSectionHeader={({section, index}) => (
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              backgroundColor: '#1B195B',
              marginHorizontal: 10,
              color: '#D1AA70',
              marginTop: index,
            }}>
            {section.title}
          </Text>
        )}
      />
    );
  };
  return (
    //    <View style={{flex: 1}}>{drawGrid()}</View>
    <View
      style={{
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 125,
      }}>
      {isLoading && <PageLoader show={isLoading} />}
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
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
    backgroundColor: 'red',
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
  sectionHeader: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    alignItems: 'center',
    backgroundColor: '#636e72',
    color: 'white',
    padding: 10,
  },
});

//const styles = StyleSheet.create({
//  gridView: {
//    marginTop: 10,
//    marginBottom: 20,
//  },
//  itemContainer: {
//    justifyContent: 'flex-end',
//    borderRadius: 5,
//    padding: 10,
//    height: 150,
//  },
//  itemName: {
//    fontSize: 16,
//    color: '#fff',
//    fontWeight: '600',
//  },
//  itemCode: {
//    fontWeight: '600',
//    fontSize: 12,
//    color: '#fff',
//  },
//});

export default Gallery;
