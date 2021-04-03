import * as React from 'react';
import { Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Icons from './components/icons';
// import Drawer_navigation from './screens/Drawer_navigation';
import { Drawer_navigation, Profile } from './screens';
import Order_Post from './screens/Order_Post';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Calls!</Text>
    </View>
  );
}

// function SettingsScreen1() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Camera!</Text>
//     </View>
//   );
// }
function SettingsScreen2() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'md-arrow-back-circle-outline' : 'md-arrow-back-circle-outline';
          // } else if (route.name === 'Settings') {
          //   iconName = focused ? 'call-outline' : 'call-outline';
          } else if (route.name === 'Order_Post') {
            iconName = focused ? 'fast-food-outline' : 'fast-food-outline';
          } else if (route.name === 'Settings2') {
            iconName = focused ? 'fast-food-outline' : 'fast-food-outline';
          }

          // You can return any component that you like here!
          return <Icons.Ionicons name={iconName} size={30} color="red" />;
        },
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '',
        inactiveTintColor: 'rgb(192,192,192)',
        style: { height: 50 },
      }}>
      <Tab.Screen name="Order_Post" component={Order_Post} />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
      <Tab.Screen name="Home" component={Drawer_navigation} />
      <Tab.Screen name="Settings2" component={Profile} />
    </Tab.Navigator>
    // </NavigationContainer>
  );
}
