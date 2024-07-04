import React, { useState } from 'react';
import { Text, View, Button, Image, TextInput} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import css from './estilo/estilo';

function Votacao({ navigation }) {
  const [nome, setNome] = useState('');
  const [curso, setCurso] = useState('');
  const [jurado, setJurado] = useState('');
  const [aluno, setAluno] = useState('');
  const [elegancia, setElegancia] = useState('');
  const [desenvoltura, setDesenvoltura] = useState('');
  const [simpatia, setSimpatia] = useState('');
  const [reciclavel, setReciclavel] = useState('');

  // Lista de jurados e alunos para o Picker
  const jurados = ['Jurado 1', 'Jurado 2', 'Jurado 3'];
  const alunos = ['Aluno 1', 'Aluno 2', 'Aluno 3'];

  return (
    <View style={css.container}>
      <Text> </Text>
      <Image source={require('./assets/missmister.png')} style={css.logox} />
      

      <View style={css.votacaoContainer}>
        <Text style={css.subtitle}>Votação</Text>
        <Picker
          selectedValue={jurado}
          style={css.picker}
          onValueChange={(itemValue) => setJurado(itemValue)}
        >
          {jurados.map((jurado, index) => (
            <Picker.Item key={index} label={jurado} value={jurado} />
          ))}
        </Picker>
        <Picker
          selectedValue={aluno}
          style={css.picker}
          onValueChange={(itemValue) => setAluno(itemValue)}
        >
          {alunos.map((aluno, index) => (
            <Picker.Item key={index} label={aluno} value={aluno} />
          ))}
        </Picker>
        <TextInput
          style={css.input}
          placeholder="Elegância (0-10)"
          keyboardType="numeric"
          value={elegancia}
          onChangeText={setElegancia}
        />
        <TextInput
          style={css.input}
          placeholder="Desenvoltura (0-10)"
          keyboardType="numeric"
          value={desenvoltura}
          onChangeText={setDesenvoltura}
        />
        <TextInput
          style={css.input}
          placeholder="Simpatia (0-10)"
          keyboardType="numeric"
          value={simpatia}
          onChangeText={setSimpatia}
        />
        <TextInput
          style={css.input}
          placeholder="Reciclável (0-10)"
          keyboardType="numeric"
          value={reciclavel}
          onChangeText={setReciclavel}
        />
        <Button title="Votar" color='#154360' onPress={() => { /* Função de votação */ }} />
      </View>
    </View>
  );
}

export default Votacao;
