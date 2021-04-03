import React, {Component, useState} from 'react';
import {Text, View, Image, Button, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class Header extends Component {
  render() {
    function call() {
      alert('aaa');
    }
    return (
      <View style={{height: 50, width: '100%'}}>
        <View
          style={{
            flexDirection: 'row',
            height: '100%',
            paddingTop: 13,
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            paddingLeft: 10,
            //marginLeft: 10,
            backgroundColor: '#F33A13',

            //alignContent: 'right',
          }}>
          <TouchableOpacity onPress={this.props.openDrawer}>
            <AntDesign name="menufold" size={20} color="white" />
          </TouchableOpacity>

          <View style={{paddingRight: 10}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Home')}>
              <AntDesign name="home" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Image
            source={require('../../assets/logo.png')}
            style={{width: '100%', height: '200%'}}
          />
        </View>
        <View
          style={{
            flexGrow: 1,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}></View>

        <View
          style={{
            height: 50,
            flexGrow: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginRight: 10,
          }}></View>
      </View>
    );
  }
}
