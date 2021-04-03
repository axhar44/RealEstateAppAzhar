import { Form } from 'native-base';
import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import GlobalHeader from '../components/GlobalHeader';
import {Pic} from  '../components/theme';
import grocery from './RegisterScreen';

export default function Order_Post(props) {
  const [loaded] = "1234";

  const [isFavourite, setFavourite] = useState(false);
  

  const [selectedSize, setSelectedSize] = useState('M');

  const [productDescription] = useState(
    ` consectetur adipiscing elit.`
  );

  const [seeFullDescription, setSeeFullDescription] = useState(false);

  const [moreProducts] = useState([
   
    // {
    //   productName: 'Fruits & Vagetables',
     
    //   productImage:
    //     'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTeBcblKXv7HPjkxpo2-_NhG0LZShqbyy-rmw&usqp=CAU',

    //     //source={require('../../assets/preview-xl.jpg')}

    // },


    {
      productName: 'Fruits & Vagetables',
     
      productImage:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTeBcblKXv7HPjkxpo2-_NhG0LZShqbyy-rmw&usqp=CAU',

        //source={require('../../assets/preview-xl.jpg')}

    },
    
  ]);

  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
    StatusBar.setBackgroundColor('#fff');
  }, []);

  if (!loaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }



  function grosry(){
    alert("welcome to groscry");
  }

  function Vagetables(){
    alert("welcome to groscry");
  }



  function baby_care(){
    alert("welcome to groscry");
  }



  console.log("order props",props)

  return (

   
    <View style={{ flex: 1 ,backgroundColor:'white' }}>
      <GlobalHeader
        headingText="Select Category"
        drawerIcon
        contacts
        navigationDrawer={() => props.navigation.openDrawer()}
      />
      
          
     
 
     
      <ScrollView showsVerticalScrollIndicator={false}>
      
        <View style={{ marginTop: 10 }}>
          <Text
            style={{
              fontFamily: 'MontserratBold',
              fontSize: 20,
              marginHorizontal: 10,
            }}
          >
          
          </Text>
          <ScrollView vertical showsHorizontalScrollIndicator={true}>
            <View style={{ flex: 1 }}>
              {moreProducts.map((item) => (
                <View style={{ width: '100%', marginHorizontal: 100 , resizeMode: 'stretch'}}>
                  <View style={styles.moreProductImageView}>


                    <TouchableOpacity
                      onPress={() => props.navigation.navigate('grocery')}

                    >

{/* onPress={() =>
            (api(),numberWarns(), props.navigation.navigate('SignUp',{
              sentData: data,
              
             })) */}
                    <Image
                     style={{ flex: 1 }}
                     source={Pic.new}
                   />
                    </TouchableOpacity>
                  
                  </View>
                  <View style={{ marginTop: 5,marginLeft:50 }}>
                    <Text style={styles.moreProductName}>
                    Grocery
                    </Text>
                    <View style={styles.moreProductPriceView}>
                     
                      <View style={{ }}>
                        {}
                        
                      </View>
                      
                    </View>
                  </View>
                  
                  {/* <TouchableOpacity style={styles.moreProductBuyButton}>
                    <Text style={styles.moreProductBuyButtonText}>Buy</Text>
                   
                  </TouchableOpacity> */}
                
                  <Text>{"\n"}</Text>
                </View>
                
                
              ))}
              
            </View>
          </ScrollView>



          


          <ScrollView vertical showsHorizontalScrollIndicator={true}>
            <View style={{ flex: 1}}>
              {moreProducts.map((item) => (
                <View style={{ width: '100%', marginHorizontal: 100 , resizeMode: 'stretch'}}>
                  <View style={styles.moreProductImageView}>

                    <TouchableOpacity
                    onPress={()=>Vagetables()}
                    >

                   
                    <Image
                     
                      style={{ flex: 1 }}
                      source={Pic.new2}

                    />
                     </TouchableOpacity>
                  </View>
                  <View style={{ marginTop: 5,marginLeft:20 }}>
                    <Text style={styles.moreProductName}>
                      {item.productName}
                    </Text>
                    <View style={styles.moreProductPriceView}>
                     
                      <View style={{ }}>
                        {}
                        
                      </View>
                      
                    </View>
                  </View>
                  
                  {/* <TouchableOpacity style={styles.moreProductBuyButton}>
                    <Text style={styles.moreProductBuyButtonText}>Buy</Text>
                   
                  </TouchableOpacity> */}
                
                  <Text>{"\n"}</Text>
                </View>
                
                
              ))}
              
            </View>
          </ScrollView>

          <ScrollView vertical showsHorizontalScrollIndicator={true}>
            <View style={{ flex: 1}}>
              {moreProducts.map((item) => (
                <View style={{ width: '100%', marginHorizontal: 100 , resizeMode: 'stretch'}}>
                  <View style={styles.moreProductImageView}>
                    <TouchableOpacity
                    onPress={()=>baby_care()}
                    >

                      
                    </TouchableOpacity>
                    <Image
                     
                      style={{ flex: 1 }}
                      source={Pic.new1}

                    />
                  </View>
                  <View style={{ marginTop: 5,marginLeft:40 }}>
                    <Text style={styles.moreProductName}>
                     Baby Care
                    </Text>
                    <View style={styles.moreProductPriceView}>
                     
                      <View style={{ }}>
                        {}
                        
                      </View>
                      
                    </View>
                  </View>
                  
                  {/* <TouchableOpacity style={styles.moreProductBuyButton}>
                    <Text style={styles.moreProductBuyButtonText}>Buy</Text>
                   
                  </TouchableOpacity> */}
                
                  <Text>{"\n"}</Text>
                </View>
                
                
              ))}
              
            </View>
          </ScrollView>

          
        </View>
        <View style={{ height: 40 }}></View>
      </ScrollView>
    </View>




  );

  
};

