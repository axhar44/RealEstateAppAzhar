import React, {useState,useEffect} from 'react';

import RegisterContextProvider from './src/Context/RegisterContexts';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/stackNavigator';
import Splash from './src/screens/Splash';
import LangContextProvider from './src/Context/LangContext';



//const Separator = () => <View style={styles.separator} />;

function App(props) {


const [isLoading, loading] = useState(true);



  useEffect(() => {
    setTimeout(() => {
      loading(false);
    }, 2500);
     //setCustomText(customTextProps);
  }, []);

 



  return isLoading ? (
    <Splash />
  ) : (
 
    //<Splash />
    <NavigationContainer>
        <LangContextProvider>
       <RegisterContextProvider>
         
         <StackNavigator />
          </RegisterContextProvider>
          </LangContextProvider>
             </NavigationContainer>
  );
};



export default App;
