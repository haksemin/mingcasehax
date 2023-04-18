import React, { useState } from "react";
import { Alert, Button, Image, Linking, SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import axios from "axios";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LoginScreen from "./Login";
import Feed from "./Feed";
import Kesfet from "./Compass";
import Like from "./Like";
import Ekle from "./Add";
import Profile from "./Profile";
import FeedDetail from "./FeedDetail"
import 'react-native-screens';




const Stack = createNativeStackNavigator();


const Tab = createBottomTabNavigator();

function Tabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={Feed} options={{headerShown:false , tabBarIcon:({focused}) =>(
                <View style={{justifyContent:"center", flex:1}}>
                    <Image source={require("../images/icons/home.png")} style={{width:25,height:25}}/> 
                </View>) }} />
                
                <Tab.Screen name="Kesfet" component={Kesfet} options={{headerShown:false , tabBarIcon:({focused}) =>(
                <View style={{justifyContent:"center", flex:1}}>
                    <Image source={require("../images/icons/compass.png")} style={{width:25,height:25}}/> 
                </View> ) }} />

                <Tab.Screen name="Like" component={Like} options={{headerShown:false , tabBarIcon:({focused}) =>(
                <View style={{justifyContent:"center", flex:1}}>
                    <Image source={require("../images/icons/heart.png")} style={{width:25,height:25}}/> 
                </View>  ) }} />

                <Tab.Screen name="Ekle" component={Ekle} options={{headerShown:false , tabBarIcon:({focused}) =>(
                <View style={{justifyContent:"center", flex:1}}>
                    <Image source={require("../images/icons/add.png")} style={{width:25,height:25}}/> 
                </View> ) }} />

                <Tab.Screen name="Profile" component={Profile} options={{headerShown:false , tabBarIcon:({focused}) =>(
                <View style={{justifyContent:"center", flex:1}}>
                    <Image source={require("../images/icons/user.png")} style={{width:25,height:25}}/> 
                </View> ) }} />
        </Tab.Navigator>
    )
}




export default function Navigation(){
    
  return (
    
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="Login" >
      <Stack.Screen name="Tabs" component={Tabs} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
        <Stack.Screen name="FeedDetail" component={FeedDetail}  />
        
        
      </Stack.Navigator>
      
      </NavigationContainer>)
}



