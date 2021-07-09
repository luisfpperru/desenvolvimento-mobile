import React, {useState} from 'react';
import { Button, Text, TextInput, View, StyleSheet, TouchableOpacity, Modal,CheckBox } from 'react-native';
import Constants from 'expo-constants'


export default function Login() {
  const [cpf, setCpf] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
                <TextInput style={styles.modalText}
                  placeholder="CPF"
                  value={cpf}
                  onChangeText={setCpf}
                />
                <TextInput style={styles.modalText}
                placeholder="Senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
                />
                <View style={styles.checkboxContainer}>
                <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
                />
                <Text> Lembrar-se de mim </Text>
                </View>
                <TouchableOpacity title="Confirmar"
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
                > 
                <Text style={styles.textStyle}> Confirmar </Text>
              </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
            >
            <Text style={styles.textStyle}>Logar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#820ad1',
    padding: 8,
  },
   modalView: {
    flex:1,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
});