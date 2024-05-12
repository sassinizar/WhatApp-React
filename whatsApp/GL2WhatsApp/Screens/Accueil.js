import { View, Text } from 'react-native'
import React from 'react'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import ListProfils from './AccueilScreens/ListProfils';
import MyAccount from './AccueilScreens/MyAccount';
import Groups from './AccueilScreens/Groups';


const Tab = createMaterialBottomTabNavigator(); 
export default function Accueil() {
  return (
    <Tab.Navigator 
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: '#691fad' }}
            >
      <Tab.Screen name="listprofils" component={ListProfils}></Tab.Screen>
      <Tab.Screen name="myaccount" component={MyAccount}></Tab.Screen>
      <Tab.Screen name="groups" component={Groups}></Tab.Screen>
    </Tab.Navigator>
  )
}