import { useRouter } from "expo-router";
import { Image, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from '../../assets/images/dinetimelogo.png'
import entryImg from '../../assets/images/Frame.png'
import { Formik } from "formik";
import { EmitFlags } from "typescript";
import { TextInput } from "react-native";
import validationSchema from "../../utils/signupSchema";

const Signup = () => {
    const router = useRouter() 

    const handleSignup = () => {

    }
    return (
        <SafeAreaView style={{ backgroundColor: "#2b2b2b", flex: 1 }}>
            <StatusBar barStyle={"light-content"} backgroundColor={"#2b2b2b"} />
            <ScrollView contentContainerStyle={{ height: "100%" }}>
                <View style={{ margin: 2, display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Image source={logo} style={{ width: 300, height: 200 }} />
                    <View style={{ width: "75%" }}>
                        <Text style={{ textAlign: "center", color: "white" }}>Lets Get you Started.........</Text>
                    </View>
                    <View style={{ width: "83%" }}>

                        <Formik initialValues={{ email: "", password: "" }} validationSchema={validationSchema} onSubmit={handleSignup}>
                            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                                <>
                                    <View style={{ width: "100%", marginTop: 20 }}>
                                        <Text style={{ color: "#f49b33", marginBottom: 5 }}>Email</Text>
                                        <TextInput style={{ borderColor: "white", borderRadius: 8, height: 45, borderWidth: 1, color: "white", paddingHorizontal: 10 }} keyboardType="email-address" onChangeText={handleChange("email")} onBlur={handleBlur('email')} value={values.email} />
                                        {touched.email && errors.email && <Text style={{ color: "red" }}>{errors.email}</Text>}

                                        <Text style={{ color: "#f49b33", marginBottom: 5, marginTop: 8 }}>Password</Text>
                                        <TextInput style={{ borderColor: "white", borderRadius: 8, height: 45, borderWidth: 1, color: "white", paddingHorizontal: 10 }} secureTextEntry onChangeText={handleChange("password")} onBlur={handleBlur('password')} value={values.password} />
                                        {touched.password && errors.password && <Text style={{ color: "red" }}>{errors.password}</Text>}
                                    </View>
                                    <TouchableOpacity onPress={handleSubmit} style={{ marginTop: 32, padding: 12, marginVertical: 8, backgroundColor: "#f49b33", borderRadius: 6 }}>
                                        <Text style={{ fontSize: 15, textAlign: "center", fontWeight: "bold", color: "black" }}>
                                            Sign Up
                                        </Text>

                                    </TouchableOpacity>
                                </>
                            )}
                        </Formik>

                    </View>

                    <TouchableOpacity onPress={() => router.push("/signin")} style={{ flexDirection: "row", alignItems: "center", marginVertical: 12 }}>
                        <Text style={{ color: "white", fontWeight: "600" }}>Already a user? </Text>
                        <Text style={{ color: "#f49b33", textDecorationLine: "underline" }}>Sign in</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ flex: 1 }}>
                    <Image source={entryImg} style={{ width: "100%", height: "100%" }} resizeMode="contain" />
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default Signup;