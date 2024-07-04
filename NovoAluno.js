import React, { useState } from 'react';
import { Text, View, Button, Image, TextInput } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import css from './estilo/estilo';

function NovoAluno({ navigation }) {
  const [nome, setNome] = useState('');
  const [curso, setCurso] = useState('');
  const [selectedId, setSelectedId] = useState(null);
  
  const radioButtonsData = [
    { id: '1', label: 'Miss', value: 'miss' },
    { id: '2', label: 'Mister', value: 'mister' }
  ];

  return (
    <View style={css.container}>
      <Text> </Text>
      <Image source={require('./assets/missmister.png')} style={css.logox} />
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <View style={css.principal}>
        <View style={css.formContainer}>
          <Text style={css.title}>Cadastro de Aluno</Text>
          <TextInput
            style={css.input}
            placeholder="Nome do(a) Aluno(a)"
            value={nome}
            onChangeText={setNome}
          />
          <TextInput
            style={css.input}
            placeholder="Curso"
            value={curso}
            onChangeText={setCurso}
          />
          <View style={css.radioContainer}>
            <RadioGroup 
              radioButtons={radioButtonsData}
              onPress={setSelectedId}
              selectedId={selectedId}
            />
          </View>
          <Button title="Cadastrar" color='#154360' onPress={() => { /* Função de cadastro */ }} />
        </View>
      </View>
    </View>
  );
}

export default NovoAluno;
