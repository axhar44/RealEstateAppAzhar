import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
  ToastAndroid,
  Alert,
  ActivityIndicator,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import RegisterContext from '../Context/RegisterContexts'
import {Pic, ScreenSize} from '../components/theme';


const Home = (props) => {
  const [pressed, setPressed] = useState(false);
  const [message, setMessage] = useState(0);
  const [secondName, setSecondName] = useState('Hussain');
  const [number, setNumber] = useState('');
  const [data, setData] = useState([]);
  const [ContextData, setContextData] = useState(RegisterContext.storeData);
console.log("home context",ContextData);
  let  demo=["axhar","bilal","talha"];
  let country_code = "+92";
  let timer = null;
  let code  = '+92';

  

 


  function setIsLoading(){
    clearTimeout(timer);

    
  }

  const createTwoButtonAlert = () =>
    Alert.alert(
          " Empty Fields",
          "Plz Type Valid Number",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );


  const showToast_success = () => {
    ToastAndroid.show("Invalid Number", ToastAndroid.SHORT);
  };


  const Loading = () =>{

    setTimeout(
      () => 20000,
    );
  }


  const showToast_error = () => {
    ToastAndroid.show("Invalid Number!", ToastAndroid.SHORT
    );
  };


  //  Set Value End Number Validation
  const numberWarns = (str, val) => {
    if (str == 'NUMBER_1') {
      console.log('NUMBER_1', val);
      setNumber(phone_number);

      var phone_number = val; 
     
      if(phone_number.length <= 9 ){ 
        console.log('invalid number');
        setPressed(true);
        
    
      }else{

        setPressed(false);
      }
    }
    
  };



function api(){

  console.log('DATA', number);
  fetch(
    `https://trickhouse.000webhostapp.com/cheef_food/test_api.php?contact=${number}`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contact: number,
      }),
    },
  )
    .then((response) => (console.log(response), response.json()))
    .then((data) => {
      console.log('registration succes', data.data)
      setData(data.data)
     
      
    })
    .catch((err) => console.log(err))
};







  return (
    <View
      style={{
        backgroundColor: '#FFFFFF',
        flex: 1,
      }}>
      <View
        style={{
          height: '50%',
          // backgroundColor: 'green',
          justifyContent: 'center',
        }}>
        <View style={{ height: 240, justifyContent: 'center', marginLeft: 30 }}>
          <Image
            //resizeMode="contain"
            source={Pic.united_logo}
            style={{ width: '90%', height: '90%' }}
          />
          <View style={{ marginTop: -250 }}>
            <Text
              style={{
                color: 'black',
                fontSize: 40,
                textAlign: 'center',
                fontWeight: 'bold',
                backgroundColor: '',
              }}>
              {/* CHEF FOOD */}
            </Text>
            <Text
              style={{
                
                color: 'gray',
                fontSize: 10,
                textAlign: 'center',
                marginTop:30,
                justifyContent:'flex-end',
              }}>
             

  

            </Text>
            {/* {data.length !== 0 &&
              data.map((v, i) => {
                return <Text>{v.}</Text>;
              })} */}
              <Text>{data}</Text>
          </View>
        </View>
      </View>

      <View style={{ height: '70%', marginTop: 50 }}>
        <Text style={{ color: '#F33A13', marginLeft: 10, fontWeight: 'bold' }}>
          PHONE 
         
        </Text>
        <View
          style={{
            width: '95%',
            flexDirection: 'row',
            backgroundColor: '',
            alignSelf: 'center',
          }}>
     
          <TextInput
            style={{
              flex: 4,
              backgroundColor: '#fefefe',
              marginLeft: 5,
              borderBottomWidth: 1,
              color: '#F33A13',
              borderBottomColor: '#F33A13',
            }}
            maxLength={10}
            placeholder={country_code}
            keyboardType="number-pad"
            underlineColorAndroid="transparent"
            onChangeText={(number) => numberWarns('NUMBER_1', number)}
            
          />
        </View>

        <View
          style={{
            backgroundColor: '#F33A13',
            elevation: 25,
            marginTop: 30,
            height: 20,
            flexDirection: 'row',
            height: 60,
            width: 60,
            borderWidth: 1,
            borderRadius: 50,
            alignItems: 'center',
            borderColor: '#F33A13',

            justifyContent: 'center',
            alignSelf: 'center',
          }}>




           

     
         
       



       
        {pressed === true ? (
          <View 
          style={{
            backgroundColor: 'gray',
            marginTop: 0,
            height: 20,
            flexDirection: 'row',
            height: 60,
            width: 60,
            borderWidth: 1,
            borderRadius: 50,
            alignItems: 'center',
            borderColor: 'gray',

            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <TouchableOpacity disabled={true}>

          <Feather name="arrow-right" size={30} color="white" />
          </TouchableOpacity>
                   
            
          
          </View>
        
        ):(
          <TouchableOpacity
          onPress={() =>
            (api(),numberWarns(), props.navigation.navigate('SignUp',{
              sentData: data,
              
             }))
           }
           >
           <Feather name="arrow-right" size={30} color="white" />
         </TouchableOpacity>
        )}
        </View> 
       


      </View>
    </View>
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    // justifyContent: 'center',
    // marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#fefefe',
    borderBottomWidth: StyleSheet.hairlineWidth,
    lineHeight: 30,
    backgroundColor:'red',
  },
});

export default Home;
