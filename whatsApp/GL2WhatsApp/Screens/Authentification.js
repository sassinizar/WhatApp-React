import { StatusBar } from 'expo-status-bar';
import { BackHandler, Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Authentification({navigation}) {
 var email, pwd;

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
          fontSize: 36,
          color: "#fff",
          fontWeight: "bold" ,
          fontStyle: "italic",
         }}
      >
        Welcome
        </Text>
        <TextInput 
          keyboardType="email-address"
          placeholder='email'
          onChangeText={(ch)=>{
            email = ch;
          }} 
          style = {styles.TextInput}>
        </TextInput>
        <TextInput secureTextEntry={true} placeholder='password' 
             onChangeText={(ch)=>{
              pwd = ch;
            }} 
            style = {styles.TextInput}></TextInput>
        <View 
          style = {{
          flexDirection : "row",
          marginTop : 15,
          flexDirection : "row",
          width : "55%",
          justifyContent : "space-evenly"
          }}>
          <Button title='Sign in'
              onPress={()=>{
                alert(email + pwd);
              }}></Button>
              
          <Button title='Quit' 
              onPress={() => {
                BackHandler.exitApp(); //close the app
              }}></Button>
        </View>
        <Text 
        onPress={() => {
          navigation.navigate("newaccount");
        }}
        style = {{
          width : "95%",
          textAlign : "right",
          fontSize : 14,
          fontStyle : "italic",
          fontWeight : "bold",
          color : "white",
          marginTop : 15
                  }}>
            Create new account
         </Text>
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
