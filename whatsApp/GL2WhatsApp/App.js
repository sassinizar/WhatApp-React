import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Authentification from './Screens/Authentification';
import NewAccount from './Screens/NewAccount';
import Accueil from './Screens/Accueil';
import Chat from './Screens/Chat';

const Stack = createNativeStackNavigator();


export default function App() {

  return (

<NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown : false}}>
      <Stack.Screen name = "auth" component={Authentification}></Stack.Screen>
      <Stack.Screen 
         name = "newaccount" 
         component={NewAccount} 
         options={{headerShown : true, title : "Back"}}
       ></Stack.Screen>
      <Stack.Screen name = "accueil" component={Accueil}></Stack.Screen>
      <Stack.Screen name = "chat" component={Chat}></Stack.Screen>
    </Stack.Navigator>
</NavigationContainer>
  );
}