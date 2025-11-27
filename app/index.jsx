import { useRouter } from "expo-router";
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from '../assets/images/dinetimelogo.png'
import entryImg from '../assets/images/Frame.png'

export default function Index() {
  const router = useRouter()
  return (
    <SafeAreaView style={{ backgroundColor: "#2b2b2b", flex: 1 }}>
      <StatusBar barStyle={"light-content"} backgroundColor={"#2b2b2b"} />
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View style={{ margin: 2, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Image source={logo} style={{ width: 300, height: 300 }} />
          <View style={{ width: "75%" }}>
            <TouchableOpacity onPress={() => router.push("/signup")} style={{ padding: 12, marginVertical: 8, backgroundColor: "#f49b33", borderRadius: 6 }}>
              <Text style={{ fontSize: 15, textAlign: "center", fontWeight: "bold", color: "black" }}>
                Sign Up
              </Text>

            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push("/home")} style={{ padding: 12, marginVertical: 8, backgroundColor: "#2b2b2b", borderColor: "#f49b33", borderWidth: 1, borderRadius: 6 }}>
              <Text style={{ fontSize: 15, textAlign: "center", fontWeight: "bold", color: "#f49b33" }}>
                Guest User
              </Text>

            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 12 }}>
            <View
              style={{
                flex: 1,
                borderBottomWidth: 2,
                borderColor: "#f49b33",
                marginHorizontal: 8,
              }}
            />
            <Text style={{ color: "white", fontWeight: "600" }}>or</Text>
            <View
              style={{
                flex: 1,
                borderBottomWidth: 2,
                borderColor: "#f49b33",
                marginHorizontal: 8,
              }}
            />
          </View>

          {/* Already a user? Sign in */}
          <TouchableOpacity onPress={()=> router.push("/signin")} style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: "white", fontWeight: "600" }}>Already a user? </Text>
            <Text style={{ color: "#f49b33", textDecorationLine: "underline" }}>Sign in</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          <Image source={entryImg} style={{width:"100%" , height:"100%"  }} resizeMode="contain" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
} 
