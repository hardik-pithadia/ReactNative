import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import PageLoader from '../Utils/loader';
import {getDataFromServer} from '../Utils/WebRequestManager';
import NetInfo from '@react-native-community/netinfo';
import * as Constants from '../Utils/constants';
import {getData} from '../Utils/utility';
import {Carousel} from 'react-native-auto-carousel';

const DirectoryList = ({navigation}) => {
  const [isLoading, setLoading] = useState(false);
  const [responseDataObj, setResponseData] = useState([]);
  const [authToken, setAuthToken] = useState('');
  const [sponsorsResponseDataObj, setSponsorsResponseDataObj] = useState([]);

  useEffect(() => {
    getData(Constants.AUTH_TOKEN).then(resultStr => {
      setAuthToken(resultStr || '');
    });

    getData(Constants.SPONSORS).then(resultStr => {
      setSponsorsResponseDataObj(JSON.parse(resultStr));
    });

    if (authToken.length > 0) {
      getAllDoctorList();
    }
  }, [authToken]);

  useEffect(() => {
    NetInfo.fetch().then(state => {
      if (!state.isConnected) {
        Alert.alert('Network', 'Please Check Internet Connection');
      }
    });
  }, []);

  const getAllDoctorList = async () => {
    setResponseData([]);
    setLoading(true);

    var responseData = await getDataFromServer(
      Constants.base_URL + '/doctor/getall',
      authToken,
    );

    if (responseData.response) {
      if (responseData.response.status) {
        console.log(
          'Directory Response : ' + JSON.stringify(responseData.response.data),
        );

        if (responseData.response.data.length > 0) {
          setResponseData(responseData.response.data);
        }
      } else {
        Alert.alert('Error', responseData.response.message, [
          {
            text: 'Ok',
            style: 'cancel',
          },
        ]);
      }
    }

    setLoading(false);
  };

  const directoryButtonClicked = selectedItem => {
    navigation.navigate('DirectoryDetail', {selectedObject: selectedItem});
  };

  const renderItem = ({item}) => (
    <Item
      title={item.title}
      mobile={item.contact_number}
      speciality={item.speciality}
      email={item.email}
      state={item.state}
      imageName={item.image}
      currentObj={item}
    />
  );

  const Item = ({
    title,
    mobile,
    speciality,
    email,
    state,
    imageName,
    currentObj,
  }) => (
    <TouchableOpacity
      keyExtractor={'1'}
      onPress={() => directoryButtonClicked(currentObj)}
      style={{
        backgroundColor: '#1B195B',
        padding: 5,
        marginVertical: 8,
        marginHorizontal: 16,
        marginTop: 15,
        borderRadius: 10,
        flexDirection: 'row',
      }}>
      <Image
        source={{uri: imageName}}
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
        }}
      />
      <View style={{flexDirection: 'column', marginLeft: 15}}>
        <View
          style={{
            //  flex: 1,
            flexDirection: 'column',
            //  alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '700',
              color: '#D1AA70',
              numberOfLines: 10,
              flexWrap: 'wrap',
              width: '75%',
            }}>
            {title}
          </Text>
          <Text style={{color: 'white', width: '90%', fontWeight: 'bold'}}>
            {speciality}
          </Text>
        </View>

        <Text style={{fontSize: 15, marginTop: 15, color: 'white'}}>
          {mobile}
        </Text>

        <Text style={{fontSize: 15, marginTop: 5, color: 'white'}}>
          {email}
        </Text>

        <Text
          style={{
            fontSize: 15,
            marginTop: 5,
            color: 'white',
            paddingRight: 40,
          }}>
          {state}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      {isLoading && <PageLoader show={isLoading} />}
      <FlatList
        data={responseDataObj}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

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
  );
};

export default DirectoryList;
