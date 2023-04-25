import React from "react";
import { useState } from "react";
import { Alert, Button, Image, Linking, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Navigation from "./App";




export default function LoginCheck({ navigation }: { navigation: any }){

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
            navigation.navigate("Login");
          
        
        }
      } catch (error: any) {
        console.log("Hata:", error.message);
        Alert.alert("Login failed");
      }
    }
}