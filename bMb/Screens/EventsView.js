import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import PageLoader from '../Utils/loader';
import {getDataFromServer} from '../Utils/WebRequestManager';
import * as Constants from '../Utils/constants';
import {getData} from '../Utils/utility';
import {Carousel} from 'react-native-auto-carousel';

const EventsView = ({navigation}) => {
  const [eventListArray, setEventListArray] = useState([]);
  const [nameListArray, setNameListArray] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [responseDataObj, setResponseData] = useState([]);
  const [authToken, setAuthToken] = useState('');
  const [sponsorsResponseDataObj, setSponsorsResponseDataObj] = useState([]);

  var eventArray = [];
  var nameDetailArray = [];

  useEffect(() => {
    getData(Constants.AUTH_TOKEN).then(resultStr => {
      setAuthToken(resultStr || '');
    });

    getData(Constants.SPONSORS).then(resultStr => {
      setSponsorsResponseDataObj(JSON.parse(resultStr));
    });

    if (authToken.length > 0) {
      getEventResponse();
    }
  }, [eventArray.length, authToken]);

  const getEventResponse = async () => {
    setResponseData([]);
    setLoading(true);

    var responseData = await getDataFromServer(
      Constants.base_URL + '/events/getall',
      authToken,
    );

    console.log('Event Resp : ' + JSON.stringify(responseData));

    if (responseData.response) {
      if (responseData.response.status) {
        console.log(
          'Event Response : ' + JSON.stringify(responseData.response.data),
        );
        getCardList(responseData.response.data);
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

  const getCardList = responseArray => {
    console.log('getCardList-101');
    responseArray.map(currentObj => {
      eventArray.push(
        <View
          style={{
            height: 250,
            backgroundColor: '#1B195B',
            width: '90%',
            marginTop: 25,
            borderRadius: 10,
          }}>
          <TouchableOpacity
            style={{backgroundColor: 'transparent'}}
            onPress={() => handleEventListClick(currentObj)}>
            <Image
              style={{
                height: 35,
                width: '60%',
                marginLeft: -10,
                marginTop: 15,
              }}
              source={require('../Images/upcoming_event_icon.png')}
            />

            <Text
              style={{
                color: 'white',
                fontSize: 26,
                fontWeight: '600',
                textAlign: 'left',
                marginLeft: 15,
                marginTop: 10,
              }}>
              {currentObj.title}
            </Text>

            <Text
              style={{
                color: 'white',
                fontSize: 20,
                textAlign: 'left',
                marginLeft: 15,
                marginTop: 10,
              }}>
              {'Date : ' + currentObj.date.split('T')[0]}
            </Text>

            <Text
              style={{
                color: 'white',
                fontSize: 20,
                textAlign: 'left',
                marginLeft: 15,
                marginTop: 8,
              }}>
              {'Address : ' + currentObj.address}
            </Text>

            <Text
              style={{
                color: 'white',
                fontSize: 20,
                textAlign: 'left',
                marginLeft: 15,
                marginTop: 8,
              }}>
              {'Organiser : ' + currentObj.organiser}
            </Text>
          </TouchableOpacity>
        </View>,
      );
    });

    setEventListArray(eventArray);
  };

  const handleEventListClick = selectedObj => {
    console.log('handleEventListClick : ' + JSON.stringify(selectedObj));

    navigation.navigate('RegisterEvent', {
      selectedObj: selectedObj,
    });
  };

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        {isLoading && <PageLoader show={isLoading} />}
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {eventListArray}

          {sponsorsResponseDataObj.length > 0 && (
            <View
              style={{
                height: 80,
                marginLeft: 20,
                marginRight: 20,
                marginBottom: 50,
                marginTop: 20,
              }}>
              <Carousel
                autoPlayTime={3000}
                autoPlay={true}
                data={sponsorsResponseDataObj}
                renderItem={item => (
                  <Image
                    resizeMode="cover"
                    key={item._id}
                    source={{uri: item.image}}
                    style={{
                      height: 150,
                      width: Dimensions.get('window').width,
                    }}
                  />
                )}
              />
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EventsView;
