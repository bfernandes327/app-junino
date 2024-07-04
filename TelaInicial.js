import React from 'react';
import { Text, View, Button, Image } from 'react-native';
import css from './estilo/estilo';


function TelaInicial({ navigation }) {
  return (
    <View style={css.container}>
      <Text> </Text>
      <Image source={require('./assets/missmister.png')} style={css.logox} />
      <Text> </Text>
     
      <Text> </Text>
      <Text> </Text>
      <View style={css.principal}>
        <View>
          <Button title='Novo Aluno' color='#154360' onPress={() => navigation.navigate('NovoAluno')}></Button>
        </View>
        <View>
          <Button title='Novo Jurado' color='#154360' onPress={() => navigation.navigate('NovoJurado')}></Button>
        </View>
        <View>
          <Button title='Votação' color='#154360' onPress={() => navigation.navigate('Votacao')}></Button>
        </View>
        <View>
          <Button title='Resultado' color='#154360' onPress={() => navigation.navigate('TelaResultado')}></Button>
        </View>
        {/* <View>
          <Button title='log' color='#154360' onPress={() => navigation.navigate('TelaLogin')}></Button>
        </View> */}
      </View>
      
   




   
    </View>
  );
}
export default TelaInicial;
