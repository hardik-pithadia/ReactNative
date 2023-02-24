import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import PageLoader from '../Utils/loader';
import {getDataFromServer} from '../Utils/WebRequestManager';
import * as Constants from '../Utils/constants';

const EventsView = ({navigation}) => {
  const [eventListArray, setEventListArray] = useState([]);
  const [nameListArray, setNameListArray] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [responseDataObj, setResponseData] = useState([]);

  var eventArray = [];
  var nameDetailArray = [];

  useEffect(() => {
    getCardList();
    getEventResponse();
  }, [eventArray.length]);

  const getEventResponse = async () => {
    setResponseData([]);
    setLoading(true);

    var responseData = await getDataFromServer(
      Constants.base_URL + '/events/getall',
    );

    console.log('Event Resp : ' + JSON.stringify(responseData));

    if (responseData.response) {
      if (responseData.response.status) {
        console.log(
          'Event Response : ' + JSON.stringify(responseData.response.data),
        );
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

  const getCardList = () => {
    console.log('getCardList-101');

    for (let i = 0; i < 20; i++) {
      eventArray.push(
        <View
          style={{
            height: 200,
            backgroundColor: '#1B195B',
            width: '90%',
            marginTop: 25,
            borderRadius: 10,
          }}>
          <TouchableOpacity
            style={{backgroundColor: 'transparent'}}
            onPress={() => handleEventListClick()}>
            <Image
              style={{height: 35, width: '60%', marginLeft: -10, marginTop: 15}}
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
              BMB Medimeet 2022
            </Text>

            <Text
              style={{
                color: 'white',
                fontSize: 20,
                textAlign: 'left',
                marginLeft: 15,
                marginTop: 10,
              }}>
              Date : 01 June - 2022
            </Text>

            <Text
              style={{
                color: 'white',
                fontSize: 20,
                textAlign: 'left',
                marginLeft: 15,
                marginTop: 8,
              }}>
              Address : Borivali West
            </Text>

            <Text
              style={{
                color: 'white',
                fontSize: 20,
                textAlign: 'left',
                marginLeft: 15,
                marginTop: 8,
              }}>
              Organiser : KP World Wide
            </Text>
          </TouchableOpacity>
        </View>,
      );
    }

    setEventListArray(eventArray);
  };

  const handleEventListClick = () => {
    console.log('handleEventListClick');

    navigation.navigate('RegisterEvent');
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EventsView;
