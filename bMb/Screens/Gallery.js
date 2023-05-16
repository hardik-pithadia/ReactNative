import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {SectionGrid} from 'react-native-super-grid';
import * as Constants from '../Utils/constants';
import {getData} from '../Utils/utility';
import {Carousel} from 'react-native-auto-carousel';

import PageLoader from '../Utils/loader';
import {getDataFromServer} from '../Utils/WebRequestManager';
import NetInfo from '@react-native-community/netinfo';

const w = Dimensions.get('window');

const Gallery = ({navigation}) => {
  const [sponsorsResponseDataObj, setSponsorsResponseDataObj] = useState([]);
  const [responseDataObject, setResponseDataObject] = useState([]);

  const [isLoading, setLoading] = useState(false);

  var tempObj = [];

  useEffect(() => {
    getData(Constants.SPONSORS).then(resultStr => {
      setSponsorsResponseDataObj(JSON.parse(resultStr));
    });

    // NetInfo.fetch().then(state => {
    //   if (!state.isConnected) {
    //     Alert.alert('Network', 'Please Check Internet Connection');
    //   }
    // });
    getGalleryResponse();
  }, []);

  const getGalleryResponse = async () => {
    setLoading(true);

    var responseData = await getDataFromServer(
      Constants.base_URL + '/gallery/getall',
    );

    if (responseData.response) {
      if (responseData.response.status) {
        console.log(
          'Gallery Response101 : ' + JSON.stringify(responseData.response.data),
        );

        responseData.response.data.map(currentObj => {
          var tempDict = {title: currentObj.name, data: currentObj.files};
          tempObj.push(tempDict);
        });

        setResponseDataObject(tempObj);
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

  const imageButtonClicked = imageId => {
    console.log(
      'IMAGE URL : ',
      imageId + `?w=${w.width * 2}&buster=${Math.random()}`,
    );
    navigation.navigate('GalleryImage', {imageName: imageId});
  };

  return (
    <View style={{flex: 1}}>
      {isLoading && <PageLoader show={isLoading} />}
      {responseDataObject.length > 0 && (
        <SectionGrid
          sections={responseDataObject}
          style={styles.gridView}
          renderItem={({item}) => (
            <TouchableOpacity
              style={[styles.itemContainer]}
              onPress={() => imageButtonClicked(item.url)}>
              <Image
                source={{
                  uri: item.url + `?w=${w.width * 2}&buster=${Math.random()}`,
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 8,
                }}
                // style={{width: w.width, height: w.width}}
                resizeMode="cover"
              />
              {/* <Image
                source={{
                  uri: item.url,
                }}
                style={{width: '100%', height: '100%', borderRadius: 8}}
                // style={{width: w.width, height: w.width}}
                resizeMode="cover"
              /> */}
            </TouchableOpacity>
          )}
          renderSectionHeader={({section}) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
        />
      )}

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
    </View>
  );
};

const styles = StyleSheet.create({
  gridView: {
    //    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
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
  sectionHeader: {
    flex: 1,
    fontSize: 20,
    fontWeight: '700',
    alignItems: 'center',
    backgroundColor: '#1B195B',
    color: 'white',
    padding: 10,
    height: 50,
    color: '#D1AA70',
  },
});

export default Gallery;
