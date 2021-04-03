import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Icons from "../components/icons";
import RegisterScreen from './RegisterScreen';
import Search_add  from '../screens/Search';
import Profile from '../screens/Profile';
import GlobalHeader from '../components/GlobalHeader';



let users ='12334';
let name ='axhar';


// Fonts



function Home(props) {
  const [loaded] = useState({
    //NSLight,
    // NSRegular,
    // NSBold,
    //NSExtraBold,
  });

  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   Axios.get('https://randomuser.me/api/?results=10').then(({ data }) =>
  //     setUsers(data.results)
  //   );
  // }, []);

  if (!loaded) {
    return (
      <View>
        <ActivityIndicator size='large' />
      </View>
    );
  }

  
     
    

  return (



    
    <View style={styles.container}>
           
           <View style={{marginTop:-40}}>

           <GlobalHeader headingText="Home" back navigation={props.navigation} />
           </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Search Header */}
        <View style={{ paddingHorizontal: 10 }}>
        
        </View>
        {/* Stories View */}
        <View style={{ marginTop: 10}}>
        
          <Search_add></Search_add>
          <View style={{ marginTop: 10, paddingLeft: 10 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>

           
            
              
             
              {users.map((user, index) => (
                <TouchableOpacity
                  style={{
                    marginLeft: index === 0 ? 10 : 0,
                    marginRight: 10,
                  }}
                >
             
                    <Image
              style={styles.postContentImage}
              source={require("../../assets/banner.jpg")}
            />

            
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
        {/* Posts */}
        <View style={{ paddingHorizontal: 10 }}>
          {users.map((user, index) => (
            <Post user={user} index={index} />
          ))}
        </View>

        <View>


            {/* first box started */}

        <View style={styles.post}>
          {/* Post Header */}
          <View style={styles.postHeader}>
            {/* <Image
              style={{ width: 50, height: 50, borderRadius: 100 }}
              source={{ uri: user?.picture.medium }}
            /> */}
            {/* 
      <       Image
              style={styles.postContentImage}
              source={require("../../assets/banner3.jpg")}
            /> */}


            
            <View style={{ flex: 1, paddingHorizontal: 10 }}>
              {/* <Text style={{ fontFamily: '', fontSize: 18 }}>
                {user?.name.first} {user?.name.last}
              </Text>
              <Text style={{  }}>
                {user?.login.username} | {user?.location.city},{' '}
                {user?.location.country}
              </Text> */}
            </View>
            <TouchableOpacity style={{ paddingHorizontal: 6 }}>
              {/* <Icon name='more-horizontal' size={24} /> */}
            </TouchableOpacity>
          </View>
          {/* Post Content */}
          <View style={{ paddingHorizontal: 6 }}>
            {/* Post Content Text */}
            <Text style={{  }}>
              Sunny heights block 10 gulshan appartment vbs   Sunny heights block 10 gulshan appartment vbs webs
              
            </Text>
            {/* Post Content Image */}

            <TouchableOpacity
                        onPress={()=> props.navigation.navigate('HomeScreen')}

            >
               <Image
              style={styles.postContentImage}
              source={require("../../assets/banner3.jpg")}
            />
            </TouchableOpacity>



           


            
            
          </View>
          {/* Interactions Bar */}
          <View style={styles.interactionBar}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {/* <FAIcon name='thumbs-up' size={18} color='#eb3b5a' /> */}
              <Text style={styles.interactionText}>104 view</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.interactionText}>23 comments</Text>
              <Text style={styles.interactionText}>5 Like</Text>
            </View>
          </View>
          {/* Interacts Button */}
          <View
            style={{ flexDirection: 'row', marginTop: 10, marginBottom: 4 }}
          >
            <TouchableOpacity style={styles.interactionButton}>
              {/* <Icon name='thumbs-up' size={24} /> */}
              <Text style={{ marginLeft: 6, fontFamily: '' }}>
                Like
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.interactionButton}>
              {/* <Icon name='message-square' size={24} /> */}
              <Text style={{ marginLeft: 6, fontFamily: '' }}>
                Comment
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.interactionButton}>
              {/* <Icon name='share-2' size={24} /> */}
              <Text style={{ marginLeft: 6, fontFamily: '' }}>
                Share
              </Text>
            </TouchableOpacity>
          </View>



               {/* first box started */}

        <View style={styles.post}>
          {/* Post Header */}
          <View style={styles.postHeader}>
            {/* <Image
              style={{ width: 50, height: 50, borderRadius: 100 }}
              source={{ uri: user?.picture.medium }}
            /> */}
            {/* 
      <       Image
              style={styles.postContentImage}
              source={require("../../assets/banner3.jpg")}
            /> */}


            
            <View style={{ flex: 1, paddingHorizontal: 10 }}>
              {/* <Text style={{ fontFamily: '', fontSize: 18 }}>
                {user?.name.first} {user?.name.last}
              </Text>
              <Text style={{  }}>
                {user?.login.username} | {user?.location.city},{' '}
                {user?.location.country}
              </Text> */}
            </View>
            <TouchableOpacity style={{ paddingHorizontal: 6 }}>
              {/* <Icon name='more-horizontal' size={24} /> */}
            </TouchableOpacity>
          </View>
          {/* Post Content */}
          <View style={{ paddingHorizontal: 6 }}>
            {/* Post Content Text */}
            <Text style={{  }}>
              Sunny heights block 10 gulshan appartment vbs   Sunny heights block 10 gulshan appartment vbs webs
              
            </Text>
            {/* Post Content Image */}
            <Image
              style={styles.postContentImage}
              source={require("../../assets/banner.jpg")}
            />


            
            
          </View>
          {/* Interactions Bar */}
          <View style={styles.interactionBar}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {/* <FAIcon name='thumbs-up' size={18} color='#eb3b5a' /> */}
              <Text style={styles.interactionText}>104 view</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.interactionText}>23 comments</Text>
              <Text style={styles.interactionText}>5 Like</Text>
            </View>
          </View>
          {/* Interacts Button */}
          <View
            style={{ flexDirection: 'row', marginTop: 10, marginBottom: 4 }}
          >
            <TouchableOpacity style={styles.interactionButton}>
              {/* <Icon name='thumbs-up' size={24} /> */}
              <Text style={{ marginLeft: 6, fontFamily: '' }}>
                Like
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.interactionButton}>
              {/* <Icon name='message-square' size={24} /> */}
              <Text style={{ marginLeft: 6, fontFamily: '' }}>
                Comment
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.interactionButton}>
              {/* <Icon name='share-2' size={24} /> */}
              <Text style={{ marginLeft: 6, fontFamily: '' }}>
                Share
              </Text>
            </TouchableOpacity>
          </View>


</View>



  {/* thirf box started */}

          
        </View>



            
        <View style={styles.post}>
          {/* Post Header */}
          <View style={styles.postHeader}>
            {/* <Image
              style={{ width: 50, height: 50, borderRadius: 100 }}
              source={{ uri: user?.picture.medium }}
            /> */}
            {/* 
      <       Image
              style={styles.postContentImage}
              source={require("../../assets/banner3.jpg")}
            /> */}


            
            <View style={{ flex: 1, paddingHorizontal: 10 }}>
              {/* <Text style={{ fontFamily: '', fontSize: 18 }}>
                {user?.name.first} {user?.name.last}
              </Text>
              <Text style={{  }}>
                {user?.login.username} | {user?.location.city},{' '}
                {user?.location.country}
              </Text> */}
            </View>
            <TouchableOpacity style={{ paddingHorizontal: 6 }}>
              {/* <Icon name='more-horizontal' size={24} /> */}
            </TouchableOpacity>
          </View>
          {/* Post Content */}
          <View style={{ paddingHorizontal: 6 }}>
            {/* Post Content Text */}
            <Text style={{  }}>
              sunny heights block 10 gulshan appartment
            </Text>
            {/* Post Content Image */}
            <Image
              style={styles.postContentImage}
              source={require("../../assets/axhar3.jpg")}
            />


            
            
          </View>
          {/* Interactions Bar */}
          <View style={styles.interactionBar}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {/* <FAIcon name='thumbs-up' size={18} color='#eb3b5a' /> */}
              <Text style={styles.interactionText}>104 Likes</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.interactionText}>23 comments</Text>
              <Text style={styles.interactionText}>5 shares</Text>
            </View>
          </View>
          {/* Interacts Button */}
          <View
            style={{ flexDirection: 'row', marginTop: 10, marginBottom: 4 }}
          >
            <TouchableOpacity style={styles.interactionButton}>
              {/* <Icon name='thumbs-up' size={24} /> */}
              <Text style={{ marginLeft: 6, fontFamily: '' }}>
                Like
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.interactionButton}>
              {/* <Icon name='message-square' size={24} /> */}
              <Text style={{ marginLeft: 6, fontFamily: '' }}>
                Comment
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.interactionButton}>
              {/* <Icon name='share-2' size={24} /> */}
              <Text style={{ marginLeft: 6, fontFamily: '' }}>
                Share
              </Text>
            </TouchableOpacity>
          </View>


          
        </View>
      </View>
      </ScrollView>
    </View>

    
  );
}

