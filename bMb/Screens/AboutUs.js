import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import {getData} from '../Utils/utility';
import {Carousel} from 'react-native-auto-carousel';
import * as Constants from '../Utils/constants';

const AboutUs = ({navigation}) => {
  const [sponsorsResponseDataObj, setSponsorsResponseDataObj] = useState([]);

  const items = [
    {id: 0, name: require('../Images/Image101.jpeg')},
    {id: 1, name: require('../Images/Image102.jpeg')},
    {id: 2, name: require('../Images/Image103.jpeg')},
    {id: 3, name: require('../Images/Image104.jpeg')},
    {id: 4, name: require('../Images/Image105.jpeg')},
    {id: 5, name: require('../Images/Image106.jpeg')},
    {id: 6, name: require('../Images/Image107.jpeg')},
    {id: 7, name: require('../Images/Image108.jpeg')},
    {id: 8, name: require('../Images/Image109.jpeg')},
    {id: 9, name: require('../Images/Image110.jpeg')},
    {id: 10, name: require('../Images/Image111.jpeg')},
    {id: 11, name: require('../Images/Image112.jpeg')},
  ];

  useEffect(() => {
    getData(Constants.SPONSORS).then(resultStr => {
      setSponsorsResponseDataObj(JSON.parse(resultStr));
    });
  }, []);

  return (
    <ScrollView style={{backgroundColor: 'white', flex: 1}}>
      <Text style={styles.header}>About Us</Text>
      <Text style={styles.subText}>
        Borivali Medical Brotherhood is not only the organization of
        professionals but it encompasses the family members of doctors. True
        fellowship is created amongst the families of our members by historical
        and memorable events organized in the past years.
        {'\n'}
        {'\n'}
        BMB is a medical organization having a social service department. We
        doctors are regularly doing social services in individual capacity but
        initiated as unique thought of unified efforts made BMB very popular
        amongst the people of Borivali.
        {'\n'}
        {'\n'}
        Medical camps, School health check up, blood donation drive, talks on
        medical subjects, tree plantation, and spiritual-medical events are some
        of celebrated and appreciated programmes. After having our own premises
        a number of scientific programmes and regular CME’S are held regularly
        to keep our members updated of the recent medical developments.
        {'\n'}
        {'\n'}
        Well equipped audio-visual facilities, AC comfort and quietness add to
        the thirst of our members for knowledge treasure they wish to explore.
        Sports competitions, sharadotsav dandia rass, monsoon picnics, talent
        search and ladies wing programmes are organized on a regular basis for
        the entertainment of the members and their families active participation
        of members and enthusiasm and hard work by the committee members will
        take the association to new heights in the years to follow.
      </Text>

      <View
        style={{
          marginTop: 15,
          marginLeft: 15,
          marginRight: 15,
          marginBottom: 25,
        }}>
        <FlatGrid
          itemDimension={80}
          data={items}
          style={styles.gridView}
          spacing={15}
          renderItem={({item}) => (
            <View>
              <ImageBackground
                source={item.name}
                resizeMode="stretch"
                style={{
                  borderRadius: 10,
                  height: 80,
                  overflow: 'hidden',
                }}
              />
            </View>
          )}
        />
      </View>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    margin: 25,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },

  subText: {
    backgroundColor: 'white',
    fontSize: 15,
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 35,
    color: 'black',
  },
});

export default AboutUs;
