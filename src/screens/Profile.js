import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import GlobalHeader from '../components/GlobalHeader';
import { ScreenSize, Pic } from '../components/theme';
import * as Icons from '../components/icons';
import AsyncStorage from '@react-native-community/async-storage';



const Profile = (props) => {
  const drawerItems = [
    { title: 'Chats', icon: 'message1' },
    { title: 'Account', icon: 'user' },
    { title: 'Notifications', icon: 'bells' },
    { title: 'invite a friend', icon: 'envelope-letter' },
    { title: 'Notifications', icon: 'bells' },
    { title: 'invite a friend', icon: 'envelope-letter' },
    { title: 'Help', icon: 'envelope-letter' },
    { title: 'Logout', icon: 'logout' },
  ];
  
  
//   async function Logout_Session() {
//     try {
//       //  const user_data =  await AsyncStorage.removeItem("User_Data");
//        await AsyncStorage.removeItem("User_Data");
//         console.log("logout succesfully");
//         return true;
//     }
//     catch(exception) {
//         return false;
//     }
// }

// const Logout_Session = async () => {
//   console.log('VAlUE_VERIFY');
//   try {
//    // const Data = JSON.stringify(value);
//     await AsyncStorage.removeItem('User_Data');
//     console.log('Remote Item');
//     getData();
//   } catch (e) {
//     console.log('Error', e);
//   }
// };


const Logout_Session = async () => {
  try {
    const User_Data = await AsyncStorage.removeItem('User_Data');
    console.log('Remove item succes',User_Data);
    //props.navigation.navigate('SignUp');
    props.navigation.navigate('SignUp');


  
  } catch (e) {
    console.log('Erro', e);
  }
};


  return (
    <View style={styles.container}>
      <GlobalHeader headingText="Profile" back navigation={props.navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            height: ScreenSize.hp35,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fafafa',
          }}>
          <View
            style={{
              height: 100,
              width: 100,
              borderRadius: 100,
              backgroundColor: 'transparent',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}>
            <Image
              // source={Pic.User}
              source={require('../../assets/axhar.jpg')}
              style={{ height: '100%', width: '100%' }}
              resizeMode="cover"
            />
          </View>
          <TouchableOpacity
            
            onPress={()=> props.navigation.navigate('Gallery')}

            style={{
              backgroundColor: '#2283ec',
              position: 'absolute',
              height: 30,
              width: 30,
              borderRadius: 30,
              alignItems: 'center',
              justifyContent: 'center',
              right: '37%',
            }}>
            <Icons.AntDesign name="picture" size={25} color="#fff" />
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 10,
              fontSize: 18,
              fontWeight: 'bold',
              color: '#6883b2',
              // fontFamily: Fonts.Regular,
            }}>
            Azhar hussain
          </Text>
          <Text
            style={{
              // marginTop: 10,
              fontSize: 14,
              fontWeight: 'bold',
              color: '#000',
              // fontFamily: Fonts.Regular,
            }}>
            +923152904214
          </Text>
        </View>
        <View>
          {drawerItems.map((v, i) => {
            return (
              <TouchableOpacity
                onPress={() => Logout_Session()}
                style={styles.touch3}>
                <View
                  style={{
                    flexDirection: 'row',
                    flex: 1,
                    alignItems: 'center',
                    // backgroundColor: 'red',
                  }}>
                  <View
                    style={{
                      flex: 1,
                      //   backgroundColor: 'red',
                      alignItems: 'center',
                    }}>
                    {i == 3 ? (
                      <Icons.SimpleLineIcons
                        name={v.icon}
                        size={27}
                        color="rgb(45, 110, 229)"
                      />
                    ) : (
                      <Icons.AntDesign
                        name={v.icon}
                        size={30}
                        color="rgb(45, 110, 229)"
                      />
                    )}
                  </View>
                  <View
                    style={{
                      flex: 5,
                      //   backgroundColor: 'blue',
                    }}>
                    <Text
                      style={{
                        // marginLeft: 20,
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: 'rgb(45, 110, 229)',
                      }}>
                      {v.title}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(45, 110, 229)',
    marginTop:-1,
  },
  touch3: {
    backgroundColor: '#fafafa',
    flexDirection: 'row',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(128,128,128,0.2)',
    height: 50,
    // backgroundColor: 'green',
    justifyContent: 'space-between',
    paddingLeft: '5%',
    alignItems: 'center',
    letterSpacing: 1.84,
    marginBottom: 1,
  },
  badge: {
    backgroundColor: '#fafafa',
    height: 20,
    width: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 360,
    marginLeft: 5,
    marginTop: 5,
  },
});

export default Profile;
