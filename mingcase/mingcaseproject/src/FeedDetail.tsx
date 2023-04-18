import React from "react";
import Navigation from "./App";
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from "react";
import { Button, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "./Card";
import users from "../dummy.json";




export default function FeedDetail(){
    const [username, setusername] = useState("usernameX");
    const userOne = users.users[1];
    const userTwo = users.users[0];
    const userThree = users.users[2];





  
    
    return(
        <SafeAreaView>
            <Card text={userOne.name} image={require('../images/tavuk.jpeg')} post={require("../images/posts/post0.jpeg")} posttext={userOne.posttext} corporatation={userOne.corp}/>

          
        </SafeAreaView>
      )
}