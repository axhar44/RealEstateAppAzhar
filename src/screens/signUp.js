import React,{useState,useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Pressable,

  

  
} from 'react-native';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-community/async-storage';
import Home from '../screens/Home';



//import { Icon } from 'react-native-elements';

export default function LoginScreen(props) {

  

  // my all variables here
  let apiLinkPrefix = "http://vbswebs.com/tugs/";
  const [user, setUser] = useState({});
  const [pressed, setPressed] = useState(false);
  const [code, setCode] = useState('');
  const [Active, setActive] = useState(false);
  const [eye, setEye] = useState(true);
  const [message, setMessage] = useState('');
  const [WrongLogin,setWrongLogin] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisiblerror, setModalVisiblerror] = useState(false);

  const [value, onChangeText] = useState({
    
    phone: '',
    email: '',
    password: '',
  });





  const onChange = (str, val) => {
    switch (str) {
      case 'PHONE':
        onChangeText((prevState) => {
          return { ...prevState, phone: val };
        });
        break;
      case 'EMAIL':
        onChangeText((prevState) => {
          return { ...prevState, email: val };
        });
        break;
      case 'PASSWORD':
        onChangeText((prevState) => {
          return { ...prevState, password: val };
        });
        break;

      default:
        return value;
    }
  };

  const { phone, email, password } = value;
  const login = () => {
    fetch(
      `${apiLinkPrefix}API/login.php?id=${email}&mobile=${phone}&pw=${password}`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: email,
          pw: password,
          mobile: phone,
        }),
      },
    )
      .then((response) => response.json())
      .then((data) => {
        console.log('LOGIN_DATA', data.data);

        if(data.data[0].message == 'Verification Required')
        {
          props.navigation.navigate('Drawer_navigation')

        }
        if (
          data.data[0].message == 'Invalid User/Password' 
        )
        {
          setModalVisiblerror(true);
          setModalVisible(true);
          //console.log("aa");

        }
        if (
          data.data[0].message == 'Invalid Parameter(s)'
        ) {
          setModalVisiblerror(false);

         setModalVisible(true);
          setMessage(data.data[0].message);
          console.log('msg', data.data[0].message);
        }


      })
      .catch((err) => console.log(err))
      .finally(() => setPressed(false));
  };

  const onClose = () => setModalVisible(false);
  //const toggleEye = () => setEye(!eye);

  setTimeout(
    () =>
      (message == 'Invalid User/Password' ||
        message == 'Invalid Parameter(s)') &&
      setMessage(''),
    2000,
  );

  
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };



  return (


    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>

{/*       
    {Active ==true ?(

<Home/>
):(
<LoginScreen/>
)
} */}
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
     
      <View style={styles.container}>
      <Image
                        
                        style={{backgroundColor:'white', height:800,width:'auto'}}
                        source={require("../../assets/building.jpg")}
                         />
     
      
  
        {/* <View style={styles.bigCircle}></View>
        <View style={styles.smallCircle}></View> */}
      
     
        <View style={styles.centerizedView}>
          
          
          <View style={styles.authBox}>
            
          
          <View style={styles.logoBox}>
              <Image source={require('../../assets/homeway.pk-Logo-final-01.png')}
              style={{height:75,width:75}}/>
            </View>
          
          <Text style={styles.loginTitleText}>Login</Text>
            <View style={styles.hr}></View>
             <View style={styles.inputBox}>
               <Text style={styles.inputLabel}>Phone</Text>
                 <TextInput
                    style={styles.input}
                     autoCapitalize={false}
                      keyboardType='email-address'
                       textContentType='emailAddress'
                        onChangeText={(text) => onChange('PHONE', text)}
                         value={phone}/>
                          </View>

            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.input}
                autoCapitalize={false}
                keyboardType='email-address'
                textContentType='emailAddress'
                onChangeText={(text) => onChange('EMAIL', text)}
                value={email}
              />
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                style={styles.input}
                autoCapitalize={false}
                secureTextEntry={true}
                textContentType='password'
                onChangeText={(text) => onChange('PASSWORD', text)}
                value={password}
              />
            </View>

           {/* succes modal here  */}

