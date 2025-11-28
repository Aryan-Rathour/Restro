import { View, Text, Image, Platform, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import logo from "../../assets/images/dinetimelogo.png"
import { BlurView } from 'expo-blur'
import banner from "../../assets/images/homeBanner.png"

const home = () => {
  return (
    <SafeAreaView style={{backgroundColor:"#2b2b2b"}}>
      <View style={{display:"flex" , justifyContent:"center" , alignItems:"center"}}>
        <View style={{backgroundColor:"#5f5f5f" , width:"95%" , borderRadius:4 }}>
          <View style={{flexDirection:"row"}}>
            <Text style={{color:"white" , marginTop:Platform.OS ==="android" ? 8 : 6 }}>{" "}Welcome to </Text>
            <Image source={logo} style={{height:46 , width:64}} resizeMode="cover"/>
          </View>

        </View>
        <ScrollView>
            <ImageBackground source={banner} style={{height:"100%" ,width:"100%",  marginVertical:12}} resizeMode='cover' >
              <BlurView intensity={Platform.OS=="android"? 100:25} tint='dark' style={{width:"100%" , padding:10}}>
                <Text style={{ textAlign:"center" , fontSize: 24, fontWeight:"bold", color:"white"}}>
                  Dine with your loved Ones
                </Text>
              </BlurView>
            </ImageBackground>
          </ScrollView>

      </View>
    </SafeAreaView>
  )
}

export default home