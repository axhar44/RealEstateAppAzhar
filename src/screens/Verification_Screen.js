
import React,{useEffect,useState} from 'react';
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
} from 'react-native';
import CountDown from 'react-native-countdown-component';
import AsyncStorage from '@react-native-community/async-storage';


export default function Verification_screen(props) {
   const [VerifyCode,setVerifyCode] = useState("");
  const [value, onChangeText] = useState({
    UserCode: '',
   });


   const [user_code_here,set_user_code_here] = useState('');
  
  useEffect(()=>{
   

    setTimeout(()=>{
      getVerifyCode();
      },5000);

      setTimeout(()=>{
        CheckVerifyCode();
      },10000);
     

  },[]);



   ///check User Data In your mobile Storage
   const getVerifyCode = async () => {
     try
     {
      const User_Code = await AsyncStorage.getItem('Verify_code');
      console.log('Get Verify User Code',User_Code);
      set_user_code_here(User_Code);
     }
     catch(e)
     {
        console.log("error verify code",e)
     }
 };

const onChange = (str, val) => {
switch (str) 
{
  case 'UserCode':
  onChangeText((prevState) => {
  return { ...prevState, UserCode: val };  
  console.log("this is user state ",val);
});
  break;
  default:
  return value=='';
  }
};
const { UserCode} = value;

  function Verify_Timeout(){
    //props.navigation.navigate('RegisterScreen')
  }

  function CheckVerifyCode(){
  if(UserCode ===VerifyCode ){
      props.navigation.navigate('Drawer_navigation');
      console.log("verify sucess");
  }else{
    console.log("verify Not Match");
     alert("incorrect Verify Code Please Try Again");
    }
  }


  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.centerizedView}>
          <View style={styles.authBox}>
            <View style={styles.logoBox}>
              <Image source={require('../../assets/homeway.pk-Logo-final-01.png')}
              style={{height:75,width:75}} />
              </View>
                <Text style={styles.loginTitleText}>We've sent a code to your phone</Text>
                 <View style={styles.hr}></View>
                  <View style={styles.inputBox}>
                    <Text style={styles.inputLabel}>
                     <CountDown
                        until={60 * 1 + 30}
                         size={30}
                         onFinish={() => Verify_Timeout()}
                          digitStyle={{backgroundColor: '#FFF'}}
                           digitTxtStyle={{color: '#1CC625'}}
                            timeToShow={['M', 'S']}
                             timeLabels={{m: 'MM', s: 'SS'}}
                        />
                         </Text>
                           <TextInput
                            style={styles.input}
                              autoCapitalize={false}
                               keyboardType='email-address'
                                 textContentType='emailAddress'
                                  placeholder='Enter Your Verification Code'
                                  onChangeText={(text) => onChange('UserCode',text)}
                                  value={user_code_here}
                                  />
                   </View>

                 <TouchableOpacity
                      onPress={()=> CheckVerifyCode()}
                      style={styles.loginButton}>
                     <Text style={styles.loginButtonText}>Verify</Text>
                     </TouchableOpacity>
            
                  <TouchableOpacity
               onPress={()=> props.navigation.navigate('RegisterScreen')}>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
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
    top: '30%',
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
  },
  logoBox: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 1000,
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: -50,
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
  },
  hr: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#444',
    marginTop: 6,
  },
  inputBox: {
    marginTop: 10,
  },
  inputLabel: {
    fontSize: 18,
    marginBottom: 6,
    marginLeft:50,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#dfe4ea',
    borderRadius: 4,
    paddingHorizontal: 10,
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
  },
  forgotPasswordText: {
    textAlign: 'center',
    marginTop: 12,
    fontSize: 16,
  },
});