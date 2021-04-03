import { Body, Left, Right, Header } from 'native-base';
// import { connect } from 'react-redux';
import React, { useContext, useEffect } from 'react';
import { Pic, Fonts } from './theme';
import * as Icons from './icons';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';

// import { WishListContext } from '../context/WishlistContext';
// import { RegisterContext } from '../context/RegisterContext';
// import { NotificationContext } from '../context/NotificationContext';

const GlobalHeader = (props) => {
  // const { items } = useContext(WishListContext);
  // const { user } = useContext(RegisterContext);
  // const { length } = useContext(NotificationContext);
  // useEffect(() => {
  //   console.log('Global HEADER', props.isFocused);
  // }, [props.isFocused, length]);

  return (
    <Header
      style={{
        ///header color
        backgroundColor: 'rgb(45, 110, 229)',

     
        height: 40,
        elevation: 0,
      }}>
      <Left
        style={{
          flex: 1,
          height: '100%',
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          // backgroundColor: 'red',
        }}>
        {props.back && (
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
            }}
            style={{
              height: '100%',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'flex-start',
              paddingLeft: 5,
            }}>
            <Icons.AntDesign name="arrowleft" size={30} color={'#fff'} />
            <Text style={{flex:1}}>

            
            </Text>
          </TouchableOpacity>



        )}

        
        {/* {props.close && (
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
            }}
            style={{
              height: '100%',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'flex-start',
              paddingLeft: 5,
            }}>
            <Icons.AntDesign name="close" size={24} color={'#000'} />
          </TouchableOpacity>
        )} */}
        {props.drawerIcon && (
          <TouchableOpacity
            onPress={props.navigationDrawer}
            style={{
              height: '100%',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'flex-start',
              paddingLeft: 5,
            }}>
            <Text style={{ color: '#fff' }}>Edit</Text>
          </TouchableOpacity>
        )}
      </Left>

      <Body
        style={{
          flex: 4,
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: 'green',
        }}>
        {props.logo && (
          <View
            style={{
              // backgroundColor: 'red',
              height: 50,
              width: 50,
              marginTop: 20,
            }}>
            <Image
              style={{ width: '100%', height: '100%' }}
              resizeMode="stretch"
              source={Pic.Logo}
            />
          </View>
        )}
        {props.customHead ? (
          props.customHead
        ) : (
          <View>
            <Text
              style={{
                textAlign: 'center',
                // fontFamily: Fonts.SemiBold,
                fontSize: 20,
                // fontSize: props.fontSize ? props.fontSize : 17,
                color: '#fff',
                // fontWeight: 'bold',
              }}>
              {props.headingText ? props.headingText : ''}
            </Text>
            {/* {props.item && (
              <Text
                style={{
                  color: 'gray',
                  textAlign: 'center',
                  fontSize: 12,
                  fontFamily: Fonts.Regular,
                }}>
                {props.iconNum == '' ||
                props.iconNum == undefined ||
                props.iconNum == null ||
                props.iconNum == NaN
                  ? 0
                  : props.iconNum}{' '}
                items
              </Text>
            )} */}
            {/* {props.itemWishList && (
              <Text
                style={{
                  color: 'gray',
                  textAlign: 'center',
                  fontSize: 12,
                  fontFamily: Fonts.Regular,
                }}>
                {user.length !== 0 ? `${items.length} items` : `0 items`}
              </Text>
            )} */}
          </View>
        )}
      </Body>

      <Right
        style={{
          flex: 1,
          height: '100%',
          // backgroundColor: 'blue',
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          // justifyContent: 'center',
        }}>
        {props.contacts && (
          <TouchableOpacity
            // onPress={() => props.navigation.navigate('Cart')}
            style={{
              height: '100%',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'flex-end',
              paddingRight: 5,
              // paddingRight: 5,
              // flexDirection: 'row',
            }}>
            <Icons.AntDesign name="contacts" size={19} color={'#fff'} />
          </TouchableOpacity>
        )}
      </Right>
    </Header>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     iconNum: state.tokenReducer.iconNum,
//   };
// };

export default GlobalHeader;
