import React,{Component} from 'react';
import {Text,View,TouchableHighlight,StyleSheet} from 'react-native';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      numero: 0
    }

    this.incrementaNumero = this.incrementaNumero.bind(this)
  }

  incrementaNumero(){
    this.setState({numero: this.state.numero+1});
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Contador: {this.state.numero} </Text>
        <TouchableHighlight style={styles.button} onPress={this.incrementaNumero}> 
        <View>
            <Text> Pressione aqui </Text>
        </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
  },
  text:{
    padding:20,
    },
  button:{
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    margin:100,
    height:40,
    width:120,
    }
})

export default App;