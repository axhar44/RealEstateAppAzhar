import React, {createContext, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export const BillContext = createContext();
export const DataConsumer = BillContext.Consumer;
const BillContextProvider = (props) => {
  const [savedAddress, setSavedAddress] = useState([]);
  const [savedCode, setSavedCode] = useState(null);
  const [savedInit, setSavedInit] = useState(false);

  const storeAddress = async (value) => {
    if (value.firstName == '') {
      console.log('VAlUE_EMPTY', value);
      setSavedAddress(value);
    } else {
      console.log('VAlUE', value);
      setSavedAddress(value);
      try {
        const Data = JSON.stringify(value);
        await AsyncStorage.setItem('Saved_Address', Data);
        console.log('ASYNC_DATA', Data);
      } catch (e) {
        console.log('Error', e);
      }
    }
  };

  const getAddress = (data) => {
    const Data = JSON.parse(data);
    console.log('GET_ADDRESS', Data);
    setSavedAddress(Data);
  };

  const storeInit = async (value) => {
    try {
      const Data = JSON.stringify(value);
      await AsyncStorage.setItem('Saved_Init', Data);
      console.log('ASYNC_CODE', Data);
    } catch (e) {
      console.log('Error', e);
    }
  };

  const getInit = (data) => {
    const Data = JSON.parse(data);
    console.log('GET_CODE', Data);
    setSavedInit(Data);
  };

  const storeVerify = async (value) => {
    console.log('VAlUE_IF_NOT_VERFIY', value);

    try {
      const Data = JSON.stringify(value);
      await AsyncStorage.setItem('Saved_Code', Data);
      console.log('ASYNC_DATA_IF_NOT_VERFIY', Data);
    } catch (e) {
      console.log('Error', e);
    }
  };

  const getCode = (data) => {
    const Data = JSON.parse(data);
    console.log('GET_IF_NOT_VERIFY', Data);
    setSavedCode(Data);
  };

  return (
    <BillContext.Provider
      value={{
        storeAddress,
        savedAddress,
        getAddress,
        storeInit,
        savedInit,
        getInit,
        storeVerify,
        getCode,
        savedCode,
      }}>
      {props.children}
    </BillContext.Provider>
  );
};

export default BillContextProvider;
