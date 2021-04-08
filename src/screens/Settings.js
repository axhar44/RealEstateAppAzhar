import React, {useContext, useEffect, useState, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import GlobalHeader from '../components/GlobalHeader';

import {LangContext} from '../Context/LangContext';
 import {useIsFocused} from '@react-navigation/native';
// import ToggleSwitch from 'toggle-switch-react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import i18n from '../utils/language';
import Ripple from 'react-native-material-ripple';

const Settings = (props) => {
  const isFocused = useIsFocused();
  const refRBSheet = useRef();
  const refRBSheetB = useRef();

  
  let Fonts= '';
  let ScreenSize= '';
  let Icons= '';
//   let useIsFocused= '';
  let ToggleSwitch = '';

  const {changeLang, language, changePush, pushStatus} = useContext(
    LangContext,
  );

  const [actLanguage, setActLanguage] = useState(language);
  // const [actCurrency, setActiveCurrency] = useState(currency);

  useEffect(() => {
    // console.log('ME', isFocused)
  }, [isFocused]);
  var menu = ['My Profile'];
  const sheet = [
    {title: i18n.t('setting.text_language'), value: language.toUpperCase()},
    // {title: i18n.t('profile.text_currency'), value: currency},
  ];
  const languages = [
    {title: 'English', code: 'en'},
    {title: 'Spanish', code: 'sp'},
    // {title: 'France', code: 'fr'},
    // {title: 'China', code: 'ch'},
    // {title: 'Arabic', code: 'ar'},
  ];
  //   const curr = [
  //     {title: 'United States - USD / ', icon: 'dollar', code: 'USD'},
  //     {title: 'Unted Kingdom - GDP / ', icon: 'euro', code: 'EUR'},
  //     {title: 'Canada - CAD / ', icon: 'dollar', code: 'CAD'},
  //     {title: 'Germany - EUR / ', icon: 'euro', code: 'EUR'},
  //   ];

  return (
    <View style={styles.container}>
      <GlobalHeader
        headingText={i18n.t('setting.text_setting_haider')}
        // headingText="Settings"
        drawerIcon
        navigation={props.navigation}
        navigationDrawer={() => props.navigation.openDrawer()}
      />

      <ScrollView>
        <View style={{marginTop: 20, justifyContent: 'center'}}>
          <View style={styles.menuView}>
            {menu.map((v, i) => {
              return (
                <Ripple
                  onPress={() =>
                    i == 0 ? props.navigation.navigate('Profile') : null
                  }
                  rippleColor="#28a8e9"
                  style={styles.view1}
                  // onPress={() =>
                  //   i == 0
                  //     ? props.navigation.navigate('Sales')
                  //     : i == 1
                  //     ? props.navigation.navigate('Agenda')
                  //     : i == 2
                  //     ? props.navigation.navigate('Indicators')
                  //     : i == 3 && props.navigation.navigate('Inventory')
                  // }
                >
                  <Text style={styles.txt2a}>
                    {i18n.t('setting.text_title_button_myprofile')}
                  </Text>
                </Ripple>
              );
            })}
          </View>
        </View>

        {sheet.map((v, i) => {
          return (
            <View>
              <TouchableOpacity
                onPress={() =>
                  i == 0
                    ? refRBSheet.current.open()
                    : refRBSheetB.current.open()
                }
                //   activeOpacity={0.8}
                style={styles.touch2}>
                <View style={styles.heading}>
                  <Text
                    style={{
                      marginLeft: 10,
                      fontSize: 15,
                      fontFamily: Fonts.Regular,
                      color: '#28a8e9',
                    }}>
                    {v.title}
                  </Text>
                </View>
                <View style={styles.rowRight}>
                  <View style={styles.badge}>
                    <Text
                      style={{
                        fontSize: 15,
                        color: '#28a8e9',
                        fontFamily: Fonts.Regular,
                      }}>
                      {v.value}
                    </Text>
                  </View>
                  <Icons.AntDesign name="right" color="#28a8e9" size={15} />
                </View>
              </TouchableOpacity>
              {i == 0 ? (
                <RBSheet
                  ref={refRBSheet}
                  closeOnDragDown={true}
                  height={ScreenSize.hp3}
                  //   openDuration={250}
                  closeOnPressMask={false}
                  customStyles={{
                    wrapper: {
                      backgroundColor: 'rgba(0,0,0, 0.2)',
                    },
                    draggableIcon: {
                      backgroundColor: '#28a8e9',
                    },
                    container: {
                      borderTopLeftRadius: 30,
                      borderTopRightRadius: 30,
                      // backgroundColor: '#28a8e9',
                    },
                  }}>
                  <View>
                    <View style={styles.touch3}>
                      <TouchableOpacity
                        onPress={() => refRBSheet.current.close()}
                        style={styles.heading}>
                        <Icons.EvilIcons
                          name="close"
                          color="#28a8e9"
                          size={30}
                        />
                      </TouchableOpacity>
                      <View style={styles.rowRight}>
                        <TouchableOpacity
                          onPress={() => (
                            changeLang(actLanguage),
                            props.navigation.navigate('Settings'),
                            refRBSheet.current.close()
                          )}
                          style={{
                            backgroundColor: '#28a8e9',
                            height: 35,
                            width: '90%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 4,
                          }}>
                          <Text
                            style={{
                              fontSize: 14,
                              color: '#fff',
                              fontFamily: Fonts.Regular,
                            }}>
                            {i18n.t('setting.text_language_select')}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>

                    {languages.map((v, i) => {
                      return (
                        <TouchableOpacity
                          onPress={() => setActLanguage(v.code)}
                          style={[
                            styles.touchRBsheet,
                            {
                              borderBottomWidth:
                                i == languages.length - 1 ? 0 : 0.5,
                            },
                          ]}>
                          <View style={styles.heading}>
                            <Text
                              style={{
                                color:
                                  actLanguage == v.code ? '#28a8e9' : 'gray',
                                fontFamily: Fonts.Regular,
                              }}>
                              {v.title}
                            </Text>
                          </View>
                          <View style={styles.rowRight}>
                            {actLanguage == v.code && (
                              <Icons.AntDesign
                                name="check"
                                color="#28a8e9"
                                size={25}
                              />
                            )}
                          </View>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </RBSheet>
              ) : null}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}


export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  menuView: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: 12,
  },
  view1: {
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
    backgroundColor: '#fff',
    height: 40,
    borderRadius: 6,
    marginBottom: 15,
  },
  txt2a: {
    color: '#28a8e9',
    fontSize: 20,
    marginLeft: 20,

    // marginTop: 16,
    // marginBottom: 8,
  },
  touch2: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    borderBottomColor: 'rgba(128,128,128,0.2)',
    borderBottomWidth: 0.5,
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    letterSpacing: 1.84,
  },
  touchRBsheet: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    borderBottomColor: 'rgba(128,128,128,0.2)',
    borderBottomWidth: 0.5,
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    letterSpacing: 1.84,
  },
  touch3: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    letterSpacing: 1.84,
  },
  badge: {
    // backgroundColor: '#e60023',
    // height: 20,
    // width: 20,
    alignItems: 'center',
    justifyContent: 'center',
    // borderRadius: 360,
    marginRight: 5,
  },
  heading: {
    flexDirection: 'row',
    flex: 3,
    alignItems: 'center',
  },
  rowRight: {
    flex: 1.5,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
