/**
 * Custom loader component
 */
import React from 'react';
import {
  StyleSheet,
  View,
  Modal,
  StatusBar,
  ActivityIndicator,
  Text,
} from 'react-native';

const PageLoader = props => {
  const {
    show = false,
    color = 'black',
    backgroundColor = 'white',
    dimLights = 0.6,
    loadingMessage = 'Loading please wait...',
  } = props;
  return (
    <Modal transparent={true} animationType="none" visible={show}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: `rgba(0,0,0,${dimLights})`,
        }}>
        <View
          style={{
            padding: 24,
            backgroundColor: `${backgroundColor}`,
            borderRadius: 13,
          }}>
          <ActivityIndicator animating={show} color={color} size="large" />
          <Text style={{color: `${color}`}}>{loadingMessage}</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default PageLoader;
