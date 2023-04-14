import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {SectionGrid, FlatGrid} from 'react-native-super-grid';
import * as Constants from '../Utils/constants';
import {getData} from '../Utils/utility';
import {Carousel} from 'react-native-auto-carousel';

import PageLoader from '../Utils/loader';
import {getDataFromServer} from '../Utils/WebRequestManager';
import NetInfo from '@react-native-community/netinfo';

const Gallery = () => {
  const [sponsorsResponseDataObj, setSponsorsResponseDataObj] = useState([]);
  const [responseDataObject, setResponseDataObject] = useState([]);

  const [isLoading, setLoading] = useState(false);

  var tempObj = [];

  var responseObj = {
    success: true,
    response: {
      message: 'successfull',
      status: true,
      data: [
        {
          _id: '642ac0dbc22ac609d23d2b2f',
          name: 'test 11',
          isActive: true,
          date: '2023-04-03',
          created_at: '2023-04-03T12:04:43.553Z',
          updated_at: '2023-04-03T12:04:43.553Z',
          __v: 0,
          files: [
            {
              _id: '642ac0dbc22ac609d23d2b31',
              url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvDUmMoJgVdyEeROTpifscZJOV71fV2o3Fd_6099VoPExNNM39rIRrI7K2DhfA0a9UwFI&usqp=CAU',
              isActive: true,
            },
            {
              _id: '642ac0dbc22ac609d23d2b32',
              url: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              isActive: true,
            },
            {
              _id: '642ac0dbc22ac609d23d2b33',
              url: 'https://i.pinimg.com/originals/35/42/c9/3542c9d2ebd9749a11d35601f632e33b.jpg',
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
              url: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              isActive: true,
            },
            {
              _id: '642e5459b48585d87b04b319',
              url: 'https://i.pinimg.com/originals/35/42/c9/3542c9d2ebd9749a11d35601f632e33b.jpg',
              isActive: true,
            },
          ],
        },
      ],
      totalCount: 2,
    },
  };

  //    useEffect(() => {
  //      responseObj.response.data.map(currentObj => {
  //        var tempDict = {title: currentObj.name, data: currentObj.files};
  //        tempObj.push(tempDict);
  //      });
  //      setResponseDataObject(tempObj);
  //      console.log('Final Object101 : ', JSON.stringify(tempObj));
  //    }, [responseDataObject.length]);

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
    setLoading(true);

    var responseData = await getDataFromServer(
      Constants.base_URL + '/gallery/getall',
    );

    console.log('Gallery DATA : ', JSON.stringify(responseData));

    if (responseData.response) {
      if (responseData.response.status) {
        console.log(
          'Gallery Response101 : ' + JSON.stringify(responseData.response.data),
        );

        responseData.response.data.map(currentObj => {
          console.log('Current Obj : ', JSON.stringify(currentObj));

          var tempDict = {title: currentObj.name, data: currentObj.files};
          tempObj.push(tempDict);
        });

        setResponseDataObject(tempObj);
        console.log('Final Object101 : ', JSON.stringify(tempObj));
        //   setResponseData(responseData.response.data);
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
    console.log('Image Button Clicked : ', imageId);
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
                  uri: item.url,
                }}
                style={{width: '100%', height: '100%', borderRadius: 8}}
              />
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
