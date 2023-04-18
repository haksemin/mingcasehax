import React, { useState, useEffect } from "react";
import { Button, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import users from "../dummy.json";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import 'react-native-screens';
import Navigation from "./App";
import Card from "./Card";
import { NavigationContainer } from "@react-navigation/native";






function Feed() {
  const [username, setusername] = useState("usernameX");
  const userOne = users.users[1];
  const userTwo = users.users[0];
  const userThree = users.users[2];

 



  function Topbar() {
    return (
      <View style={styles.topBar}>
        <Image
          source={require("../images/logo.webp")}
          style={styles.logo}
        />
        <Image
          source={require("../images/merveyorg.jpeg")}
          style={styles.icon}
        />
      </View>
    );
  }


  function BottomBar() {
    return (
      <View
        style={{
          backgroundColor: "#f4f4f4",
          flex: 0.1,
          height: 20,
          shadowColor: "#000",
          flexDirection:"row",
          alignItems:"center",
          justifyContent:"space-evenly",
          shadowOffset: {
            width: 0,
            height: -3,
          },
          shadowOpacity: 0.04,
          shadowRadius: 4.65,
        }}>

        <TouchableOpacity><Image source={require("../images/icons/home.png")} style={{height:40,width:40, }}/></TouchableOpacity>    
        <TouchableOpacity><Image source={require("../images/icons/compass.png")} style={{height:40,width:40, }}/></TouchableOpacity>
        <TouchableOpacity><Image source={require("../images/icons/add.png")} style={{height:40,width:40, }}/></TouchableOpacity>
        <TouchableOpacity><Image source={require("../images/icons/heart.png")} style={{height:40,width:40, }}/></TouchableOpacity>
        <TouchableOpacity><Image source={require("../images/icons/user.png")} style={{height:40,width:40, }}/></TouchableOpacity>
        

      </View>
    );
  }
  
    







  function SawAllOf() {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: 100,
          width: 370,
          top: 10,
          margin: 3,
          backgroundColor: "#e6e6e6",
        }}
      >
        <Text style={{ fontSize: 20 }}>You saw all of the content!</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Topbar />
      <ScrollView style={{ flex: 1 }}>
        <Card text={userOne.name} image={require('../images/tavuk.jpeg')} post={require("../images/posts/post0.jpeg")} posttext={userOne.posttext} corporatation={userOne.corp}/>
        <Card text={userTwo.name} image={require('../images/Hax.jpg')} post={require("../images/posts/post1.jpeg")} posttext={userTwo.posttext} corporatation={userTwo.corp}/> 
        <Card text = {userThree.name} image={require('../images/merveyorg.jpeg')} post={require("../images/posts/post2.jpeg")} posttext={userThree.posttext} corporatation={userThree.corp} />
        <SawAllOf />
        <View
          style={{
            height: 100,
            width: 370,
            top: 50,
            margin: 3,
            borderRadius: 10,
          }}
        ></View>
      </ScrollView>
      
      
      
      
    </SafeAreaView>
  );
}






const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
    top: 0,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.04,
    backgroundColor: "#f4f4f4",
  },
  logo: {
    resizeMode: "contain",
    width: 100,
    marginLeft: 10,
  },
  icon: {
    resizeMode: "contain",
    width: 40,
    height:40,
    marginRight: 10,
    borderRadius:30,
    
  },
});

export default Feed;
