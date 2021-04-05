import React,{useEffect,useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

import {
  Home,
  SignUp,
  Contacts,
  Drawer_navigation,
  HomeScreen,
  Profile,
  Splash,
  forgot_Password,
  RegisterScreen,
  search_add,
  Camera,
  Gallery,
  Verification_Screen,
} from './screens';

import BottomTab from './BottomTab';

const Stack = createStackNavigator();
export default function MyStack(props) {

  useEffect(()=>{
    getData();
    console.log("use effect stack",Active);
   },[]);

   const [Active, setActive]=useState("");

   ///check User Data In your mobile Storage
    const getData = async () => {
        const User_Data = await AsyncStorage.getItem('User_Data');
        console.log('stack identify Active session',User_Data);
     if(User_Data !="")
      {
        console.log("Active User");
        setActive(User_Data);
    }else
      {
        console.log("Blank User");
        setActive("");
      }
     };
  return (  



    
    <Stack.Navigator 
    mode="modal"
    screenOptions={{
      headerShown: false,
    }}>
     {Active ==null ? (
          
            <Stack.Screen name="signUp" component={SignUp} />
          
        ) : (
          
            <Stack.Screen name="Contacts" component={Contacts} />
          
        )}
    {/* initialRouteName={'signUp'}>
    initialRouteName={Active === null ? ('Drawer_navigation') : ('signUp')}> */}

      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="forgot_Password" component={forgot_Password} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} /> 
      <Stack.Screen name="Drawer_navigation" component={Drawer_navigation} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="SignUp" component={SignUp} /> 
      {/* <Stack.Screen name="Contacts" component={Contacts} /> */}
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="search_add" component={search_add} />
      <Stack.Screen name="Camera" component={Camera} />
      <Stack.Screen name="Gallery" component={Gallery} />
      <Stack.Screen name="Verification_Screen" component={Verification_Screen} />
    </Stack.Navigator>
  );
}
