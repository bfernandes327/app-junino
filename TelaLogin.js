import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Alert, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import css from './estilo/estilo';

function TelaInsert() {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // Limpar campos quando a tela é focada
      setNome('');
      setSenha('');
    });

    return unsubscribe;
  }, [navigation]);

  const cadastrar = () => {
    const correctEmail = 'admin@gmail.com';
    const correctPassword = '123';

    if (nome.trim() !== '' && senha.trim() !== '') {
      if (nome === correctEmail && senha === correctPassword) {
        navigation.navigate('TelaInicial'); // Navegar para TelaInicial
      } else {
        Alert.alert('Erro', 'Email ou senha incorretos!');
      }
    } else {
      Alert.alert('Erro', 'Preencher Campos!!!');
    }
  }

  const irParaTelaCadastro = () => {
    navigation.navigate('TelaCadastro');
  }

  const limpar = () => {
    setNome('');
    setSenha('');
  }

  return (
    <View style={css.container}>
      <Image source={require('./assets/missmister.png')} style={css.logox} />
      <Text style={css.title}>Login</Text>
      <View>
        <Text>Email</Text>
        <TextInput 
          placeholder="Digite seu email" 
          onChangeText={(text) => setNome(text)} 
          value={nome}
          style={css.input}
        />
        <Text>Senha</Text>
        <TextInput 
          placeholder="Digite sua senha" 
          secureTextEntry
          onChangeText={(text) => setSenha(text)} 
          value={senha}
          style={css.input}
        />
        <View style={css.buttonContainer}>
          <TouchableOpacity style={css.buttonStyle} onPress={limpar}>
            <Text style={css.buttonText}>Limpar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={css.buttonStyle} onPress={cadastrar}>
            <Text style={css.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('TelaCadastro')} style={css.buttonStyle} >
            <Text style={css.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default TelaInsert;
