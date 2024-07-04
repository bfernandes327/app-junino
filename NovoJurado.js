import React, { useState } from 'react';
import { Text, View, Button, Image, TextInput } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import css from './estilo/estilo';

function NovoAluno({ navigation }) {
  const [nome, setNome] = useState('');
  const [curso, setCurso] = useState('');
  const [selectedId, setSelectedId] = useState(null);
  
  

  return (
    <View style={css.container}>
      <Text> </Text>
      <Image source={require('./assets/missmister.png')} style={css.logox} />
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <View style={css.principal}>
        <View style={css.formContainer}>
          <Text style={css.title}>Cadastro de Jurados</Text>
          <TextInput
            style={css.input}
            placeholder="Nome do(a) Jurado(a)"
            value={nome}
            onChangeText={setNome}
          />
          <TextInput
            style={css.input}
            placeholder="Curso"
            value={curso}
            onChangeText={setCurso}
          />
          
          <Button title="Cadastrar" color='#154360' onPress={() => { /* Função de cadastro */ }} />
        </View>
      </View>
    </View>
  );
}

export default NovoAluno;
