






//  this is map work


// // @flow
// 'use-strict'

// import React, { Component } from 'react'
// import {
//   Text,
//   View,
//   Image,
//   StyleSheet,
//   SafeAreaView,
//   TouchableOpacity,
// } from 'react-native'
// import { Marker, Callout } from 'react-native-maps'
// import ClusteredMapView from 'react-native-maps-super-cluster'
// import { generateRandomPoints, generateRandomPoint } from './generator'; 


// const italyCenterLatitude = 24.825671,
//       italyCenterLongitude =  67.13184,

      
     
//       radius = 100000
// export default class App extends Component {

//   constructor(props) {
//     super(props)

//     this.state = {
//       pins: []
//     }

//     // this.reload = this.reload.bind(this)
//     // this.loadMore = this.loadMore.bind(this)
//     // this.renderMarker = this.renderMarker.bind(this)
//     // this.renderCluster = this.renderCluster.bind(this)
//   }

//   // componentDidMount() {
//   //   this.reload()
//   // }

//   // reload = () => {
//   //   const pins = generateRandomPoints({latitude: italyCenterLatitude, longitude: italyCenterLongitude}, radius, 50, this.state.pins.length)
//   //   this.setState({ pins: pins})
//   // }

//   // loadMore = () => {
//   //   const pins = generateRandomPoints({latitude: italyCenterLatitude, longitude: italyCenterLongitude}, radius, 50, this.state.pins.length)
//   //   this.setState({ pins: this.state.pins.concat(pins) })
//   // }

//   renderCluster = (cluster, onPress) => {
//     const pointCount = cluster.pointCount,
//           coordinate = cluster.coordinate,
//           clusterId = cluster.clusterId

//     return (
//       <Marker identifier={`cluster-${clusterId}`} coordinate={coordinate} onPress={onPress}>
//         <View style={styles.clusterContainer}>
//           <Text style={styles.clusterText}>
//             {pointCount}
//           </Text>
//         </View>
//       </Marker>
//     )
//   }

//   renderMarker = (pin) => {
//     return (
//       <Marker identifier={`pin-${pin.id}`} key={pin.id} coordinate={pin.location} />
//     )
//   }

//   render() {
//     return (
//       <SafeAreaView style={styles.container}>        
//         {/* Cluster Map Example */}      
//         <ClusteredMapView
//           style={{flex: 1}}
//           data={this.state.pins}
//           renderMarker={this.renderMarker}
//           renderCluster={this.renderCluster}
//           initialRegion={{latitude: italyCenterLatitude, longitude: italyCenterLongitude, latitudeDelta: 12, longitudeDelta: 12 }}>
//           {/* 
//             Markers rendered as children of ClusteredMapView are not taken in account by the clustering feature,
//             they will just act as they were rendered within a normal react-native-maps instance
//           */}
//           <Marker coordinate={{ latitude: 44.710968, longitude: 10.640131 }} pinColor={'#65bc46'} />
//         </ClusteredMapView>

//         {/* Header - Control Test Bar */}
//         <View style={styles.controlBar}>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={this.reload}>
//             <Text style={styles.text}>Reload</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={this.loadMore}>
//             <Text style={styles.text}>Load more</Text>
//           </TouchableOpacity>
//         </View>

//         {/* <Image
//           resizeMode='contain'
//           source={require('./simbol.png')}
//           style={{position: 'absolute', bottom: 26, right: 8, width: 64, height: 64}}/> */}
//       </SafeAreaView>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   clusterContainer: {
//     width: 30,
//     height: 30,
//     padding: 6,
//     borderWidth: 1,
//     borderRadius: 15,
//     alignItems: 'center',
//     borderColor: '#65bc46',
//     justifyContent: 'center',
//     backgroundColor: 'white',
//   },
//   clusterText: {
//     fontSize: 13,
//     color: '#65bc46',
//     fontWeight: '500',
//     textAlign: 'center',
//   },
//   controlBar: {
//     top: 48,
//     left: 25,
//     right: 25,
//     height: 40,
//     borderRadius: 20,
//     position: 'absolute',
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     backgroundColor: 'white',
//     justifyContent: 'space-between', 
//   },
//   button: {
//     paddingVertical: 8,
//     paddingHorizontal: 20,
//   },
//   novaLabLogo: {
//     right: 8,
//     bottom: 8,
//     width: 64,
//     height: 64,
//     position: 'absolute',
//   },
//   text: {
//     fontSize: 16,
//     fontWeight: 'bold'
//   },
//   clusterContainer: {
//     width: 24,
//     height: 24,
//     borderWidth: 1,
//     borderRadius: 12,
//     alignItems: 'center',
//     borderColor: '#65bc46',
//     justifyContent: 'center',
//     backgroundColor: '#fff'
//   },
//   counterText: {
//     fontSize: 14,
//     color: '#65bc46',
//     fontWeight: '400'
//   },
//   calloutStyle: {
//     width: 64,
//     height: 64,
//     padding: 8,
//     borderRadius: 8,
//     borderColor: '#65bc46',
//     backgroundColor: 'white', 
//   },
// })



// map work end here





import React from 'react';
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
} from 'react-native';
//import { Icon } from 'react-native-elements';

export default function forgot_Password(props) {

  console.log(props,"signup");
  return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
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
              {/* <Icon
                color='#fff'
                name='comments'
                type='font-awesome'
                size={50}
              /> */}
                 {/* style={{backgroundColor:'white', height:150,width:250}}
                      resizeMode="stretch"
                       source={require("../../assets/icon-check.png")} */}
              <Image source={require('../../assets/homeway.pk-Logo-final-01.png')}
              style={{height:75,width:75,marginTop:-10}}

              
         />
            </View>
            <Text style={styles.loginTitleText}>Forgot Password</Text>
            <View style={styles.hr}></View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Enter Your Email</Text>
              <TextInput
                style={styles.input}
                autoCapitalize={false}
                keyboardType='email-address'
                textContentType='emailAddress'
              />
            </View>
          
            <TouchableOpacity
            
            // onPress={()=> props.navigation.navigate('Register_Screen')}
            onPress={()=> props.navigation.navigate('Drawer_navigation')}

            style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=> props.navigation.navigate('RegisterScreen')}>

              <Text style={styles.registerText}>
                Don't have an account? Register Now
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
    width: 100,
    height: 100,
    borderRadius: 1000,
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: -103,
    marginBottom: -50,
    //shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    // backgroundColor:'transparent',
    // opacity:2.1,
    borderWidth:2,
    backgroundColor: 'white',
    borderColor:'#fff',
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
    color:'white',
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
});