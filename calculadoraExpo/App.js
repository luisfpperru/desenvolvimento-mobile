import React, { useState } from "react";
import {View,Text,TextInput,TouchableHighlight,StyleSheet} from 'react-native';

export default function App() {    
      
    const [numero, setNumero] = useState('');
    const [resultado, setResultado] = useState('');

    function runCalc(){
        const resposta = eval(numero);
        setResultado(resposta);
      }
    
      function runDelete() {
        setNumero(numero.substring(0, numero.length - 1));
      }
    
      function runClear() {
        setNumero('');
        setResultado('');
      }
    

        return (

        <View style={styles.container}>
            <TextInput
                placeholder="Digite um numero aqui!"
                onChangeText={texto => setNumero(texto)}
                defaultValue={numero}
                keyboardType='numeric'
            />

            <Text> Resultado: {resultado} </Text>

            <View style={styles.flex}>
                <TouchableHighlight onPress={() => setNumero(numero + '1')}>
                    <View style={styles.button}>
                        <Text> 1 </Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => setNumero(numero + '2')}>
                    <View style={styles.button}>
                        <Text> 2 </Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => setNumero(numero + '3')}>
                    <View style={styles.button}>
                        <Text> 3 </Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => setNumero(numero + '+')}>
                    <View style={styles.button}>
                        <Text> + </Text>
                    </View>
                </TouchableHighlight>

            </View>

            <View style={styles.flex}>
                <TouchableHighlight onPress={() => setNumero(numero + '4')}>
                    <View style={styles.button}>
                        <Text> 4 </Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => setNumero(numero + '5')}>
                    <View style={styles.button}>
                        <Text> 5 </Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => setNumero(numero + '6')}>
                    <View style={styles.button}>
                        <Text> 6 </Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => setNumero(numero + '-')}>
                    <View style={styles.button}>
                        <Text> - </Text>
                    </View>
                </TouchableHighlight>

            </View>

            <View style={styles.flex}>
                <TouchableHighlight onPress={() => setNumero(numero + '7')}>
                    <View style={styles.button}>
                        <Text> 7 </Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => setNumero(numero + '8')}>
                    <View style={styles.button}>
                        <Text> 8 </Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => setNumero(numero + '9')}>
                    <View style={styles.button}>
                        <Text> 9 </Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => setNumero(numero + '*')}>
                    <View style={styles.button}>
                        <Text> * </Text>
                    </View>
                </TouchableHighlight>

            </View>

            <View style={styles.flex}>
                <TouchableHighlight onPress={runClear}>
                    <View style={styles.button}>
                        <Text> C </Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => setNumero(numero + '0')}>
                    <View style={styles.button}>
                        <Text> 0 </Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => setNumero(numero + '.')}>
                    <View style={styles.button}>
                        <Text> . </Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => setNumero(numero + '/')}>
                    <View style={styles.button}>
                        <Text> / </Text>
                    </View>
                </TouchableHighlight>

            </View>

            <View style={styles.flex}>
                <TouchableHighlight onPress={runDelete}>
                    <View style={styles.button}>
                        <Text> DEL </Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={runCalc}>
                    <View style={styles.button}>
                        <Text> = </Text>
                    </View>
                </TouchableHighlight>
            </View>
            
        </View>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        alignItems: "center",
        justifyContent: 'center'
    },
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 20,
    },
    flex: {
        flexDirection: "row",
        flexWrap: "wrap",
    }
  });
  