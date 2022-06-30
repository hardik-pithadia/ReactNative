import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';

const DirectoryList = ({navigation}) => {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      mobile: '7666240144',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      mobile: '7666240174',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      mobile: '7888240144',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      mobile: '7666240144',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      mobile: '7666240174',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      mobile: '7888240144',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      mobile: '7666240144',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      mobile: '7666240174',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      mobile: '7888240144',
    },
  ];

  const renderItem = ({item}) => (
    <Item title={item.title} mobile={item.mobile} />
  );

  const Item = ({title, mobile}) => (
    <View
      style={{
        backgroundColor: 'lightgray',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        marginTop: 15,
        borderRadius: 10,
        flexDirection: 'row',
      }}
    >
      <Image
        source={require('../Images/ProfileIcon.png')}
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
        }}
      />
      <View style={{flexDirection: 'column', marginLeft: 25}}>
        <Text style={{fontSize: 18, fontWeight: '700'}}>{title}</Text>
        <Text style={{fontSize: 15, marginTop: 15}}>{mobile}</Text>
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
