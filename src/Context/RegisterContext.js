import React, {createContext, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {Pic} from '../components/theme';

export const RegisterContext = createContext();
export const RegisterData = RegisterContext.Consumer;
const RegisterContextProvider = (props) => {
  const [user, setUser] = useState([]);
  const [userData, setUserData] = useState([]);
  const [profilePic, setProfilePic] = useState('');
  // const [msg, setMsg] = useState('Cart is Empty');

  const storeData = async (value) => {
    console.log('VAlUE_VERIFY', value);
    try {
      const Data = JSON.stringify(value);
      await AsyncStorage.setItem('User_Data', Data);
      console.log('ASYNC_DATA', Data);
      setUser(JSON.parse(Data));
    } catch (e) {
      console.log('Error', e);
    }
  };

  const verifyUser = (data) => {
    const Data = JSON.parse(data);
    console.log('USER_VERIFICATION', Data);
    setUser(Data);
  };

  const signOut = async () => {
    // setUser([]);
    try {
      await AsyncStorage.removeItem('User_Data');
      setUser([]);
      return true;
      console.log('USER', user);
    } catch (e) {
      return false;
    }
  };
  const storeUserData = async (value) => {
    console.log('UserStoreData', value);
    try {
      const UserStoreData = JSON.stringify(value);
      await AsyncStorage.setItem('UserStoreData', UserStoreData);
      // console.log('ASYNC_USER_STORE_DATA', PhoneNumber);
      setUserData(JSON.parse(UserStoreData));
    } catch (e) {
      console.log('Error', e);
    }
  };

  const saveAsyncData = (data) => {
    const Data = JSON.parse(data);
    console.log('USER_VERIFICATION Aync Data', Data);
    setUserData(Data);
  };

  const userPic = (value) => {
    // const pic = JSON.parse(value);
    console.log('PIC_CONTEXT', value);
    setProfilePic(value);
  };
  return (
    <RegisterContext.Provider
      value={{
        storeData,
        verifyUser,
        user,
        signOut,
        storeUserData,
        userData,
        saveAsyncData,
        profilePic,
        userPic,
      }}>
      {props.children}
    </RegisterContext.Provider>
  );
};

export default RegisterContextProvider;
