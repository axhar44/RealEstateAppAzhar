import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export const CartContext = createContext();
export const Cart = CartContext.Consumer;

const CartContextProvider = (props) => {
  const [tokID, setTokenID] = useState('');
  const [proID, setProductID] = useState('');
  const [ID, setID] = useState('');
  const [msg, setMsg] = useState('Cart is Empty');
  const [currency, setCurrency] = useState('USD');
  const [currencyFormat, setCurrencyFormat] = useState(1);

  const [apiLinkPrefix, setApiLinkPrefix] = useState(
    'http://vbswebs.com/tugs/',
  );

  // useEffect(() => {
  //   currencyFormatter();
  // }, [currency]);

  //   const currencyFormatter = async () => {
  //     try {
  //       fetch(`${apiLinkPrefix}API/getrate.php?cur=${currency}`)
  //         .then((response) => response.json())
  //         .then((data) => {
  //           console.log('GetCurrencyRate', data.data[0].Currency_Rate, currency);
  //           setCurrencyFormat(data.data[0].Currency_Rate);
  //         })
  //         .catch((err) => console.log(err));
  //       // .finally(() => this.setState({ isLoading: false }));
  //       const Data = JSON.stringify(data.data[0].Currency_Rate);

  //       await AsyncStorage.setItem('User_CurrencyFormat', Data);
  //     } catch (e) {
  //       console.log('Error', e);
  //     }
  //   };

  //   const zeroCart = (tokID, proID, ID) => {
  //     setTokenID(tokID);
  //     setProductID(proID);
  //     setID(ID);
  //     console.log('IN_CONTEXT', tokID, proID, ID);
  //   };

  //   const emptyCart = async (msg) => {
  //     try {
  //       await AsyncStorage.setItem('Empty_Cart', msg);
  //       console.log('ASYNC_DATA_MSG_CART', msg);
  //     } catch (e) {
  //       console.log('Error', e);
  //     }
  //     setMsg(msg);
  //     console.log('EmptyCart', msg);
  //   };

  //   const storeData = async (token_ID, icon_Num, cart_Item) => {
  //     console.log('RUNS', token_ID, icon_Num, cart_Item);
  //     try {
  //       const cartItem = JSON.stringify(cart_Item);
  //       const iconNum = JSON.stringify(icon_Num);
  //       await AsyncStorage.multiSet([
  //         ['Token_ID', token_ID],
  //         ['Icon_Num', iconNum],
  //         ['Cart_Item', cartItem],
  //       ]);
  //       console.log('ASYNC_DATA', token_ID, iconNum, cartItem);
  //     } catch (e) {
  //       console.log('Error', e);
  //     }
  //   };

  //   const changeCurrency = async (code) => {
  //     try {
  //       const Data = JSON.stringify(code);
  //       await AsyncStorage.setItem('User_Currency', Data);
  //       console.log('ASYNC_LANG', Data);
  //       currencyFormatter();
  //       setCurrency(code);
  //       await AsyncStorage.setItem('User_CurrencyFormat', currencyFormat);
  //     } catch (e) {
  //       console.log('Error', e);
  //     }
  //   };

  //   const getCurrency = (data, format) => {
  //     const Data = JSON.parse(data);
  //     const Data2 = JSON.parse(format);
  //     console.log('USER_CURRENCY', Data, Data2);
  //     setCurrency(Data);
  //     setCurrencyFormat(Data2);
  //   };

  return (
    <CartContext.Provider
      value={{
        apiLinkPrefix,
      }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
