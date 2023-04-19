import React, { useState } from "react";
import { Alert, Button, Image, Linking, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-screens';


function LoginScreen({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);

  Tokenss();
  
  async function Tokenss(){
    try {
     const storedToken = await AsyncStorage.getItem('token');
      if (storedToken !== null ) {
        setToken(storedToken);

        navigation.navigate('Tabs');
        console.log(storedToken);
      } else {
        
      
      }
    } catch (error: any) {
      console.log("Hata:", error.message);
      Alert.alert("Login failed");
    }
  }
  

  //Tokenization
  async function fetchDBToken(email: string, password: string) {
    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);
  
      const response = await axios.post('https://case1.mingapp.co/api/login', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      const newToken = response.data.result.token;
      setToken(newToken);
  
      await AsyncStorage.setItem('token', newToken);
  
      axios.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
      console.log(newToken);
      
    } catch (error: any) {
      console.log("Hata:", error.message);
      Alert.alert("Login failed");
    }
  }
  




  //Mail ve Pass control

     



  return (
    //Login Screen
    <SafeAreaView style={{ flex:1}} >
      <View style={{alignItems:"center",backgroundColor:"white", flex:1}}>
        <Image style={{flex:1, resizeMode:"contain", width:200,left:-5,top:80}} source={require("../images/logo.webp")}/>

        {/* mail */}
        <TextInput 
          autoCapitalize="none"
          autoCorrect={false}
          style={{padding:10,width:200,height:40,borderWidth:1,borderRadius:15,margin:5}} 
          placeholder="Enter Your Mail" 
          placeholderTextColor={"black"}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        {/* Password */ }
        <TextInput 
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          style={{padding:10,width:200,height:40,borderWidth:1,borderRadius:15,margin:5}} 
          placeholder="Enter Your Password" 
          placeholderTextColor={"black"}
          value={password}
          onChangeText={(passwordvalue) => setPassword(passwordvalue)}
        />

        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
          <TouchableOpacity onPress={() => fetchDBToken(email,password) } style={{ backgroundColor: '#BA90C6', borderRadius: 15, padding: 10, width: 200,height:45, margin: 5 , bottom:140}}>
            <Text style={{ fontSize:20,color: 'white', textAlign: 'center' }}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL("https://mingapp.co")} style={{ backgroundColor: '#E8A0BF', borderRadius: 15, padding: 10, width: 200,height:45, margin: 5 , bottom:140}}>
            <Text style={{ fontSize:20,color: 'white', textAlign: 'center' }}>Register Request</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default LoginScreen;

