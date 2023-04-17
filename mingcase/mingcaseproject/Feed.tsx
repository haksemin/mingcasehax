import React, { useState, useEffect } from "react";
import { Button, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import users from "./dummy.json";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import axios from "axios";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import 'react-native-screens';
import { string } from "prop-types";




const StackDetail = createNativeStackNavigator();

function FeedDetail(){
    
  
  return(
    <SafeAreaView>
      <Text>Mwrhab</Text>
    </SafeAreaView>
  )
}

function Feednavigator(){
    
  return (
    <NavigationContainer>
      <StackDetail.Navigator initialRouteName="Feed">
        <StackDetail.Screen name="Feed" component={Feed} options={{headerShown:false}} />
        <StackDetail.Screen name="FeedDetailx" component={FeedDetail} options={{headerShown:false}} />
      </StackDetail.Navigator>
    </NavigationContainer>);
}

function Feed(props:any) {
  const [username, setusername] = useState("usernameX");
  const userOne = users.users[1];
  const userTwo = users.users[0];
  const userThree = users.users[2];



  function Topbar() {
    return (
      <View style={styles.topBar}>
        <Image
          source={require("./images/logo.webp")}
          style={styles.logo}
        />
        <Image
          source={require("./images/merveyorg.jpeg")}
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

        <TouchableOpacity><Image source={require("./images/icons/home.png")} style={{height:40,width:40, }}/></TouchableOpacity>    
        <TouchableOpacity><Image source={require("./images/icons/compass.png")} style={{height:40,width:40, }}/></TouchableOpacity>
        <TouchableOpacity><Image source={require("./images/icons/add.png")} style={{height:40,width:40, }}/></TouchableOpacity>
        <TouchableOpacity><Image source={require("./images/icons/heart.png")} style={{height:40,width:40, }}/></TouchableOpacity>
        <TouchableOpacity><Image source={require("./images/icons/user.png")} style={{height:40,width:40, }}/></TouchableOpacity>
        

      </View>
    );
  }
  

  function Card(propi: any) {
    const { text ,image, post,posttext,corporatation} = propi;
    const [comment, setComment] = useState("");

  
    
    const [yorumke, setYorumke] = useState();
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
              <Image source={require("./images/icons/heart.png")} style={{height:30, width:30,right:30}}></Image>
              
              </TouchableOpacity>
              <Text style={{position:"absolute", top:20,margin:10}}>{posttext}</Text>
              <View style={{position:"absolute"}}>
              <TouchableOpacity onPress={ props.navigation.navigate('FeedDetailx')}>

                <Text style={{position:"absolute",left:20, top:70}}>{yorumke}</Text>
                <Text style={{position:"absolute",fontWeight:"500", left:20,top:50}}>Yorumlar - Post Detay</Text>
                </TouchableOpacity>
              
              </View>

              
              {/*YORUM YAPMA YERİ */}
              
              <TextInput value={comment}  onChangeText={setComment} placeholder="Yorum Yap"  placeholderTextColor="gray"
              style={{position: "absolute", margin: 8, height: 40, width: 300, top: 100, borderWidth: 1, borderColor: "black", borderRadius: 10}}/>
              <View style={{position:"absolute", top:110,left:310}}>
              <Button title="Send" onPress={SendComment} /></View>
              
              
          </View>
        

        </View>
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
        <Card text={userOne.name} image={require('./images/tavuk.jpeg')} post={require("./images/posts/post0.jpeg")} posttext={userOne.posttext} corporatation={userOne.corp}/>
        <Card text={userTwo.name} image={require('./images/Hax.jpg')} post={require("./images/posts/post1.jpeg")} posttext={userTwo.posttext} corporatation={userTwo.corp}/> 
        <Card text = {userThree.name} image={require('./images/merveyorg.jpeg')} post={require("./images/posts/post2.jpeg")} posttext={userThree.posttext} corporatation={userThree.corp} />
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
      <BottomBar></BottomBar>
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