<View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!toggleModal);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            { isModalVisiblerror == true ? (
              <Text style={styles.modalText}>
                  <View style={{marginTop:0,backgroundColor:'red'}}>
                      <Image
                        style={{backgroundColor:'white', height:150,width:190}}
                         resizeMode="stretch"
                          source={require("../../assets/homeway.pk-Logo-final-01.png")} />
                          </View>
                          username or password is incorrect
                            </Text>
                   ) : (
              <Text style={styles.modalText}>
                 <View style={{marginTop:2,backgroundColor:'red'}}>
                   <Image
                     style={{backgroundColor:'white', height:150,width:250}}
                      resizeMode="stretch"
                       source={require("../../assets/error_icon.png")} />
                       </View>
                          Please Fill All Fields
                           </Text>  
               )}
                 <Pressable
                    style={[styles.button, styles.buttonClose]}
                      onPress={() => setModalVisible(!toggleModal)}>
                         <Text style={{fontWeight:'bold',fontSize:20,borderWidth:3,width:110,textAlign:'center', backgroundColor: 'rgb(45, 110, 229)',color:'white',borderColor:'rgb(45, 110, 229)'}}>OK</Text>
                           </Pressable>
                            </View>
                             </View>
                     </Modal>
               </View>


      <TouchableOpacity
          onPress={() => (login(), setPressed(true))}
            style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
       <TouchableOpacity
            onPress={()=> props.navigation.navigate('RegisterScreen')}>
              <Text style={styles.registerText}>
                Don't have an account? Register Now
              </Text>
                 </TouchableOpacity>
        <TouchableOpacity
               onPress={()=> props.navigation.navigate('forgot_Password')}>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>
                 </View>
                  </View>
                   </View>
           </TouchableWithoutFeedback>
             </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //position: 'relative',
    backgroundColor:'red',
    height:730,
  },
  bigCircle: {
    width: Dimensions.get('window').height * 0.7,
    height: Dimensions.get('window').height * 0.7,
    backgroundColor: 'rgb(45, 110, 229)',
    borderRadius: 1000,
    position: 'absolute',
    right: Dimensions.get('window').width * 0.25,
    top: -50,
  },
  smallCircle: {
    width: Dimensions.get('window').height * 0.4,
    height: Dimensions.get('window').height * 0.4,
    backgroundColor: 'rgb(45, 110, 229)',
    borderRadius: 1000,
    position: 'absolute',
    bottom: Dimensions.get('window').width * -0.2,
    right: Dimensions.get('window').width * -0.3,
  },
  centerizedView: {
    width: '100%',
    top: '-85%',
  },
  authBox: {
    width: '80%',
    backgroundColor: '#fafafa',
    borderRadius: 20,
    alignSelf: 'center',
    paddingHorizontal: 14,
    paddingBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: 'transparent',
    opacity:0.9,
    borderColor:'white',
    borderWidth:2,
    
  },
  logoBox: {
    width: 95,
    height: 90,
    backgroundColor: 'white',
    borderRadius: 1000,
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: -93,
    
    marginBottom: -50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  loginTitleText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#fff',

  },
  hr: {
    width: '100%',
    height: 0.5,
    backgroundColor: 'white',
    marginTop: 6,
    
  },
  inputBox: {
    marginTop: 10,
  },
  inputLabel: {
    fontSize: 15,
    marginBottom: 6,
    color: '#fff',
  },
  input: {
    width: '100%',
    height: 35,
    borderRadius: 4,
    paddingHorizontal: 10,
    fontSize:10,
    backgroundColor:'transparent',
    opacity:0.7,
    borderWidth:1,
    borderColor:'white',
    color:'white',
  },
  loginButton: {
    backgroundColor: 'rgb(45, 110, 229)',
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 4,
  },
  
  loginButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  registerText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#fff',
    textDecorationLine:'underline',



  },
  forgotPasswordText: {
    textAlign: 'center',
    marginTop: 12,
    fontSize: 16,
    color: '#fff',
    textDecorationLine:'underline',
    
  },
  // this is modal  container
  modalView: {
    height:240,
    width:300,
    margin: 4,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderWidth:3,
    borderColor:'rgb(45, 110, 229)',
  },
  modalText:{

    textAlign:'center',
    marginTop:-20,
  },
  btn:{
   
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop:1
  },
  
});