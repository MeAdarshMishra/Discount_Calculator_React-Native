import * as React from 'react';
import { Text, View, StyleSheet,Image,TextInput,TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
export default class app extends React.Component
{state={amount:0,discount:0,result:0}; 
  render()
  {
    return(
      <View style={styles.container}>
      <Text style={{margin:30,fontSize:22,fontWeight:'bold',color:'gold',textAlign:'center'}}>
      Discount Calculator
      </Text>
      <View style={styles.inputbox}>
      <Text>Amount in Rs.</Text>
      <TextInput style={styles.inputText}
      onChangeText={(text)=>{this.setState({amount:text})}}
      />
      </View>
      <View style={styles.inputbox}>
      <Text>Discount in %</Text>
      <TextInput style={styles.inputText}
      onChangeText={(text)=>{this.setState({discount:text})}} 
      />
      </View>
      <View style={styles.bottom}>
      <TouchableOpacity style={styles.button}
      onPress={()=>{this.setState({result:this.state.amount *
      this.state.discount/100})}}
      >Calculate</TouchableOpacity>
      <Text style={styles.resultText}>Final Price after Discount</Text>
      <Text>{this.state.amount-this.state.result}</Text>
      </View>
      </View>
    );
  }
}
const styles =StyleSheet.create({
  container:{
    flex:1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor:'skyblue',
  },
  inputbox:{
    marginHorizontal:30,
  },
  inputText:{
    backgroundColor:'white',
    padding:10,
    marginTop:20,
    marginBottom:20,
    borderRadius:10,
    outline:'none',
    textAlign:'center',
    fontSize:20,
  },
  bottom:{
    justifyContent:'center',
    alignItems:'center',
    margin:20,

      },
  button:{
    backgroundColor:'blue',
    padding:15,
    borderRadius:20,
    color:'white',
  },
  resultText:{
    margin:10,
    color:'red'
  },
  
}) ;