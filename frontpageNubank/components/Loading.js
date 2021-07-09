import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function Loading(){
  return(
  <View style={styles.container}>
    <Image style={styles.logo} source={require('../assets/nubank-logo-4-1.png')}/>
  </View>
  )
  
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#820ad1',
    padding: 8,
    justifyContent: "center"
  },
  logo:{
    width: 150,
    height: 150,
    alignSelf:"center",
  }
})