import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import PageLoader from '../Utils/loader';
import {getDataFromServer} from '../Utils/WebRequestManager';
import * as Constants from '../Utils/constants';
import NetInfo from '@react-native-community/netinfo';
import {getData} from '../Utils/utility';

const DirectoryList = ({navigation}) => {
  const [isLoading, setLoading] = useState(false);
  const [responseDataObj, setResponseData] = useState([]);
  const [authToken, setAuthToken] = useState('');
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      mobile: '7666240144',
      speciality: 'MD',
      email: 'hardik@gmail.com',
      address: 'H-1303, Vimal Heights, new link road',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      mobile: '7666240174',
      speciality: 'MBBS',
      email: 'hardik@gmail.com',
      address: 'H-1303, Vimal Heights, new link road',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      mobile: '7888240144',
      speciality: 'MS',
      email: 'hardik@gmail.com',
      address: 'H-1303, Vimal Heights, new link road',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      mobile: '7666240144',
      speciality: 'ENT',
      email: 'hardik@gmail.com',
      address: 'H-1303, Vimal Heights, new link road',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      mobile: '7666240174',
      speciality: 'MS',
      email: 'hardik@gmail.com',
      address: 'H-1303, Vimal Heights, new link road',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      mobile: '7888240144',
      speciality: 'MD',
      email: 'hardik@gmail.com',
      address: 'H-1303, Vimal Heights, new link road',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      mobile: '7666240144',
      speciality: 'MD',
      email: 'hardik@gmail.com',
      address: 'H-1303, Vimal Heights, new link road',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      mobile: '7666240174',
      speciality: 'MBBS',
      email: 'hardik@gmail.com',
      address: 'H-1303, Vimal Heights, new link road',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      mobile: '7888240144',
      speciality: 'MBBS',
      email: 'hardik@gmail.com',
      address: 'H-1303, Vimal Heights, new link road',
    },
  ];

  useEffect(() => {
    getData(Constants.AUTH_TOKEN).then(resultStr => {
      setAuthToken(resultStr || '');
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

  const renderItem = ({item}) => (
    <Item
      title={item.title}
      mobile={item.contact_number}
      speciality={item.speciality}
      email={item.email}
      state={item.state}
      imageName={item.image}
    />
  );

  const Item = ({title, mobile, speciality, email, state, imageName}) => (
    <View
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
            flexDirection: 'row',
            alignItems: 'center',
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
          <Text style={{marginLeft: 15, color: 'white', width: 40}}>
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
    </View>
  );

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      {isLoading && <PageLoader show={isLoading} />}
      <FlatList
        data={responseDataObj}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default DirectoryList;
