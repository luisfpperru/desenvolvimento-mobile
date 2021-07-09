import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight,Button,TouchableOpacity} from 'react-native';
import Constants from 'expo-constants'
import { EvilIcons, Entypo,FontAwesome5,AntDesign,FontAwesome,Feather,MaterialIcons,MaterialCommunityIcons} from '@expo/vector-icons';


export default function Detalhes({navigation}){
  return(
        <View style={styles.container}>
         <View style={styles.flexright}>
            <TouchableHighlight>
            <View style={styles.smallbutton}>
                <Entypo name="magnifying-glass" size={20} color="black" />           
            </View>
          </TouchableHighlight>

          <TouchableHighlight>
              <View style={styles.smallbutton}>
                  <EvilIcons name="question" size={24} color="black" />
              </View>
          </TouchableHighlight>
      </View>
      <View style={styles.box}>
          <Text style={styles.textbox}> Fatura fechada </Text>
          <Text style={{color:'#ff3961',fontSize:30,fontFamily: "Rotunda Bold"}}> R$ 43.63 </Text>
          <Text> Vence em 12 JUL </Text>
          <View style={styles.flex}>
              <TouchableHighlight>
                <View style={styles.redbutton}> 
                  <Text style={{color:"#ff3961",fontSize:10}}> <b> PAGAR </b> </Text> 
                </View>
              </TouchableHighlight>
              <TouchableHighlight>
                <View style={styles.blackbutton}> 
                  <Text style={{fontSize:10}}> <b> PARCELAR </b> </Text> 
                </View>
              </TouchableHighlight>
            </View>
      </View>
      <View style={styles.flexbutton}>
        <TouchableHighlight activeOpacity={0.6}>
        <View style={styles.mediumbutton}>
            <FontAwesome name="barcode" size={32} color="#9128d7" />            
          <Text style={{color:"black",fontSize:11,textAlign:"center"}}> Pagar fatura </Text>
        </View>
        </TouchableHighlight>

        <TouchableHighlight activeOpacity={0.6} >
        <View style={styles.mediumbutton}>
            <Feather name="list" size={32} color="#9128d7" />
            <Text style={{color:"black",fontSize:11,textAlign:"center"}}> Resumo de faturas </Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight activeOpacity={0.6}>
        <View style={styles.mediumbutton}>
            <Feather name="user-plus" size={32} color="#9128d7" /> 
            <Text style={{color:"black",fontSize:11,textAlign:"center"}}> Indicar <br/> amigos </Text>
          </View>
        </TouchableHighlight>

         <TouchableHighlight activeOpacity={0.6} >
        <View style={styles.mediumbutton}>
            <Feather name="lock" size={32} color="#9128d7" />
            <Text style={{color:"black",fontSize:11,textAlign:"center"}}> Bloquear cartão </Text>
          </View>
        </TouchableHighlight>
      </View>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    padding: 8,
  },
  flex:{
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 18,
  },
  flexright:{
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 18,
    justifyContent: "flex-end"
  },
  flexbutton:{
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 18,
    justifyContent: "center"
  },
  textbox:{
    color:"#ff3961",
    fontFamily: "Kometa Regular",
    fontSize: 12,
    margin:5,
  },
  box:{
    backgroundColor: 'white',
    padding: 10,
    margin: 15,
  },
  blackbutton:{
    padding: 8,
    borderColor:"black",
    borderWidth: 1,
    borderRadius: 10,
    margin:5
  },
  redbutton:{
    padding: 8,
    borderColor:"#ff3961",
    borderWidth: 1,
    borderRadius: 10,
    margin:5
  },
  smallbutton:{
    borderRadius: 50,
    padding:8,
  },
  mediumbutton:{
    height:82,
    width:62,
    borderRadius: 10,
    padding:8,
    alignItems: "center",
    margin:1,
  }
});