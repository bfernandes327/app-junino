import React, { useState } from 'react';
import { Text, View, Button, TextInput, Alert, TouchableOpacity, Image } from 'react-native';
import css from './estilo/estilo';
import axios from 'axios';

function TelaInsert({ navigation }) {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [senha2, setSenha2] = useState('');

  const cadastrar = () => {
    let token = 'Q!W@ee344%%R';
    if (senha2.trim() === senha.trim()) {
      if (nome.trim() !== '' && senha.trim() !== '') {
        alert(nome + '\n cadastrado com sucesso!');
        axios.post('http://172.16.42.58/api/cadastro/', { token, nome, senha })
          .then(response => {
            const data = response.data;
            console.log(data);
          })
          .catch(error => {
            console.log('Erro ao enviar dados:', error);
          });
        navigation.navigate('TelaRetorno');
      } else {
        alert('Preencher Campos!!!');
      }
    } else {
      alert('Senhas diferentes');
    }
  };

  const limpar = () => {
    setNome('');
    setSenha('');
    setSenha2('');
  };

  return (
    <View style={css.container}>
      <TouchableOpacity onPress={() => navigation.navigate('TelaLogin')}>
        <Image source={require('./assets/missmister.png')} style={css.logox} />
      </TouchableOpacity>

      <Text style={css.title}>Novo Cadastro</Text>
      <View>
        <Text style={css.label}>Login</Text>
        <TextInput 
          style={css.input} 
          placeholder="Digite seu login"  
          onChangeText={(text) => setNome(text)} 
          value={nome} 
        />
        <Text style={css.label}>Senha</Text>
        <TextInput 
          style={css.input} 
          placeholder="Digite sua senha" 
          secureTextEntry={true} 
          onChangeText={(text) => setSenha(text)} 
          value={senha} 
        />
        <Text style={css.label}>Confirmar Senha</Text>
        <TextInput 
          style={css.input} 
          placeholder="Confirme sua senha" 
          secureTextEntry={true} 
          onChangeText={(text) => setSenha2(text)} 
          value={senha2} 
        />
        <View style={css.viewbotoes}>
          <View style={css.button}>
            <Button onPress={() => navigation.navigate('TelaLogin')} title="Cadastrar" color='#4682B4' />
          </View>
        
        </View>
      </View>
    </View>
  );
}

export default TelaInsert;