const styles = StyleSheet.create({
  header: {
    height: -16,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderBottomColor: '#dfe4fe',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'MontserratBold',
  },
  detailsView: {
    paddingHorizontal: 10,
    paddingVertical: 14,
  },
  productTitleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productTitle: {
    fontSize: 24,
    fontFamily: 'MontserratExtraBold',
  },
  productPriceView: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  discountedPriceText: { fontFamily: 'MontserratBold', fontSize: 20 },
  actualPriceText: {
    color: '#222',
    marginLeft: 10,
    textDecorationLine: 'line-through',
    fontSize: 18,
    fontFamily: 'MontserratRegular',
  },
  buyNowButton: {
    flex: 1,
    backgroundColor: 'red',
    paddingVertical: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  addToCartButton: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 6,
    borderWidth: 1,
    borderColor: '#111',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'MontserratBold',
  },
  tag: {
    borderRadius: 4,
    backgroundColor: '#FFF',
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  tagLabel: {
    fontFamily: 'MontserratBold',
    color: '#333',
  },
  tagSelected: {
    backgroundColor: '#333',
    borderRadius: 4,
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  tagLabelSelected: {
    fontFamily: 'MontserratBold',
    color: '#FFF',
  },
  productDescriptionHeader: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#dfe4fe',
  },
  moreProductImageView: {
    flex: 1,
    height: '100%',
  
    borderRadius:100,
    overflow: 'hidden',
    justifyContent:'center',
    //marginLeft:85
  },
  moreProductName: {
    fontFamily: 'MontserratBold',
    fontSize: 16,
  },
  moreProductPriceView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  moreProductPrice: {
    fontSize: 16,
    fontFamily: 'MontserratRegular',
  },
  moreProductIcon: {
    marginLeft: 10,
  },
  moreProductBuyButton: {
    backgroundColor: 'red',
    marginTop: 10,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  moreProductBuyButtonText: {
    color: '#fff',
    fontFamily: 'MontserratBold',
    fontSize: 18,
  },
});
