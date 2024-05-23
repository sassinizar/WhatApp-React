import { Image,FlatList, TouchableOpacity,View, Text, StyleSheet, ImageBackground, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'

import firebase from "../../Config"; 
import { Button, Dialog } from 'react-native-paper';
const database = firebase.database();


export default function ListProfils({navigation}) {
  const [isDialogVisible, setisDialogVisible] = useState(false)
  const [data, setData] = useState([])
  const [itemSelected, setitemSelected] = useState({})
  const Profils = database.ref("Profils");
//new hook used to avoid many render
  useEffect(() => {
    Profils.on("value",(dataSnapshot) => {
      //Get a copy of the reference
      let d = [];
      dataSnapshot.forEach((Profil) => {
        d.push(Profil.val());
      });
      setData(d);
    });
    return () => {};
  }, 
    []);
  
  return (
    <ImageBackground 
      source={require("../../assets/img3.jpeg")}
      style={styles.container}>
      <Text 
         style={{fontSize : 31,
                  textAlign : 'center',
                  color : "#fb0"}}>
          List of Profils
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
                       alignItems : 'center'}}
                   >
                      
                      <TouchableOpacity
                        onPress={()=> {
                          setisDialogVisible(true);
                          setitemSelected(item);
                        }}
                      >
                        <Image
                          source={require("../../assets/agent.webp")}
                          style={{
                            height : 51 ,
                            width : 51 ,
                            borderRadius : 25,
                            margin : 5,
                            
                          }}
                          >
                        </Image>
                      </TouchableOpacity>
                      <Text style={{
                        fontWeight : 'bold',
                        fontSize : 19,
                      }}
                        > {item.name} </Text>
                      <Text
                      style={{
                        fontWeight : 'bold',
                        fontSize : 19,
                      }}> {item.firstname} </Text>
                      <Text
                      style={{
                        fontWeight : 'bold',
                        fontSize : 19,
                      }}> {item.pseudo} </Text>

                   </View>
                  );
        }}
        style={{ margin : 5 }}>
      </FlatList>
      <Dialog visible={isDialogVisible}>
        <Dialog.Title>Details</Dialog.Title>
        <Dialog.Content>
          <Image
                        source={require("../../assets/agent.webp")}
                        style={{
                          height : 51 ,
                          width : 51 ,
                          marginRight : 25
                        }}
                        >
          </Image>
          <Text>{itemSelected.name}</Text>
            <Dialog.Actions>
              <Button onPress={()=>{
                Linking.openURL("tel:4444444");
              }}>
                Call
                </Button>
                <Button onPress={()=>{
                navigation.navigate("chat");
              }}>
                Chat
                </Button>
              <Button onPress={()=>{
                setisDialogVisible(false)
                ;}}
              >
                  Cancel
              </Button>
            </Dialog.Actions>
        </Dialog.Content>
      </Dialog>

    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  container : {
    backgroundColor : "red",
    flex : 1
  },
  Text: {
    width : "80%" ,
    height : 48 ,
    margin : 10 ,
    textAlign : "left",
    color : "black",
    fontSize: 22,
    borderRadius: 7,
  }
})