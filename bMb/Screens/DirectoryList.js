import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';

const DirectoryList = ({navigation}) => {
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

  const renderItem = ({item}) => (
    <Item
      title={item.title}
      mobile={item.mobile}
      speciality={item.speciality}
      email={item.email}
      address={item.address}
    />
  );

  const Item = ({title, mobile, speciality, email, address}) => (
    <View
      style={{
        backgroundColor: 'lightgray',
        padding: 5,
        marginVertical: 8,
        marginHorizontal: 16,
        marginTop: 15,
        borderRadius: 10,
        flexDirection: 'row',
      }}>
      <Image
        source={require('../Images/ProfileIcon.png')}
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
        }}
      />
      <View style={{flexDirection: 'column', marginLeft: 25}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 18, fontWeight: '700', color: '#1B195B'}}>
            {title}
          </Text>
          <Text style={{marginLeft: 15, color: 'black'}}>{speciality}</Text>
        </View>

        <Text style={{fontSize: 15, marginTop: 15, color: '#3F60A0'}}>
          {mobile}
        </Text>

        <Text style={{fontSize: 15, marginTop: 5, color: '#3F60A0'}}>
          {email}
        </Text>

        <Text
          style={{
            fontSize: 15,
            marginTop: 5,
            color: '#3F60A0',
            paddingRight: 40,
          }}>
          {address}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default DirectoryList;
