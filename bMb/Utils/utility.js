import AsyncStorage from '@react-native-async-storage/async-storage';

export const isValidEmail = text => {
  console.log(text);
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  if (reg.test(text) === false) {
    console.log('Email is Not Correct');
    return false;
  } else {
    console.log('Email is Correct');
    return true;
  }
};

export const storeData = async (keyStr, value) => {
  try {
    await AsyncStorage.setItem(keyStr, value);
  } catch (error) {
    // saving error
    console.log('Store Data Error : ' + error);
  }
};

export const removeData = async keyStr => {
  try {
    await AsyncStorage.removeItem(keyStr);
  } catch (error) {
    // saving error
    console.log('Store Remove Error : ' + error);
  }
};

export const getData = async keyStr => {
  try {
    const value = await AsyncStorage.getItem(keyStr);
    if (value !== null) {
      // value previously stored
      return value;
    }
  } catch (error) {
    // error reading value
    console.log('Get Store Error : ' + error);
  }
};
