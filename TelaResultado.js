import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import css from './estilo/estilo';

function TelaResultado({ navigation }) {
  // Dados de exemplo para Miss e Mister
  const missResults = {
    name: 'Maria Silva',
    score: 9.5,
  };

  const misterResults = {
    name: 'João Souza',
    score: 9.2,
  };

  return (
    <View style={css.container}>
     
      <View style={styles.resultContainer}>
        <Text style={styles.title}>Resultado Miss</Text>
        <Text style={styles.name}>{missResults.name}</Text>
        <Text style={styles.score}>Nota: {missResults.score}</Text>
      </View>

 
      <View style={styles.resultContainer}>
        <Text style={styles.title}>Resultado Mister</Text>
        <Text style={styles.name}>{misterResults.name}</Text>
        <Text style={styles.score}>Nota: {misterResults.score}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  resultContainer: {
    margin: 10,
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  score: {
    fontSize: 16,
  },
});

export default TelaResultado;
