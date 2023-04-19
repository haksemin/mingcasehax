import React from "react";
import { useState, useEffect } from "react";
import { Button, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import users from "../dummy.json";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import 'react-native-screens';
import { useNavigation } from '@react-navigation/native';



export default function Card(propi: any , hoopa:any) {
    const [username, setusername] = useState("usernameX");
    const userOne = users.users[1];
    const userTwo = users.users[0];
    const userThree = users.users[2];
  
    
    
   const navigation = useNavigation();

    const { text ,image, post,posttext,corporatation} = propi;
    

    const [yorumke, setYorumke] = useState();
  const [comment, setComment] = useState("");

  function SendComment(){
    
    setYorumke(userThree.name + ": " +comment);
    setComment("");
    
  }

  



    return (
      <View>
        <View style={{ height: 300, width: 370,top: -150,margin: 3, marginTop: 200, borderRadius: 10,backgroundColor: "black"}}>
            
            
            
          <ImageBackground
            source={post}
            style={{overflow:"hidden", width: "100%", height: "100%", borderRadius: 10 }} >
                <View style={{flex:0.15,backgroundColor:"#f4f4f4",justifyContent:"center"}}>
                  <Image source={image} style={{left:10,height:30,width:30,borderRadius:30}}></Image>
                  <Text style={{position:"absolute", left:50}}>{text}</Text>
                  <Text style={{position:"absolute", left:280}}>{corporatation}</Text>

                  </View> 
               
          </ImageBackground>

          <View style={{height: 120,width: 370,shadowOpacity:0.01, margin: 0,marginTop:0,borderRadius: 10,backgroundColor: "#f4f4f4",flexDirection:"row",justifyContent:"space-between"}}>
              <Text style={{fontSize:15,margin:10,fontWeight:"700"}}>{text}</Text>
              <TouchableOpacity >
              <Image source={require("../images/icons/heart.png")} style={{height:30, width:30,right:30}}></Image>
              
              </TouchableOpacity>
              <Text style={{position:"absolute", top:20,margin:10}}>{posttext}</Text>
              <View style={{position:"absolute"}}>
              <TouchableOpacity onPress={() => navigation.navigate("FeedDetail")} >


                <Text style={{position:"absolute",left:20, top:70}}>{yorumke}</Text>
                <Text style={{position:"absolute",fontWeight:"500", left:20,top:50}}>Yorumlar - Post Detay</Text>
                </TouchableOpacity>
              
              </View>

              
              {/*YORUM YAPMA YERİ */}
              
              <TextInput value={comment} onChangeText={setComment} placeholder="Yorum Yap"  placeholderTextColor="gray"
              style={{position: "absolute", margin: 8, height: 40, width: 300, top: 100, borderWidth: 1, borderColor: "black", borderRadius: 10}}/>
              <View style={{position:"absolute", top:110,left:310}}>
              <Button title="Send" onPress={SendComment} /></View>
              
              
          </View>
        

        </View>
      </View>
    );
  }
