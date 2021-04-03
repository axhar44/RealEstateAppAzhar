import React, {Component,useEffect} from 'react';
import {Text, View,Image,StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


export const Splash = ()=> {



  

  
  


 
 
    return (
      <View style={styles.view}>
        <Text
          style={{
            fontSize: 30,
            textAlign: 'center',
            marginTop: -10,
            color: 'blue',
            fontSize: 40,
            backgroundColor:'#22bcb5',
          
          }}>
         
        </Text>
                <Image
           style={{backgroundColor:'rgb(45, 110, 229)', height:770,width:360,backgroundColor:'white'}}
           resizeMode="stretch"
          source={require("../../assets/App_login.png")}

        />



      </View>
     
    );
  }


const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'rgb(45, 110, 229)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Splash;