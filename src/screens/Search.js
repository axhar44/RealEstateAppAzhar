import React, { Component } from 'react';
import { View, Text,TouchableOpacity,StyleSheet } from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';
import Icons from '../components/icons';

var localData = [
  { id: 1, name: 'For Sale' },
  { id: 2, name: 'For Rend' },
  { id: 3, name: 'Residensial' },
  { id: 4, name: 'Commersial' },
];


export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      serverData: [],
      counter: 1
    };
  }

  componentDidMount() {
    //fetch('https://restcountries.eu/rest/v2/all')
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(responseJson => {
        console.log("response json " + JSON.stringify(responseJson))
        this.setState({
          serverData: [...this.state.serverData, ...responseJson.serverData],
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <View style={{ flex: 1, marginTop: -10 }}>
       

       
             
        <SearchableDropdown
          //onTextChange listener for searchable input
          onTextChange={text => console.log(text)}
          //onItemSelect called after selection from dropdown
          onItemSelect={item => alert(JSON.stringify(item))}
          //suggestion container style
          containerStyle={{ padding: 5 }}
          textInputStyle={{
            padding: 12,
            paddingVertical:2,
            borderWidth: 2,
            borderColor: 'rgb(45, 110, 229)',
            backgroundColor: '#FAF7F6',
            borderRadius: 100,
            
            
          }}
          //single dropdown item style
          itemStyle={{
            padding: 10,
            marginTop: 2,
            backgroundColor: '#FAF9F8',
            borderColor: 'rgb(45, 110, 229)',
            borderWidth: 1,
            borderRadius:20,
            
          }}
          //single dropdown item text style
          itemTextStyle={{
            color: '#222',
          }}
          //maxHeight to restrict height of items dropdown
          itemsContainerStyle={{
            maxHeight: '60%',
          }}
          //mapping of item array
          items={localData}
          //default selected item index
          defaultIndex={2}
          //placeholder text for search input
          placeholder="placeholder"
          //to remove underline from android input
          underlineColorAndroid="transparent"
          
        />

       
        <SearchableDropdown
          onTextChange={text => console.log(text)}
          onItemSelect={item => alert(JSON.stringify(item))}
          containerStyle={{ padding: 5 }}
          textInputStyle={{
            padding: 12,
            borderWidth: 2,
            borderColor: 'rgb(45, 110, 229)',
            backgroundColor: '#FAF7F6',
            borderRadius:100,
            paddingVertical:2,

          }}
          itemStyle={{
            padding: 10,
            marginTop: 2,
            backgroundColor: '#FAF9F8',
            borderColor: '#bbb',
            borderWidth: 1,
          }}
          itemTextStyle={{
            color: '#222',
          }}
          itemsContainerStyle={{
            maxHeight: '50%',
          }}
          items={this.state.serverData}
          defaultIndex={2}
          placeholder="placeholder"
          underlineColorAndroid="transparent"
          
        />

<TouchableOpacity 
                  onPress={() => props.navigation.navigate('Contacts')}
                  style={styles.SearchButton}>
                   <Text 
                    style={styles.SearchButtonText}>Advance Search</Text>
                   </TouchableOpacity>
                   
      </View>
    );
  }
} 


const styles = StyleSheet.create({
    SearchButton: {
        backgroundColor: 'rgb(45, 110, 229)',
        marginTop: 5,
        paddingVertical: 5,
        borderRadius: 4,
        borderRadius:20,
        
      },
      SearchButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
      },


});