function Explore() {
  return (
    <View style={{ ...styles.container }}>
      <Text
        style={{
          color: '#000',
          paddingHorizontal: 10,
          fontFamily: '',
          fontSize: 30,
        }}
      >
        Explore
      </Text>
    </View>
  );
}

function Chats() {
  return (
    <View style={{ ...styles.container }}>
      <Text
        style={{
          color: '#000',
          paddingHorizontal: 10,
          fontFamily: '',
          fontSize: 30,
        }}
      >
        Chats
      </Text>
    </View>
  );
}

function Notifications(props) {
  return (
    <View style={{ ...styles.container }}>
      <Text
        style={{
          color: '#000',
          paddingHorizontal: 10,
          fontFamily: '',
          fontSize: 30,
        }}
      >
        Chats
      </Text>
    </View>

  
    
  );
}

function Settings() {
  return (
    <View style={{ ...styles.container }}>
      <Text
        style={{
          color: '#000',
          paddingHorizontal: 10,
          fontFamily: '',
          fontSize: 30,
        }}
      >
        Settings
      </Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
export default function SocialUI2() {
  StatusBar.setBarStyle('dark-content');
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'rgb(45, 110, 229)',
      }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (

            <Icons.AntDesign name={'home'} size={20} color={'rgb(45, 110, 229)'}></Icons.AntDesign>

          ),


        }}
      />
      <Tab.Screen
        name='RegisterScreen'
        component={RegisterScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icons.FontAwesome name={'wpexplorer'} size={20} color={'rgb(45, 110, 229)'}></Icons.FontAwesome>

          ),
        }}
      />
      <Tab.Screen
      
        name='Sell'
        component={Chats}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icons.AntDesign name={'pluscircleo'} size={35} color={'rgb(45, 110, 229)'}></Icons.AntDesign>

          ),
        }}
      />
      <Tab.Screen
        name='Notifications'
        component={Notifications}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icons.AntDesign name={'notification'} size={20} color={'rgb(45, 110, 229)'}></Icons.AntDesign>

          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (

            <Icons.AntDesign name={'setting'} size={20} color={'rgb(45, 110, 229)'}></Icons.AntDesign>


          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbfbfb',
    paddingTop: 40,
  },
  post: {
    borderWidth: 1.2,
    borderColor: '#dfe4ea',
    borderRadius: 4,
    backgroundColor: '#fff',
    marginTop: 5,
  },
  postHeader: { padding: 6, flexDirection: 'row', alignItems: 'center' },
  postContentImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginTop: 10,
  },
  interactionBar: {
    backgroundColor: '#fafafa',
    height: 40,
    marginHorizontal: 20,
    marginTop: -20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  interactionText: {
    fontFamily: '',
    color: '#000',
    marginLeft: 4,
  },
  interactionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
  },


});