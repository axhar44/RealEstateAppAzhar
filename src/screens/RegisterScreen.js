import React,{useState,useEffect} from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
  Pressable,
  Alert,
  ScrollView,
  PermissionsAndroid,
  Platform,
  DeviceEventEmitter,
} from 'react-native';
import Modal from 'react-native-modal';
import SmsAndroid from 'react-native-get-sms-android';
import BottomSheet from 'react-native-simple-bottom-sheet';
import AsyncStorage from '@react-native-community/async-storage';

export default function RegisterScreen(props) {
   const [Valid_first_name , setValid_first_name] = useState("");
   const [Valid_last_name , setValid_last_name] = useState("");
   const [Valid_email , setValid_email] = useState("");
   const [Valid_phone , setValid_phone] = useState("");
   const [Valid_password , setValid_password] = useState("");
   const [isModalVisible, setModalVisible] = useState(false);
   const [isModalVisiblerror, setModalVisiblerror] = useState(false);
   let apiLinkPrefix = "http://vbswebs.com/tugs/";
   const [pressed, setPressed] = useState(false);
   ////random code generate by verify user function here//
   const [smscode, setSmsCode] = useState(
    Math.random().toString().substring(2, 6),
  );
  const [isloading, setLoading] = useState(false);
  const [status, setStatus] = useState('');
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;



  useEffect(()=>{
    checkPermissions();
  },[])

  

   const storeData = async (value) => {
    console.log('VAlUE_VERIFY', value);
    try {
      const Data = JSON.stringify(value);
      await AsyncStorage.setItem('User_Data', Data);
      console.log('ASYNC_DATA', Data);
    } catch (e) {
      console.log('Error', e);
    }
  };


  const VerificationCode = async (value)=>{
    try
    {
       const Code = JSON.stringify(value);
       await AsyncStorage.setItem('Verify_code', value);
    }
    catch(e)
    {
      console.log("failed to verify Code Local Storage",e)
    }
  };

  const [value, onChangeText] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    password: '',
   });


   const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

   ////form validation here with onblur  //

   function validation(){
    if( first_name ==="")
    {
    setValid_first_name("!!! Please Enter Your Name !!!");
    }else
    {
    setValid_first_name("");
    }
    if( last_name ==="")
    {
    setValid_last_name("Please Enter Your Last Name!");
    }else
    {
    setValid_last_name("");
    }
    if( phone.length !==11)
    {
    setValid_phone(" Please Enter Your Phone Number!");
    }else
    {
    setValid_phone("");
    }
    // if( email ==="")
    if(reg.test(email) === false || email ==="")
    {
    setValid_email(" Please Enter Your valid Email!");
    }else
    {
    setValid_email("");
    }
    if( password ==="")
    {
    setValid_password(" Please Enter Your Password !");
    }else
    {
    setValid_password("");
    }
   }
   ////form validation here with onblur  end //
  const onChange = (str, val) => {
    switch (str) {
      case 'First_Name':
      onChangeText((prevState) => {
      return { ...prevState, first_name: val };  
    });
      break;
      case 'Last_Name':
      onChangeText((prevState) => {
      return { ...prevState, last_name: val };
    });
      break;
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
      case 'CODE':
        setCode(val);
        break;
      default:
        return value==''
        ;
    }
    
  };
  const { first_name, last_name, phone, email, password } = value;
  storeData(value);

  const submit = () => {
    fetch(
      `${apiLinkPrefix}API/signup.php?FName=${first_name}&LName=${last_name}&uemail=${email}&upwd=${password}&uph=${phone}`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          FName: first_name,
          LName: last_name,
          uemail: email,
          upwd: password,
          uph: phone,
        }),
      },
    )
      .then((response) => response.json())
      .then((data) => {
    if (data.message ==='Success') {
         
          setModalVisible(true);
          props.navigation.navigate('Verification_Screen');

          setModalVisiblerror(true);
          setTimeout(()=>{
          setModalVisible(false)
          },2000);
        }
    if (data.message ==='Invalid Parameter(s)' ) {
           setModalVisible(true);
            setModalVisiblerror(false);
        }
          data.message !== 'Invalid Parameter(s)' &&
           data.message !== 'Already Exist' &&
            storeVerify(value);
             setMessage(data.message);
         })
      .catch((err) => console.log(err))
      .finally(() => setPressed(false));
  };
///this is verification code here

async function checkPer() {
  setLoading(true);
  if (Platform.OS === 'android') {
    try {
      if (!(await checkPermissions())) {
        await requestPermissions();
      }
      if (await checkPermissions()) {
        sendMsg(props);
      }
    } catch (e) {
      console.error(e);
    }
  }
}

