import { StatusBar } from 'expo-status-bar';
import { Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import firebase from '../Config';

const auth = firebase.auth();
export default function NewAccount({navigation}) {
var email,pwd,confirmpwd;

  return (
    <ImageBackground
    source={require("../assets/imgback1.png")} 
    style={styles.container}>
     <View
      style = {{
        backgroundColor : "#0004",
        width : "95%",
        alignItems : "center",
        borderColor : "white",
        borderWidth : 2,
        borderRadius : 8,
      }}
     >
      
      <Text 
         style ={{
          fontSize: 30,
          color: "#fff",
          fontWeight: "bold" ,
          fontStyle: "italic",
         }}
      >
        Create new account
        </Text>
        <TextInput 
          onChangeText={(ch)=>{ email = ch; }}
          keyboardType="email-address"
          placeholder='Email' 
          style = {styles.TextInput}>
        </TextInput>
        <TextInput
          onChangeText={(ch)=>{ pwd = ch; }}
          secureTextEntry={true} 
          placeholder="Password" 
          style = {styles.TextInput}></TextInput>
        <TextInput 
          onChangeText={(ch)=>{ confirmpwd = ch; }}
          secureTextEntry={true} 
          placeholder="Confirm Password" 
          style = {styles.TextInput}></TextInput>
        <View 
          style = {{
          flexDirection : "row",
          marginTop : 15,
          flexDirection : "row",
          width : "55%",
          justifyContent : "space-evenly"
          }}>
          <Button 
          onPress={() => {
            if (pwd === confirmpwd && pwd.length >= 6)
              {
                  auth.createUserWithEmailAndPassword(email,pwd)
                    .then(()=>{navigation.replace("accueil");})
                    .catch((err)=>{alert(err);});
              }
            else
             {
              alert("Verify password");
            }
          }}
          title='sign up'></Button>
          <Button 
           onPress={() => {
            navigation.goBack();
          }}
          title='Back'></Button>
        </View>
      <StatusBar style="light" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0ff',
    alignItems: "center",
    justifyContent: "center",
  },
  TextInput: {
    backgroundColor: "#fff",
    width : "80%" ,
    height : 48 ,
    margin : 10 ,
    textAlign : "center",
    color : "darkgray",
    fontSize: 14,
    borderRadius: 7,
  }
});
