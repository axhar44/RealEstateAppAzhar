import React, { createContext, useState ,useContext} from 'react';
import { AsyncStorage } from 'react-native';

export const RegisterContext = createContext();

const RegisterContextProvider = (props) => {
    const [user, setUser] = useState('');
     const [ID, setID] = useState('');
     const [Dim, setDim] = useState('');
    // const [msg, setMsg] = useState('Cart is Empty');


    const storeData = async (value) => {

     try{

      const user =JSON.stringify(value);
      await AsyncStorage.setItem('check_data',user);
      console.log("context Value new",user)
     }catch(error)
     {
console.log("storage error",error);

     }
     
      // try {
      //   const Data = JSON.stringify(value);
      //   await AsyncStorage.setItem('User_Data', Data);
      //   console.log('ASYNC_DATA', Data);
      //   setUser(JSON.parse(Data));
      // } catch (e) {
      //   console.log('Error', e);
      // }

   
    };

    
   


    return (
        <RegisterContext.Provider value={{ storeData,user}}>
          {props.children}
        </RegisterContext.Provider>
      );


     

    
    };
    
    export default RegisterContextProvider;
    