async function requestPermissions() {
  let granted = {};
  try {
    console.log('requesting SMS permissions');
    granted = await PermissionsAndroid.requestMultiple(
      [
        PermissionsAndroid.PERMISSIONS.READ_SMS,
        PermissionsAndroid.PERMISSIONS.SEND_SMS,
      ],
      {
        title: 'Example App SMS Features',
        message: 'Example SMS App needs access to demonstrate SMS features',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    console.log(granted);
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use SMS features');
    } else {
      console.log('SMS permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
}

async function checkPermissions() {
  console.log('checking SMS permissions');
  let hasPermissions = false;
  try {
    hasPermissions = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.READ_SMS,
    );
    if (!hasPermissions) return false;
    hasPermissions = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.SEND_SMS,
    );
    if (!hasPermissions) return false;
  } catch (e) {
    console.error(e);
  }
  return hasPermissions;
}

const sendMsg = async () => {
  const phoneNumber = {
    addressList: [phone],
  };
  
  VerificationCode(smscode);
  const msg = `HomeWay SMS verification code is: ${smscode}`;

  const myJson = JSON.stringify(phoneNumber);
  console.log('PHONENUMBER', myJson);
  SmsAndroid.autoSend(
    myJson,
    msg,
    (fail) => {
      console.log('Failed with this error: ' + fail);

      setTimeout(
        () => (
          setLoading(false),
          setStatus(
            'Allow SMS Permission or may you have some balance in your mobile number ',
          )
        ),
        1000,
      );
    },
    (success) => {
      console.log('SMS sent successfully');
      setStatus(success);
      setLoading(false);
      sent();
      //dispatch(selectedCode(phone, smscode, ''));
    },
  );
};


const sent = async () => {
  DeviceEventEmitter.addListener('sms_onDelivery', (msg) => {
    console.log('DELIVERED', msg, props);
    setStatus(status);
    setTimeout(
      () => msg == 'sent successfully' && props.navigation.navigate('Verification_Screen'),
      50000,
    );
  });
};


// const keyboardHidden = () => {
//   console.log('HIDDEN');
//   setPhoneNumber(number_code + number);
// };

setTimeout(
  () => status == 'SMS sent' && props.navigation.navigate('Verify'),
  3000,
);


/// end verify code //
  return (
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
           <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

      
    <View style={styles.container}>
    <Image                    
  style={{backgroundColor:'white', height:800,width:'auto'}}
       source={require("../../assets/building.jpg")}/>

    <View style={styles.centerizedView}>
       <View style={styles.logoBox}>
          <Image source={require('../../assets/homeway.pk-Logo-final-01.png')}
            style={{height:75,width:75,marginTop:-16}}/>
             </View>
    <View style={styles.authBox}>
          <Text style={styles.loginTitleText}>Register</Text>
             <View style={styles.hr}></View>
                <View style={styles.inputBox}>
                     <Text style={styles.inputLabel}>First Name</Text>
                       <TextInput
                        style={styles.input}
                          onChangeText={(text) => onChange('First_Name',text)}
                           value={first_name}
                            onBlur={() => validation()}
                              autoCapitalize={false}
                               keyboardType='Text'
                                 textContentType='Text'/>
                                  <Text style={styles.validation_error}>{Valid_first_name}</Text>
                                   </View>
    <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Last Name</Text>
               <TextInput
                 style={styles.input}
                   onChangeText={(text) => onChange('Last_Name',text)}
                      value={last_name}
                        autoCapitalize={false}
                         onBlur={() => validation()}
                           keyboardType='email-address'
                            textContentType='emailAddress'/>
                            <Text style={styles.validation_error}>{Valid_last_name}</Text>
                             </View>
      <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.input}
                  autoCapitalize={false}
                   onChangeText={(text) => onChange('EMAIL',text) }
                    keyboardType='email-address'
                      textContentType='emailAddress'
                        onBlur={() => validation()} />
                          <Text style={styles.validation_error}>{Valid_email}</Text>
                           </View>
       <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Phone</Text>
              <TextInput
                 style={styles.input}
                   autoCapitalize={false}
                      onChangeText={(text) => onChange('PHONE',text)}
                        keyboardType='numeric'
                         maxLength={13}
                          textContentType='emailAddress'
                            onBlur={() => validation()}/>
                             <Text style={styles.validation_error}>{Valid_phone}</Text>
                               </View>
     <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Password</Text>
                <TextInput
                  style={styles.input}
                   autoCapitalize={false}
                    secureTextEntry={true}
                      textContentType='password'
                        onChangeText={(text) => onChange('PASSWORD', text)}
                          onBlur={() => validation()} />
                            <Text style={styles.validation_error}>{Valid_password}</Text>
                               </View>
    <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Confirm Password</Text>
                <TextInput
                   style={styles.input}
                    autoCapitalize={false}
                      secureTextEntry={true}
                        textContentType='password'
                onBlur={() => validation()} />
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
                  <View style={{marginTop:2,backgroundColor:'red'}}>
                      <Image
                        style={{backgroundColor:'white', height:150,width:190}}
                         resizeMode="stretch"
                          source={require("../../assets/homeway.pk-Logo-final-01.png")} />
                          </View>
                            Congratullation You are Now Register Customer 
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

{/* Success Modal End */}
    <TouchableOpacity 
        onPress={() => (submit(),checkPer(), setPressed(true))}       
        style={styles.loginButton}>
        <Text 
         style={styles.loginButtonText}>Register Now 
         </Text>
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
    position: 'relative',
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
    top: '-105%',
    
    
  },
  authBox: {
    marginTop:22,
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
    width: 85,
    height: 85,
    backgroundColor: 'white',
    borderRadius: 1000,
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: -30,
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
    color: '#fff',

  },
  inputBox: {
    marginTop: 0,
    
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
    marginTop: 15,
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
    
  },

  validation_error:{
    color:'red',
    fontSize:10,
    

  },
  forgotPasswordText: {
    textAlign: 'center',
    marginTop: 12,
    fontSize: 16,
    color: '#fff',
    textDecorationLine:'underline',
  },



  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop:1
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
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 1,
    textAlign: "center",

  },
  scrollView: {
    //backgroundColor: 'pink',
    // marginHorizontal: 20,
  },
});