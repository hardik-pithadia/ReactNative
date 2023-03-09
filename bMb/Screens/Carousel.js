import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions, FlatList, Animated} from 'react-native';
import CarouselItem from '../Screens/CarouselItem';

const {width, height} = Dimensions.get('window');

let flatList1;

function infiniteScroll(dataList) {
  const numberOfData = dataList.length;
  let scrollValue = 0;
  let scrolled = 0;

  setInterval(function () {
    console.log('FLAT LIST : ' + flatList1);
    scrolled++;

    if (scrolled < numberOfData) {
      scrollValue = scrollValue + width;
    } else {
      scrollValue = 0;
      scrolled = 0;
    }

    if (flatList1 !== null) {
      flatList1.scrollToOffset({
        animated: true,
        offset: scrollValue,
      });
    }
  }, 3000);
}

const Carousel = ({data}) => {
  const scrollX = new Animated.Value(0);
  const position = Animated.divide(scrollX, width);
  const [dataList, setDataList] = useState(data);

  useEffect(() => {
    setDataList(data);
    infiniteScroll(dataList);
  });
  //  if (data && data.lenght > 0) {
  return (
    <View>
      <FlatList
        ref={flatList => {
          flatList1 = flatList;
        }}
        data={data}
        keyExtractor={(item, index) => 'key' + index}
        horizontal
        pagingEnabled
        scrollEnabled
        snapToAlignment="center"
        scrollEventThrottle={16}
        decelerationRate={'normal'}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return <CarouselItem item={item} />;
        }}
        onScroll={Animated.event([
          {
            nativeEvent: {contentOffset: {x: scrollX}},
          },
        ])}
      />

      <View style={styles.dotView}>
        {data.map((_, i) => {
          let opacity = position.interpolate({
            inputRange: [i - 1, i, i + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={i}
              style={{
                opacity,
                height: 10,
                width: 10,
                backgroundColor: '#595959',
                margin: 8,
                borderRadius: 5,
              }}
            />
          );
        })}
      </View>
    </View>
  );
  //  }

  //  console.log('Please Provide Images');
  //  return null;
};

const styles = StyleSheet.create({
  dotView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
export default Carousel;
