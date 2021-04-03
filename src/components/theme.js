import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const FontColor = {
  // red: '#008ecc',
  purple: '#e119da',
  background: 'rgba(83,0,38,0.6)',
  blue: '#28a8e9',
};
export const Pic = {
  User: require('../../assets/user.png'),
  user: require('../../assets/food1.jpg'),
  SplashIcon : require('../../assets/preview-xl.jpg'),
  united_logo : require('../../assets/store.jpg'),
  grosri : require('../../assets/grosri.jpg'),
  new : require('../../assets/zaheer.jpg'),
  new1 : require('../../assets/care_baby.jpg'),
  new2 : require('../../assets/fruite.jpg')
  // Logo: require('../../assets/logo.png'),
  // Default: require('../../assets/placeholder.png'),
  // Banner: require('../../assets/bg_banner.png'),
  // Get1: require('../../assets/get-start-1.png'),
  // Get2: require('../../assets/get-start-2.png'),
  // Get3: require('../../assets/get-start-3.png'),
  // Bank: require('../../assets/bacs.png'),
  // Wave: require('../../assets/wave.png'),
  // Paypal: require('../../assets/paypal.png'),
  // Stripe: require('../../assets/stripe.png'),
  // StripeSuport: require('../../assets/stripesuport.png'),
  // Pesapal: require('../../assets/pesapal.png'),
};
// export const Fonts = {
//   Medium: 'Poppins-Medium',
//   Light: 'Poppins-Light',
//   Regular: 'Poppins-Regular',
//   SemiBold: 'Poppins-SemiBold',
// };

export const FontSize = {
  font1: RFPercentage(1),
  font2: RFPercentage(2),
  font3: RFPercentage(3),
  font4: RFPercentage(4),
  font5: RFPercentage(5),
  font6: RFPercentage(6),
  font7: RFPercentage(7),
  font8: RFPercentage(8),
  font9: RFPercentage(9),
  font10: RFPercentage(10),
};
export const ScreenSize = {
  hp1: hp('10%'),
  hp12: hp('12%'),
  hp2: hp('20%'),
  hp22: hp('22%'),
  hp3: hp('30%'),
  hp35: hp('35%'),
  hp4: hp('40%'),
  hp45: hp('45%'),
  hp5: hp('50%'),
  hp6: hp('60%'),
  hp7: hp('70%'),
  hp8: hp('80%'),
  hp9: hp('90%'),
  hp10: hp('100%'),
};
