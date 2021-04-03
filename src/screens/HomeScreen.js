import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Dimensions,
  Button,
} from 'react-native';

import * as Icons from "../components/icons";
import GlobalHeader from '../components/GlobalHeader';

import Swiper from 'react-native-swiper';



// Fonts


function Photos({ photos }) {
  const imgWidth = Dimensions.get('screen').width * 0.33333;
  return (
    <View style={{}}>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
        }}
      >
        {photos.map((photo, index) => (
          <View>
            <Image
              style={{ width: imgWidth, height: imgWidth }}
              source={require("../../assets/aa.png")}

            />
          </View>
        ))}
      </View>
    </View>
  );
}

function Albums() {
  const [albums] = useState([
    {
      name: 'Animals',
      images: [
        'https://i.picsum.photos/id/1074/367/267.jpg?hmac=2YamGD7W1FNtp9UvAVUDdYUm44xzyHCthHqFl6jVT0M',
        'https://i.picsum.photos/id/237/367/267.jpg?hmac=9Xp8JrOngpF2E_G3tRKnJMhZu5AX8FimulIG_sLj1xg',
        'https://i.picsum.photos/id/1084/367/267.jpg?hmac=VaCZRCvuoubMR-S6bXItyxmDVwAaumZU2x1ulWE0faU',
        'https://i.picsum.photos/id/219/367/267.jpg?hmac=S8RAgXxGj5AUho8KQ0hsjW8bhy1d-WunZNm77FCqC3w',
      ],
    },
    {
      name: 'Food',
      images: [
        'https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      ],
    },
  ]);
  const imgWidth = Dimensions.get('screen').width * 0.33333;
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', paddingBottom: 20 }}>
      {albums.map((album) => (
        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 10 }}>
          {album.images.map((img) => (
            <Image
              style={{ width: imgWidth + 50, height: imgWidth + 50 }}
              source={{ uri: img }}
            />
          ))}
          <View
            style={{
              position: 'absolute',
              bottom: 10,
              left: 10,
              backgroundColor: '#111',
              paddingHorizontal: 10,
              paddingVertical: 4,
              borderRadius: 6,
            }}
          >
            <Text style={{ color: '#fff', fontFamily: 'SSBold', fontSize: 20 }}>
              {album.name}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

function Tags({ photos }) {
  const imgWidth = Dimensions.get('screen').width * 0.33333;
  return (
    <View style={{}}>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
        }}
      >
        {photos.map((photo, index) => (
          <View>
            <Image
              style={{ width: imgWidth, height: imgWidth }}
              source={require("../../assets/slide1.png")}

            />
          </View>
        ))}
      </View>
    </View>
  );
}

export default function ProfileScreen1(props) {

  let loaded = "100000";
  // const [loaded] = useFonts({
  //   //SSLight,
  //   SSRegular,
  //   SSBold,
  // });

  const [showContent, setShowContent] = useState('Photos');

  if (!loaded) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <>
          <View>
          <Swiper style={styles.wrapper} showsButtons={true}>
            <Image
              style={styles.coverImage}
              source={require("../../assets/banner3.jpg")}

            />

<Image
              style={styles.coverImage}
              source={require("../../assets/banner.jpg")}

            />

            
            </Swiper>
        
          </View>
          <View style={styles.profileContainer}>
         
            <View style={{}}>
          
              <View style={styles.countsView}>
                <View style={styles.countView}>
                <Icons.FontAwesome5 name={'map-pin'} size={20} color={'rgb(45, 110, 229)'}></Icons.FontAwesome5>

                  <Text style={styles.countText}>Map View</Text>
                </View>
                <View style={styles.countView}>
                 
                <Icons.AntDesign name={'barchart'} size={22} color={'rgb(45, 110, 229)'}></Icons.AntDesign>

                
                  <Text style={styles.countText}>Near By</Text>
                </View>
                <View style={styles.countView}>

                <Icons.AntDesign name={'clouduploado'} size={22} color={'rgb(45, 110, 229)'}></Icons.AntDesign>

                  <Text style={styles.countText}>Street-View</Text>
                </View>

                <View style={styles.countView}>
                <Icons.AntDesign name={'calculator'} size={22} color={'rgb(45, 110, 229)'}></Icons.AntDesign>

                  <Text style={styles.countText}>Stats</Text>
                </View>
              </View>
              {/* Interact Buttons View */}
            
              {/* Mutual Followed By Text */}
              <View style={{ paddingHorizontal: 25, marginTop: 20 }}>
                                <Icons.FontAwesome5 name={'crown'} size={22} color={'rgb(45, 110, 229)'}></Icons.FontAwesome5>

    <Text style={{ fontFamily: 'SSRegular', fontSize: 16,  marginTop:-20,marginLeft:30 ,fontWeight:'bold' }}>
                  {'Appartments '}
                  
                </Text>
              </View>


              <View style={{ paddingHorizontal: 25, marginTop: 10}}>
                <Text style={{ fontFamily: 'SSRegular', fontSize: 16,fontWeight:'bold' }}>
                  {'2 Beds '}
                <Icons.FontAwesome   name={'bed'} size={22} color={'rgb(45, 110, 229)'}></Icons.FontAwesome>
                  <Text style={{ fontFamily: 'SSBold' }}>         1 Baths  </Text>
                  
                  
               <Icons.FontAwesome name={'bath'} size={22} color={'rgb(45, 110, 229)'}></Icons.FontAwesome>

                     {'            '}
              <Icons.AntDesign name={'areachart'} size={22} color={'rgb(45, 110, 229)'}></Icons.AntDesign>
                  <Text style={{ fontFamily: 'SSBold' }}>120 sqft </Text>
                </Text>

               <View style={{marginTop:20}}>
                 <Text style={{fontWeight:'bold',fontSize:16}}>Description</Text>
                 <Text style={{fontSize:12}}>i am azhar i am an php developer with 8 month experience in VBSWEBS</Text>
                 </View>

                 <View style={{marginTop:20}}>
                 <Text style={{fontWeight:'bold',fontSize:16}}>Listing Agents</Text>
                 <Text style={{fontSize:12}}>i am azhar i am an php developer with 8 month experience in VBSWEBS</Text>
                 </View>


                 <View style={{marginTop:20}}>
                 <Text style={{fontWeight:'bold',fontSize:16}}>Address</Text>
                 <Text style={{fontSize:12}}>Gulshane iqbal block 14 near Quaidabad Karachi North Hydrabad Zaman town karachi</Text>
                 
                 </View>

                 <View style={{marginTop:22}}>                                 
                  <TouchableOpacity 
                  onPress={() => props.navigation.navigate('Contacts')}
                  style={styles.loginButton}>
                   <Text 
                    style={styles.loginButtonText}>Check Availability</Text>
                   </TouchableOpacity>
                   </View>
                
              </View>
            </View>
            {/* Profile Content */}
            {/* <View style={{ marginTop: 140 }}>
              <View style={styles.profileContentButtonsView}>
                <TouchableOpacity
                  style={{
                    ...styles.showContentButton,
                    borderBottomWidth: showContent === 'Photos' ? 2 : 0,
                  }}
                  onPress={() => setShowContent('Photos')}
                >
                  <Text style={styles.showContentButtonText}>Monthly</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                  style={{
                    ...styles.showContentButton,
                    borderBottomWidth: showContent === 'Tags' ? 2 : 0,
                  }}
                  onPress={() => setShowContent('Tags')}
                >
                  <Text style={styles.showContentButtonText}>Yearly</Text>
                </TouchableOpacity>
              </View>
              {showContent === 'Photos' ? (
                <Photos photos={new Array(13).fill(1)} />
              ) : showContent === 'Albums' ? (
                <Albums />
              ) : (
                <Tags photos={new Array(23).fill(1)} />
              )}
            </View> */}
          </View>
        </>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  coverImage: { height: 400, width: '100%' },
  profileContainer: {
    // height: 1000,
    backgroundColor: '#fff',
    marginTop: -340,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  
  countsView: { flexDirection: 'row', marginTop: 13 },
  countView: { 
    flex: 1,
    alignItems: 'center' ,
    
    
    },
  countNum: { fontFamily: 'SSBold', fontSize: 20 },
  countText: { fontFamily: 'SSRegular', fontSize: 18, color: '#333' },
  interactButtonsView: {
    flexDirection: 'row',
    marginTop: 10,
    paddingHorizontal: 20,
  },
  interactButton: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    margin: 5,
    borderRadius: 4,
  },
  interactButtonText: {
    fontFamily: 'SSBold',
    color: '#fff',
    fontSize: 18,
    paddingVertical: 6,
  },
  profileContentButtonsView: {
    flexDirection: 'row',
    borderTopWidth: 2,
    borderTopColor: '#f1f3f6',
  },
  showContentButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomColor: '#000',
  },
  showContentButtonText: {
    fontFamily: 'SSRegular',
    fontSize: 18,
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

  



  // swiper images css


  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },


});