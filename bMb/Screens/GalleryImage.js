import React from 'react';
import {Image, View, Text} from 'react-native';

const GalleryImage = ({route, navigation}) => {
  var imageURL = route.params.imageName;

  return (
    <View>
      <Image
        resizeMode="center"
        source={{
          uri: imageURL,
        }}
        style={{width: '100%', height: '100%'}}
      />
    </View>
  );
};

export default GalleryImage;
