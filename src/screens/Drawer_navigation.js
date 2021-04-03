import * as React from 'react';
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
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ScreenSize, Pic } from '../components/theme';
import * as Icons from '../components/icons';

// import HomeScreen from './HomeScreen';
import  Contacts from './Contacts';

// import {NavigationContainer} from '@react-navigation/native';

function Home({ navigation }) {
  return <Contacts navigation={navigation} />;
}

function CustomDrawerContent(props) {
  const drawerItems = [
    { title: 'Home', icon: 'home' },
    { title: 'New Group', icon: 'find' },
    { title: 'New Channel', icon: 'iconfontdesktop' },
    { title: 'Saved Messages', icon: 'staro' },
    { title: 'Calls', icon: 'phone' },
    { title: 'Contacts', icon: 'adduser' },
    { title: 'Settings', icon: 'setting' },
    { title: 'Contacts', icon: 'adduser' },
    { title: 'Settings', icon: 'setting' },
    { title: 'Contacts', icon: 'adduser' },
    
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => alert('Some Function will be allotted!')}
        style={{
          height: ScreenSize.hp3,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            height: 110,
            width: 110,
            borderRadius: 80,
            backgroundColor: 'transparent',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}>
          <Image
            //source={Pic.User}
            source={require('../../assets/axhar.jpg')}
            style={{ height: '100%', width: '100%' }}
            resizeMode="cover"
          />
        </View>
        <Text
          style={{
            marginTop: 10,
            fontSize: 16,
            fontWeight: 'bold',
            color: 'rgb(45, 110, 229)',
            // fontFamily: Fonts.Regular,
          }}>
          Dierdre John
        </Text>
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {drawerItems.map((v, i) => {
            return (
              <TouchableOpacity
                onPress={() => alert('Some Function will be allotted!')}
                style={styles.touch3}>
                <View
                  style={{
                    flexDirection: 'row',
                    flex: 3,
                    alignItems: 'center',
                  }}>
                  <View>
                    <Icons.AntDesign name={v.icon} size={30} color="#fbfbfb" />

                  
                  </View>
                  <View>
                    <Text
                      style={{
                        marginLeft: 15,
                        fontSize: 16,
                        // fontWeight: 'bold',
                        color: '#fbfbfb',
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
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Contacts" component={Contacts} />
      {/* <Drawer.Screen name="Home" component={Contacts} /> */}
      {/* <Drawer.Screen name="NotificationsScreen" component={HomeScreen} /> */}

      {/* <Drawer.Screen name="Home" component={Home} /> */}
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(45, 110, 229)',
  },
  touch3: {
    backgroundColor: 'rgb(45, 110, 229)',
    flexDirection: 'row',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    height: 43,
    //backgroundColor: 'green',
    justifyContent: 'space-between',
    paddingLeft: '20%',
    alignItems: 'center',
    letterSpacing: 1.84,
  },
  badge: {
    backgroundColor: 'rgb(45, 110, 229)',
    height: 20,
    width: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 360,
    marginLeft: 5,
    marginTop: 5,
  },
});
