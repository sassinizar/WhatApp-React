import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";

import firebase from "../../Config"; 
const database=firebase.database();

export default function MyAccount() {
  const [name, setname] = useState();
  const [firstname, setfirstname] = useState();
  const [phone, setphone] = useState();
  const [pseudo, setpseudo] = useState();

  return (
    <ImageBackground
      source={require("../../assets/img3.jpeg")}
      style={styles.container}
    >
      <StatusBar style="dark" />
      <Text style={styles.textstyle} >Profile</Text>
      <TouchableOpacity onPress={() => {}}>
        <Image
          source={require("../../assets/agent.webp")}
          style={{
            height: 200,
            width: 200,
          }}
        />
      </TouchableOpacity>
 
      <TextInput
        onChangeText={(text) => {
          setname(text);
        }}
        textAlign="center"
        placeholderTextColor="#fff"
        placeholder="Name"
        keyboardType="name-phone-pad"
        style={styles.textinputstyle}
      ></TextInput>
      <TextInput
        onChangeText={(text) => {
          setfirstname(text);
        }}
        textAlign="center"
        placeholderTextColor="#fff"
        placeholder="Firsr Name"
        keyboardType="name-phone-pad"
        style={styles.textinputstyle}
      ></TextInput>
      <TextInput
        onChangeText={(text) => {
          setphone(text);
        }}
        placeholderTextColor="#fff"
        textAlign="center"
        placeholder="Phone"
        style={styles.textinputstyle}
        keyboardType="phone-pad"
      ></TextInput>
      <TextInput
        onChangeText={(text) => {
          setpseudo(text);
        }}
        placeholderTextColor="#fff"
        textAlign="center"
        placeholder="Pseudo"
        style={styles.textinputstyle}
      ></TextInput>
      <TouchableOpacity
        onPress={()=>{
          const Profils = database.ref("Profils");
          const key = Profils.push().key;
          const Profil = Profils.child("Profil"+key);
                Profil.set({
                   name,
                   firstname,
                   phone,
                   pseudo
                });
        }}

        disabled={false}
        activeOpacity={0.5}
        underlayColor="#DDDDDD"
        style={{
          marginBottom: 10,
          borderColor: "#00f",
          borderWidth: 2,
          backgroundColor: "#08f6",
          textstyle: "italic",
          fontSize: 24,
          height: 60,
          width: "50%",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 5,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            color: "#FFF",
            fontSize: 24,
          }}
        >
          Save
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  textinputstyle: {
    fontWeight: "bold",
    backgroundColor: "gray",
    fontSize: 20,
    color: "#fff",
    width: "75%",
    height: 50,
    borderRadius: 10,
    margin: 5,
  },
  textstyle: {
    fontSize: 40,
    fontFamily: "serif",
    color: "#fff",
    fontWeight: "bold",
  },
  container: {
    color: "blue",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});