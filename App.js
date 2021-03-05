import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default function App() {
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");
  const capturarNome = (nome) => {
    setNome(nome);
  };
  const capturarNumero = (numero) => {
    setNumero(numero);
  };

  const adcionarContato = () => {
    console.log(nome, numero);
  };
  return (
    <View style={styles.container}>
      <View style={styles.contatoInputView}>
        <TextInput
          placeholder="Digite o nome do contato"
          style={styles.contatoTextInput}
          onChangeText={capturarNome}
        />
        <TextInput
          placeholder="Digite o numero do contato"
          style={styles.contatoTextInput}
          onChangeText={capturarNumero}
        />
        <View style={styles.contatoInputButton}>
          <Button title="Adcionar contato" onPress={adcionarContato} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 40 },
  contatoInputView: { alignItems: "center" },
  contatoTextInput: {
    width: "80%",
    borderBottomColor: "#CCC",
    borderBottomWidth: 1,
    marginBottom: 4,
    padding: 4,
    textAlign: "center",
  },
  contatoInputButton: { width: "80%" },
});
