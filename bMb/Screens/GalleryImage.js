import React, {useEffect, useState} from 'react';
import {Image, View, Dimensions} from 'react-native';

const w = Dimensions.get('window');

const GalleryImage = ({route, navigation}) => {
  var imageURL = route.params.imageName;

  const [galleryImage, setGalleryImage] = useState('');
  useEffect(() => {
    setGalleryImage(imageURL);
  }, [galleryImage]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={{
          uri: imageURL + `?w=${w.width * 2}&buster=${Math.random()}`,
        }}
        style={{width: w.width, height: w.width}}
        resizeMode="cover"
      />
    </View>
  );
};

export default GalleryImage;
