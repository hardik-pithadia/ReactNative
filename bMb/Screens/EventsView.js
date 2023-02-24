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
import {getData} from '../Utils/utility';

const EventsView = ({navigation}) => {
  const [eventListArray, setEventListArray] = useState([]);
  const [nameListArray, setNameListArray] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [responseDataObj, setResponseData] = useState([]);
  const [authToken, setAuthToken] = useState('');

  var eventArray = [];
  var nameDetailArray = [];

  useEffect(() => {
    getData(Constants.AUTH_TOKEN).then(resultStr => {
      setAuthToken(resultStr || '');
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
      console.log('Current Obj : ' + JSON.stringify(currentObj));

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
            onPress={() => handleEventListClick(currentObj._id)}>
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

    //   for (let i = 0; i < responseArray.length; i++) {
    //
    //   }

    setEventListArray(eventArray);
  };

  const handleEventListClick = idVal => {
    console.log('handleEventListClick : ' + idVal);

    //    navigation.navigate('RegisterEvent');
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
