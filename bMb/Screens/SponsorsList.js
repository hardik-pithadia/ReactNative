import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import * as Constants from '../Utils/constants';

import PageLoader from '../Utils/loader';
import {getDataFromServer} from '../Utils/WebRequestManager';
import NetInfo from '@react-native-community/netinfo';

const SponsorsList = () => {
  const [sponsorsResponseDataObj, setSponsorsResponseDataObj] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    NetInfo.fetch().then(state => {
      if (!state.isConnected) {
        Alert.alert('Network', 'Please Check Internet Connection');
      }
    });
    getSponsorListResponse();
  }, []);

  const getSponsorListResponse = async () => {
    console.log('getSponsorListResponse API Called101');

    setSponsorsResponseDataObj([]);

    setLoading(true);

    var responseData = await getDataFromServer(
      Constants.base_URL + '/dashboard',
    );

    if (responseData.response) {
      setLoading(false);
      if (responseData.response.status) {
        if (responseData.response.data.sponsors.length > 0) {
          console.log(
            'SPONSORS101 : ',
            JSON.stringify(responseData.response.data.sponsors),
          );
          setSponsorsResponseDataObj(responseData.response.data.sponsors);
        }
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

  return (
    <View
      style={{
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 125,
      }}>
      {isLoading && <PageLoader show={isLoading} />}

      {sponsorsResponseDataObj.length > 0 && (
        <FlatGrid
          itemDimension={120}
          data={sponsorsResponseDataObj}
          style={styles.gridView}
          spacing={15}
          renderItem={({item}) => (
            <View>
              <Image
                resizeMode="cover"
                key={item._id}
                source={{uri: item.image}}
                style={{
                  borderRadius: 10,
                  height: 120,
                  overflow: 'hidden',
                }}
              />
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    marginBottom: 20,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
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
});

export default SponsorsList;
