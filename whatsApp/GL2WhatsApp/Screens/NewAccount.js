import { StatusBar } from 'expo-status-bar';
import { Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';

export default function NewAccount({navigation}) {
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
          keyboardType="email-address"
          placeholder='Email' 
          style = {styles.TextInput}>
        </TextInput>
        <TextInput secureTextEntry={true} placeholder="Password" style = {styles.TextInput}></TextInput>
        <TextInput secureTextEntry={true} placeholder="Confirm Password" style = {styles.TextInput}></TextInput>
        <View 
          style = {{
          flexDirection : "row",
          marginTop : 15,
          flexDirection : "row",
          width : "55%",
          justifyContent : "space-evenly"
          }}>
          <Button title='sign up'></Button>
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
