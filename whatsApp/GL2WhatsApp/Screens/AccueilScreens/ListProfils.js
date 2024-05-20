import { Image,FlatList, View, Text, StyleSheet, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'

import firebase from '../../Config';
import { DataSnapshot } from 'firebase/database';
const database = firebase.database();


export default function ListProfils() {
  const [data, setdata] = useState([])
  const Profils = database.ref("Profils");

  useEffect(() => {
    Profils.on('value',(dataSnapshot) => {
      //Get a copy of the reference
      let d = [];
      dataSnapshot.forEach((Profil) => {
        d.push(Profil.val());
      });
      
      setdata(d);
    });
  
    return () => {}
  }, []);
  
  
  return (
    <ImageBackground 
      source={require("../../assets/img3.jpeg")}
      style={styles.container}>
      <Text 
         style={{fontSize : 31,
                  textAlign : 'center',
                 color : "#fb0"}}>
          ListProfils
      </Text>
      <FlatList 
        data = {data}
        renderItem={({item})=>{
          return ( <View 
                      style={{
                        elevation : 2,
                        backgroundColor : "#fff4", 
                        margin : 2,
                       flexDirection : "row",
                       alignItems : 'center'}}>
                      <Image
                        source={require("../../assets/agent.webp")}
                        style={{
                          height : 51 ,
                          width : 51 ,
                          marginRight : 25
                        }}
                        >
                      </Image>
                      <Text> {item.Name} </Text>
                      <Text> {item.FirstName} </Text>
                   </View>
                  );
        }}
        style={{ margin : 5 }}>
      </FlatList>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  container : {
    backgroundColor : "red",
    flex : 1
  }
})