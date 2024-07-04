import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from "./TelaInicial";
import TelaLogin from "./TelaLogin";
import TelaCadastro from "./TelaCadastro";
import NovoAluno from "./NovoAluno";
import NovoJurado from "./NovoJurado";
import Votacao from "./Votacao";




const Stack = createStackNavigator();

function Navigation() {
    return (
        < NavigationContainer >
            <Stack.Navigator initialRouteName="TelaLogin" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="TelaInicial" component={TelaInicial} />
                <Stack.Screen name="TelaLogin" component={TelaLogin} />    
                <Stack.Screen name="TelaCadastro" component={TelaCadastro} />    
                <Stack.Screen name="NovoAluno" component={NovoAluno} />    
                <Stack.Screen name="NovoJurado" component={NovoJurado} /> 
                <Stack.Screen name="Votacao" component={Votacao} />    
   


    
            </Stack.Navigator>
        </NavigationContainer >
    );
}

export default Navigation;