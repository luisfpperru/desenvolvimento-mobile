import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight} from 'react-native';
import Constants from 'expo-constants'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {faCreditCard,faCog,faCoins,faEyeSlash,faBarcode,faUserPlus,faHandHoldingUsd,faExchangeAlt} from '@fortawesome/free-solid-svg-icons'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <Text style={styles.text}> Olá, Luís </Text>

            <TouchableHighlight>
            <View style={styles.smallbutton}>
              <FontAwesomeIcon icon={faEyeSlash} size={25} color="white" />
            </View>
          </TouchableHighlight>

          <TouchableHighlight>
              <View style={styles.smallbutton}>
                <FontAwesomeIcon icon={faCog} size={25} color="white" />
              </View>
          </TouchableHighlight>

      </View>
      <View style={styles.box}>
        <View style={styles.flex}>
          <FontAwesomeIcon icon={faCreditCard} size={32} /> <Text style={styles.textbox}> Cartão de Crédito </Text>
          </View>
          <Text style={styles.textbox}> Fatura fechada </Text>
          <Text style={{color:'#ff3961',fontSize:30,fontFamily: "Rotunda Bold"}}> R$ 43,63 </Text>
          <Text> Vence <b>12/07/2021</b> </Text>
          <View style={styles.flex}>
              <TouchableHighlight activeOpacity={0.6}>
                <View style={styles.redbutton}> 
                  <Text style={{color:"#ff3961"}}> PAGAR FATURA </Text> 
                </View>
              </TouchableHighlight>
              <TouchableHighlight activeOpacity={0.6} >
                <View style={styles.blackbutton}> 
                  <Text> PARCELAR </Text> 
                </View>
              </TouchableHighlight>
          </View>
      </View>

      <View style={styles.box}>
        <View style={styles.flex}>
        <FontAwesomeIcon icon={faCoins} color="#707070" size={32} /> <Text style={styles.textbox}> Conta </Text>
        </View>
        <Text style={styles.textbox}> Saldo disponivel</Text>
        <Text style={{color:"black",fontSize:30,fontFamily: "Rotunda Bold"}}> R$ 20,80 </Text>
      </View>

      <View style={styles.flexbutton}>
        <TouchableHighlight activeOpacity={0.6}>
        <View style={styles.mediumbutton}>
          <FontAwesomeIcon icon={faExchangeAlt} color="white" size={32} /> 
          <Text style={{color:"white"}}> Pix </Text>
        </View>
        </TouchableHighlight>

        <TouchableHighlight activeOpacity={0.6}>
        <View style={styles.mediumbutton}>
            <FontAwesomeIcon icon={faBarcode} color="white" size={32} /> 
            <Text style={{color:"white"}}> Pagar </Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight activeOpacity={0.6}>
        <View style={styles.mediumbutton}>
            <FontAwesomeIcon icon={faUserPlus} color="white" size={32} /> 
            <Text style={{color:"white"}}> Indicar <br/> amigos </Text>
          </View>
        </TouchableHighlight>

         <TouchableHighlight activeOpacity={0.6}>
        <View style={styles.mediumbutton}>
            <FontAwesomeIcon icon={faHandHoldingUsd} color="white" size={32} /> 
            <Text style={{color:"white"}}> Transferir </Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#820ad1',
    padding: 8,
  },
  flex:{
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 18,
  },
  flexbutton:{
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 18,
    justifyContent: "center"
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: "left",
    fontFamily: "Bellinzo Bold",
  },
  textbox:{
    color:"#707070",
    fontFamily: "Kometa Regular",
    fontSize: 18,
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
    backgroundColor:"#9128d7",
    borderRadius: 50,
    padding:8,
  },
  mediumbutton:{
    backgroundColor:"#9128d7",
    borderRadius: 10,
    padding:8,
    alignItems: "left"
  }
});
