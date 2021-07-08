import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight} from 'react-native';
import { EvilIcons, Entypo,FontAwesome5,AntDesign,FontAwesome,Feather,MaterialIcons,MaterialCommunityIcons} from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.flexright}>

            <TouchableHighlight>
            <View style={styles.smallbutton}>
                <Entypo name="eye-with-line" size={24} color="white" />            
            </View>
          </TouchableHighlight>

          <TouchableHighlight>
              <View style={styles.smallbutton}>
                <EvilIcons name="gear" size={24} color="white" />
              </View>
          </TouchableHighlight>
      </View>
        <Text style={styles.text}> Olá, Luís </Text>
      <View style={styles.box}>
        <View style={styles.flex}>
         <Entypo name="credit-card" size={30} color="#707070" /> <Text style={styles.textbox}> Cartão de Crédito </Text>
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
        <FontAwesome5 name="coins" size={22} color="#707070" /> <Text style={styles.textbox}> Conta </Text>
        </View>
        <Text style={styles.textbox}> Saldo disponivel</Text>
        <Text style={{color:"black",fontSize:30,fontFamily: "Rotunda Bold"}}> R$ 20,80 </Text>
      </View>

      <View style={styles.flexbutton}>
        <TouchableHighlight activeOpacity={0.6}>
        <View style={styles.mediumbutton}>
          <MaterialCommunityIcons name="transfer" size={35} color="white" />
          <Text style={{color:"white"}}> Pix </Text>
        </View>
        </TouchableHighlight>

        <TouchableHighlight activeOpacity={0.6} >
        <View style={styles.mediumbutton}>
            <FontAwesome name="barcode" size={32} color="white" />            
            <Text style={{color:"white"}}> Pagar </Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight activeOpacity={0.6}>
        <View style={styles.mediumbutton}>
            <Feather name="user-plus" size={32} color="white" /> 
            <Text style={{color:"white"}}> Indicar <br/> amigos </Text>
          </View>
        </TouchableHighlight>

         <TouchableHighlight activeOpacity={0.6} >
        <View style={styles.mediumbutton}>
            <MaterialIcons name="monetization-on" size={30} color="white" /> 
            <Text style={{color:"white"}}> Transferir </Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#820ad1',
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
    height:82,
    width:62,
    backgroundColor:"#9128d7",
    borderRadius: 10,
    padding:8,
    alignItems: "center",
    margin:1,
  }
});
